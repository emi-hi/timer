const timer = function(args) {
  for (let i of args) {
    if (i > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, i * 1000);
    }
  }
};

const alarmArgs = process.argv.splice(2);
timer(alarmArgs);
