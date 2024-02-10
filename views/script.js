const btn = document.getElementById('btn')
const answer = document.querySelector('.noAnswer')

btn.addEventListener('click',(e) => {
	answer.className = "Answer";
})