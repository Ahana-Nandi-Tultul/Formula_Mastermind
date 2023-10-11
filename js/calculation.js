// this function give take the input field id as parameter and give the input field value as output
function getInputFieldValueById(inputId){
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputFieldElement.value = '';
    return inputFieldValue;
}

// set the calculation of each type in the area calculation space
 function setElementsToAreaCalculationById(areaType, newValue){
    const parentElement = document.getElementById('area-calculation');
    const newResult = document.createElement('div');
    const countElement = document.getElementsByClassName('specific-element-area').length;
    newResult.innerHTML = 
    `<div class="grid grid-cols-2 items-center px-2 mt-4 specific-element-area">
        <span>${countElement}.<span></span> ${areaType}</span>
        <span>${newValue} cm<sup>2</sup></span>
        <span></span>
    </div>`;
    
    parentElement.appendChild(newResult);

 }

//  event handler for triangle area calculation
document.getElementById('btn-triangle-area').addEventListener('click', function(){
    const input1Field = getInputFieldValueById('input1-of-triangle');
    const input2Field = getInputFieldValueById('input2-of-triangle');

    console.log(input1Field, input2Field);

    if(isNaN(input1Field) || typeof input1Field !== "number" || input1Field < 0 ){
        alert('PLease provide a valid number in first input as width.');
        return;
    }
    else if(isNaN(input2Field) || typeof input2Field !== "number" || input2Field < 0 ){
        alert('PLease provide a valid number in second input as length.');
        return;
    }
    const triangleArea = (0.5 * input1Field * input2Field).toFixed(2);
    setElementsToAreaCalculationById('Triangle', triangleArea);
    // console.log(triangleArea);
    
});

//  event handler for rectangle area calculation
document.getElementById('btn-rectangle-area').addEventListener('click', function(){
    const input1Field = getInputFieldValueById('input1-of-rectangle');
    const input2Field = getInputFieldValueById('input2-of-rectangle');

    // console.log(input1Field, input2Field);

    if(isNaN(input1Field) || typeof input1Field !== "number" || input1Field < 0 ){
        alert('PLease provide a valid number in first input as width.');
        return;
    }
    else if(isNaN(input2Field) || typeof input2Field !== "number" || input2Field < 0 ){
        alert('PLease provide a valid number in second input as length.');
        return;
    }
    const rectangleArea = (input1Field * input2Field).toFixed(2);
    setElementsToAreaCalculationById('Rectangle', rectangleArea);
});

//  event handler for parallelogram area calculation
document.getElementById('btn-parallelogram-area').addEventListener('click', function(){
    const input1Field = getInputFieldValueById('input1-of-parallelogram');
    const input2Field = getInputFieldValueById('input2-of-parallelogram');

    // console.log(input1Field, input2Field);

    if(isNaN(input1Field) || typeof input1Field !== "number" || input1Field < 0 ){
        alert('PLease provide a valid number in first input as width.');
        return;
    }
    else if(isNaN(input2Field) || typeof input2Field !== "number" || input2Field < 0 ){
        alert('PLease provide a valid number in second input as length.');
        return;
    }
    const parallelogramArea = (input1Field * input2Field).toFixed(2);
    setElementsToAreaCalculationById('Parallelogram', parallelogramArea);
})


//  event handler for rhombus area calculation
document.getElementById('btn-rhombus-area').addEventListener('click', function(){
    const input1Field = getInputFieldValueById('input1-of-rhombus');
    const input2Field = getInputFieldValueById('input2-of-rhombus');

    // console.log(input1Field, input2Field);

    if(isNaN(input1Field) || typeof input1Field !== "number" || input1Field < 0 ){
        alert('PLease provide a valid number in first input as width.');
        return;
    }
    else if(isNaN(input2Field) || typeof input2Field !== "number" || input2Field < 0 ){
        alert('PLease provide a valid number in second input as length.');
        return;
    }
    const rhombusArea = (0.5 * input1Field * input2Field).toFixed(2);
    setElementsToAreaCalculationById('Rhombus', rhombusArea);
});

//  event handler for Pentagon area calculation
document.getElementById('btn-pentagon-area').addEventListener('click', function(){
    const input1Field = getInputFieldValueById('input1-of-pentagon');
    const input2Field = getInputFieldValueById('input2-of-pentagon');

    // console.log(input1Field, input2Field);

    if(isNaN(input1Field) || typeof input1Field !== "number" || input1Field < 0 ){
        alert('PLease provide a valid number in first input as width.');
        return;
    }
    else if(isNaN(input2Field) || typeof input2Field !== "number" || input2Field < 0 ){
        alert('PLease provide a valid number in second input as length.');
        return;
    }
    const pentagonArea = (0.5 * input1Field * input2Field).toFixed(2);
    setElementsToAreaCalculationById('Pentagon', pentagonArea);
});
//  event handler for Ellipse area calculation
document.getElementById('btn-ellipse-area').addEventListener('click', function(){
    const input1Field = getInputFieldValueById('input1-of-ellipse');
    const input2Field = getInputFieldValueById('input2-of-ellipse');

    // console.log(input1Field, input2Field);

    if(isNaN(input1Field) || typeof input1Field !== "number" || input1Field < 0 ){
        alert('PLease provide a valid number in first input as width.');
        return;
    }
    else if(isNaN(input2Field) || typeof input2Field !== "number" || input2Field < 0 ){
        alert('PLease provide a valid number in second input as length.');
        return;
    }
    else{

        const ellipseArea = (3.14 * input1Field * input2Field).toFixed(2);
        setElementsToAreaCalculationById('Ellipse', ellipseArea);
    }
});