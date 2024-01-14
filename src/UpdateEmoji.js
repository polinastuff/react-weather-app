import React from "react";

export default function UpdateEmoji({main}){
    let emoji = "😳";

const emojiMapping={
 "Thunderstorm":"⚡️",
 "Drizzle":"☔️",
"Rain":"🌧",
"Snow":"❄️",
"Clouds":"☁️",
"Mist":"🌫",
"Smoke":"🌫",
"Haze":"🌫",
"Dust":"🌫",
"Fog":"🌫",
"Sand":"🌫",
"Ash":"🌫",
"Squall":"🌫",
"Tornado":"🌫",
"Clear":"☀️"
}

emoji= emojiMapping[main]

return emoji
}