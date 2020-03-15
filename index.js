const request = require('request');
const cheerio = require('cheerio');

function getPlayers(ip) {
    return new Promise(function (resolve, reject) {
        request(`http://${ip}/`, function (err, response, body) {
            if (err) {
                console.log("Server does not exist or is offline.")
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

function getRes_running(ip) {
    return new Promise(function (resolve, reject) {
        request(`http://${ip}/`, function (err, response, body) {
            if (err) {
                console.log("Server does not exist or is offline.")
                return reject(err)
            } else {
                const $ = cheerio.load(body)
                let players = $(".text-value") 
                var result = players[1].children[0].data;
                resolve(result)
            }
        })
    })
}

function getRes_load(ip) {
    return new Promise(function (resolve, reject) {
        request(`http://${ip}/`, function (err, response, body) {
            if (err) {
                console.log("Server does not exist or is offline.")
                return reject(err)
            } else {
                const $ = cheerio.load(body)
                let players = $(".text-value") 
                var result = players[2].children[0].data;
                resolve(result)
            }
        })
    })
}

function getlatency(ip) {
    return new Promise(function (resolve, reject) {
        request(`http://${ip}/`, function (err, response, body) {
            if (err) {
                console.log("Server does not exist or is offline.")
                return reject(err)
            } else {
                const $ = cheerio.load(body)
                let players = $(".text-value") 
                var result = players[3].children[0].data;
                resolve(result)
            }
        })
    })
}

exports.getPlayers = getPlayers
exports.getRes_running = getRes_running
exports.getRes_load = getRes_load
exports.getlatency = getlatency
