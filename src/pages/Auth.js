import React, { useEffect, useState } from "react";
import { useAppState } from "../Appstate";

const Auth = (props) => {


    const type = props.match.params.form
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [userData, setUserData] = useState(null);
    const {state, dispatch} = useAppState()
    console.log(state)

    useEffect( () => {
        if(userData){
            console.log(userData)
            dispatch({type: 'auth', payload: {token: userData.token, username: userData.user.username }})
            window.localStorage.setItem("auth", JSON.stringify({token: userData.token, username: userData.user.username}))
            props.history.push("/dashboard")
        }
    }, [userData])


    const actions = {
       signup: () => {
        return(
            fetch(state.url + "/users", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then( (res) => res.json())
        )
       },
       login: () => {
        return(
            fetch(state.url + "/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then((res) => res.json())
        )
       }
    }

    const handleChange = (e)  => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        actions[type]().then( (data) => {
            setUserData(data)
        })
    }

    return(
        <div className="auth">
            <h3 className="heading1">{type} Now!</h3>
           <form onSubmit={handleSubmit}>
               <input className="authInput" type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Username'></input>
               <input className="authInput" type='password' name='password' value={formData.password} onChange={handleChange} placeholder="Password"></input>
               <input className="authButton" type='submit' value={type}></input>
           </form>
        </div>
    )
}

export default Auth;