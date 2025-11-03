/*async function greet() {
    throw "this is random"

    
    return "hello";
    
}*/
/*function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
             let num=Math.floor(Math.random()*10)+1;
             console.log(num);
             resolve();

        },1000);
        
    })
}
async function demo() {
 await getNum();  
  await getNum();   
  await getNum();  
   await getNum();  
}*/
/*h1=document.querySelector("h1");
function chengeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
h1.style.color=color;
console.log(`color chenged to $(color)!`);
resolve("color changed");
        },delay);
    });

}
async function demo(){ 
    try{

await chengeColor("Red" , 1000);
await chengeColor("green" , 1000);

   await chengeColor("yellow", 1000);

   await chengeColor("black" , 1000);

 await chengeColor("orange"  , 1000);

}
catch(err){
    console.log("error caught");
    console.log(err);
}
let  a = 5;
console.log("a");
console.log("new number = ",a+3);

}*/
/*let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText = fact;
});
let url="https://catfact.ninja/fact";
async function getFacts() {
    try{
        let res=await axios.get(url);
        return res.data.fact;

    }catch(e){
        console.log("error-",e);
        return"no fact found";
    }
}*/
let url= "http://universities.hipolabs.com/search?name=";
 
let country="nepal";
