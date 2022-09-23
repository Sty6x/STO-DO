import PubSub from "pubsub-js"

console.log('human music this is actualy pretty nice')
const person = {
  name: 'fra',
  age: 32,
  favoriteFood: 'dwa'
}
PubSub.publish('getData', person)
