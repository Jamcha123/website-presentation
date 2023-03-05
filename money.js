import axios from "axios";
import cheerio, { load } from 'cheerio';
import fs from 'fs';

const site = 'https://www.xe.com/currencyconverter/convert/?Amount=1&From=SEK&To=USD';
var usd;
const arr = [];
let myPromise = new Promise(function(myResolve, myRejected){
    myResolve();
    myRejected();
})
myPromise.then(
    function (value){
        async function getDoc(){
            const response = await axios.get(site).then((response) => {
                const $ = load('<td>0.0956135</td>')
                usd = $.text();
            });
            let money = Math.random() * 1000 + 1; 
            exchange(money)
        }
        getDoc();
        function exchange(num_sek){
            num_sek = num_sek * usd;
            arr.push(num_sek);
            for(let i = 0; i < arr.length; i++){
                console.log(arr[i]);
            }
        }
    },
    function (error){
        console.error("error");
    },
)
