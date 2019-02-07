import React from 'react';

const MyList = props => {
    if(props.schools){
        const schools = props.schools.filter(e => e.admin_id === parseInt(localStorage.getItem('userid')))
        if(schools.length > 0) {
            return (
                <>
                    <button onClick={e => props.allSchools(e)}>View All Schools</button>

                    {schools.map(school => 
                      <div key={school.id}>
                          <p>school: {school.name}</p>
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
            <button onClick={e => props.allSchools(e)}>View All Schools</button>
            <p>It Looks like you don't have any schools yet!</p>
            <h3>Add a School now!</h3>
            <button onClick={e => props.createSelected(e)}>Create A school</button>
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