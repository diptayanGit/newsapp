import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    
    const capitalize = (str) => {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsWorld`;
        updatePage();
    }, []);


    const updatePage = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let ParsedData = await data.json();
        props.setProgress(70);
        // console.log(ParsedData);
        setArticles(ParsedData.articles);
        setTotalResults(ParsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }

    // const handlePrevClick = async () => {
    //     console.log("previous");

    //     setPage(page - 1);
    //     updatePage();
    // }

    // const handleNextClick = async () => {
    //     console.log("next");

    //     setPage(page - 1);

    //     updatePage();

    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        // setState({ loading: true });
        let data = await fetch(url);
        let ParsedData = await data.json();
        // console.log(ParsedData);
        setArticles(articles.concat(ParsedData.articles));
        setTotalResults(ParsedData.totalResults)
        setPage(page + 1)
        
    }


    // console.log('render');

    let defaultUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpX9p36GYbRrvmIJhAkbZeH2b9ujQ3CsSSQ&usqp=CAU'
    return (
        <div className='container my-3'>
            <h3 className='text-center' style={{marginTop:'4rem'}}>NewsWorld - Top {capitalize(props.category)} Headlines</h3>
            {/* {loading && <Loading/>} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
                style={{ overflow: 'hidden' }}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title ? element.title : 'No title'} description={element.description ? element.description : 'No description'} imageUrl={element.urlToImage ? element.urlToImage : defaultUrl} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {
                //     <div className="container d-flex justify-content-between">
                //     <button disabled={page <= 1} type="button" onClick={handlePrevClick} className="btn btn-primary">← Previous</button>
                //     <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" onClick={handleNextClick} className="btn btn-primary">Next →</button>
                // </div>
            }
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    category: 'science',
    pageSize: 5,
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
