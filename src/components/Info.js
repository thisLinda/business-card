import React from 'react';
import img from '../assets/profile.jpg'

export default function Info() {
    return (
        <div className='info'>
            <img className='info--img' src={img} alt="profile pic" />
            <h1>Linda Forlizzi</h1>
            <h3>Front End Developer</h3>
            <h4>https://github.com/thisLinda</h4>
            <div className='info--button'>
                <button className='info--btn info--emailbtn'> 
                <a href='mailto:la.for.lizzi@gmail.com'> <i className='fas fa-envelope' aria-hidden='true'></i>Email</a>
                </button>
            </div>
        </div>
    )
}