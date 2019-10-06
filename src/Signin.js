import React from 'react';

export default function Signin(props) {

    return (
      <div>
        <center>
        A Better Bible App<br />
        <button  onClick={ props.handleSignIn }>
            Sign In with Blockstack
          </button>
        </center>
          
      </div>
    );
  
}
