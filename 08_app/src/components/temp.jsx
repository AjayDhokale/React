import React from 'react'

const temp = () => {
	
	const url = 'https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map?room_qty=1&guest_qty=1&bbox=14.291283%2C14.948423%2C120.755688%2C121.136864&search_id=none&children_age=11%2C5&price_filter_currencycode=USD&categories_filter=class%3A%3A1%2Cclass%3A%3A2%2Cclass%3A%3A3&languagecode=en-us&travel_purpose=leisure&children_qty=2&order_by=popularity&offset=0';
	
	 async function temp(params) {
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '998ca4f549msh8bcae496ce356cdp1db730jsnbee66d78ea40',
				'x-rapidapi-host': 'apidojo-booking-v1.p.rapidapi.com'
			}
		};
	
		
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.error(error);
		}
		
			// console.log(data);
	} 

	temp()
	
		
	
  return (
	<div>
		
	</div>
  )
}

export default temp