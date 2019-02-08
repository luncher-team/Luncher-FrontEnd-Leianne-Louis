import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';

const Donate = props => {
    // const school = props.schools.find(school => `${school.id}` === props.match.params.id)
    // console.log(school)
    return (
        <>
        <Jumbotron>
        <h2  className="display-3" >Thank you for making a difference</h2>
        <hr className="my-2" />
        <p className="lead">your donation is going to help feed out future</p>
        </Jumbotron>
        
        <Form className="createForm">
            <FormGroup>
                <Label>Your Name</Label>
                <Input type='text' value={props.donation.name} name='name' placeholder='name' onChange={props.handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label>Donation Amount</Label>
            <Input type='number' value={props.donation.amount} name='amount' placeholder='donation amount' onChange={props.handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label>Credit Card Number</Label>
            <Input type='number' value={props.donation.cc} name='cc' placeholder='credit card number' onChange={props.handleChanges} />
            </FormGroup>
           <FormGroup>
               <Label>CVV</Label>
           <Input type='number' value={props.donation.cvv} name='cvv' placeholder='cvv' onChange={props.handleChanges} />
           </FormGroup>
            
            <Button id='donateBtn' color='success' onClick={e => props.donate(e)}>Donate</Button>
        </Form>
        </>
    )
}

export default Donate;