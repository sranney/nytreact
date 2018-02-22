import React from "react";
import ResultsHeader from "./ResultsHeader";

//component that shows search results as a list
const SearchResults = props => {
  	return (<ul className="collection white z-depth-2">
			<ResultsHeader
				loadArticles={props.loadArticles}/>
		    {
		    	props.results.map(result =>
			      	<li className="collection-item avatar" key={result._id}>
			      		<a href={result.web_url} className="title" target="_blank">{result.headline.main}</a>
			      		<p className="date">{result.pub_date}</p>
			      		<p className="snippet">{result.snippet}</p>
			      		<i className="material-icons secondary-content" onClick={props.saveArticle}>grade</i>
			      	</li>
		    	)
			}
		  	</ul>
	);
}

export default SearchResults;