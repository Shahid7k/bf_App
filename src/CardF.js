import React , {Component} from 'react'
import 'tachyons';
const CardF = (prop) => {
	return (
		<div className="tc shadow-5 bg-light-blue bg dib br3 pa3 ma2 grow">
			<img src={prop.pic} alter="pic" style={{height:200}}  />
			<h4>Name:{prop.name}</h4>
			<h6>Roll Number : {prop.no}</h6>
			<p >Today's Topic: {prop.topics}</p>
	   	</div>
	);
}
export default CardF;