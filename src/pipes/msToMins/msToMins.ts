function pad2(num: any) {
  let numMutable = num;
  if (num <= 99) {
    numMutable = (`0${num}`).slice(-2);
  }
  return numMutable;
}

function durationFromMsHelper(ms: number) {
  let x: number = ms / 1000;
  const seconds: number = pad2(Math.floor(x % 60));
  x /= 60;
  const minutes: number = pad2(Math.floor(x % 60));
  x /= 60;
  const hours: number = Math.floor(x % 24);
  const newHours = hours ? `${pad2(hours)}:` : '';
  return `${newHours + minutes}:${seconds}`;
}

export default function msToMins(value: number) {
  return durationFromMsHelper(value);
}
