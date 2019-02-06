import React, { Component } from 'react';

const Donate = props => {
    return (
        <form>
            <input type='text' value={props.donation.name} name='name' placeholder='name' onChange={props.handleChanges} />
            <input type='number' value={props.donation.amount} name='amount' placeholder='donation amount' onChange={props.handleChanges} />
            <button onClick={e => props.donate(e)}>Donate</button>
        </form>
    )
}

export default Donate;