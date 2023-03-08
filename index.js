let x = document.getElementsByClassName("extra");
class nav{
    default(){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
    }
    open(){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "block";
        }
    }
    close(){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
    }
}
let myClass = new nav();
let myPromise = new Promise(function(myResolve, myReject){
    myResolve();
    myReject();
});
myPromise.then(
    function(value){
        myClass.default();
        document.getElementById("enter").addEventListener(('click'), (e) => {
            myClass.open();
        })
        document.getElementById("exit").addEventListener(('click'), (e) => {
            myClass.close();
        })
    },
    function(error){
        console.error("error");
    }
)