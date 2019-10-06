import React, { useState, useEffect } from 'react';
import { Person } from 'blockstack';
const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Profile(props) {

  const [person, setPerson] = useState({name() { return 'Anonymous'; }, avatarUrl() {  return avatarFallbackImage;}})

  useEffect((e) => {
    setPerson(new Person(props.userSession.loadUserData().profile),);
  }, [])

    return (
      <div>
      {console.log(person.name)}
      {props.userSession.isUserSignedIn() ? <div> YOU ARE ONLINE WITH BLOCKSTACK </div> : null}
      <img src={person.avatarUrl()} />
          <button id="signout-button" onClick={ props.handleSignOut } >
            Logout
          </button>
    
      </div>
    );
}


// !props.userSession.isSignInPending() ?
//       <div className="panel-welcome" id="section-2">
//         <div className="avatar-section">
//           <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
//         </div>
//         <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>