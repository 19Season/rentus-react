  
import axios from 'axios';


export function getClients(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:1234/api/tool/allclients').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}