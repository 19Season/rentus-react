import axios from "axios";

// export function getCountries() {
//     return new Promise(function (resolve, reject) {
//         axios.get('https://restcountries.eu/rest/v2/all').then((res) =>resolve(res))
//             .catch((err) => console.log(err))
//     })
// }
export function addData(username,password,retryTimes) {
    var data = {
        "username": username,
        "password": password,
    }
    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: 'http://localhost:1234/api/client/signIn',
            headers: {},
            data: data
        }).then((res, err) => {         
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    addData(username,password,retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });
}


export function ShopLogin(username,password,retryTimes) {
    var data = {
        "username": username,
        "password": password,
    }
    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: 'http://localhost:1234/api/shop/signIn',
            headers: {},
            data: data
        }).then((res, err) => {         
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    ShopLogin(username,password,retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });


}

