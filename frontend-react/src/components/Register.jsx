import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const Register = () => {

  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errors,setErrors]=useState({})
  const [success,setSuccess]=useState(false)
  const [loading,setLoading]=useState(false)
  
  const handleRegistration= async (e)=>{
    e.preventDefault()
    setLoading(true)
    
    const userData={
      username, email, password
    }
  
  try {
    const response= await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
    console.log('response.data==>', response.data)
    console.log('Registraction successful')
    setErrors({})
    setSuccess(true)

  } 
  
  catch (error){
    setErrors(error.response.data)
        console.log('Registraction error: ', error.response.data)
  }
  finally{
    setLoading(false)
  }

}

  // always use  event 'e' when using form in the code
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className='text-light text-center mb-4'>Create an Account</h3>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
              <input type='text' className='form-control mb-3' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
              <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
              </div>

              <div className="mb-3">
              <input type='text' className='form-control mb-3' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>

              <div className="mb-3">
              <input type='password' className='form-control mb-5' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
              <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
              </div>

              {success && <div className='alert alert-success'>Registraction Successfull</div>}
              {loading ? (<button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please Wait....</button>)
              :(<button type='submit' className='btn btn-info d-block mx-auto'>Register</button>)}
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register