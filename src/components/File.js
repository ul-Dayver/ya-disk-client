import React, {Component} from 'react';

const formatBytes = (bytes, decimals) => {
  if(bytes === 0) return '0 Bytes';
  const k = 1024,
    dm = decimals + 1 || 1,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export default class File extends Component {
  render() {
    return (
      <li className='list-group-item'>
        <span className="glyphicon glyphicon-file"></span>
        <span className="btn btn-link" onClick={() => this.props.onClick(this.props.item)}>{this.props.item.name}</span>
        <span className='badge'>{formatBytes(this.props.item.size)}</span>
      </li>
    )
  }
}