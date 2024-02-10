const btn = document.getElementById('btn');
const answer = document.querySelector('.noAnswer');
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
const doubleZero = document.querySelector('.doubleZero');
const deleteOne = document.querySelector('.deleteOne');
const deleteAll = document.querySelector('.deleteAll');
import { Arifmetic, Delete } from './classes.js'
const arifm = new Arifmetic;
const deleting = new Delete;
const arr = [zero, one, two, three, four, five, six, seven, eight, nine];

deleteOne.addEventListener('click', deleting.deleteOne)

deleteAll.addEventListener('click', deleting.deleteAll)

for(let i = 0; i< arr.length;i++){
	arr[i].addEventListener('click', (e) => {
		answer.textContent = arifm.write(i, answer.textContent);
		answer.className = "Answer";
	})
}
doubleZero.addEventListener('click',() => {
	if(answer.textContent !== '0'){
		answer.textContent +='00'
	}
})