import React, {Component} from "react"
import Navbar from './navbar'
import SessionPage from './sessionPage'

class Home extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="homepage">
        <Navbar/>
        <h1> Boulder Tracker </h1>
        <button> New Session </button>
        <button> My Sessions </button>
        <button> My Friends </button>
        <SessionPage/>
      </div>
    )
  }
}

export default Home
