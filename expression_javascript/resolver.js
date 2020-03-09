
const question1 = {
    "OP":"=",
    "LHS":{
        "OP":"+",
        "LHS":"4",
        "RHS":"3"
    },
    "RHS":{
        "OP":"+",
        "LHS":"4",
        "RHS": {
            "OP":"+",
            "LHS":"4",
            "RHS":"3"
        }
    }
};

formExpression = (obj) => {
    let expression = '';
    if(typeof obj.LHS === 'object') {
        expression = expression + formExpression(obj.LHS);
    } else {
        expression = expression + obj.LHS;
    }
    expression = expression + obj.OP;
    if(typeof obj.RHS === 'object') {
        expression = expression + formExpression(obj.RHS);
    } else {
        expression = expression + obj.RHS;
    }
    return expression;
}

const result = formExpression(question1);
console.log(result);