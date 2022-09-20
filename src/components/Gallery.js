import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Gallery.css";

export default function BasicGrid() {
  return (
    <>
      <div
        className="gallery-wrapper"
        display="flex"
        justify-content="center"
        margin-top="5px"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <Grid xs={3} display="flex" justifyContent="space-around">
              <Card sx={{ maxWidth: 345 }} className="cardimg">
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/wedDad.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aisle Walk
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alyona walking down the aisle with dad, Ivan.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/beauty.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Alyona Hatchell
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A beautiful woman. Wife of HatchBase CEO.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/uni2.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Premium PassHolder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alyona takes vacations to Universal Studios.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/uni1.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cool Cars, Cool Gal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alyona likes to take meaningful pictures.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="card-button" size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button className="card-button" size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* new row */}
            <Grid xs={3} display="flex" justifyContent="space-around">
              <Card sx={{ maxWidth: 345 }} className="cardimg">
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/supra.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shes a Keeper
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alyona glancing at a new supra.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/wed2.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Alyona and Nathan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The happy newlyweds
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/wed.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Wedding
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alyona marrys Nathan on 10.10.21
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/couple.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    A Cool Couple
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alyona and Nathan being posers.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="card-button" size="small">
                    <FavoriteIcon />
                  </Button>
                  <Button className="card-button" size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
