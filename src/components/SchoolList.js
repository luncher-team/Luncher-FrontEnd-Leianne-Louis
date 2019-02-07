import React from 'react';

const SchoolList = props => {
    console.log(props)
    if(props.schools){
            return (
                <>
                <button onClick={e => props.mySchools(e)}>View My Schools</button>
                    
                    {props.schools.map(school => 
                      <div key={school.id}>
                          <p>school: {school.name}</p>
                          <p>about: {school.description}</p>
                          <p>address: {school.address}</p>
                          <p>{school.city}</p>
                          <p>{school.state}</p>
                        <p>help us raise: {school.requested_funds}</p>
                        <p>donations so far: {school.donated}</p>
                          <button onClick={e => props.donateSelected(e, school.id)}>Donate</button>
                      </div>      
                    )}
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