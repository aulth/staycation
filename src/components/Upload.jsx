import React from 'react'
import admin from './img/admin.jpeg'
import { Link , useNavigate} from 'react-router-dom'
import swal from 'sweetalert'

const Upload = () => {
  const navigate = useNavigate()
  const handleOnLogout = ()=>{
    localStorage.removeItem('auth-token')
    localStorage.removeItem('user-name')
    localStorage.removeItem('isAdmin')
    navigate('/')
  }
  const handleOnSubmit = async (e)=>{
      e.preventDefault()
      const url = 'http://localhost:5000/upload/file';
      let formData = new FormData();
      formData.append('file', document.getElementById('file').files[0]);
      const response = await fetch(url, {
          method:"POST",
          body:formData
      })
      const data = await response.json();
      console.log(data)
      if(data.succes){
          swal("Uploaded", data.msg, "success")
      }else{
            swal("Upload Failed", data.msg, "error")
      }
  }
  return (
    <>
    <div className="wrapper">
  <nav className="navbar navbar-expand-lg navbar-light rounded" style={{marginLeft: '10%', backgroundColor: 'rgb(5, 68, 104)', width: '83%', position: 'absolute', left: '100px', top: '10px'}}>     
    <Link className="navbar-brand text-light " style={{marginRight: '15px', width: '46%'}} to="/packages"> &nbsp; &nbsp;&nbsp; &nbsp;Upload</Link>
    <i className="fas fa-sign-out-alt text-white" onClick={handleOnLogout} style={{position: 'absolute', right: '50px', top: '17px', cursor:'pointer'}} />

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
  <div className="row row-cols-1 row-cols-md-6 g-4 col d-flex justify-content-center" style={{marginTop: '100px'}}>
    <form onSubmit={handleOnSubmit} >
        <input type="file" id='file' name='file' />
        <input type="submit" name="" id="" />
    </form>
  </div>
  <div className="sidebar">
    <h3 className="text-white"><Link style={{textDecoration:'none'}} to="/">StayCation Portal</Link></h3>
    <hr style={{color: 'white', width: '100%', marginTop : '10px', height: '5px'}} /> 
    <div className="profile">
      <img src={admin} alt="profile_picture" />
      <h3>Admin</h3>
      <hr style={{color: 'white', width: '100%', marginTop : '10px', height: '5px'}} /> 
    </div>
    <ul>
      <li>
        <Link to="/packages" style={{cursor: 'pointer', textDecoration: 'none'}}>
          <span className="icon"><i className="fas fa-address-card" /></span>
          <span className="item">Packages</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard" style={{cursor: 'pointer', textDecoration: 'none'}}>
          <span className="icon"><i className="fas fa-chart-area" /></span>
          <span className="item">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/Upload" style={{cursor: 'pointer', textDecoration: 'none'}}>
          <span className="icon"><i className="fas fa-cloud-upload-alt" /></span>
          <span className="item">Upload</span>
        </Link>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}

export default Upload