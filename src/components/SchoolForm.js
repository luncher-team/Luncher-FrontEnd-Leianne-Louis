import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import React from "react";

const SchoolForm = props => {
  return (
    <Form className='createForm' onSubmit={e => props.createSchool(e)}>
      <FormGroup>
      <Label >School Name</Label>
      <Input type="text" name="name" placeholder="School Name" value={props.addInputs.name} onChange={props.handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >Amount Needed $</Label>
      <Input type="number" name="requested_funds" placeholder="Amount Needed" value={props.addInputs.requestedFunds} onChange={props.handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >Address</Label>
      <Input type="text" name="address" placeholder="Address" value={props.addInputs.address} onChange={props.handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >City</Label>
      <Input type="text" name="city" placeholder="City" value={props.addInputs.city} onChange={props.handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >State</Label>
      <Input type="text" name="state" placeholder="State" value={props.addInputs.state} onChange={props.handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >Donations so far</Label>
      <Input type="number" name="donated" placeholder="Donated so far" value={props.addInputs.donated} onChange={props.handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >Description</Label>
      <Input name='description' type='textarea' placeholder='Tell us about your school...' value={props.addInputs.description} onChange={props.handleChanges}/>
      </FormGroup>
      <Button>Add school</Button>
    </Form>
  );
};

export default SchoolForm;