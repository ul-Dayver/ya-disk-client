import React, {Component} from 'react';

export default class Modal extends Component {
  render () {
    return (
      <div>
        <div style={{display: 'block'}} className="modal fade in">
            <div className = "modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.props.onClose}><span>&times;</span></button>
                        <h4 className="modal-title">{this.props.title}</h4>
                    </div>
                    <div className="modal-body">
                        {this.props.children ? this.props.children : null}
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade in"></div>
      </div>
    )
  }
}