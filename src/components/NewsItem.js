
import React, { Component } from 'react'

const NewsItem = (props)=> {

    let{title, description,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3' >
        <span className="badge text-bg-warning" style={{position:"relative",zIndex:"1",top:"10px"}}>{source}</span>
        <div className={`card ${props.mode.theme==="dark"?"cardDarkStyle":"cardLightStyle"}`} style={props.mode}>
        
      <img src={imgUrl} style={{height:"160px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title titleWrapping ">{title}...</h5>
        <p className="card-text descWrapping">{description}</p>
        <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
        <a rel ="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }

export default NewsItem