import React from 'react'
import 'tachyons';
const CardF = (prop) => {
	return (
		<div style={{background:"linear-gradient(to right, rgba(255,255,255,0.2), rgba(59,81,100,1))"}} className="tc shadow-5 bg-light-blue bg dib br3 pa3 ma2 grow">
			<img src={prop.pic} alt="pic" style={{height:200}}  />
			<h3>Name:<span className="dark-blue">{prop.name}</span></h3>
			<h5>Roll Number : {prop.no}</h5>
			<p ><span className="b dark-red">Today's Topic:</span> {prop.topics}</p>
	   		<p ><span className="b red">Old Topics:</span> {prop.past}</p>
	   		
	   	</div>
	);
}
export default CardF;