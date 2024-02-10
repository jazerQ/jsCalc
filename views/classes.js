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
const answer = document.querySelector('.noAnswer');

export class Arifmetic {
	write(num, answer){
			if(answer == 'Please input values'){
            	return String(num);
        	}
        	else{
            	return answer + String(num);
        }
	}
	doubleZero(){
		if(answer.textContent !== '0'){
			answer.textContent +='00'
		}
	}
}


export class Delete {
	deleteAll(){
		if(answer.textContent !== "Please input values"){
			answer.textContent = '0';
		}
	}
	deleteOne(){
		if(answer.textContent !== 'Please input values'){
		let calcWord = answer.textContent;
		calcWord = calcWord.split('')
		calcWord.splice(calcWord.length-1,1)
		answer.textContent = calcWord.join('')
		if(answer.textContent == ''){
			answer.textContent = '0'
		}
	}
	}
}