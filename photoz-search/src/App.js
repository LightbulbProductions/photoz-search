import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './components/ImgList';
import SearchForm from './components/SearchForm';


const APP_ID = "47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loadingState: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }


  performSearch = (query = 'sun') => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${APP_ID}`
      )
      .then(data => {
        this.setState({ imgs: data.data.results, loadingState: false });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  };

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photoz-Search</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loadingState
            ? <p>Loading</p>
            : <ImgList data={this.state.imgs} />}
        </div>
      </div>
    );
  }
}