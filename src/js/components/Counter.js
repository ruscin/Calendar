import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, signIn} from "../actions/index"


function Counter() {
    const counter = useSelector(state => state.counterReducer)
    const isLogged = useSelector(state => state.loggedReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>counter {counter}</h1>
            <button onClick = {() => dispatch(increment())}>+</button>
            <button onClick = {() => dispatch(decrement())}>-</button>
            <button onClick = {() => dispatch(signIn())}>zaloguj sie</button>

            {isLogged ? <h3>brawo, jestes zalogowany</h3> : "nie udało się zalogować "}
        </div>
    )

}

export default Counter