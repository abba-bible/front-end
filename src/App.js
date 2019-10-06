import React, { useState, useEffect } from "react";
import Profile from "./Profile.js";
import Signin from "./Signin.js";
import { UserSession, AppConfig } from "blockstack";

export default function App() {
  //creating variable for AppConfig
  const appConfig = new AppConfig();
  const userSession = new UserSession({ appConfig: appConfig });


 const [userData, setUserData] = useState();

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        console.log(userData);
        window.history.replaceState({}, document.title, "/");
        setUserData(userData);
      });
    }
  }, [userSession]); // if userSession changes run this effect again

  function handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  function handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  return (
    
    <div>
      <div>
        {!userSession.isUserSignedIn() ? (
          <Signin userSession={userSession} handleSignIn={handleSignIn} />
        ) : (
          <Profile userSession={userSession} handleSignOut={handleSignOut} />
        )}
      </div>
    </div>
    
  );
}
