import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');

let timerDays = document.querySelector('span[data-days]');
let timerHours = document.querySelector('span[data-hours]');
let timerMinutes = document.querySelector('span[data-minutes]');
let timerSeconds = document.querySelector('span[data-seconds]');

const currentDate = new Date();

startBtn.disabled = true;

const fp = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
      Notiflix.Report.warning(
        'WARNING!',
        'Please choose a date in the future',
        'Ok'
      );
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        const timerId = setInterval(() => {
          const currentTime = new Date();
          const ms = selectedDates[0].getTime() - currentTime.getTime();
          timerDays.textContent = addLeadingZero(convertMs(ms).days);
          timerHours.textContent = addLeadingZero(convertMs(ms).hours);
          timerMinutes.textContent = addLeadingZero(convertMs(ms).minutes);
          timerSeconds.textContent = addLeadingZero(convertMs(ms).seconds);
          if (ms < 0) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
