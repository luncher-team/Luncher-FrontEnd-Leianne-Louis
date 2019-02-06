import React from 'react';

const SignUpForm = props => {
    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={e => props.signUp(e)}>
                <input type='text' name='username' onChange={props.handleChanges} value={props.signUp.username} placeholder='username'/>
                <input type='text' name='password'  onChange={props.handleChanges}  value={props.signUp.password} placeholder='password'/>
                <input type='text' name='email'  onChange={props.handleChanges}  value={props.signUp.email} placeholder='email'/>
                <button>Next</button>
            </form>
        </>
    )
}

export default SignUpForm;