import React,{Component} from "react";
import {Modal,Button} from "react-materialize";
import "materialize-css";
import API from "../utils/API";//axios methods

//modal component that shows articles saved to mongodb
class SavedArticles extends Component {
	constructor(props){
		super(props);
		this.state = {
			savedArticles:[]
		}
	}
	//actually running the loadArticles method passed from App component
	loadArticles(){
		this.props.loadArticles()
			.then(results =>{//triggers callback function that will take returned data from mongodb and set it as state, so that the new state can be rendered
				console.log(results);
				const articles = results.data;
				this.setState({savedArticles:articles});
			});
	}
	componentDidMount(){//when component first mounts, on page load, get articles in database
		this.loadArticles();
	}
	componentDidUpdate(){//when component has updated, whenever a new article has been saved to db and returned, get articles in database
		this.loadArticles();
	}	
	deleteArticle = event => {//when a user clicks the "X" on any article, run this function - removes the article from the saved articles in the db
	    const parentEl = event.target.parentElement;
	    const id = parentEl.getAttribute("id");
	    API.Delete(id).then(results=>{//API is just axios.post to the endpoint sending the id of the article that will be deleted to the server which then handles the delete process with mongodb
			const filteredArticles = this.state.savedArticles.filter(article =>{//filter out removed article
				return article._id !==id;	
			})
			this.setState({savedArticles:filteredArticles})//and setState to have savedArticles equal to the filtered results
		});
	}		
		
	render() {//modal that is triggered by button that shows list of savedArticles as a list
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
						this.state.savedArticles.map(article =>{//render list of saved articles
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