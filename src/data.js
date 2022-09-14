import PubSub from "pubsub-js"

console.log('data called')  
const person = {
    name : 'fra',
    age: 32,
    favoriteFood:'dwa'
}
PubSub.publish('getData',person)