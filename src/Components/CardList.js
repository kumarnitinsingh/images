import React from 'react';
import Card from './Card';

const CardList =({images})=>{
	return(
		<div>
	{images.map((user,i)=>{
		return (
			<Card
			 key={i}
			  id ={images[i].id}
			   author ={images[i].author}
			    //url={images[i].url}
			    download_url={images[i].download_url}
			    />
			);
	})
	
}

</div>
);
}


export default CardList;