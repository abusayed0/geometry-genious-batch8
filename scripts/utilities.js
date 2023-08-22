console.log("scripts/utilities.js");

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    if (isNaN(inputFieldValueStr) || inputFieldValueStr.length < 1) {
        return NaN;
    }
    else {
        const inputFieldValue = parseFloat(inputFieldValueStr);
        return inputFieldValue;
    }
}

function setElementInnerText(elementId, elementInnerText) {
    const element = document.getElementById(elementId);
    element.innerText = elementInnerText.toFixed(2);;
}



function addToAreaCalcultaion(e, result){
    const areaType = e.target.parentElement.parentElement.children[0].children[0].innerText;
    const ol = document.getElementById("calculation-enter");
    const li = document.createElement("li");
    li.innerHTML = `
        ${areaType} ${result.toFixed(2)} cm<sup>2</sup>
    `;
    ol.appendChild(li);
}

