import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layouts/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined, Note } from "@mui/icons-material"
import { NoteView } from "../views/NoteView"

export const JournalPage = () => {
  return (

    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
