import React, { Component } from 'react'
import myt from './myt.jpg'
import download from './download.jfif'
export default class Cards extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card my-3 max-width: 540px">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={download} className="card-img" alt="albumimage" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="#top" className="btn btn-lg">
                  <span className="glyphicon glyphicon-triangle-top"></span>
                </a>
                <h3>hi</h3>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Submitted By:<img src={myt} className="rounded-circle" alt="albumimage"/></small></p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
