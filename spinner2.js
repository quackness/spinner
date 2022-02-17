//refactored code from spinner1.js

const stick = ["|","/","-","\\","|","/","-","\\","|"]

const spinner = function (stick) {
  for (let i = 0; i < stick.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${stick[i]}`);
    }, 500 * i) 
  }
};
spinner(stick);
