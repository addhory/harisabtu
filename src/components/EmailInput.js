import React from 'react';

const EmailInput = (props) => {
  console.log('emailInput Component');
  return (
    <React.Fragment>
      <input
        name='email'
        placeholder='input your email'
        onChange={props.emailInputHandler}
        ref={props.emailRef}
      />

      <button onClick={props.submitHandler}>Submit Email</button>
    </React.Fragment>
  );
};

export default EmailInput;
