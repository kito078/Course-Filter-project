import React, { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Row, Col } from "reactstrap";
import "./FormCourse.css";

function NewCourse(props) {
  const [imgUrlValue, setimgUrlValue] = useState("");
  const [cNameValue, setcNameValue] = useState("");
  const [cDescValue, setcDescValue] = useState("");
  const [cTitleValue, setcTitleValue] = useState("");
  const [cOwnerNameValue, secOwnerNameValue] = useState("");
  const [cDateValue, setcDateValue] = useState("");

  const onImageHandler = (event) => {
    setimgUrlValue(event.target.value);
  };
  const onCourseNameHandler = (event) => {
    setcNameValue(event.target.value);
  };
  const onDescHandler = (event) => {
    setcDescValue(event.target.value);
  };
  const onTitleHandler = (event) => {
    setcTitleValue(event.target.value);
  };
  const onNameHandler = (event) => {
    secOwnerNameValue(event.target.value);
  };
  const onDateHandler = (event) => {
    setcDateValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const coursesObj = {
      imgUrl: imgUrlValue,
      courseName: cNameValue,
      courseTitle: cTitleValue,
      owerName: cOwnerNameValue,
      courseDesc: cDescValue,
      courseDate: new Date(cDateValue),
    };
    props.onSaveCourse(coursesObj);

    setimgUrlValue("");
    setcNameValue("");
    setcDescValue("");
    setcTitleValue("");
    secOwnerNameValue("");
    setcDateValue("");
  };

  return (
    <div className="">
      <div>
        <Form onSubmit={onHandleSubmit} className="form-container">
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Enter URL
            </Label>
            <Input
              value={imgUrlValue}
              onChange={onImageHandler}
              name="url"
              placeholder="paste image url..."
              type="url"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Course Title
            </Label>
            <Input
              value={cNameValue}
              onChange={onCourseNameHandler}
              name="CourseName"
              placeholder="Enter Course Name e.g javascript..."
              type="text"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Course Name
            </Label>
            <Input
              value={cTitleValue}
              onChange={onTitleHandler}
              name="CourseTitle"
              placeholder="Enter Course Title..."
              type="text"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="description" hidden>
              Course Description
            </Label>
            <Input
              value={cDescValue}
              onChange={onDescHandler}
              name="decription"
              placeholder="Enter Course description..."
              type="text"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="name" hidden>
              Your Name
            </Label>
            <Input
              value={cOwnerNameValue}
              onChange={onNameHandler}
              name="text"
              placeholder="Enter Your Name..."
              type="text"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="name" hidden>
              date
            </Label>
            <Input
              value={cDateValue}
              onChange={onDateHandler}
              name="text"
              placeholder="enter date"
              type="date"
            />
          </FormGroup>{" "}
          <div className="btn-grp">
            <Button onClick={props.onClose} color="primary">
              Cancel
            </Button>
            <Button className="ms-3" color="primary">
              Add Now
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default NewCourse;
