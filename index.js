const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputDD = document.querySelector("#DD");
const inputMM = document.querySelector("#MM");
const inputYY = document.querySelector("#YY");
const form = document.querySelector("form");
const dayError = document.querySelector("#dayErr");
const monthError = document.querySelector("#monthErr");
const yearError = document.querySelector("#yearErr");
const dayLab = document.querySelector("#dayLab")
const monthLab = document.querySelector("#monthLab")
const yearLab = document.querySelector("#yearLab")

function replacementString() {
  inputDay.value = parseInt(inputDay.value);
  inputMonth.value = parseInt(inputMonth.value);
  inputYear.value = parseInt(inputYear.value);
}

function ageCalculate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const inputYearValue = parseInt(inputYear.value);
  const inputMonthValue = parseInt(inputMonth.value);
  const inputDayValue = parseInt(inputDay.value);

  let valid = true;

  if (isNaN(inputDayValue) || inputDayValue < 1 || inputDayValue > 31) {
    dayError.style.display = "inline";
    inputDay.style.border = "1px solid #FF5959"
    dayLab.style.color = "#FF5959"
    valid = false;
  } else {
    dayError.style.display = "none";
    inputDay.style.border = "1px solid #DCDCDC"
    dayLab.style.color = " #716F6F"
  }

  if (isNaN(inputMonthValue) || inputMonthValue < 1 || inputMonthValue > 12) {
    monthError.style.display = "inline";
    inputMonth.style.border = "1px solid #FF5959"
    monthLab.style.color = "#FF5959"
    valid = false;
  } else {
    monthError.style.display = "none";
    inputMonth.style.border = "1px solid #DCDCDC "
    monthLab.style.color = "#716F6F "
  }

  if (isNaN(inputYearValue) || inputYearValue > 2023 || inputYearValue < 1) {
    yearError.style.display = "inline";
    inputYear.style.border = "1px solid #FF5959"
    yearLab.style.color = "#FF5959"
    valid = false;
  } else {
    yearError.style.display = "none";
    inputYear.style.border = "1px solid #DCDCDC "
    yearLab.style.color = " #716F6F"
  }

  if (!valid) {
    inputYY.textContent = "--";
    inputMM.textContent = "--";
    inputDD.textContent = "--";
    return;
  }

  let years = currentYear - inputYearValue;
  let months = currentMonth - inputMonthValue;
  let days = currentDay - inputDayValue;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  inputYY.textContent = years;
  inputMM.textContent = months;
  inputDD.textContent = days;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  replacementString(); 
  ageCalculate(); 
});