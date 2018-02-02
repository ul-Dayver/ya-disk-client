import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Folder extends Component {
  render () {
    return (
      <Link className='folder list-group-item' to={this.props.item.path.slice(5)}>
        <span className="glyphicon glyphicon-folder-close"></span>
        {this.props.item.name}
      </Link>
    )
  }
}