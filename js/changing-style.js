
// Generate random color for card background
function generateRandomColor(){
    const maximumValue = 0xFFFFFFF;
    const randomNumber =Math.round(Math.random() * maximumValue);
    const randomNumberString = randomNumber + '';
    if(randomNumberString.length !== 7){
        return generateRandomColor();
    }
    else{
        let rendomColorDigit = randomNumber.toString(16);
        let randomColor = '#' + rendomColorDigit;
        return randomColor;
    }
}

const colorClasses = document.getElementsByClassName('color-class');
for(const colorClass of colorClasses){
    colorClass.addEventListener('mouseenter', function(event){
       let randomColor = generateRandomColor();
       event.target.style.backgroundColor = randomColor;
    })
}

for(const colorClass of colorClasses){
    colorClass.addEventListener('mouseleave', function(event){
        event.target.style.backgroundColor = "white";
     })
}

// showing input field fucntionality
const showInputFieldBtns = document.getElementsByClassName('btn-show-inputField');
for(const showInputFieldBtn of showInputFieldBtns){
    showInputFieldBtn.addEventListener('click', function(event){
        event.target.style.color = "blue";
        const inputFieldElement = event.target.parentNode.nextElementSibling.nextElementSibling;
        const p = inputFieldElement.previousElementSibling;
        p.style.display = "none";
        inputFieldElement.style.visibility = "visible";
    })
}

// showing input value functionality
const displayInputValueBtns = document.getElementsByClassName('btn-display-input-value');
for(const displayInputValueBtn of displayInputValueBtns){
    displayInputValueBtn.addEventListener('click', function(event){
        const inputFirstField = event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        const inputSecondField = event.target.previousElementSibling.previousElementSibling;

        const inputFirstFieldValue = inputFirstField.value;
        const inputSecondFieldValue = inputSecondField.value;

        if((inputFirstFieldValue.length === 0) || (inputSecondFieldValue === 0)){
            alert("Please give some value.");
        }
        const p = inputFirstField.parentNode.previousElementSibling;
        p.innerHTML = `Input1: ${inputFirstFieldValue} and Input2: ${inputSecondFieldValue}`;
        const inputFieldParent = inputFirstField.parentNode;
        p.style.display = "block";
        inputFieldParent.style.visibility = "hidden";
        
    })
}