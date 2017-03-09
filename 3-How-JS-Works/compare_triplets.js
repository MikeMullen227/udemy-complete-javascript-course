process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
alice_counter = 0;
bob_counter = 0;


function compare(A, B){
    for(var i = 0; i < A.length; i++) {
        if(A[i] > B[i]){
             alice_counter += 1;
        } else if(A[i] < B[i]){
            bob_counter += 1;
        }
    }
    console.log(alice_counter + ' ' + bob_counter)
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var A = [a0, a1, a2];
    var B = [b0, b1, b2];
    compare(A, B);
}
