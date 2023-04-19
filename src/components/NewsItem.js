import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1,left:'90%'}}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '300px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">by {author ? author : 'Unknown'} on {date ? new Date(date).toLocaleString() : 'Not mentioned'} </small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
