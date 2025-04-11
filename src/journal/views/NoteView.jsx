import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { dateFormat } from "../../helpers/dateFormat";
import { useMemo } from "react";

const widthGallery = `calc(100% - 0px)`;

export const NoteView = () => {

  const {active} = useSelector((state) => state.journal);

  const {body, title, date, imageURL, onInputChange, formState} = useForm(active);

  const dateString = useMemo(() => {
     return dateFormat(date);
  }, [date]);

  return (
    <Grid 
      className= 'animate__animated animate__fadeIn animate__faster'
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
      mb: 1,
      }}>

        <Grid>
            <Typography fontSize={39} fontWeight="light">
                {dateString}
            </Typography>
        </Grid>
        <Grid>
          <Button color="primary" sx={{borderRadius: 2, backgroundColor: "white"}} >
            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
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
            sx={{ border: "none", mt:1}}
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
            sx={{ border: "none", mt:1}}
         />
        {/* </Grid> */}
        <ImageGallery widthGallery = {widthGallery}  />
    </Grid>
  )
}
