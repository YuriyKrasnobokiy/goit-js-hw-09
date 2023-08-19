import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = form.elements.delay;
const inputDelayStep = form.elements.step;
const inputAmount = form.elements.amount;
const btnCreatePromise = document.querySelector('button');

btnCreatePromise.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delay = Number(inputDelay.value);
  console.log(delay);
  const step = Number(inputDelayStep.value);
  const amount = Number(inputAmount.value);

  for (let i = 0; i < amount; i += 1) {
    let position = i;
    delay += step;

    createPromise(position, delay);
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve('Success! Value passed to resolve function');
        } else {
          reject('Error! Error passed to reject function');
        }
      }, delay);
    });
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
