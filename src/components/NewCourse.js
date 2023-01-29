import React, { useState } from "react";
import FormCourse from "./FormCourse";
import { Button, Label, Form, FormGroup, Input, Row, Col } from "reactstrap";

function NewCourse(props) {
  const [toggleForm, setToggleForm] = useState(false);

  const onNewCourse = (courseEntered) => {
    const allCourse = {
      id: Math.random().toString(),
      ...courseEntered,
    };

    props.onSaveValue(allCourse);
    setToggleForm(false);
  };

  const clickForm = () => {
    setToggleForm(true);
  };

  const closeForm = () => {
    setToggleForm(false);
  };

  return (
    <div>
      {toggleForm ? (
        <FormCourse onSaveCourse={onNewCourse} onClose={closeForm} />
      ) : (
        <div className="add-btn">
          <Button onClick={clickForm}>add new course</Button>
        </div>
      )}
    </div>
  );
}

export default NewCourse;
