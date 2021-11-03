const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timerV2 = function() {
  
  rl.question("Input any number from 1 to 9 or b: ", (answer) => {
    if (answer === "exit") {
      //rl.close();
      process.exit();
    } else if (answer === "b") {
      process.stdout.write('\x07');
      console.log("beep");
    }

    if (0 < Number(answer) < 10 && Number.isInteger(Number(answer))) {
      console.log(`setting timer for ${answer} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
        //process.stdout.write('.\n');
      }, 1000 * (answer));
    }

    timerV2();
  });

  rl.on('SIGINT', () => {
    console.log("\nThanks for using me, ciao!");
    process.exit();
  });
};


timerV2();
