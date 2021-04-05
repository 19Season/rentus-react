import axios from 'axios';

export function getTools(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:1234/api/tool/alltools').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

// export function getToolsByCategory(category){
// 	return new Promise(function (resolve,reject) {
// 		axios.get(`http://localhost:1234/api/getByType/:type`).then((res)=>
// 			resolve(res)).catch((err)=>reject(err))
// 	})
// }

// export function getBooksById(Id){
// 	return new Promise(function (resolve,reject) {
// 		axios.get(`http://localhost:1234/api/getbyid/:id`).then((res)=>
// 			resolve(res)).catch((err)=>reject(err))
// 	})
// }

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
// }