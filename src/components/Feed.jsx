import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia,IconButton, Typography} from "@mui/material";
import {FavoriteOutlined,MoreVert,Share} from '@mui/icons-material';
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Burhan Khan"
          subheader="June 13, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnsuhziRL9BT_pgc27gnbaqNYTeH9jkve-FGBuEI77x5txu9K85qB85vYvvT8lYBspz6xPjZCg7krUEQoUV9eDnzXMNtsrrmi0mcrJwcmsZDK2azDIOnUdw2dEVusgL9PIkZ_d59Kya54pGA14EzIfEr95nFpujWs7oKmRRCq-vQTiOBdb8bwsxmUKWEr1/s4032/IMG_7968.heic"
          alt="t is almost impossible to watch a sunset and not dream."
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          t is almost impossible to watch a sunset and not dream.< br/>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos quidem commodi ducimus quae sunt minus necessitatibus cumque voluptates molestiae provident eaque dolor mollitia neque, aliquam, ex sequi magnam illo?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <Share/>
          </IconButton>
        </CardActions>
      </Card >
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Burhan :p i am With My Wife Roster"
          subheader="June 13, 1994"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvlsEg-d2BEu5iCVaZ7MQpzLs_bYNsVg0XtJpA78VdDuffdBeRQWfdbmZv7vglwn6IFatzLlwEtRODHbLLavTZySIDJvqX31sYLvzL9PAITk1R-IIOrjmVCC8ckBMBMSnBmJQS5hBV4SjVVX2IIDbJN_i79Hilf1aNFTvem5hynPUy4NNitix9JTUXGLsF/s4032/IMG_6588.heic"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo adipisci repudiandae, id eius a modi assumenda earum at minus dolores? Fugiat harum nihil alias deserunt itaque, error at eveniet totam?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <Share/>
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Burhan :p i am With My Wife Roster"
          subheader="June 13, 1994"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvb2tfP3HAArHvjv3Nq5gomgtzqtO5ek3A-DTi6X4Z8bK2GYF4J0zVxaTKxP5e0p-fj-v6KkmFlc6cvSxkgL5pgfByWBfyj-HpXgG9C88a97eIGjl3nDO2ZcohbEzTZlWhZZZZN3OEnK-t_bDFVQVEOm1bldCIzV7oIToB-33DjFG2KXdO96XJoeFUed6B/s4032/IMG_7467.heic"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus pariatur dicta ipsam ea cupiditate aspernatur, quibusdam earum ut perspiciatis consectetur natus optio eos nemo dolorem. Quisquam illo suscipit iure.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <Share/>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Feed