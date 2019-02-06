import React from 'react';

const SchoolList = props => {
    if(props.schools){
        const schools = props.schools.filter(e => e.admin_id === parseInt(localStorage.getItem('userid')))
        console.log(schools)
        if(schools) {
            return (
                <>
                    {schools.map(school => 
                      <div key={school.id}>
                          <p>{school.name}</p>
                          <p>{school.description}</p>
                          <button onClick={e => props.donateSelected(e, school.id)}>Donate</button>
                          <button>Edit</button>
                      </div>      
                    )}
                    <button onClick={e => props.createSelected(e)}>Create A school</button>
                </>
            )
    } else{
        return (
            <>
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

export default SchoolList;