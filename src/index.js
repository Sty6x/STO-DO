import PubSub from "pubsub-js"

const h1 = document.querySelector('h1')
h1.textContent='hey'
function getData(msg,{name,age,favoriteFood}){
    console.log(msg,{name:name,age:age,Favoritefood:favoriteFood})
}
PubSub.subscribe('getData',getData)

