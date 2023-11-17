let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let image = await getImage();
    
    let img =document.querySelector("#result");
    img.setAttribute("src" ,image);
    console.log(image);
});

let URL = "https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res =await axios.get(URL);
        return res.data.message;
    } catch(e){
        console.log("error",e);
        return "No image found";
    }
}
