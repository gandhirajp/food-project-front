import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

export default function Registerscreen() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate=useSelector(state =>state.registerUserReducer)
    const {error,loading,success}=registerstate

    const dispatch= useDispatch()
    function register(){  

        if(password!=cpassword){
            alert("password not matched")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }

    }
    

    return (
        <div className='container'>

            <div className="row justify-content-center mt-5">
                <div className="col-md-4 mt-5 mx-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading/>)}
                    {success && (<Success success='User Register Successfully'/>)}
                    {error && (<Error error="Email already registred"/>)}

                    <h2 className='text-center m-2' style={{ fontSize: "35px" }} >REGISTER</h2>
                    <div>
                        <input type="text"  required placeholder='name' className='form-control ' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" required placeholder='email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text"  required placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="text"  required placeholder='confirm password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button onClick={register} className='btn my-3'>REGISTER</button>
                        <br />
                        <a style={{color:'black'}} href="/login">Click Here To Login</a>
                    </div>
                </div>
              
            </div>

        </div>
    )
}
