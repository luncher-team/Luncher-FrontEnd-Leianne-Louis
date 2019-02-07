import React from 'react';

const UpdateForm = props => {
    return (
        <>
            <form onSubmit={e => props.updateSchool(e)}>
                <input type='text' name='name' placeholder='School name' value={props.update.name} onChange={props.handleChanges} />
                <input type='text' name='description' placeholder='Description' value={props.update.description} onChange={props.handleChanges} />
                <input type='text' name='address' placeholder='Address' value={props.update.address} onChange={props.handleChanges} />
                <input type='text' name='city' placeholder='City' value={props.update.city} onChange={props.handleChanges} />
                <input type='number' name='donated' placeholder='Amount Received' value={props.update.donated} onChange={props.handleChanges} />
                <input type='number' name='requested_funds' placeholder='Requested Funds' value={props.update.requested_funds} onChange={props.handleChanges} />
                <input type='text' name='state' placeholder='State' value={props.update.state} onChange={props.handleChanges} />
                <button>Update School</button>
            </form>
        </>
    )
}

export default UpdateForm;