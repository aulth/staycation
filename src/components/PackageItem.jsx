import React, { useState } from 'react'

const PackageItem = (props) => {
  const { image_url, description, hotel_name } = props
  return (
    <>
      <div className="col" style={{margin:'5px'}}>
        <div class="card h-100" style={{ width: '18rem' }}>
          <img src={image_url} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{hotel_name}</h5>
            <p class="card-text">{description}</p>
            <button class="btn btn-primary">Book</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PackageItem