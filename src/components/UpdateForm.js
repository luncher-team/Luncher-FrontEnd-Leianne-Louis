import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import React from "react";

const UpdateForm = props => {
  return (
    <>
        <h1>Update {props.update.name}</h1>

      <Form className="createForm"  onSubmit={e => props.updateSchool(e)}>
        <FormGroup>
          <Label>School Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="School Name"
            value={props.update.name}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Amount Needed $</Label>
          <Input
            type="number"
            name="requested_funds"
            placeholder="Amount Needed"
            value={props.update.requested_funds}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={props.update.address}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>

          <Input
            type="text"
            name="city"
            placeholder="City"
            value={props.update.city}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>State</Label>

          <Input
            type="text"
            name="state"
            placeholder="State"
            value={props.update.state}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Donations so far</Label>

          <Input
            type="number"
            name="donated"
            placeholder="Donated so far"
            value={props.update.donated}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="textarea"
            name="description"
            placeholder="Description"
            value={props.update.description}
            onChange={props.handleChanges}
          />
        </FormGroup>
        <Button id='updateBtn'>Update School</Button>
      </Form>
    </>
  );
};

export default UpdateForm;
