"use strict";

(async function () {


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
})();
