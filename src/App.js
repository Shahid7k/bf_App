import React from 'react';
import {list} from './list';
import CardList from "./CardList";
import SearchBox from './SearchBox';

class App extends React.Component{
	constructor(){
		super()
		this.state={
			list:list,
			sfield:''
		}
	}
	onSearchF = (event) => {
		this.setState({sfield:event.target.value});
	}
	render(){
		const filterSearch= this.state.list.filter(friend=>{
			return (friend.no.toLowerCase().includes(this.state.sfield.toLowerCase())||friend.name.toLowerCase().includes(this.state.sfield.toLowerCase()));
		});
		return (
			<div className="tc">

				<div className="tc br2 ma1 dib bg-light-purple " >
					<h2> Our To-Do Lists! </h2>
					<h6 className="black-70">..... which we aren't following that much!</h6> 
				</div>
				
				<SearchBox onSearch={this.onSearchF} />
				<CardList list={filterSearch}/>
			</div>
		);
	}
}
export default App;
