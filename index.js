const request = require('request');
const cheerio = require('cheerio');

function getPlayers(ip) {
    return new Promise(function (resolve, reject) {
        request(`http://${ip}/`, function (err, response, body) {
            if (err) {
                return reject(err)
            } else {
                const $ = cheerio.load(body)
                let players = $(".text-value") 
                var result = players[0].children[0].data;
                resolve(result)
            }
        })
    })
}

exports.getPlayers = getPlayers
