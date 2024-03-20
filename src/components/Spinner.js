import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="mb-4 text-center">
        <img src={process.env.PUBLIC_URL +"/loading.gif"} alt="Loading..." />
      </div>
    )
  }
}