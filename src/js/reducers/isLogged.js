import React, { Component } from "react";
import ReactDOM from "react-dom";
const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state;
        default:
            return state;

    }
}
export default loggedReducer;
