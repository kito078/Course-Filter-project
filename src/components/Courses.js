import React, { useState } from "react";
import CourseItem from "./CourseItem";
import SearchForm from "./SearchForm";

function Courses(props) {
  const [enteredCourseValue, setEnteredCourseValue] = useState("javascript");

  const onSearchCourse = (valueSearched) => {
    setEnteredCourseValue(valueSearched);
  };
  //console.log(enteredCourseValue);

  const courseFiltered = props.items.filter((item) => {
    const courseChosen = item.courseName.toLowerCase();
    return courseChosen === enteredCourseValue;
  });
  console.log(props.items.length);

  return (
    <div className="courses">
      <SearchForm onSaveSearch={onSearchCourse} />
      <div>
        <CourseItem items={courseFiltered} />
      </div>
    </div>
  );
}

export default Courses;
