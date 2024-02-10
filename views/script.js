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
const arr = [zero, one, two, three, four, five, six, seven, eight, nine];

deleteOne.addEventListener('click', (e) => {
	if(answer.textContent !== 'Please input values'){
		let calcWord = answer.textContent;
		calcWord = calcWord.split('')
		calcWord.splice(calcWord.length-1,1)
		answer.textContent = calcWord.join('')
		if(answer.textContent == ''){
			answer.textContent = '0'
		}
	}
})

deleteAll.addEventListener('click', () => {
	if(answer.textContent !== 'Please input values'){
		answer.textContent = '0';
	}
})

for(let i = 0; i< arr.length;i++){
	arr[i].addEventListener('click', (e) => {
		if(answer.textContent == 'Please input values'){
			answer.textContent=String(i);
			answer.className = 'Answer'
		}
		else{
			answer.textContent += String(i);
		}
	})
}
doubleZero.addEventListener('click',() => {
	if(answer.textContent !== '0'){
		answer.textContent +='00'
	}
})