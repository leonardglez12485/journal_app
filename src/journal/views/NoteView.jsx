import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

const widthGallery = `calc(100% - 0px)`;

export const NoteView = () => {
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
                28 de diciembre, 2023
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
            sx={{ border: "none", mt:1}}
         />
         <TextField
         type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="What happened today?"
            minRows={5}
            sx={{ border: "none", mt:1}}
         />
        {/* </Grid> */}
        <ImageGallery widthGallery = {widthGallery}  />
    </Grid>
  )
}
