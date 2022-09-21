// imports
import React from "react";
import "../index.css";
import Button from "@mui/material/Button";
import "./Upload.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// for the modal: box, typog, modal, and FormControl for the form in the modal
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl } from "@mui/material";

// style for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// for the quilt collage
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

// Dummy Data
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "sdje",
    cols: 2,
  },
];

// Upload Functional Component
const Upload = () => {
  // states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // return jsx
  return (
    <div className="uploadContainer">
      <div className="left-wrapper">
        <h1>Show off fun times</h1>
        <h3>“You must go on adventures to find out where you truly belong” </h3>
        <p>– Sue Fitzmaurice</p>
        <div className="btn-wrapper">
          <Button
            className="btn"
            variant=""
            component="label"
            onClick={handleOpen}
          >
            Upload
          </Button>
          {/* modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* title and desc */}
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Title
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Description
              </Typography>
              <br></br>
              <hr />
              {/* image and upload post buttons */}
              <Button className="btn-upload-pic" variant="" component="label">
                Select Pic
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
          </Modal>
          <hr className="hrBreak"></hr>
          {/* Jump to: Gallery Button on left side of hero section */}
          <Button className="btn" variant="" component="label">
            Gallery
          </Button>
        </div>
      </div>
      <div className="right-wrapper">
        {/* <h1>TWO</h1> */}
        {/* <img alt="vaca" src={require("../images/vaca_1.jpg")} /> */}
        <ImageList
          sx={{ width: 800, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                className="quiltedPic"
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Upload;
