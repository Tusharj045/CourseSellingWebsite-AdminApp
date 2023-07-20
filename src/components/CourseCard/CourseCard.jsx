import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

const CourseCard = (props) => {
  console.log(props)
  return (
    <Card sx={{  minWidth: 280  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.course.imageLink? props.course.imageLink: "../../../public/dummy.png"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.course.description}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          Price: {props.course.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default CourseCard
