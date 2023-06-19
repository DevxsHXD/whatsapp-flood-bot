// Copyright (c) 2023 Usitha Indeewara.

import { Client } from "whatsapp-web.js";
import code from "qrcode-terminal"
const client = new Client({});

client.on("qr", (cod) => {
    code.generate(cod, {small: true});
});

client.on("ready", () => console.log("The bot is ready!"));

// function log(txt:string) {
//     console.log(new Date() + " : " + txt);
// }

client.on("message_create", (msg) => {
    if(msg.body.includes("!test")) {
        msg.reply("Working!");
    } else if(msg.body.match(/\!flood (\d+) (.+)/i)) {
        let reg = msg.body.match(/\!flood (\d+) (.+)/i) || [];
        const it:number = Number(reg[1]);
        const txt:string = reg[2];

        for(let x = 0; x <= it; x++) {
            msg.reply(txt);
        }
    }
})

client.initialize();