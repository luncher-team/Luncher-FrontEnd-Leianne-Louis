import styled from 'styled-components';

const LoginContainer = styled.div`
   width: 100%;
   margin: 0 auto;
   
   background-color: green;
   height: 100vh;
   display: flex;
   flex-direction: column;
   background-image: url('https://www.ucsusa.org/sites/default/files/images/2015/02/fa-healthy-school-lunch-table-2_0.jpg');
   background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
   h1{
    color: white;
    font-weight: 700;
   }
   p {
       color: white;
   }

`
const Form = styled.form`
   display: flex;
   flex-direction: column
   width: 50%;
   input {
       padding: 20px;
       margin: 10px 0;
       border-radius: 4px;
       border: gray solid 1px;
   }
`
export {LoginContainer, Form}