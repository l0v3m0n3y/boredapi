# boredapi
JavaScript library for boredapi.com
# main
```js
const {boredapi} = require('./boredapi');

const bored = new boredapi();
bored.random_activities().then(activities => {
    console.log(activities);
}).catch(error => {
    console.error('Error:', error);
});

```
