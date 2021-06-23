import React, { Component } from 'react'
import Bands from '../components/Bands'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  addNewToDo = (data) => {
    
  }

  render() {
    return(
      <div>
        <h1>ADD A BAND</h1>

        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addBand: (band) => {
      dispatch({ type: 'ADD_BAND', band })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
