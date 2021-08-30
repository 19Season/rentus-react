import axios from "axios";

export function ShopRegister(username,password,name,address,email,phone,retryTimes) {
    var data = {
        "username": username,
        "password": password,
        "name": name,
        "address": address,
        "phone":phone,
        "email": email,
        
    }
    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: 'http://localhost:1234/api/shop/signUp',
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
                    ShopRegister(username,password,username,password,name,address,email,phone,retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });
}

    export function ClientRegister(username,password,name,address,email,phone,retryTimes) {
        var data = {
            "username": username,
            "password": password,
            "name": name,
            "address": address,
            "phone":phone,
            "email": email,
            
        }
        return new Promise(function (resolve, reject) {
            axios({
                method: 'post',
                url: 'http://localhost:1234/api/client/signUp',
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
                        ClientRegister(username,password,username,password,name,address,email,phone,retryTimes - 1).then(function (response) {
                            resolve(response.data);
                        }).catch(function (error) {
                            reject(error);
                        });
                    }, 1000); //retry after 1 sec
                }
            })
        });
    


    }
