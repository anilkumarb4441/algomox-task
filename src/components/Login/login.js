import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './login.css'


const Login = () => {

    const navigate = useNavigate();
   const [logValue, setLogValue] = useState({ email: '', password:'' });
   const [errMsg, setErrMsg] = useState('')


    const onChangeLogValue = (e) => {
        setLogValue({ ...logValue, [e.target.name]: e.target.value })
        setErrMsg('')
    }


    const onSubmitLogin = (e) => {
        e.preventDefault();
        if(logValue.email === '' || logValue.password ===''){
            setErrMsg('please fill the Input fields')
            return;
        }else{
            localStorage.setItem('user', logValue)
            navigate('/')
            window.location.reload(true)

        }
       
    }


    return (
        <div className='login_wraper'>
            <div className='login_container'>
                <form>
                    <div className='LogInput_holder'>
                        <input type='email' placeholder='Enter Email' name="email" value={logValue.email} onChange={(e) => onChangeLogValue(e)} required/>
                    </div>
                    <div className='LogInput_holder'>
                        <input type='password' placeholder='Enter Password' name="password" value={logValue.password} onChange={(e) => onChangeLogValue(e)} required/>
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <button className='logInButton' onClick={(e) => onSubmitLogin(e)}>Log In</button>
                    </div>
                </form>
                {errMsg !== '' && <p style={{color:'red'}}>{errMsg}</p>}
            </div>
        </div>
    )
}


export default Login