import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImageGallery=({images=[]})=> {
  return (
    <ImageList
      sx={{ height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {images.map((image) => (
        <ImageListItem key={image} >
          <img
            {...srcset(image, 121, image, image)}
            alt={"uno"}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
