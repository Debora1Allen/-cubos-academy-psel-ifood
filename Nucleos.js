

function processData(input) {
    const { cor1, cor2 } = JSON.parse(input);
    solucao(cor1, cor2);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});