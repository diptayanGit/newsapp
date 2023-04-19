import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 5,
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalize = (str) => {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
    constructor(props) {
        super(props);
        // console.log("Hello I am a constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 1,
        }
        document.title = `${this.capitalize(this.props.category)} - NewsWorld`;
    }

    async componentDidMount() {
        this.updatePage();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad0347c46f94acc86e5db4b91539847&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let ParsedData = await data.json();
        // // console.log(ParsedData);
        // this.setState({ 
        //     articles: ParsedData.articles,
        //     totalResults: ParsedData.totalResults,
        //     loading: false
        // })
    }
    
    async updatePage() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad0347c46f94acc86e5db4b91539847&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let ParsedData = await data.json();

        this.setState({
            articles: ParsedData.articles,
            totalResults: ParsedData.totalResults,
            loading: false
        })
    }
    
    handlePrevClick = async () => {
        // console.log("previous");
        
        this.setState({
            page: this.state.page - 1,
        })
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad0347c46f94acc86e5db4b91539847&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let ParsedData = await data.json();
        // // console.log(ParsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: ParsedData.articles,
        //     loading: false
        // })
        this.updatePage();
    }
    handleNextClick = async () => {
        // console.log("next");

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad0347c46f94acc86e5db4b91539847&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let ParsedData = await data.json();
        // // console.log(ParsedData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: ParsedData.articles,
        //     loading: false
        // })
        this.setState({
            page: this.state.page + 1,
        });
        this.updatePage();

    }

    render() {
        // console.log('render');

        let defaultUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpX9p36GYbRrvmIJhAkbZeH2b9ujQ3CsSSQ&usqp=CAU'
        return (
            <div className='container my-3'>
                <h3 className='text-center'>NewsWorld - Top Headlines</h3>
                {this.state.loading && <Loading/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.replace(/^(.{50}[^\s]*).*/, "$1") : ""} description={element.description ? element.description.replace(/^(.{100}[^\s]*).*/, "$1") : ""} imageUrl={element.urlToImage ? element.urlToImage : defaultUrl} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                {!this.state.loading && <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-primary">← Previous</button>
                        <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-primary">Next →</button>
                </div>}
            </div>
        )
    }
}

export default News
