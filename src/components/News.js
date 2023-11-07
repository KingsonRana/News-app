
import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
 const[article,setArticle] = useState([])
 const[loading,setLoading] = useState(true)
 const[page,setPage] = useState(1)
 const[totalResults,setTotalResuts] = useState(0)

  const updatePage= async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_KEY}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url)
    props.setProgress(40)
    setLoading(true)
    let readableData = await data.json()
    props.setProgress(70)
    setArticle(readableData.articles)
    setTotalResuts(readableData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  const fetchMoreData = async() => {
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
   let data = await fetch(url)
   let readableData = await data.json()
   setArticle(article.concat(readableData.articles))
   setTotalResuts(readableData.totalResults)
  };

  // displayNextPage = async ()=>{
  //   this.setState({
  //     page:this.state.page + 1
  //   })
  //   this.updatePage()
  // }
  // displayPreviousPage = async ()=>{
  //   this.setState({
  //     page:this.state.page - 1
  //   })
  //   this.updatePage()
  // }

  useEffect(()=>{
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)}-news`
    updatePage()
  },[])
  
    return (
      <>
      <h1 className="text-center" style={{marginTop:"50px",color:props.mode.theme==="dark"?"white":"black"}}>Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
        <div className='container newsitem'>
       { loading && <Spinner/>}
       <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length != totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row my-3'>{
          article.map((data)=>{
            return <div key={data.url}  className='col-md-4 centerData'> <NewsItem mode={props.mode} title={data.title}description={data.description} imgUrl={data.urlToImage} newsUrl={data.url} author={data.author?data.author:"Unknown"}  date={data.publishedAt} source={data.source.name}/></div>
          })
        }
        </div>
        </div>
        </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between my-3">
          <button hidden={this.state.page===1}type="button" className="btn btn-dark prevBtn" onClick={this.displayPreviousPage}>&larr; Previous</button>
          <button hidden={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark nextBtn" onClick={this.displayNextPage}>Next &rarr; </button>
        </div> */}
        </>
    )
  }


export default News