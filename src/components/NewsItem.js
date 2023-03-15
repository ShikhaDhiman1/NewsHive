import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
//   static propTypes = {

//   }

  render() {
    let {title, date,urlToImage, source, url} = this.props;
    return (
      <div id="div-newsComponent">
        <div className="card" style={{ width: "20rem" }}>
          {urlToImage && (
            <img src={urlToImage} className="card-img-top" alt="..." />
          )}
          <div className="card-body">
            <h5 className="card-title">
              {title} <span className="badge p-1">{source}</span>
            </h5>
            <h6
              className="date"
              style={{ color: "grey", fontWeight: "400", fontSize: "0.85rem" }}
            >
              <i>Publish Date: {date}</i>
            </h6>
            {/* <p className="card-text">{description}</p> */}
            <a href={url} className="btn btn-success">
              Know More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
