import React from "react";

import {Icon} from "react-materialize";

import SavedArticles from "./SavedArticles";
import InfoButton from "./InfoButton";

//component is just for showing where results are and has a couple of components for understanding/retrieving information
//first off, SavedArticles is modal accessible by button that shows articles saved in mongodb
//function to access these articles is passed from the app down as props
//InfoButton is ? button that has tooltip information on how to save articles
class ResultsHeader extends React.Component {
	render() {
		return (
			<div>
				<h4 id="results-title">
					<SavedArticles
						loadArticles={this.props.loadArticles}/>
					Search Results:
					<InfoButton />
				</h4>
			</div>
		);
	};
}

export default ResultsHeader;