import React, { useState, useEffect } from 'react';
import * as blockstack from 'blockstack';


export default function Test(props) {
    return(
        <div>
            {console.log(blockstack)}
            {console.log(props.userSession)}
        </div>
    )

}