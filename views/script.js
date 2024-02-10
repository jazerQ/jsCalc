const btn = document.getElementById('btn')
const answer = document.querySelector('.noAnswer')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const arr = [zero,one,two,three,four,five,six,seven,eight,nine]
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
