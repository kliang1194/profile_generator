const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = "";

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  paragraph += `${answer} `;
  let name = answer;
  
  rl.question("What's an activity you like doing?", (answer) => {
    paragraph += `likes to ${answer}. `;
    let activity = answer;

    rl.question("What do you listen to while doing that?", (answer) => {
      paragraph += `While ${name} is ${activity}, ${name} likes to listen to ${answer}. `;

      rl.question("Which meal is your favourite?", (answer) => {
        paragraph += `${name}'s favourite meal is ${answer}. `;
        let favoriteMeal = answer;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          paragraph += `${name}'s favorite thing to eat for ${favoriteMeal} is ${answer}. `;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            paragraph += `${name}'s favourite sport is ${answer}. `;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              paragraph += `${name}'s amazing superpower is ${answer}.`;
              console.log(paragraph);

              rl.close();
            });
          });
        });
      });
    });
  });
});