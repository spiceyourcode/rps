
const submitButton = document.getElementById("submit")
const output = document.getElementById("output")
const list = document.getElementById("list");
const button = document.getElementById("button");
const rmButton = document.getElementById("rmButton");

submitButton.addEventListener("click",()=>{
    var input = parseInt(document.getElementById("input").value);
    output.innerHTML = input;
    fizzbuzz(input)
});

function fizzbuzz(num){  
    // var num = parseInt(prompt("Enter A Number:"))
    
    for(var i=0; i<=num; i++){
        
        if(i%3==0){         
            var newDiv= document.createElement("div"); 
            console.log("fizz: "+ i);
            output.innerHTML = 'fizz'
            output.appendChild(newDiv)
        }
        else if(i%5==0){
            var newDiv= document.createElement("div"); 
            console.log("buzz: "+i)
            output.innerHTML = 'buzz'
            output.appendChild(newDiv)            

        }
        else if (i%5==0 && i%3==0){
            var newDiv= document.createElement("div"); 
            console.log("fizzbuzz: "+i)
            output.innerHTML = 'fizzbuzz'
            output.appendChild(newDiv)

        }
        else{
            console.log(i)
        }
    }
}    

function addItems(){
    var clicks = 0;
    button.addEventListener("click" ,() =>{
        clicks += 1;
        const newItem=document.createElement("li");
        newItem.textContent=`item ${clicks}`
        list.appendChild(newItem)   
});

rmButton.addEventListener("click", () => {
    list.removeChild(list.lastChild)
});

}