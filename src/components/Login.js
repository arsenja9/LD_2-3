import React, {useRef, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import FirstName from "./About /FirsName";

function Login() {
    let { id } = useParams();
    const nameRef = useRef(null);
    const logoRef = useRef(null);
    const [user, setUser] = useState({
        name: 'default name',
        lastName: 'default lastname'
    })
    function registerUser(e) {
        console.log(nameRef.current.value, logoRef.current);
        let updatedUser = new FormData();
        updatedUser.append('name', nameRef.current.value);
        updatedUser.append('logo', logoRef.current.files[0]);
        axios.post('https://www.udemy.com/course/webdeveloper/learn/lecture/14899878#content', updatedUser);
        e.preventDefault();
    }

    return <div>
        <h2>This is Static About component, id: {id}</h2>,
        <form id="registration" onSubmit={registerUser}>
            <h3>Registration form</h3>
            <FirstName defaultVal={user.name} nameRef={nameRef}/>
            <input type="text" className={'form-control my-3'} placeholder={'Enter your last name'} />
            <input type="text" className={'form-control my-3'} placeholder={'email'} />
            <input type="password" className={'form-control my-3'} placeholder={'password'} />
            <button className={'btn btn-primary'} type={'submit'}>Submit</button>
        </form>
    </div>;
}

export default Login;