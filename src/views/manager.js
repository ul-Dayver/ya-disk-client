import React, {Component} from 'react'
import Breadcrumb from '../components/breadcrumb';
import File from '../components/File';
import Folder from '../components/Folder';
import Modal from '../components/modal';
import Spinner from '../components/spinner';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFolderModalShow: false
    }

    this.handlerCreateDir = this.handlerCreateDir.bind(this)
    this.handlerClickFile = this.handlerClickFile.bind(this)
    this.handlerDeleteDir = this.handlerDeleteDir.bind(this)
    this.handlerUploadFile = this.handlerUploadFile.bind(this)
  }

  componentDidMount() {
    this.props.fetchList(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchList(nextProps.location.pathname)
    }
  }

  handlerClickFile(file) {
    this.props.downloadFile(file.path, file.name)
  }

  handlerUploadFile(event) {
    if (event.target.value.length) {
      let filePath = event.target.value.split('\\'), filename = filePath[filePath.length-1]
      let path = encodeURIComponent(this.props.location.pathname + (this.props.location.pathname === '/' ? '' : '/') + filename)
      this.props.uploadFile(path, new FormData(document.getElementById('controlForm')))
    }
  }

  handlerDeleteDir(folder) {
    this.props.deleteDir(folder.path)
  }

  handlerCreateDir(event) {
    event.preventDefault()

    if (document.getElementById('newDirName').value.length) {
      let fullName = this.props.location.pathname +
        (this.props.location.pathname.charAt(this.props.location.pathname.length - 1) === '/' ? '' : '/') +
        document.getElementById('newDirName').value.trim()

      this.props.createDir(fullName)
    }
    this.setState({newFolderModalShow: false})
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <form className="navbar-form navbar-left" id="controlForm">
                <div className="form-group m-r-md">
                  <span className="btn btn-warning" style={{color: '#000', position: 'relative'}}>
                    <input type="file" className="file-upload" name="file" multiple="" style={{position: 'absolute', cursor: 'pointer', opacity: 0, top: 0, left: 0, right: 0, bottom: 0, width: '152px'}}
                      onChange={this.handlerUploadFile}
                    />
                    <span className="glyphicon glyphicon-cloud-upload m-r-sm"></span>
                    <span>&nbsp;Загрузить файл</span>
                  </span>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-default" onClick={() => this.setState({newFolderModalShow: true})}>
                    <span className="glyphicon glyphicon-plus m-r-sm"></span>
                    <span>&nbsp;Создать папку</span>
                  </button>
                </div>
              </form>
              <form className="navbar-form navbar-right">
                <button type="button" className="btn btn-info" onClick={this.props.onLogout}>
                  <span className="glyphicon glyphicon-log-out m-r-sm"></span>
                  <span>&nbsp;Выход</span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-12">
            {
              this.props.location.pathname !== '/'
              ? (<Breadcrumb list={this.props.location.pathname.split('/')} />)
              : null
            }
            {
              this.props.app.list && this.props.app.list.length
              ? (
                <ul className='file-list list-group'>
                  {
                    this.props.app.list.map((item, index) => 
                      item.type === 'dir' 
                      ? <Folder key={index} item={item} onClickDelete={this.handlerDeleteDir}/> 
                      : <File key={index} item={item} onClick={this.handlerClickFile}/>
                    )
                  }
                </ul>
              )
              : null
            }
          </div>
        </div>
        {
          this.state.newFolderModalShow
          ? (
            <Modal title="Создание папки"
              onClose={() => this.setState({newFolderModalShow: false})}
            >
              <form onSubmit={this.handlerCreateDir}>
                <div className="form-group">
                  <label className="control-label">Имя папки</label>
                  <input id="newDirName" name="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    <i className="glyphicon glyphicon-ok m-r-sm"></i>
                    <span>Создать</span>
                  </button>
                </div>
              </form>
            </Modal>
          )
          : null
        }
        {
          this.props.request.isLoading
          ? <Spinner />
          : null
        }
      </div>
    )
  }
}