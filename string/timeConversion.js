const timeConversion = (s) => {
  let time = s.slice(0, 8);
  let hour = parseInt(s.slice(0, 2));
  if (s.includes("PM") && hour !== 12) {
    hour += 12;
    time = hour + s.slice(2, 8);
  } else if (s.includes("AM") && hour === 12) {
    time = "00" + s.slice(2, 8);
  }
  return time;
};

// test cases
console.log(timeConversion("07:05:45PM")); // 19:05:45
