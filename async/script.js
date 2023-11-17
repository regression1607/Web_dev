let h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            console.log("color changed",`${color}`);
            resolve("color changed");
        }, delay);
    });
};
async function demo (){
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("yellow",1000);
    await changecolor("blue",1000);
};

// async function ekansh(){
//     // throw "404 Error";
//     return "hello world";
// };
// ekansh() 
//     .then((result) =>{
//         console.log("promise was restore");
//         console.log("result is ",result);
//     })
//     .catch((err)=>{
//         console.log("promise is rejected with error:",err);
//     });

// let ekanshrajput = async ()=>{
//     return setTimeout(() => {
//         console.log("hey ekansh ");
//     }, 1000);
// }

// function ekansh(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//         },1000);
//         resolve();
//     })
// };

// async function demo(){
//    await ekansh();
//    await ekansh();
//    await ekansh();
//    await ekansh();
//    await ekansh();
//     ekansh();
// };
// demo();


