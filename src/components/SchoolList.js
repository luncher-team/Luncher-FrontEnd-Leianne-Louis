import React from 'react';
import { Button } from 'reactstrap';

const SchoolList = props => {
    if(props.schools){
            return (
                <>
                <h2 className='pageheading'>These schools need your help!</h2>
                <div className='schoolContainer'>
                    {props.schools.map(school => 
                      <div className='school' key={school.id}>
                        {school.img && (<img alt={school.name} src={school.img}/>) }
                          <div className='info'>
                          <h3>{school.name}</h3>
                          <p>about: {school.description}</p>
                          <p>address: {school.address}</p>
                          <p>{school.city}</p>
                          <p>{school.state}</p>
                        <p>help us raise: {school.requested_funds}</p>
                        <p>donations so far: {school.donated}</p>
                        <p className='funds'>${school.requested_funds-school.donated} till we reach our goal</p>
                          <Button color='success' onClick={e => props.donateSelected(e, school.id)}>Donate</Button>
                          </div>
                          
                      </div>      
                    )}
                    
                </div>
                
                </>
            )

 } else {
        return (
            <h1>Loading</h1>
        )
    }
    
}

export default SchoolList;