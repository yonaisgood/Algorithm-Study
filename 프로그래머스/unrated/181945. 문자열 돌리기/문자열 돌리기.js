const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    str2 = []
    for (let i=0; i < input[0].length; i++){
console.log(str[i])
    }
  

});