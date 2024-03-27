import { useState } from "react";

const Form = () => {

    // let [email, setEmail] = useState();
    // let [pass, setPass] = useState();
    let [loginData, setLoginData] = useState({email: "...", pass: "..."})

    return (
        <div>
            <h1>Your Info</h1>
            <h2>{loginData.email}</h2>
            <h3>{loginData.pass}</h3>
            <hr />

            {/* <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Your email"/>
            <input onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="password" /> */}


            {/* a object state input */}
            <input onChange={(e) => {
                setLoginData(loginData => ({
                    ...loginData,
                    'email':e.target.value
                }))
            }} type="text" placeholder="email"/>
            <input onChange={(e) => {
                setLoginData(loginData => ({
                    ...loginData,
                    'pass':e.target.value
                }))
            }} type="password" placeholder="pass"/>

        </div>
    );
};

export default Form;
