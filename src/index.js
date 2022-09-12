import PubSub from "pubsub-js"
import './style.css';


const h1 = document.querySelector('h1')
h1.textContent='dawdawdw'
function getData(msg,{name,age,favoriteFood}){
    console.log(msg,{name:name,age:age,Favoritefood:favoriteFood})
}
PubSub.subscribe('getData',getData)

