import PubSub from "pubsub-js"
import './style.css';

function getData(msg,{name,age,favoriteFood}){
    console.log(msg,{name:name,age:age,Favoritefood:favoriteFood})
}
PubSub.subscribe('getData',getData)

