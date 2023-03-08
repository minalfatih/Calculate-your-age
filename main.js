let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let btn = document.querySelector(".btn");
let foot = document.querySelector("footer");

document.forms[0].onsubmit = function (e) {
  let now = new Date();
  // console.log(now.getDate());
  // console.log(now.getMonth() + 1);
  // console.log(now.getFullYear());

  let dayValid = false;
  let monthValid = false;
  let yearValid = false;

  if (day.value !== "" && isNaN(day.value) === false) {
    dayValid = true;
  }
  if (month.value !== "" && isNaN(month.value) === false) {
    monthValid = true;
  }
  if (year.value !== "" && isNaN(year.value) === false) {
    yearValid = true;
  }
  if (dayValid === false || monthValid === false || yearValid === false) {
    e.preventDefault();
  } else {
    let y = parseInt(year.value);
    let m = parseInt(month.value);
    let d = parseInt(day.value);

    let birthday = new Date(`${y}-${m}-${d}`);
    console.log(birthday);
    console.log(birthday.getDate());
    console.log(birthday.getMonth() + 1);
    console.log(birthday.getFullYear());
    function getWeekDay(day) {
      let days = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ];
      return days[day.getDay()];
    }
    console.log(getWeekDay(birthday));
    let createElement = document.createElement("div");
    let theDay = document.createElement("p");
    theDay.textContent = `ولدت في يوم ${getWeekDay(birthday)}`;
    createElement.appendChild(theDay);
    let age = document.createElement("p");
    let a = now.getFullYear() - birthday.getFullYear();
    if (now.getMonth() < birthday.getMonth() - 1) {
      a--;
    }
    if (
      birthday.getMonth() - 1 == now.getMonth() &&
      now.getDay() < birthday.getDay()
    ) {
      a--;
    }
    age.textContent = `عمرك ${a} سنة`;
    createElement.appendChild(age);
    createElement.style.cssText =
      "background-color: #6565ab; width: 100%; height: 160px; position: absolute; color: var(--input-color); padding: 25px; font-size: 20px; text-align: right; font-weight: bold;";
    foot.before(createElement);

    e.preventDefault();
  }
};
