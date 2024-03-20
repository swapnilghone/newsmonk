import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url,author,publishedAt } = this.props;
    return (
      <div className="card mb-3 border-0 border-bottom">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img src={imageUrl?imageUrl:process.env.PUBLIC_URL +"/default_thumb.png"} className="card-img mb-3" alt="..."/>
              <h5 className="card-title">{title ? title : ""}</h5>
              <p className="card-text">
                <small className="text-body-secondary">{author ? author : ""}</small>
              </p>
            </div>
            <div className="col-md-9">
              <div className="card-text-container">
                <p className="card-text">{description ? description : ""}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{publishedAt ? new Date(publishedAt).toUTCString() : ""}</small>
                </p>
                <p className="card-link" style={{position: 'absolute',right: '1.5rem',bottom: '1.5rem'}}>
                  <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">Full Coverage</a>
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
