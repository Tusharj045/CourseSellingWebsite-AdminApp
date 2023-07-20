import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import CoursePage from './pages/CoursePage/CoursePage';
import CreateCourse from './pages/CreateCourse/CreateCourse';
import SignupPage from './pages/SignupPage/SignupPage';
import AppBar from './components/AppBar/AppBar';
import './App.css';

function App() {
  return (
    <div >
      
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
