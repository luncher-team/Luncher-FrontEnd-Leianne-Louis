import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

const MyList = props => {
    if(props.schools){
        const schools = props.schools.filter(e => e.admin_id === parseInt(localStorage.getItem('userid')))
        if(schools.length > 0) {
            return (
                <>
                    <h2>My Schools</h2>
                    {schools.map(school => 
                      <div key={school.id}>
                          <h3>{school.name}</h3>
                          <p>about: {school.description}</p>
                          <p>address: {school.address}</p>
                          <p>{school.city}</p>
                          <p>{school.state}</p>
                        <p>help us raise: {school.requested_funds}</p>
                        <p>donations so far: {school.donated}</p>
                          <button onClick={e => props.donateSelected(e, school.id)}>Donate</button>
                          <button onClick={e => props.editSelected(e, school)}>Edit</button>
                          <button onClick={e => props.deleteSelected(e, school.id)}>Delete</button>
                      </div>      
                    )}
                    <button onClick={e => props.createSelected(e)}>Create A school</button>
                </>
            )
    } else{
        return (
            <>
            <Jumbotron>
            <h2 className="display-3" >My Schools</h2>
            <p className="lead" >It Looks like you don't have any schools yet!</p>
            <hr className="my-2" />
            <h3>Add a School now!</h3>
            <p className="lead">
            <Button onClick={e => props.createSelected(e)}>Create A school</Button>
            </p>
            
            </Jumbotron>
            
            </>
        )
    }
 } else {
        return (
            <h1>Loading</h1>
        )
    }
    
}

export default MyList;