import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h5>NewWorld - Top Headlines</h5>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="newTitle" description="news description" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
