import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const Login = () => {
    document.body.style = {
        height: 'auto',
        width: '1520px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'fixed'
    }
    const navigate = useNavigate()
    const [user, setUser] = useState({email: '', password: ''})
    const handleOnChange = (e)=>{
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    const handleOnSubmit =async (e)=>{
        e.preventDefault();
        const url = 'https://singa-backend.herokuapp.com/auth/login'
        const response = await fetch(url, {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email:user.email, password:user.password})
        })
        const data = await response.json();
        if(data.succes){
            localStorage.setItem('auth-token', data.token)
            localStorage.setItem("user-name", data.name)
            localStorage.setItem('isAdmin', data.admin)
            swal("Login Successful", "You are now logged in", "success").then(()=>{
                navigate('/packages')
            });
        }else{
            swal("Login Failed", data.msg, "error");
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
                <div className="w3-sidebar w3-bar-block" style={{ width: '10%', backgroundColor: 'rgb(5, 68, 104)' }}>
                    <h5 style={{ color: 'white' }}> StayCation Portal </h5>
                    <hr style={{ color: 'white', width: '100%', marginTop: '10px', height: '5px' }} />
                    <Link to="/" className="w3-bar-item w3-button fas fa-home" style={{ color: 'white' }}> Login </Link>
                    <Link to="/register" className="w3-bar-item w3-button fas fa-user" style={{ color: 'white' }}> Register </Link>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light rounded" style={{ marginLeft: '10%', backgroundColor: 'rgb(5, 68, 104)', width: '89%', position: 'absolute', left: '10px', top: '10px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="navbar-brand text-light" style={{ marginRight: '15px' }} to="/">Login</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#"> </a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#" /> */}
                            </li>
                        </ul>
                    </div>
                </nav>
                <div style={{ position: 'absolute', left: '35%', top: '100px' }} className="container wid bg-light rounded m-4 p-4 text-white shadow-lg  mb-5  rounded text-left">
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <h3 className="color"> Login </h3>
                            <hr style={{ width: '100%', color: 'rgb(23, 22, 22)', height: '2px' }} />
                            <label htmlFor="exampleInputEmail1" className="color">Email address</label>
                            <input type="email" onChange={handleOnChange} className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <br />
                            <label htmlFor="exampleInputPassword1" className="color">Password</label>
                            <input type="password" onChange={handleOnChange}  name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <br />
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: 'black' }}>Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login