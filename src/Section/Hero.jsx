import React, { Component } from 'react';


export default class Hero extends Component {
  render() {
    return (
      <section className="section-hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-centered jumbotron">
              <p className="hero">By far, the most widely used modern version control system in the world today is Git.
                Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds,
                the famous creator of the Linux operating system kernel.
              </p>
              <div className="col-sm-12 col-centered cta-button">
                <a className="github-link" href="https://github.com/">Get Git</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
