let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = ""; 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === '=') {
            try {
                expression = eval(expression); 
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        } else if (value === '=') {
            try {
             let finalExpression = expression.replace(/%/g, "/100");
             expression = eval(finalExpression);
             input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        }
        else if (value === 'AC') {
            expression = "";
            input.value = "";
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value; 
            input.value = expression;
        }
    });
});

document.addEventListener("keydown", function (e) {
    let key = e.key;

    if (
        (key >= '0' && key <= '9') || 
        key === '+' || 
        key === '-' || 
        key === '*' || 
        key === '/' || 
        key === '.' || 
        key === '00'
    ) {
        expression += key;
        input.value = expression;
    }

    else if (key === 'Enter') {
        try {
            expression = eval(expression);
            input.value = expression;
        } catch {
            input.value = "Error";
            expression = "";
        }
    }

    else if (key === 'Backspace') {
        expression = expression.slice(0, -1);
        input.value = expression;
    }

    else if (key === 'Escape') {
        expression = "";
        input.value = "";
    }
});
