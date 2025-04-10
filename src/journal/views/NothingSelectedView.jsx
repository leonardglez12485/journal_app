import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NothingSelectedView = () => {
  return (
    <Grid
      className= 'animate__animated animate__fadeIn animate__faster'
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
      }}
    >
      <StarOutline
        sx={{
          fontSize: 100,
          color: "white",
        }}
      />
      <Grid size={12}>
        <Typography color="white" sx={{ fontSize: 30, textAlign: "center" }}>
          Select or create an entry
        </Typography>
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
