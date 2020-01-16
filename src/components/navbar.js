import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="navbar">
            <ul>
              <li>Home</li>
              <li className="workouts">
                  My Workouts
              </li>
              <li className="social">
                  Connect With Friends
              </li>
            </ul>
            </div>
        );
    }
}

export default Navbar
