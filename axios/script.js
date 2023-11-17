let p =document.querySelector("#result");
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    p.innerText = fact;
});

let URL = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res =await axios.get(URL);
        return res.data.fact;
    } catch(e){
        console.log("error",e);
        return "No fact found";
    }
}
