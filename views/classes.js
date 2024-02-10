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
let first = 0;
let whatLetter = 0
export class Numbers {
	write(num, answer){
			if(answer == 'Please input values' || answer == '0'){
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
	dot(){
		if(!answer.textContent.includes('.')){
			answer.textContent+='.'
		}
	}
}

export class Arifmetik {
	plus(){
		if (answer.textContent !== "Please input values") {
			first = answer.textContent;
			answer.textContent = '0'
			whatLetter = 1
		}
	}
	minus(){
		if (answer.textContent !== "Please input values") {
			first = answer.textContent;
			answer.textContent = '0'
			whatLetter = 2
		}
	}
	multiply(){
		if (answer.textContent !== "Please input values") {
			first = answer.textContent;
			answer.textContent = '0'
			whatLetter = 3
		}
	}
	divide(){
		if (answer.textContent !== "Please input values") {
			first = answer.textContent;
			answer.textContent = '0'
			whatLetter = 4
		}
	}
	equally(){
		if(whatLetter!==0){
			switch(whatLetter){
				case 1: 
					answer.textContent = String(Number(answer.textContent)+Number(first))
					break;
				case 2: 
					answer.textContent = String(Number(first)-Number(answer.textContent))
					break;
				case 3: 
					answer.textContent = String(Number(answer.textContent)*Number(first))
					break;
				case 4: 
					answer.textContent = String(Number(first)/Number(answer.textContent))
					break;
			}
		}
	}
}
export class Delete {
	deleteAll(){
		if(answer.textContent !== "Please input values"){
			answer.textContent = '0';
			whatLetter = 0
			first = 0
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