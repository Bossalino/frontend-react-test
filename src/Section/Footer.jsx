import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <section className="section-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="footer-link-wrapper">
                <ul className="col-sm-2 col-xs-6 footer-link">About
                  <li className=""><a href="#">Home</a></li>
                  <li className=""><a href="#">Home</a></li>
                  <li className=""><a href="#">Home</a></li>
                </ul>
                <ul className="col-sm-2 col-xs-6 footer-link">About
                  <li className=""><a href="#">Home</a></li>
                  <li className=""><a href="#">Home</a></li>
                  <li className=""><a href="#">Home</a></li>
                </ul>
                <ul className="col-sm-2 col-xs-6 footer-link">About
                  <li className=""><a href="#">Home</a></li>
                  <li className=""><a href="#">Home</a></li>
                  <li className=""><a href="#">Home</a></li>
                </ul>
                  <form className="col-sm-6 col-xs-12 subscribe-form">
                    <input className="subscribe-field" type="email" name="subscribe" value="" />
                    <input type="submit" className="subscribe-button" value="Subscribe" />
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
