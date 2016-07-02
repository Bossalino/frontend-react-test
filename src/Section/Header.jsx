import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <section className="section-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-centered">
              <div className="row">
                <div className="col-sm-8 col-xs-6 col-centered">
                  <h1 className="logo-header">GitFollower</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-centered">
                  <ul className="nav nav-pills nav-header">
                    <li role="presentation"><a className="each-link" href="#">Home</a></li>
                    <li role="presentation"><a className="each-link" href="#">Profile</a></li>
                    <li role="presentation"><a className="each-link" href="#">Messages</a></li>
                    <li role="presentation"><a className="each-link" href="#">Messages</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
