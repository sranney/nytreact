import React from "react";

import {Icon} from "react-materialize";

import SavedArticles from "./SavedArticles";
import InfoButton from "./InfoButton";

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