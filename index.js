const request = require('request');
const cheerio = require('cheerio');

function getPlayers(ip) {
    return new Promise(function() {    
        request(`http://${ip}/`, function (err, response, body) {
            const $ = cheerio.load(body)
            let players = $(".text-value") 
            var result = players[0].children[0].data;
            if (err) return console.log(err)
            console.log(result)
        })
    })
}

exports.getPlayers = getPlayers
