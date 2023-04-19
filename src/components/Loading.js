import React, { Component } from 'react'
import loading from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className='text-center my-3'>
          <img src={loading} alt="loading" />
        </div>
        <div className='container d-flex justify-content-between'>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
      </div>
    )
  }
}
