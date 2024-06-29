// src/components/academy/HarmosoftAcademy.js
import React from 'react';
import CourseListings from './CourseListings';
import CourseDetails from './CourseDetails';
import Tutorials from './Tutorials';
import Webinars from './Webinars';
import Certifications from './Certifications';
import Instructors from './Instructors';
import StudentDashboard from './StudentDashboard';
import Enrollments from './Enrollments';
import CareerDevelopment from './CareerDevelopment';
import AcademyContact from './AcademyContact';
import './HarmosoftAcademy.css';

function HarmosoftAcademy() {
  return (
    <div className="harmosoft-academy">
      <CourseListings />
      <CourseDetails />
      <Tutorials />
      <Webinars />
      <Certifications />
      <Instructors />
      <StudentDashboard />
      <Enrollments />
      <CareerDevelopment />
      <AcademyContact />
    </div>
  );
}

export default HarmosoftAcademy;
