import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import Form from "./js/components/Form";
import Counter from "./js/components/Counter"
import allReducers from "./js/reducers/index"
import { Provider } from "react-redux"
import { useSelector } from "react-redux"

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
       <Counter></Counter>
        <Form></Form>
       
    </Provider>, document.getElementById("container"))


