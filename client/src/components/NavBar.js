import React from "react";
import Title from "./Title";

//navbar has title component, but simply just for displaying title
class NavBar extends React.Component {
	render(){
		return(<nav className="black center" id="navbar">
			<Title/>
			</nav>
			);
	}
};

export default NavBar;