let valueDisplays = document.querySelectorAll('.counter');
let interval = 10;

valueDisplays.forEach(valueDisplay =>{
    let startValue = 0;
    let endValue = parseInt (valueDisplay.getAttribute("data-target"));
    
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})