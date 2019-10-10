import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Test(props) {


    let config = {
        headers : {
            "api-key": "af0cf1bb9e7e3b5a3afd30edbaae3b2f"
        }
    }
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let url  = "http://getbible.net/json?p=James"
    let newUrl = "https://api.scripture.api.bible/v1/bibles"

    useEffect((e) => {
        axios.get(newUrl, config)
        .then((res) => {
            // const regex = /[(](?<obj>.*?)[)];?/gm
            // const str = res.data
            // const data = regex.exec(str).groups.obj;
            console.log(res)
        })
        .catch((err) => {console.log(err)})
    }, [])

    return(
        <div>
            {/* {console.log(blockstack)}
            {console.log(props.userSession)} */}

        </div>
    )

}