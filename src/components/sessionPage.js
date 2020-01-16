import React, {Component} from "react"

class SessionPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let climbs = [{grade:"V3", name:"", color:"", attempts:"", send:"", notes:""}]
    let data = {date:"06/19/20", duration: 90, location:"Brooklyn Boulders"}
    // IDEAL FUNCTIONALITY
    // Option to view stats
    return(
      <div className="session">
        <p> Session Date: {data.date} </p>
        <p> Location: {data.location} </p>
        <p> Duration: {data.duration} minutes</p>
      </div>
    )
  }
}

export default SessionPage
