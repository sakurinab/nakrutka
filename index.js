const auth = [  "OTA3OTUxNDE5OTM4NzA1NDA4.YYupxA._tnHP1_pn0FFNZx29uNfXIsPtbs",    "OTA5OTI1NzAzNTMxNzY5ODY2.YZLYgw.WPB4kQntiPALeBz0TBRZO8qD-Zc",
"OTA5OTIwNzE1MTI4NTY5OTA3.YZLUnw.f0MrUJohLgOdmwT7m4vKezfOeXE",
"OTA5OTIyNzM3OTkxMDY1Njkw.YZLVxw.IZ5kGPxpq_ZFegsu7d7xrhp7XJ4",
"OTA5OTIzNjU3OTY5Njk2Nzc4.YZLWng.7C6lnDbtZElymYi86Qf0W10eoxE",
"OTA5OTI0NjE4MjQzMDM5Mjcy.YZLXoQ.f2taHSPTUfDUyHuhQhJOykFoyZg",
"ODQwMjUzNjA0NDEzODMzMjc3.YJVhJg._5gHrkxMHOswYBIpDTNhr-6DrFU",
"OTEwMTEzMDA2Njk5MDQwNzgw.YZOG3w.-RIqbSwFDR0GKo3e4gUZT6ie3lI",
"OTEwMTE0MDQxMTQ4NjA0NDU2.YZOH7w.lMoHxy8IcfO0BMZ4LrJ4Z6QWgGA",
"OTEwMTE1OTYxMjcxNjQwMDg1.YZOJuA.SpCAOzJXfRx2LICn9fkyYjGiKW8",
"OTEwMTE3NTU4MzcwMzIwMzg0.YZOLQA.VHqnNx2vHUuJLqSAl4YwH9ayPjo"]
const Discord = require('discord.js')

var chj = ["909902121464369153","909913703669981214","909901042307715092","909901062473916437","909901105843011634","909901150541713418","909901193675931709","909901297501732864"];

for (const token of auth) {
    const client = new Discord.Client()
    client.on('ready', () => {
        console.log('I am ready !')
        console.log(client.user.id)
        //client.channels.get(chj[Math.floor(Math.random()*chj.length)]).join().then(setInterval( function() {
          //client.channels.get(chj[Math.floor(Math.random()*chj.length)]).join()
      //}, 3600000))
      const channel = client.channels.get(chj[Math.floor(Math.random()*chj.length)]);
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
    setInterval( function() {
      e.channels.get(chj[Math.floor(Math.random()*chj.length)]).join()
  }, 3600000)
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
    });
  });
    client.on('message', (msg) => {
        if (msg.content === '!ping') {}
    });
    client.login(token);
}

process.on('unhandledRejection', (reason) => { console.log(reason) })