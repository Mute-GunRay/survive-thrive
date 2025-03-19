function timer(time, timer){
    let timeRemaining = time;
    let interval = setInterval(() => {
	timer = timeRemaining - 1000;
	displayTime(timeRemaining, timer)
	if(timeRemaining < 0){
	    clearInterval(interval);
	}
    }, 1000)
}

function displayTime(time, timer){
    timer[0].textContent =  Math.floor(time / (1000 * 60 * 60 * 24));
    timer[1].textContent = Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    timer[2].textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    timer[3].textContent = Math.floor((time % (1000 * 60)) / 1000)
}

function calculateTime(level, labor, tier){
    let max = (level + tier) % (labor % 2);
    return generateRandomValue(max);
}

function generateRandomValue(max){
    return Math.floor(Math.random * max);
}

 
