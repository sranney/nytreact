import React,{Component} from "react";
import {Modal,Button} from "react-materialize";
import "materialize-css";
import API from "../utils/API";

class SavedArticles extends Component {
	constructor(props){
		super(props);
		this.state = {
			savedArticles:[]
		}
	}
	loadArticles(){
		this.props.loadArticles()
			.then(results =>{
				console.log(results);
				const articles = results.data;
				this.setState({savedArticles:articles});
			});
	}
	componentDidMount(){
		this.loadArticles();
	}
	componentDidUpdate(){
		this.loadArticles();
	}	
	deleteArticle = event => {
	    const parentEl = event.target.parentElement;
	    const id = parentEl.getAttribute("id");
	    API.Delete(id).then(results=>{
			const filteredArticles = this.state.savedArticles.filter(article =>{
				return article._id !==id;	
			})
			this.setState({savedArticles:filteredArticles})
		});
	}		
		
	render() {
		return (
			<div className="left featDisc">			
				<Modal 
					header="Saved Articles" 
					id="savedArticles" 
					trigger={<Button
								onClick={() => console.log("clicked")}
								id="chat" 
								icon='archive' 
								className="white-text btn btn-floating black tooltipped" 
								data-tooltip='Retrieve saved articles' 
								data-position='right' 
								data-delay='200'
							></Button>}
				>
					{				
						this.state.savedArticles.map(article =>{
							return (
						      	<li className="collection-item avatar modalitem" key={article._id} id={article._id}>
						      		<i className="material-icons secondary-content red-text" onClick={this.deleteArticle}>close</i>
						      		<a href={article.url} className="title" target="_blank">{article.title}</a>
						      		<p className="date">{article.date}</p>
						      		<p className="snippet">{article.snippet}</p>
						      		
						      	</li>							
							)
						})
					}
				</Modal>
			</div>			
		);
	}
};


export default SavedArticles;