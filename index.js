let hour = 0;
let minute = 0;
let second = 0;
let timer = true;

const start = () => {
  if (timer == true) {
    timer = false;
    click();
  }
};
const stop = () => {
  if (timer == false) {
    timer = true;
  }
};

const click = () => {
  if (timer == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);
    second = second + 1;
    if (second == 60) {
      minute = minute + 1;
      second = 0;
      if (minute == 60) {
        hour = hour + 1;
        minute = 0;
      }
    }

    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    hour = hour < 10 ? "0" + hour : hour;

    setTimeout(click, 1000);
    document.querySelector(".sec").innerHTML = second;
    document.querySelector(".min").innerHTML = minute;
    document.querySelector(".hr").innerHTML = hour;
  }
};

const reset = () => {
  hour = 0;
  second = 0;
  minute = 0;

  document.querySelector(".sec").innerHTML = "00";
  document.querySelector(".min").innerHTML = "00";
  document.querySelector(".hr").innerHTML = "00";
};
