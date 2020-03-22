import React from 'react';
import CardF from  './CardF';


const CardList = ({list})  => {
	return (
		<div className="tc" >
		<div className="tc dib bg-light-purple " >
		<h2> Our To-Do Lists! </h2>
		<h6>..... which we aren't following that much!</h6> 
		</div>
		<div>
		{list.map((x,i) =><CardF pic={x.pic} name={x.name} no={x.no} topics={x.topics}/>)}
		</div>
		</div>
	);
}

export default CardList;