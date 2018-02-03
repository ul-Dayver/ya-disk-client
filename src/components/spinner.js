import React from 'react'

const Spinner = (props) => (
  <div className="modal waiting-spinner">
    <div className="waiting-spinner-bg"></div>
    <div className="waiting-spinner-body">
      <div className="alert alert-danger">
        <div className="spinner spinner-rotating-plane pull-left "></div>
        <p className="m-l-xl">Пожалуйста, подождите...</p>
      </div>
    </div>
  </div>
)

export default Spinner