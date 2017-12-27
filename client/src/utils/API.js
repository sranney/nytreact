import axios from "axios";

const API = {
  Search: function(searchT,bDate,eDate) {
  	let URL = "";
  	URL += "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  	URL += "?api-key=8943f8d36bd44964b75c8f57192afe25&q="+searchT;
    return axios.get(URL);
  },
  Save: function(dataObj){
  	return axios.post("/api/articles",dataObj);
  },
  GetAll: function(){
  	return axios.get("/api/articles");
  },
  Delete:function(id){
    return axios.delete("/api/articles/"+id);
  }
};

export default API;