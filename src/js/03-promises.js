const form= document.querySelector('.form');
const submitBtn=(document.querySelector('button[type="submit"]'));
import { Notify } from 'notiflix/build/notiflix-notify-aio';

form.addEventListener("submit" , FormSubmit);
function FormSubmit(evt) {
   evt.preventDefault();
  
let {
    elements:{delay,step,amount },
  } = evt.currentTarget;
  
 delay = Number(delay.value);
 step = Number(step.value);
 amount = Number(amount.value);


for ( let position=1 ; position<=amount ; position +=1   ) {
  createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}

 function createPromise(position, delay) {
   const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
     if (shouldResolve) {
       // Fulfill
       resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
   });
 }






