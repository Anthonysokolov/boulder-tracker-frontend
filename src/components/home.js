import React, {Component} from "react"

class Home extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="homepage">
        <h1> Boulder Tracker </h1>
        <button> New Session </button>
        <button> My Sessions </button>
        <button> My Friends </button>
      </div>
    )
  }
}

export default Home
