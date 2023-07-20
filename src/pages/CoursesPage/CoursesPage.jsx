import { Container, Button,Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import apiLogic from '../../apiLogic/apiLogic'
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = await apiLogic.getAllCourses()
      console.log(result)
      setCourses(result || []);
    })();

  }, [])
  return (
    <div style={{display:'flex',alignItems:'center', flexDirection: 'column'}}>
      <div>
        <Link to={'/createCourse'}><Button variant='outlined' sx={{ minWidth: 200, padding: 2, margin: 2, fontSize: 20 }}> + Create Course</Button> </Link>
      </div>
      <Grid container 
      rowSpacing={4} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      padding={'0 4%'}
      alignItems={'center'}>
        {courses.map((course) => {
          return (
            <Grid  item xs={12} lg={4} md={6} xl={3} onClick={() => {navigate(`/course/${course._id}`)}}>
              <CourseCard key={course._id} course={course} />              
            </Grid>
            )
        })}
      </Grid>
    </div>

  )
}

export default CoursesPage
