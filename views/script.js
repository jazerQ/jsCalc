const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const arr = [zero, one, two, three, four, five, six, seven, eight, nine];
const doubleZero = document.querySelector('.doubleZero');
const deleteOne = document.querySelector('.deleteOne');
const deleteAll = document.querySelector('.deleteAll');
const answer = document.querySelector('.noAnswer');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equally = document.querySelector('.equally');
const dot = document.querySelector('.dot');
const night = document.querySelector('.night');
const body = document.querySelector('body')
import { Numbers, Delete, Arifmetik } from './classes.js'
const arifm = new Numbers;
const deleting = new Delete;
const letters = new Arifmetik
night.addEventListener('click', () => {
	if(body.className != 'dark'){
		body.className = 'dark'
		night.textContent = "Normal Mod" 
	}
	else{
		body.className = ''
		night.textContent = "Night Mod" 
	}
})
deleteOne.addEventListener('click', deleting.deleteOne)

deleteAll.addEventListener('click', deleting.deleteAll)

for(let i = 0; i< arr.length;i++){
	console.log(i)
	arr[i].addEventListener('click', () => {
		answer.textContent = arifm.write(i, answer.textContent);
		answer.className = "Answer";
	})
}
doubleZero.addEventListener('click',arifm.doubleZero)
dot.addEventListener('click',arifm.dot)

plus.addEventListener('click',letters.plus);
minus.addEventListener('click', letters.minus);
multiply.addEventListener('click', letters.multiply);
divide.addEventListener('click', letters.divide)

equally.addEventListener('click', letters.equally)
