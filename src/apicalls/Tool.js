import axios from 'axios';

export function getTools(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:1234/api/products').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}
export function addtool(name,price,size,type,description,img,shop) {
	var data = {
		"name":name,
		"price":price,
		"size":size,
		"type":type,
		"description":description,
		"image":img,
		"shop":{"id":shop}
	}
	console.log(data)
	return new Promise(function (resolve, reject){
		axios.post('http://localhost:1234/api/products/product', data).then(function(res){
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
export function editTool(shop) {
	var data = {
		"id":shop.id,
		"name":shop.name,
		"price":shop.price,
		"size":shop.size,
		"type":shop.type,
		"description":shop.description,
		"shop":shop.shop
	
	}
	return new Promise(function (resolve, reject){
		axios.post('http://localhost:1234/api/products/product', data).then(function(res){
			console.log("getting response .....");
			alert(res.data)
			resolve(res.data)
		}).catch(function(err){
			console.log("error")
			console.log(err)
			reject(err)
		});
	})
}

export function getToolsByCategory(type){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:1234/api/getByType/${type}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}
export function getAllBookedTools(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:1234/api/products/booked').then((res)=>
		resolve(res)).catch((err)=>reject(err))
})
}

export function getById(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:1234/api/getbyid/${id}`).then(function(res){
			console.log(res.data)
		
			resolve(res)}).catch((err)=>reject(err))
	})
}

export function DeleteTool(id){
	var data = {
		"id":id
	}
	return new Promise(function (resolve,reject) {
		axios.post('http://localhost:1234/api/products/delete',data).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}
export function getByShopId(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:1234/api/tool/shop/${id}`).then(function(res){

		console.log(res)
			resolve(res.data)}).catch((err)=>reject(err))
	})



// export function updateTools(Id){
// 	return new Promise(function (resolve,reject) {
// 		axios.get(`http://localhost:1234/api/getbyid/:id`).then((res)=>
// 			resolve(res)).catch((err)=>reject(err))
// 	})
// }

// export function g(Id){
// 	return new Promise(function (resolve,reject) {
// 		axios.get(`http://localhost:1234/api/getbyid/:id`).then((res)=>
// 			resolve(res)).catch((err)=>reject(err))
// 	})
// 
}