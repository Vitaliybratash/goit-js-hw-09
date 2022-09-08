import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

const start = document.querySelector('[data-start]');
const dateTime = document.querySelector('#datetime-picker');

let selectedDate = '';
let timer;
let interval = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      start.disabled = true;
    } else {
      start.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

start.disabled = true;
start.addEventListener('click', onButtonClick);

flatpickr(dateTime, options);

function onButtonClick() {
  interval = setInterval(() => {
    const ms = selectedDate - new Date();
    timer = convertMs(ms);
    if (
      Object.values(timer).filter(el => el=== 0).length ===Object.values(timer).length) {
      clearInterval(interval);
    }
    refs.dataDays.textContent = addLeadingZero(timer.days);
    refs.dataHours.textContent = addLeadingZero(timer.hours);
    refs.dataMinutes.textContent = addLeadingZero(timer.minutes);
    refs.dataSeconds.textContent = addLeadingZero(timer.seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
