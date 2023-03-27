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
// const ulist= document.querySelector(".shopping")
// function populatelist(shoppinglistArray){
//     //for each item in the shoppinglistArray, add a list item with its value
//     for (let item of shoppinglistArray)
//     {
//         const li = document.createElement("li")
//         li.textContent = item 
//         ulist.appendChild(li)
//         // console.log(item)
//     }
// }

// let myShoppinglist= ['cheese','bread', 'pepper'];

// populatelist(myShoppinglist)
const ulList= document.querySelector(".shopping circleList")
function squareListMaker()
{
    ulList.classList.add("squareList")
    ulList.classList.remove("cicleList")
}
squareListMaker()
