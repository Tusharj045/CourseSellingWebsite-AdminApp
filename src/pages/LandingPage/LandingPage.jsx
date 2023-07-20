import React from 'react';
// import Button from '@mui/material/button'
import { Card, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
//color: #646cff;
const LandingPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Typography className={styles.heading} variant='h1'>Welcome to Learn-Era!</Typography>
                <Typography  className={styles.subHeading} variant='h4'>Your one stop solution to learning anything ..!</Typography>
                <div>
                    <Link to="/signup">
                        <Button variant="contained" sx={{ minWidth: 200, padding: 2, margin: 2, fontSize: 20}}>Join for free</Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="outlined" sx={{ width: 200, padding: 2, margin: 1, fontSize: 20}}>Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
