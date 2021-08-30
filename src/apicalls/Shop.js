import axios from 'axios';


export function getShops(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:1234/api/shops').then((res)=>	
        resolve(res)).catch((err)=>reject(err))
	})
}
