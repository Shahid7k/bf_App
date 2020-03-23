import React from 'react';
import CardF from  './CardF'; 

const CardList = ({list})  => {
	return (
		
		<div>
		{list.map((x,i) =><CardF key={i} pic={x.pic} name={x.name} no={x.no} topics={x.topics} past={x.yesterday}/>)}
		</div>
	);
}

export default CardList;