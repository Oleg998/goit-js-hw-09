import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', '');
let userData;
const options = {
  altInput: true,
  dateFormat: 'YYYY-MM-DD HH:MM',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userData = selectedDates[0].getTime();
    chekData(userData);
  },
};
flatpickr('#datetime-picker', options);

function chekData() {
  const currentDate = new Date().getTime();
  const setData = userData - currentDate;
  if (setData < 0) {
    Notify.failure  ('Please choose a date in the future');
    return;
  } else {
    startBtn.removeAttribute('disabled');
  }
}

startBtn.addEventListener('click', onClick);

function onClick() {
  startBtn.setAttribute('disabled', '');
    const timerId = setInterval(() => {
    const deltaTime = userData - new Date().getTime();
    if (deltaTime <1000) {
      clearInterval(timerId);
      Notify.success(`✅ Time Up`);
    }
    convertMs(deltaTime);
  }, 1000);
}

const setDays = document.querySelector('[data-days]');
const setHours = document.querySelector('[data-hours]');
const setMinutes = document.querySelector('[data-minutes]');
const setSeconds = document.querySelector('[data-seconds]');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  setDays.textContent = addLeadingZero(days);
  setHours.textContent = addLeadingZero(hours);
  setMinutes.textContent = addLeadingZero(minutes);
  setSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
