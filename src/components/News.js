import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {

  constructor(props) {
    // console.log('inside constructor');
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true
    }

    document.title = `NewsMonk - ${this.props.category}`;
  }

  render() {
    // console.log('inside render');
    return (
      <>
        <h1 className="text-center my-4">{(this.props.category === 'general') ? 'Latest' : this.capitalizeFirstLetter(this.props.category)} News</h1>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.loading && <Spinner />}
              <div className="col-md-12">
                {this.state.articles && this.state.articles.map((article) => {
                  return (<NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url} key={article.url} author={article.author} publishedAt={article.publishedAt} />);
                })}
              </div>
              {/* <div className="col-md-12 d-flex justify-content-between">
            <input className="btn btn-primary btn-sm" type="button" onClick={this.handlePrevClick} value="Previous" disabled={this.state.page <= 1}/>
            <input className="btn btn-primary btn-sm" type="button" onClick={this.handleNextClick} value="Next" disabled={this.state.page >= this.state.totalPages}/>
          </div> */}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

  componentDidMount() {
    // console.log('inside componentDidMount');
    this.loadArticles();
    // this.fetchMoreData();
  }

  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 },async ()=>{
      let apiUrl = `${this.props.apiUrl}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      console.log('fetchmore caleed', apiUrl);
      let artiles = await fetch(apiUrl);
      let parsedData = await artiles.json();
      this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults });
    });
  }

  // handlePrevClick = () => {
  //   console.log('priv Click');
  //   this.setState({page: this.state.page-1,loading:true},() => {
  //     console.log('prev change state trigger');
  //     this.loadArticles();
  //   });   
  // }

  // handleNextClick = () => {
  //   console.log("next Click");
  //   this.setState({page: this.state.page+1,loading:true},() => {
  //     console.log('next change state trigger');
  //     this.loadArticles();
  //   });

  // }

  async loadArticles() {
    this.props.setProgress(20);
    // console.log(this.props);
    this.setState({ loading: true });
    let apiUrl = `${this.props.apiUrl}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    // console.log('loading articles :: apiUrl:' + apiUrl);
    let artiles = await fetch(apiUrl);
    this.props.setProgress(50);
    let parsedData = await artiles.json();
    this.props.setProgress(70);
    let totalPages = Math.ceil(parsedData.totalResults / this.props.pageSize);
    this.setState({ articles: parsedData.articles, totalPages: totalPages, loading: false });
    this.props.setProgress(100);
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  static defaultProps = {
    pageSize: 10,
    country: 'in',
    category: 'all'
  }
}