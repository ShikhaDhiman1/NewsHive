import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
// import axios from 'axios'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
 
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: ""
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  capitalize(string){
    return (string.charAt(0).toUpperCase() + string.slice(1));
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      totalArticles:0,
      page: 1
    };
    let str = this.props.category;
    document.title = str && `${this.capitalize(str)}-NewsHive: A hotspot for trending news!`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3f73dcbee85145c3aae56c88551aa238&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // axios.get(
    //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f73dcbee85145c3aae56c88551aa238"
    // )
    // .then(
    //     response => {
    //         console.log(" response : " + response);
    //         this.setState({
    //             articles: response.data.articles
    //         })
    //         console.log("response1 : "+response.data.articles);
    //         console.log(" response2 : "+this.state.articles)
    //     }
    // )
    // .catch(
    //     error => {
    //         console.error(error)
    //         this.setState({error:error.message})
    //     }
    // )
    this.updateNews();
  }

  // handleNextPage = async () => {
  //   if (Math.ceil(this.state.totalArticles / this.props.pageSize) < this.state.page + 1) {
  //   } else {
  //    this.setState({
  //       page: this.state.page + 1,
  //    })
  //    this.updateNews();
  //   }
  // };

  // handlePreviosPage = async () => {
  //    this.setState({
  //       page: this.state.page - 1,
  //    })
  //    this.updateNews();
  // };

 fetchMoreData =  async () => {
  this.setState({
    page: this.state.page+ 1
  })
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3f73dcbee85145c3aae56c88551aa238&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({
    loading: true,
  });
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log("fetchmore")
  console.log(this.state.articles);
  this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalArticles: parsedData.totalResults,
    loading:false
  });
  console.log(this.state.articles);

 }
  
  render() {
    console.log("articles: ");
    console.log(this.state.articles);
    // console.log(this.state.parsed);
    console.log(this.state.totalArticles);
    return (
      <>
        {/*  <div className="container py-5"> */}
        <center>
          <h1 className="text-warning my-5">Following are Some top Headlines</h1>
          {this.props.category && (
            <h5>
              -from <i>{this.capitalize(this.props.category)}</i> category
            </h5>
          )}
        </center>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          // hasmore = {Math.ceil(this.state.totalArticles / this.props.pageSize) === this.state.page + 1}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className="row justify-content-center mt-4" id="div-row-news">
              {/* {this.state.loading && <Spinner/>} */}
              {/* {!this.state.loading && */}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <NewsItem
                      title={element["title"]}
                      date={element["publishedAt"].slice(0, 10)}
                      source={element.source.name}
                      description={element.description}
                      urlToImage={
                        element.urlToImage
                        // ? element.urlToImage
                        // : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6722c772d1b23017946f0f766f1bc8ed.jpg"
                      }
                      url={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-4 mx-5 px-3 pt-5">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-danger px-4"
            onClick={this.handlePreviosPage}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalArticles / this.props.pageSize) <
              this.state.page + 1
            }
            className="btn btn-danger px-4"
            onClick={this.handleNextPage}
          >
            Next&rarr;
          </button>
        </div> */}
        {/* </div> */}
      </>
    );
  }
}


export default News


// business entertainment general health science sports technology