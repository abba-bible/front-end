import React, { useState, useEffect } from "react";
import Profile from "./Profile.js";
import Signin from "./Signin.js";
import { UserSession, AppConfig } from "blockstack";

export default function App() {
  //creating variable for AppConfig
  const appConfig = new AppConfig();
  //creating variable for a New User Session
  const userSession = new UserSession({ appConfig: appConfig }); // adding app configuration as object to new user session

  //state to hold user data from effect (App component mounted)
 const [userData, setUserData] = useState();

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        // console.log(userData);
        window.history.replaceState({}, document.title, "/");
        setUserData(userData);
      });
    }
  }, []); // if userSession changes run this effect again

  // console.log(userData)
  // console.log(userSession)
  function handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn(); // redirect user to blockstack sign-in
  }

  function handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin); // when user signs out, go back to original page started on
  }

  return (
    
    <div>
      <div>
        {!userSession.isUserSignedIn() ? ( <Signin userSession={userSession} handleSignIn={handleSignIn} /> ) : 
        ( <Profile userSession={userSession} handleSignOut={handleSignOut} /> )}
      </div>
    </div>
    
  );
}
