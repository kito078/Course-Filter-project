import React, { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Row, Col } from "reactstrap";

function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");

  const onSearchHandler = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    props.onSaveSearch(searchValue);
    setSearchValue("");
  };
  return (
    <div className="mt-4">
      <Form onSubmit={onSearchSubmit} className="form-container">
        <FormGroup className="d-flex mx-4">
          <Input
            value={searchValue}
            onChange={onSearchHandler}
            name="search"
            placeholder="Search for any Course..."
            type="text"
          />
          <span className="ps-4">
            <Button color="primary">Search</Button>
          </span>
        </FormGroup>{" "}
      </Form>
    </div>
  );
}

export default SearchForm;
