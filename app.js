/* ===========================
   POPULATE SELECT OPTIONS
=========================== */

// Day
const dayEl = document.getElementById("day");
for (let d = 1; d <= 31; d++) {
  const opt = document.createElement("option");
  opt.value = d;
  opt.textContent = d;
  dayEl.appendChild(opt);
}

// Month
const monthEl = document.getElementById("month");
for (let m = 1; m <= 12; m++) {
  const opt = document.createElement("option");
  opt.value = m;
  opt.textContent = m;
  monthEl.appendChild(opt);
}

// Year
const yearEl = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1880; y--) {
  const opt = document.createElement("option");
  opt.value = y;
  opt.textContent = y;
  yearEl.appendChild(opt);
}


/* ===========================
   AGE CALCULATION FUNCTION
=========================== */

function calculateAge() {

  let d = parseInt(dayEl.value);
  let m = parseInt(monthEl.value);
  let y = parseInt(yearEl.value);

  // TODAY
  const today = new Date();
  let td = today.getDate();
  let tm = today.getMonth() + 1;
  let ty = today.getFullYear();

  // Number of days in months
  const monthDays = [31, (isLeap(ty) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // If birth date day is greater than current date day -> borrow days
  if (d > td) {
    td += monthDays[tm - 1];
    tm -= 1;
  }

  // If birth month is greater than current month -> borrow months
  if (m > tm) {
    tm += 12;
    ty -= 1;
  }

  let calcD = td - d;
  let calcM = tm - m;
  let calcY = ty - y;

  // Output result
  document.getElementById("rYears").textContent = calcY;
  document.getElementById("rMonths").textContent = calcM;
  document.getElementById("rDays").textContent = calcD;
}

/* Leap year checker */
function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
