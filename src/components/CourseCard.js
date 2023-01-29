import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { FaHotjar } from "react-icons/fa";

function CourseCard(props) {
  return (
    <div>
      <Card
        className="m-5"
        style={{
          width: "15rem",
        }}
      >
        <img alt="Sample" src={props.imgUrl} />
        <CardBody>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            <span className="icon me-1">
              <FaHotjar />
            </span>
            {props.courseName}
          </CardSubtitle>
          <CardTitle tag="h5" className=" text-primary">
            {" "}
            {props.courseTitle}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.ownerName}
          </CardSubtitle>

          <CardText>{props.courseDesc}</CardText>
          <span className="best-seller pt-0 pb-1 px-2 ">Bestseller</span>
          <span className="card-date ms-3">
            {props.courseDate.toDateString()}
          </span>
        </CardBody>
      </Card>
    </div>
  );
}

export default CourseCard;
