"use strict";

let names = ["mary", "terry", "harry", "dezz"];
        console.log(names.length);
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);

        for (let i =0 <  names.length; i++){
                console.log(names[i]);
        }
        names.forEach(function(name,index){
        console.log(name);
        }
        function first(nameArr){
                return nameArr[0]
        }
        funciton second(nameArr){
                return nameArr[1]
        }
        function last(nameArr){
                return nameArr[nameArr.length - 1];
        }

        ///function first([1, 2, 3, 4, 5]);
// function second(1, 2, 3, 4, 5);
// function last([1, 2, 3, 4, 5,]);