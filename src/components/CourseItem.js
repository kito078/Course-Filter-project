import React from "react";
import CourseCard from "./CourseCard";

function CourseItem(props) {
  if (props.items.length === 0) {
    return (
      <div className="no-course bg-danger my-5 w-50 mx-auto">
        <h3 className="text-center text-white pt-2 p-3">
          Course not available!!!
        </h3>
      </div>
    );
  }
  return (
    <div className="course__items">
      {props.items.map((item) => {
        return (
          <CourseCard
            imgUrl={item.imgUrl}
            courseName={item.courseName}
            courseTitle={item.courseTitle}
            ownerName={item.owerName}
            courseDesc={item.courseDesc}
            courseDate={item.courseDate}
          />
        );
      })}
    </div>
  );
}

export default CourseItem;
