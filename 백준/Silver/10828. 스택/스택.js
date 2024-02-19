const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const result = [];

const len = array.shift();

array.forEach(command => {
    const parts = command.split(' '); 
    switch(parts[0]) {
        case 'push': 
            stack.push(parseInt(parts[1], 10));
            break;
        case 'pop': 
            result.push(stack.pop() || -1);
            break;
        case 'size':
            result.push(stack.length);
            break;
        case 'empty':
            result.push(stack.length === 0 ? 1 : 0);
            break;
        case 'top': 
            result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
            break;
    }
});

console.log(result.join('\n'));