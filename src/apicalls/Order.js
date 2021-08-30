import axios from 'axios';

export function getOrders(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:1234/api/orders').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}
export function getParticularClientOrders(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:1234/api/orders/order/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}
export function cancelOrder(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:1234/api/orders/order/${id}/cancel`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}



	export function makeOrders(tool,client,name,address,phone,retryTimes) {
		console.log("add data .....");
		var data = {
			"product":{"id":tool},
			"client":{"id":client},
			"name": name,
			"address":address,
			"phone":phone,
			"bookedDate": "12334",
			"expiryDate": "2345"

		}
		console.log(data)
		return new Promise(function (resolve, reject){
			axios.post('http://localhost:1234/api/orders/makeorder', data).then(function(res){
				console.log("getting response .....");
				console.log(res)
				resolve(res.data)
			}).catch(function(err){
				console.log("error")
				console.log(err)
				reject(err)
			});
		})
	}

