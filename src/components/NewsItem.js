import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source, mode } =  props;
    let changeStyle ={
        backgroundColor: mode==='dark'?'#424649':'white',
        color: mode==='dark'?'white':'black'
    }
    return (
        <div className='my-3'>
            <div className="card" style={changeStyle}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1, left: '90%' }}>{source}</span>
                <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '30vh' }} />
                <div className="card-body">
                    <h5 className="card-title">{title ? title:'No title'}...</h5>
                    <p className="card-text">{description ? description:'No description'}...</p>
                    <p className="card-text"><small>by {author ? author : 'Unknown'} on {date ? new Date(date).toLocaleString() : 'Not mentioned'} </small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
