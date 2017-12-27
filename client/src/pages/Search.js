import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import SavedArticles from "../components/SavedArticles";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  loadArticles = () => {
    return API.GetAll()
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.Search(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        document.getElementById('searchT').value = '';
        this.setState({ results: res.data.response.docs, error: "",search:"" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  saveArticle = event => {
    const parentEl = event.target.parentElement;
    const title = parentEl.querySelector(".title").textContent;
    const url = parentEl.querySelector(".title").getAttribute("href");
    const snippet = parentEl.querySelector(".snippet").textContent;
    const date = parentEl.querySelector(".date").textContent;
    const sendObj = {
      title:title,
      snippet:snippet,
      date:date,
      url:url
    };
    console.log(sendObj);
    API.Save(sendObj)
      .then(res=>{
        console.log(res);
      })
  };

  render() {
    return (
      <div className="container center-align">
        <div className="col s6">    
          <div className="card white z-depth-2">
            <h4 id="form-title">Search Form:</h4>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            
          </div>
          <SearchResults 
            results={this.state.results} 
            saveArticle={this.saveArticle}
            loadArticles={this.loadArticles}
            deleteArticle = {this.deleteArticle}
          />    
        </div>
      </div>
    );
  };

}

export default Search;
