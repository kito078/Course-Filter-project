import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import FormCourse from "./components/FormCourse";
import CourseCard from "./components/CourseCard";
import dataCourse from "./components/dataCourse";
import { useState } from "react";
import Courses from "./components/Courses";
import NewCourse from "./components/NewCourse";

function App(props) {
  const [course, setCourse] = useState(dataCourse);
  //console.log(course);

  const onComingCourse = (newComingCourse) => {
    setCourse((prevCourse) => {
      return [newComingCourse, ...prevCourse];
    });
  };
  console.log(course.length);
  return (
    <div className="app">
      <div className="text__wrap my-5 mt-3">
        <h3 className="ms-4">
          A broad selection of courses{" "}
          <span className="text-primary">level learning</span>
        </h3>
        <p className="mb-0 ms-4">
          Choose from <span className="num-course">{course.length} </span>online
          courses with new additions published every month
        </p>
        <span className="course__name ms-4">
          <span>Python</span> <span className="ps-2">Javascript</span>{" "}
          <span className="ps-2">Reactjs</span>{" "}
          <span className="ps-2">Nodejs</span>
        </span>
      </div>
      <NewCourse onSaveValue={onComingCourse} />

      <Courses items={course} />
    </div>
  );
}

export default App;
