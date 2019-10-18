import React from 'react';
import { Button, AppBar, CssBaseline } from '@material-ui/core/';
import Test from './test';

export default function Signin(props) {

    return (
      <div>
        <CssBaseline />
       
          <AppBar>A Better Bible App

          </AppBar>
        <br />
        <Button  onClick={ props.handleSignIn }>
            Sign In with Blockstack
          </Button>
   
        <Test userSession={props.userSession} />
          
      </div>
    );
  
}
