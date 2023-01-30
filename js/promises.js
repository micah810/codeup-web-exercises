"use strict";

(async function () {

    // //function lastCommitDate(username, apiKey){
    // const url = 'https://blah/blah${username}/blah/blah';
    // return fetch(url,
    //     {
    //         headers: {'Authorization': 'token${apiKey}'}
    //     }).then(function (response) {
    //     return response.json();
    // }).then(function (data) {
    //     //*dig through the events and find the most recent PushEvent*//
    //     return data.filter(function (event) {
    //         if event.type === "PushEvent") {
    //             })[0].created_at;
    //         });
    //     }

            function lastCommit(userName) {

                const pinkyPromise = fetch('https://api.github.com/users/' + userName + '/events/public', {
                    headers: {'Authorization': 'token ' + GITHUB_API_KEY}
                });
                const promiseTwo = pinkyPromise.then(function (response) {
                    //calls this method takes data turns into json and returns it
                    return response.json()
                })
                return promiseTwo.then(function (data) {
                    console.log(data);
                    // for (let i = 0; i > data.length ; i++) {
                    //     if(data[i].type === "PushEvent") {
                    //         return data[i];
                    //     }
                    // }
                    return data[0].created_at;
                })
            }


            const promise3 = await lastCommit("micah810");
            console.log(promise3)

            // promise3.then(function (finalData) {
            //     console.log(finalData);
            // })

            // console.log(pinkyPromise);
            // console.log(pinkyPromise);
            //     pinkyPromise.then(function (result) {
            //         console.log(result);
            //         console.log(result.status);
            //     });
            // pinkyPromise.then(response => console.log(response));
            // pinkyPromise.catch(error => console.error(error));
            // // const pinkyPromise = fetch('https://api.github.com/users/micah810/events/orgs/ORG')

    function wait(ms){
                return new Promise(function(event){
                    setTimeout(function (){
                        resolve("hello" + ms + "milliseconds");
                    }, ms);
                })
    }
    wait(1000).then((msg)=> console.log(msg));
            wait(3000).then(function (msg){
                console.log(msg);
            }).catch(function (arrMsg){
                console.log("Get Out!");
            })
        })();
