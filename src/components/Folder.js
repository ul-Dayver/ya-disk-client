import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Folder extends Component {
  render () {
    return (
      <li className='list-group-item'>
        <span className="glyphicon glyphicon-folder-close m-r-sm"></span>
        <Link className="btn btn-link" to={this.props.item.path.slice(5)}>
          {this.props.item.name}
        </Link>
        <button type="button" className="btn btn-xs btn-danger pull-right" onClick={() => this.props.onClickDelete(this.props.item)}>
          <span className="glyphicon glyphicon-trash m-r-sm"></span>
          <span>&nbsp;Удалить</span>
        </button>
      </li>
    )
  }
}