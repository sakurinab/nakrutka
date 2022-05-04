const auth = [ 
"OTA3OTUxNDE5OTM4NzA1NDA4.YYupxA._tnHP1_pn0FFNZx29uNfXIsPtbs", 
"OTA5OTI1NzAzNTMxNzY5ODY2.YZLYgw.WPB4kQntiPALeBz0TBRZO8qD-Zc", 
"OTA5OTIwNzE1MTI4NTY5OTA3.YZLUnw.f0MrUJohLgOdmwT7m4vKezfOeXE", 
"OTA5OTIyNzM3OTkxMDY1Njkw.YZLVxw.IZ5kGPxpq_ZFegsu7d7xrhp7XJ4", 
"OTA5OTI0NjE4MjQzMDM5Mjcy.YZLXoQ.f2taHSPTUfDUyHuhQhJOykFoyZg", 
"OTEwMTEzMDA2Njk5MDQwNzgw.YZOG3w.-RIqbSwFDR0GKo3e4gUZT6ie3lI", 
"OTEwMTE0MDQxMTQ4NjA0NDU2.YZOH7w.lMoHxy8IcfO0BMZ4LrJ4Z6QWgGA", 
"OTEwMTE1OTYxMjcxNjQwMDg1.YZOJuA.SpCAOzJXfRx2LICn9fkyYjGiKW8", 
"OTEwMTE3NTU4MzcwMzIwMzg0.YZOLQA.VHqnNx2vHUuJLqSAl4YwH9ayPjo", 
"OTY4ODAzOTY3NzI1MzU5MTI0.YmkQKw.WI3oMJX2WAjs07tvQOBpluYVpQs", 
"OTY4ODEzMjI3MTU0NzU5NzAx.YmkUCA.ONAk4yzRbE3HoGNjYsDiki6o9kA", 
"OTY4ODE0NjkyMDIzODA4MDQy.YmkVMQ.xHvCFhzb_ZFtv_65Oj87s4lknyw", 
"OTY4ODE2NDQ1OTQzMzE2NTUx.YmkWzw.RqEd4xN_f40JY43oHzhubKTmRd8", 
"OTY4ODI3NTAxNTI4ODc1MDc4.YmkhYQ.rNoUf_JJEYd0UChCXh5xtBKNDg8", 
"OTY4ODAzOTY3NzI1MzU5MTI0.YmkQKw.WI3oMJX2WAjs07tvQOBpluYVpQs", 
"OTY4ODEzMjI3MTU0NzU5NzAx.YmkUCA.ONAk4yzRbE3HoGNjYsDiki6o9kA", 
"OTY4ODE0NjkyMDIzODA4MDQy.YmkVMQ.xHvCFhzb_ZFtv_65Oj87s4lknyw", 
"OTY4ODE2NDQ1OTQzMzE2NTUx.YmkWzw.RqEd4xN_f40JY43oHzhubKTmRd8", 
"OTY4ODI3NTAxNTI4ODc1MDc4.YmkhYQ.rNoUf_JJEYd0UChCXh5xtBKNDg8", 
"OTY5MTE3NjQzNzM3MDM0NzYz.Ymov1A.arM47Wrnvp89NhIngI8_SoIXgvE", 
"OTY5MTE5MjE4MzgzNjAxNzQ1.YmowvQ.cgn9wDSw2BICYmEoqdoZb446Zig", 
"OTY5MTIwMDM4OTA2OTE2ODg0.Ymoxeg.qHGBRPSUl3kJLIQJ3iA2YKV5T4k", 
"OTY5MTIxNzI4NjQwOTc0ODc4.YmozGQ.-xMjMnAxRasQMreoL1_jrgNhFGI", 
"OTY5MTIyNDgxNTEwMTc0NzMx.Ymoz3g.R58z4sUFunn-Bod4vmFOgLgfNv4", 
"OTY5MTIzMzQ1ODM4NzY4MTc4.Ymo0pw.om8IFxNKUytvil12g8MOOTqsS2I", ]
const Discord = require('discord.js')

var chj = ["971399136073089044","971431610463441016","971431665601765436","971399169916928020","971398724523794512","971431654289727488","971398839510646814","971399073624125460"];

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
