import React from 'react';
//import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

const Card= ({author,url,download_url,id}) => {
	
return(

	<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
	<img alt='images' src={download_url} />
	<div>
		<h2>{author}</h2>
		<div><a href={download_url}><button>Download!</button></a></div>
		
	</div>


	</div>
);

}
export default Card;
