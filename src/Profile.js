import React, { useState, useEffect } from 'react';
import 'fomantic-ui-css/semantic.css';
import { Container, Header, Loader } from 'semantic-ui-react';
import { Person } from 'blockstack';
import Test from './test';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Profile(props) {

  const [person, setPerson] = useState({name() { return 'Anonymous'; }, avatarUrl() {  return avatarFallbackImage; }, 
  
  
  description() { return 'No Description';}, apps({}) { return 'No Apps' } })

  useEffect((e) => {
    setPerson(new Person(props.userSession.loadUserData().profile),); // when component mounts, set Person data to props  user data
  }, [])

    return (
 
      <Container style={{ background: 'black'}}>
          <div>
          {console.log(person.name())}
{props.userSession.isUserSignedIn() ? <div> <Header style={{ color: 'white' }}>YOU ARE ONLINE WITH BLOCKSTACK 

<Loader active inline className="fast green" /></Header>
<p>{person.description() ? person.description() : 'No Description' }</p>
{/* <p>{person.apps() ? person.apps() : 'No Description' }</p> */}
</div> : null}
      <img src={person.avatarUrl()} />
    
          <button id="signout-button" onClick={ props.handleSignOut } >
            Logout
          </button>
          <Test />
    
      </div>
      </Container>
    
    );
  


  }

// !props.userSession.isSignInPending() ?
//       <div className="panel-welcome" id="section-2">
//         <div className="avatar-section">
//           <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
//         </div>
//         <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>