const form = document.querySelector('.form')
const inputsValues = {
 delay: 0,
  step: 0,
  amount: 0
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
form.addEventListener('submit', evt => {
  evt.preventDefault();
  Object.keys(inputsValues).forEach(key => inputsValues[key] = Number(form.elements[key].value))
  
  for (let i = 0; i < inputsValues.amount; i +=1) {
    createPromise(i+1, inputsValues.delay)
    inputsValues.delay += inputsValues.step
  }
});