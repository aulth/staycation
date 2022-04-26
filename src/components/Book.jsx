import React from 'react'

const Book = () => {
  return (
      <>
      <div>
  <div className="wrapper">
    <nav className="navbar navbar-expand-lg navbar-light rounded" style={{marginLeft: '10%', backgroundColor: 'rgb(5, 68, 104)', width: '83%', position: 'absolute', left: '100px', top: '10px'}}>     
      <a className="navbar-brand text-light " style={{marginRight: '15px', width: '50%'}} href="#"> &nbsp; &nbsp;&nbsp; &nbsp;Package  Name {'{'}Dynamic{'}'}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#"> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" />
          </li>
        </ul>
      </div>
      <a href>
        <i className="fas fa-sign-out-alt text-white" style={{position: 'absolute', right: '50px', top: '17px'}} />
      </a>
    </nav>
    {/* card  */}
    <div className="row row-cols-1 row-cols-md-4 g-4 col d-flex justify-content-center" style={{marginTop: '100px', position: 'relative', right: '250px'}}>
      <div className="col">
        <div className="card h-100">
          <img src="images/Shangri-La_Singapore-Nature_Lovers_Playcation.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Shangri-La Singapore</h3>
            <p className="card-text">Treat the entire family to a luxurious staycation experience complete with world-class culinary experiences at The Singapore.</p>
          </div>
        </div>
      </div>
    </div>
    {/* date menu  */}
    {/*Top menu */}
    <div className="sidebar">
      <h3 className="text-white">StayCation Portal</h3>
      <hr style={{color: 'white', width: '100%', marginTop : '10px', height: '5px'}} /> 
      {/*profile image & text*/}
      <div className="profile">
        <img src="assets/assets/img/admin.jpeg" alt="profile_picture" />
        <h3>Admin</h3>
        <hr style={{color: 'white', width: '100%', marginTop : '10px', height: '5px'}} /> 
        {/* <p>Designer</p> */}
      </div>
      {/*menu item*/}
      <ul>
        <li>
          <a href="#" style={{cursor: 'pointer', textDecoration: 'none'}}>
            <span className="icon"><i className="fas fa-address-card" /></span>
            <span className="item">Package</span>
          </a>
        </li>
        <li>
          <a href="#" style={{cursor: 'pointer', textDecoration: 'none'}}>
            <span className="icon"><i className="fas fa-chart-area" /></span>
            <span className="item">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" style={{cursor: 'pointer', textDecoration: 'none'}}>
            <span className="icon"><i className="fas fa-cloud-upload-alt" /></span>
            <span className="item">Upload</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div style={{position: 'absolute', left: '45%', top: '100px', width: '35%'}} className="container wid bg-light rounded m-4 p-4 text-white shadow-lg  mb-5  rounded text-left">
    <form>
      <div className="form-group">
        <h3 style={{color: 'black', fontSize: 'xx-large'}}> Check_in_date </h3>
        <hr style={{width: '100%', color: 'rgb(23, 22, 22)', height: '2px'}} />
        {/* <form style="float: right;"> */}
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1" />
          <input type="date" className="form-control-file" id="exampleFormControlFile1" />
        </div>
        {/* </form> */}
        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <br />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    {/* <h2>Sidebar Navigation Example</h2>
<p>The sidebar with is set with "style="width:25%".</p>
<p>The left margin of the page content is set to the same value.</p> */}
  </div>
</div>

      </>
  )
}

export default Book