import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={this.props.flag} alt="Card image cap"></img>
  <div className="card-body">
  <br/>Name : {this.props.name}
      <br/>Capital : {this.props.capital}
      <br/>Flag : {this.props.flag}
      <br/>Population : {this.props.population}
      <br/>Region : {this.props.region}
  </div>
</div>
        
    )
    }
}

export default Card
