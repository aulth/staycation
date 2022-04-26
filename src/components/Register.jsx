import React, {useState, useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({name:'',email: '', password: '', admin: ''})
    const handleOnChange = (e)=>{
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    const handleOnSubmit =async (e)=>{
        e.preventDefault();
        const url = 'https://singa-backend.herokuapp.com/auth/register'
        const response = await fetch(url, {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name:user.name,email:user.email, password:user.password})
        })
        const data = await response.json();
        if(data.succes){
            localStorage.setItem('auth-token', data.token)
            localStorage.setItem("user-name", data.name)
            localStorage.setItem('isAdmin', data.admin)
            swal("Registration", "You are registered succesfully", "success").then(()=>{
              navigate('/packages')
            });
        }else{
            swal("Registration Failed", data.msg, "error");
        }
    }
    useEffect(() => {
      if(localStorage.getItem('auth-token') !== null){
        navigate('/packages')
      }
    }, [navigate])
    
  return (
    <>
    <div>
  <div className="w3-sidebar w3-bar-block" style={{width: '10%', backgroundColor: 'rgb(5, 68, 104)'}}>
    <h5 style={{color: 'white'}}>  StayCation Portal </h5>
    <hr style={{color: 'white', width: '100%', marginTop : '10px', height: '5px'}} /> 
    <Link to="/" className="w3-bar-item w3-button fas fa-home" style={{color: 'white'}}> Login </Link>
    <Link to="/register" className="w3-bar-item w3-button fas fa-user" style={{color: 'white'}}> Register </Link>
  </div>
  <nav className="navbar navbar-expand-lg navbar-light rounded" style={{marginLeft: '10%', backgroundColor: 'rgb(5, 68, 104)', width: '89%', position: 'absolute', left: '10px', top: '10px'}}> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
    <Link className="navbar-brand text-light" to="/register">Register</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          {/* <a className="nav-link" href="/"> </a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#" /> */}
        </li>
      </ul>
    </div>
  </nav>
  <div style={{position: 'absolute', left: '35%', top: '100px'}} className="container wid bg-light rounded m-4 p-4 text-white shadow-lg  mb-5  rounded text-left">
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <h3 className="color"> Register </h3>
        <hr style={{width: '100%', color: 'rgb(23, 22, 22)', height: '2px'}} />
        <label htmlFor="exampleInputEmail1" className="color">Email address</label>
        <input type="email" name='email' onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <br />
        <label htmlFor="exampleInputPassword1" className="color">Password</label>
        <input type="password" onChange={handleOnChange}  name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <br />
      <label htmlFor="name" className="color"> Name </label>
      <input type="text" name="name" onChange={handleOnChange} className="form-control" placeholder="Enter Name" />
      <br />
      <div className="form-check">
        <input type="checkbox" name='admin' value={true}   onChange={handleOnChange}  className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1" style={{color: 'black'}}>Admin</label>
      </div>
      <div className="form-check">
        <input type="checkbox" name='admin' value={false}   onChange={handleOnChange}  className="form-check-input" id="exampleCheck2" />
        <label className="form-check-label" htmlFor="exampleCheck2" style={{color: 'black'}}>User</label>
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  </div>
</div>

    </>
  )
}

export default Register