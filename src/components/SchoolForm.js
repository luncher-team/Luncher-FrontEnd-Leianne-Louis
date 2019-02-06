
import React from "react";

const SchoolForm = props => {
  return (
    <form onSubmit={e => props.createSchool(e)}>
      <input type="text" name="name" placeholder="School Name" value={props.addInputs.name} onChange={props.handleChanges}/>
      <input type="number" name="requested_funds" placeholder="Amount Needed" value={props.addInputs.requestedFunds} onChange={props.handleChanges}/>
      <input type="text" name="address" placeholder="Address" value={props.addInputs.address} onChange={props.handleChanges}/>
      <textarea name='description' placeholder='Tell us about your school...' value={props.addInputs.description} onChange={props.handleChanges}/>
      <button>Add school</button>
    </form>
  );
};

export default SchoolForm;