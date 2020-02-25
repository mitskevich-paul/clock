const clock = document.querySelector(".clock");

for (let i = 1; i <= 12; i++) {
  let digit = document.createElement("div");
  digit.className = "clock_digit";
  digit.append(i);
  clock.append(digit);

  switch (i) {
    case 1:
      digit.style.top = "25px";
      digit.style.right = "150px";
      break;

    case 2:
      digit.style.top = "95px";
      digit.style.right = "60px";
      break;

    case 3:
      digit.style.top = "50%";
      digit.style.right = "25px";
      digit.style.transform = "translateY(-50%)";
      break;

    case 4:
      digit.style.bottom = "95px";
      digit.style.right = "60px";
      break;

    case 5:
      digit.style.bottom = "30px";
      digit.style.right = "140px";
      break;

    case 6:
      digit.style.bottom = "10px";
      digit.style.left = "50%";
      digit.style.transform = "translateX(-50%)";
      break;

    case 7:
      digit.style.bottom = "30px";
      digit.style.left = "140px";
      break;

    case 8:
      digit.style.bottom = "95px";
      digit.style.left = "65px";
      break;

    case 9:
      digit.style.top = "50%";
      digit.style.left = "25px";
      digit.style.transform = "translateY(-50%)";
      break;

    case 10:
      digit.style.top = "95px";
      digit.style.left = "60px";
      break;

    case 11:
      digit.style.top = "25px";
      digit.style.left = "150px";
      break;

    case 12:
      digit.style.top = "0";
      digit.style.left = "50%";
      digit.style.transform = "translateX(-50%)";
      break;
  }
}

const hoursArrow = document.querySelector(".clock_h-arrow");
const minutesArrow = document.querySelector(".clock_m-arrow");
const secondsArrow = document.querySelector(".clock_s-arrow");
const transformCSS = "translate(-50%, -100%)";

function clockRefresh() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  secondsArrow.style.transform = `rotate(${seconds * 6}deg) ${transformCSS}`;
  minutesArrow.style.transform = `rotate(${minutes * 6}deg) ${transformCSS}`;
  hoursArrow.style.transform = `rotate(${hours * 30 + minutes / 2}deg) ${transformCSS}`;
}

clockRefresh();

setInterval(clockRefresh, 1000);
