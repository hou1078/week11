// function greet(name){
//     console.log("Hello"+" "+ name)
// }
// greet("John")

// let greet = function(name,time="day") {
//     console.log("Good"+" " + time + " " + name)
// }
// greet("John", " night" )

// let greet = name => {
//     console.log("Hello"+" "+ name)
// }
// greet("John")
// const radiusPara = document.querySelector("#radius")
// console.log(radiusPara)
// const resultPara = document.querySelector("#result")
// console.log(resultPara)
// function MyFunction(number){
//     if(isNaN(radius)){
//         resultPara.innerText= "This is error"
//         // alert("This is not a number");
//         //update the textContent or innerText property of the radiusPara
//     }
//     else{
//         let area=3.14*number*number
//         return area
//     }
// }
// let radius= prompt("Please enter a number")
//         //update the textContent or innerText property of the radiusPara
//         radiusPara.textContent =+ radius
// let results= MyFunction(radius) 
//         //update the textContent or innerText property of the resultPara
//         radiusPara.textContent = results
// if(results !== undefined){
//     radiusPara.innerText=(`The area of a circle with radius ${radius} is ${results}`)
//     resultPara.innerText= "No error"
// }
const ulList= document.querySelector(".shopping")
function populatelist(shoppinglistArray){
    //for each item in the shoppinglistArray, add a list item with its value
    for (let item of shoppinglistArray)
    {
        const li = document.createElement("li")
        li.textContent = item 
        ulList.appendChild(li)
        // console.log(item)
    }
}

let myShoppinglist= ['cheese','bread', 'green pepper'];

populatelist(myShoppinglist)
// const ulList= document.querySelector(".shopping circleList")
function squareListMaker()
{
    ulList.classList.add("squareList");
    ulList.classList.remove("cicleList");
}
squareListMaker()

function updateImage(){
    const image=document.querySelector("#shoppingCart");
    image.setAttribute(
        "src",
    "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    );
    image.setAttribute("width","50");
    image.setAttribute("height","50");
    image.setAttribute("alt","shoppingCart");
}
updateImage()

function makeListGreen()
{
    //1.find all the li s -> array like structure
    const listItems=document.querySelectorAll(".shopping")
    //2.loop through the array
    for (let item of listItems){
        let text = item.textContent;
        if (text.includes("green")) {
            item.classList.add("greenText");
        }
    }
    //3. find the textContent of each item of the array
    //4. use .includes() to check if the text contains green
    //5. update the style of that element to green text
}
makeListGreen()