import React,{Component} from "react";

//question mark button that has a tooltip which will tell user what the purpose of the star on each result is
class InfoButton extends Component {
	render() {
		return (
			<div className="right featDisc">
				<a className="waves-effect waves-light btn btn-floating black tooltipped" data-tooltip='Click star to save article' data-position='left' data-delay='200' ><i className="fa fa-question white-text"></i></a>
			</div>
		);
	};
}

export default InfoButton;