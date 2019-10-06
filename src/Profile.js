import React, { useState, useEffect } from 'react';
import { Person } from 'blockstack';
const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Profile(props) {

  const [person, setPerson] = useState({name() { return 'Anonymous'; }, avatarUrl() {  return avatarFallbackImage;}})

  useEffect((e) => {
    setPerson(new Person(props.userSession.loadUserData().profile),);
  }, [])

    return (
      !props.userSession.isSignInPending() ?
      <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
        </div>
        <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={ props.handleSignOut }
          >
            Logout
          </button>
        </p>
      </div> : null
    );
}
