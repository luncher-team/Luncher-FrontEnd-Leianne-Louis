import React from 'react';
import { Button } from '../styles/SchoolStyles';

const SchoolList = props => {
    console.log(props)
    if(props.schools){
            return (
                <>
                <div className='schoolContainer'>
                    {props.schools.map(school => 
                      <div className='school' key={school.id}>

                          <h3>{school.name}</h3>
                          <p>about: {school.description}</p>
                          <p>address: {school.address}</p>
                          <p>{school.city}</p>
                          <p>{school.state}</p>
                        <p>help us raise: {school.requested_funds}</p>
                        <p>donations so far: {school.donated}</p>
                        <p>${school.requested_funds-school.donated} till we reach our goal</p>
                          <Button onClick={e => props.donateSelected(e, school.id)}>Donate</Button>
                      </div>      
                    )}
                    
                </div>
                <button onClick={e => props.createSelected(e)}>Create A school</button>
                </>
            )

 } else {
        return (
            <h1>Loading</h1>
        )
    }
    
}

export default SchoolList;