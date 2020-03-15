# Just simple fivem api

`npm install simple-fivem-api`

### example
```js
const fivem = require('simple-fivem-api')

fivem.getPlayers("ip:port").then((server) => console.log(server) + "/30 (players)");
fivem.getRes_running("ip:port").then((server) => console.log(server) + " resource running");
fivem.getRes_load("ip:port").then((server) => console.log(server) + " resource loaded");
fivem.getlatency("ip:port").then((server) => console.log(server) + " latency");
```
