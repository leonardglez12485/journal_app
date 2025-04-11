import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layouts/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined, Note } from "@mui/icons-material"
import { NoteView } from "../views/NoteView"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const { saving, active } = useSelector(state => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (

    <JournalLayout>
      {
        (active) 
          ? <NoteView />
          : <NothingSelectedView />
      }
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}

      <IconButton
      disabled={saving}
      onClick={onClickNewNote}
      size="large"
      sx={{
        color: "white",
        backgroundColor: "error.main",
        ':hover': { backgroundColor: "error.main", opacity: 0.7 },
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}
      >

        <AddOutlined sx={{ fontSize: 30 }} />
    

      </IconButton>
    </JournalLayout>

  )
}
