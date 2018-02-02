import React, {Component} from 'react'
import File from '../components/File';
import Folder from '../components/Folder';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchList('disk:/');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname != nextProps.location.pathname) {
      this.props.fetchList('disk:' + nextProps.location.pathname);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to YaDisk</h1>
        </header>
        {
          this.props.app.list && this.props.app.list.length
          ? (
            <ul className='file-list list-group'>
              {
                this.props.app.list.map((item, index) => 
                  item.type === 'dir' 
                  ? <Folder key={index} item={item}/> 
                  : <File key={index} item={item}/>
                )
              }
            </ul>
          )
          : null
        }
      </div>
    );
  }
}