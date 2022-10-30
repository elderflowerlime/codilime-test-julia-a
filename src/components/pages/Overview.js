import React from 'react'
import './Overview.css'
import Picture from '../resources/Picture.png'

function Overview() {
  return (
    <div className="overview-body">
        <div className='logo'>
            <h1> Future One </h1>
        </div>
        <div className="introduction">
            <div className="introduction-text">
                <h2><span>Duis aute irure</span> dolor in reprehenderit</h2>
                <p>Nam at lectus urna duis convallis. Id semper risus in hendrerit
                 gravida rutrum quisque non tellus. Elit eget gravida cum sociis 
                 natoque. Ultrices neque ornare aenean euismod elementum nisi quis
                    eleifend. Arcu felis bibendum ut tristique et egestas. </p>
                <button className='btn-primary btn-big'> Discover now</button>
            </div>
            <div className="introduction-picture">
                <img src={Picture} alt=''></img>
            </div>
        </div>

    </div>
  )
}

export default Overview