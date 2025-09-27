import {
  cs1,
  cs2,
  chat1,
  chat2,
  chat3,
  chat4,
  chat5,
  chat6,
  chat7,
  chat8,
  chat9,
  chat10,
  chat11,
  chat12,
  chat13,
  food,
} from "../assets/whatsapp";

export const messagesData = [
  {
    contact: 'John Doe',
    messages: [
      { msg: "Hey!", time: "9:00 am", sent: true },
      { msg: "How are you?", time: "9:01 am", sent: true },
      { msg: "Long time no see.", time: "9:03 am", sent: true },
      { msg: "I’m good, just busy.", time: "9:04 am", sent: false },
      { msg: "Yeah same here.", time: "9:06 am", sent: true },
      { msg: "Work’s been crazy lately.", time: "9:07 am", sent: true },
      { msg: "Totally get that.", time: "9:08 am", sent: false },
      { msg: "Wanna catch up soon?", time: "9:10 am", sent: true },
      { msg: "Sure, how about tomorrow?", time: "9:11 am", sent: false },
      { msg: "Let’s do it!", time: "9:12 am", sent: true },
      { msg: "BTW, did you watch the game?", time: "9:14 am", sent: true },
      { msg: "Yes! That ending was insane.", time: "9:16 am", sent: false },
      { msg: "I know right?!", time: "9:17 am", sent: true },
      { msg: "We should grab drinks later.", time: "9:19 am", sent: true },
      { msg: "Sounds good.", time: "9:20 am", sent: false },
      { msg: "Hey, how are you?", time: "10:58 am", sent: true }, // Last chat msg
    ],
  },
  {
    contact: 'Jane Smith',
    messages: [
      { msg: "Hey Jane!", time: "10:00 am", sent: true },
      { msg: "Did you check the file?", time: "10:02 am", sent: true },
      { msg: "Yup, looks good.", time: "10:03 am", sent: false },
      { msg: "Thanks!", time: "10:04 am", sent: true },
      { msg: "Let’s push it live.", time: "10:06 am", sent: true },
      { msg: "Alright, I’ll do it.", time: "10:07 am", sent: false },
      { msg: "Meeting at 2PM?", time: "10:08 am", sent: true },
      { msg: "Yes, be there.", time: "10:09 am", sent: false },
      { msg: "Cool 😎", time: "10:10 am", sent: true },
      { msg: "Also, your slides were great!", time: "10:12 am", sent: false },
      { msg: "Haha thank you!", time: "10:13 am", sent: true },
      { msg: "Anytime!", time: "10:14 am", sent: false },
      { msg: "Catch you later!", time: "10:15 am", sent: true },
      { msg: "Bye!", time: "10:16 am", sent: false },
      { msg: "Awesome, thank you!", time: "1:15 pm", sent: false }, // Last chat msg
    ],
  },
  {
    contact: 'Sarah Lee❤️',
    messages: [
      { msg: "Hey ❤️", time: "8:00 am", sent: true },
      { msg: "Morning babe", time: "8:01 am", sent: false },
      { msg: "Woke up thinking about you", time: "8:03 am", sent: true },
      { msg: "Aww that’s sweet 💕", time: "8:05 am", sent: false },
      { msg: "Lunch today?", time: "8:10 am", sent: true },
      { msg: "Can’t. Have meetings. 😔", time: "8:12 am", sent: false },
      { msg: "Okay, dinner then?", time: "8:13 am", sent: true },
      { msg: "Maybe! I’ll let you know", time: "8:15 am", sent: false },
      { msg: "Miss you", time: "8:17 am", sent: true },
      { msg: "Miss you too ❤️", time: "8:20 am", sent: false },
      { msg: "Call me when free", time: "8:22 am", sent: true },
      { msg: "Sure", time: "8:23 am", sent: false },
      { msg: "Love you", time: "8:24 am", sent: true },
      { msg: "Love you more 😘", time: "8:26 am", sent: false },
      { msg: "Miss you, call you later!", time: "11:11 am", sent: false }, // Last chat msg
    ],
  },
  {
    contact: "Tom",
    messages: [
      { msg: "Yo Tom, you there?", time: "11:00 am", sent: true },
      { msg: "Yeah bro, what’s up?", time: "11:02 am", sent: false },
      { msg: "This WhatsApp clone is firee 🔥", time: "11:03 am", sent: true },
      { msg: "Coding Spot is fire! 🔥", time: "12:15 pm", sent: true }, // matches chat msg
    ],
  },
  {
    contact: "Dad",
    messages: [
      { msg: "Hey Dad!", time: "10:30 am", sent: true },
      { msg: "Need your help real quick.", time: "10:31 am", sent: true },
      { msg: "Hey, what happened?", time: "10:32 am", sent: false },
      { msg: "Car broke down 😩", time: "10:33 am", sent: true },
      { msg: "Where are you?", time: "10:34 am", sent: false },
      { msg: "Just outside office.", time: "10:35 am", sent: true },
      { msg: "Okay, I’m on my way.", time: "10:36 am", sent: false },
      { msg: "Thanks dad!", time: "10:37 am", sent: true },
      { msg: "Hey dad, need you asap!!", time: "11:04 am", sent: true }, // matches chat msg
    ],
  },
  {
    contact: "+00 123 4567890",
    messages: [
      { msg: "Hello?", time: "9:45 am", sent: false },
      { msg: "Who is this?", time: "9:46 am", sent: false },
      { msg: "Do I know you?", time: "9:47 am", sent: false },
      { msg: "You sent me a message first.", time: "9:48 am", sent: true },
      { msg: "No I didn’t.", time: "9:49 am", sent: false },
      { msg: "Yes you did, scroll up.", time: "9:50 am", sent: true },
      { msg: "Wait... who are you???", time: "9:51 am", sent: false },
      { msg: "Wrong number I guess.", time: "9:52 am", sent: true },
      { msg: "Yeah, sorry!", time: "9:53 am", sent: false },
      { msg: "Who are you???", time: "10:58 am", sent: false }, // matches chat msg
    ],
  },
  {
    contact: "Coders </>",
    messages: [
      { msg: "Guys I need help asap 😭", time: "9:50 am", sent: true },
      { msg: "What's wrong?", time: "9:52 am", sent: false },
      { msg: "Bug in my code I can't fix", time: "9:53 am", sent: true },
      { msg: "Send the repo link", time: "9:54 am", sent: false },
      {
        msg: "https://github.com/myusername/coding-bug",
        isLink: true,
        time: "9:55 am",
        sent: true,
      },
      { msg: "Checking it now...", time: "9:56 am", sent: false },
      { msg: "Thanks guys ❤️", time: "9:57 am", sent: true },
      { msg: "Try using `useEffect` there", time: "9:59 am", sent: false },
      { msg: "Ohh it worked!! 🔥🔥🔥", time: "10:01 am", sent: true },
      { msg: "Help me with this bug!! 😭😭", time: "10:50 am", sent: true }, // matches chat msg
    ],
  },
  {
    contact: "Mom",
    messages: [
      { msg: "Good morning beta ❤️", time: "9:00 am", sent: false },
      { msg: "Morning mom!", time: "9:01 am", sent: true },
      { msg: "Don’t forget to eat.", time: "9:02 am", sent: false },
      { msg: "I won't 🙂", time: "9:03 am", sent: true },
      { msg: "Sending your fav dish...", time: "9:10 am", sent: false },
      {
        img: food,
        time: "9:11 am",
        sent: false,
      },
      { msg: "Awww 😍 Thanks mom!", time: "9:12 am", sent: true },
      { msg: "Call me son, love you. ❤️", time: "10:35 am", sent: false }, // matches chat msg
    ],
  },
  {
    contact: "Johnny",
    messages: [
      { msg: "Yo Johnny boy!!", time: "10:00 am", sent: true },
      { msg: "What's up 😂", time: "10:01 am", sent: false },
      { msg: "Just saw your meme", time: "10:02 am", sent: true },
      {
        img: cs2,
        time: "10:03 am",
        sent: true,
      },
      { msg: "Hahhahaha lol", time: "10:04 am", sent: false },
      {
        msg: "https://instagram.com/funnymemes",
        isLink: true,
        time: "10:05 am",
        sent: true,
      },
      { msg: "Bro I’m crying 😂😂😂", time: "10:06 am", sent: true },
      { msg: "hahhahhaha lol 😂😂😂", time: "10:18 am", sent: false }, // matches chat msg
    ],
  },
];
