import axios from 'axios';

const BACKEND_URL = 'https://course-backend-olive.vercel.app'; //'http://localhost:3000';

const createCourse = async (title, description, price, imageLink, published) => {
    const reqBody = {
        method: 'POST',
        url: `${BACKEND_URL}/admin/courses`,
        data: {
            title,
            description,
            price,
            imageLink,
            published
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        console.log(result);
        return result;
    } catch(err) {
        console.log(err);
    }
}

const getAllCourses = async () => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/admin/courses`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        console.log(result);
        return result.data;
    } catch(err) {
        console.log(err);
        return [];
    }
}

const getCourseById = async (courseId) => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/admin/course/${courseId}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        const result = await axios(reqBody);
        return result.data.Course;
    } catch(err) {
        console.log(err);
        return [];
    }
}

const getAdminDetails = async () => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/admin/me`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        return result.data.adminDetails;
    } catch(err) {
        console.log(err);
        return null;
    }
}

const updateCourse = async (courseId, title, description, price, imageLink, published) => {
    const reqBody = {
        method: 'PUT',
        url: `${BACKEND_URL}/admin/courses/${courseId}`,
        data: {
            title,
            description,
            price,
            imageLink,
            published
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        console.log(result);
        return result;
    } catch(err) {
        console.log(err);
    }
}

const loginUser = async (email, password, rememberLogin) => {
    const reqBody = {
        method: 'POST',
        url: `${BACKEND_URL}/admin/login`,
        data: {
            username: email, 
            password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        localStorage.setItem('token', result.data.token)
        console.log(result);
        return {message: result.data.message, severity: 'success'};
    } catch(err) {
        console.log(err);
        return {message: err.response.data.message, severity: 'error' };
    }
}

const signupUser = async (name, email, password) => {
    const reqBody = {
        method: 'POST',
        url: `${BACKEND_URL}/admin/signup`,
        data: {
            name,
            username: email, 
            password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        localStorage.setItem('token', result.data.token)
        console.log(result);
        return {message: result.data.message, severity: 'success'};
    } catch(err) {
        console.log(err);
        return {message: err.response.data.message, severity: 'error' };
    }
}



export default {
    createCourse,
    loginUser,
    signupUser,
    getAllCourses,
    updateCourse,
    getAdminDetails,
    getCourseById,
};