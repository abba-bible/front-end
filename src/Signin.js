import React from 'react';
import 'fomantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';

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
