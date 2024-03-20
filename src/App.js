import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiEndPoint = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}`;

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({progress:progress})
  };

  render() {
    const pageSize = 10;
    const defaultCountry = 'in';
    
    return (
      <div>
        <BrowserRouter>
          <LoadingBar color='#d08600' progress={this.state.progress} onLoaderFinished={this.setProgress} height={3}/>
          <Header />
          <Routes>
              <Route path="/" element={<News key='general' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'general'} />} />
              <Route path="/entertainment" element={<News key='entertainment' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'entertainment'} />} />
              <Route path="/sports" element={<News key='sports' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'sports'} />} />
              <Route path="/science" element={<News key='science' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'science'} />} />
              <Route path="/business" element={<News key='business' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'business'} />} />
              <Route path="/technology" element={<News key='technology' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'technology'} />} />
              <Route path="/health" element={<News key='health' apiUrl={this.apiEndPoint} setProgress={this.setProgress} pageSize={this.pageSize} country={this.defaultCountry} category={'health'} />} />
          </Routes>
          <Footer />
          </BrowserRouter>
      </div>
    );
  }
}