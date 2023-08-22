console.log("scripts/area-calculation.js");

function calculateTriangleArea(e) {
    e.preventDefault();

    const base = getInputValue("triangle-base")
    const height = getInputValue("triangle-height");
    if (isNaN(base) || isNaN(height)) {
         alert("Please input a valid number");
         setElementInnerText("triangle-area", 0);
    }
    else {
        const area = 0.5 * base * height;
        setElementInnerText("triangle-area", area);
        addToAreaCalcultaion(e, area)
    }
}


function calculateRectangleArea(e) {
    e.preventDefault();

    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-length");
    if (isNaN(width) || isNaN(length)) {
         alert("Please input a valid number");
         setElementInnerText("rectangle-area", 0);
    }
    else {
        const area = width * length;

        setElementInnerText("rectangle-area", area);

        addToAreaCalcultaion(e, area)
    }
}


function calculateParallelogramArea(e) {
    e.preventDefault();

    const base = getInputValue("parallelogram-base");
    const heigth = getInputValue("parallelogram-height");
    if (isNaN(base) || isNaN(heigth)) {
         alert("Please input a valid number");
         setElementInnerText("parallelogram-area", 0);
    }
    else {
        const area = base * heigth;

        setElementInnerText("parallelogram-area", area);

        addToAreaCalcultaion(e, area)
    }

}

function calculateRhombusArea(e) {
    e.preventDefault();

    const diagonal1 = getInputValue("rhombus-d1");
    const diagonal2 = getInputValue("rhombus-d2");
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
         alert("Please input a valid number");
         setElementInnerText("rhombus-area", 0);
    }
    else {
        const area = 0.5 * diagonal1 * diagonal2;

        setElementInnerText("rhombus-area", area);

        addToAreaCalcultaion(e, area)
    }
}


function calculatePentagonArea(e) {
    e.preventDefault();

    const perimeter = getInputValue("pentagon-perimeter");
    const apothem = getInputValue("pentagon-apothem");
    if (isNaN(perimeter) || isNaN(apothem)) {
         alert("Please input a valid number");
         setElementInnerText("pentagon-area", 0);
    }
    else {
        const area = 0.5 * perimeter * apothem;

        setElementInnerText("pentagon-area", area);

        addToAreaCalcultaion(e, area)
    }
}

function calculateEllipseArea(e) {
    e.preventDefault();

    const aAxis = getInputValue("ellipse-a-axis");
    const bAxis = getInputValue("ellipse-b-axis");

    if (isNaN(aAxis) || isNaN(bAxis)) {
         alert("Please input a valid number");
         setElementInnerText("ellipse-area", 0);
    }
    else {
        const area = 3.14 * aAxis * bAxis;

        setElementInnerText("ellipse-area", area);

        addToAreaCalcultaion(e, area)
    }
}