import React, { Component } from "react";

const schema = {
    "type": "object",
    "required": [
        "Origin",
        "Destination"
    ],
    "properties": {
        "Origin": {
            type: "number",
            enum:[ 1,2,3 ],
            enumNames:[ "Cotabato" , "Monumento" , "Baguio"],
        },
        "Destination": {
            type: "number",
            enum:[ 1,2,3 ],
            enumNames:[ "Bulacan" , "Cavite" , "Tagaytay"],
        },
        "radio": {
            "type": "boolean",
            "key":"confirm",
            "titleMap":[{name:"onw way"},{name:"roundtrip"}]
        },
        age: {
            type: "integer",
            title: "Age",
        },
    }
};  

export default schema;