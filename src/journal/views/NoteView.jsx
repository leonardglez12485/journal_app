import {
  DeleteOutline,
  SaveOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { dateFormat } from "../../helpers/dateFormat";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import {
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal/thunks";

const widthGallery = `calc(100% - 0px)`;

export const NoteView = () => {
  const dispatch = useDispatch();

  const { active, messageSaved } = useSelector((state) => state.journal);

  const { body, title, date, imageURL, onInputChange, formState } =
    useForm(active);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState, dispatch]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: messageSaved,
        icon: "success",
        showConfirmButton: true,
        // timer: 1500
      });
    }
  }, [messageSaved]);

  const dateString = useMemo(() => {
    return dateFormat(date);
  }, [date]);

  const onClickSaveNote = () => {
    dispatch(startSaveNote(formState));
  };

  const onFileInputChange = ({ target }) => {
    if (!target.files || target.files.length === 0) return;
    const files = Array.from(target.files);
    dispatch(startUploadingFiles(files));
    Swal.fire({
      title: "Files uploaded successfully!",
      icon: "success",
      showConfirmButton: true,
    });
  };

  const onDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this note?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingNote(active.id));
        Swal.fire({
          title: "Note deleted successfully!",
          icon: "success",
          showConfirmButton: true,
        });
      }
    });
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mb: 1,
      }}
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          accept="image/png, image/jpeg, image/jpg"
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <IconButton
          color="primary"
          onClick={() => fileInputRef.current.click()}
          sx={{ borderRadius: 2, backgroundColor: "white", mr: 1, ml: 2 }}
        >
          <UploadFileOutlined sx={{ fontSize: 26 }} />
        </IconButton>

        <Button
          onClick={onClickSaveNote}
          color="primary"
          sx={{ borderRadius: 2, backgroundColor: "white" }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      {/* <Grid container> */}
      <TextField
        type="text"
        variant="filled"
        fullWidth
        placeholder="Title"
        label="Title"
        name="title"
        value={title}
        onChange={onInputChange}
        sx={{ border: "none", mt: 1 }}
      />
      <TextField
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="What's on your mind?"
        name="body"
        value={body}
        onChange={onInputChange}
        minRows={5}
        sx={{ border: "none", mt: 1 }}
      />
      {/* </Grid> */}
      <Grid container justifyContent="end" sx={{ mt: 1, pr: 2 }}>
        <Button onClick={onDelete} >
          <DeleteOutline sx={{ fontSize: 30, color: "error.main" }} />
          Detele
        </Button>
      </Grid>
      <ImageGallery images={active.imageURL} />
    </Grid>
  );
};
