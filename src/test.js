import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Test(props) {

    let proxy = "https://cors-anywhere.herokuapp.com/";
    let url  = "http://getbible.net/json?p=James"

    useEffect((e) => {
        axios.get(proxy + url)
        .then((res) => {
            var output = res.data
            console.log(output.book)})
        .catch((err) => {})
    }, [])

    return(
        <div>
            {/* {console.log(blockstack)}
            {console.log(props.userSession)} */}

        </div>
    )

}