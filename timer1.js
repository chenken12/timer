const alarm = (arr) => {
  if (arr.length < 1) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Number(arr[i])) && Number(arr[i]) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('.\n');
      }, 1000 * (arr[i]));
    }
  }

}

const arg = process.argv.slice(2);
alarm(arg);
//process.stdout.write('\x07');
