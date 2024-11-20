let memory_size = 3000;
let memory =new Array(memory_size).fill(0);
let ipointer = 0;
let mpointer = 0;
let output="";
let astack=[];
let program="++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
function resetProgram(){

}
function sendOutput(){
    output+=String.fromCharCode(memory[mpointer]);
}
function interpret(){
    let end = false;
    while(!end){
        switch(program[ipointer]){
            case "<":
                if(mpointer)
                    mpointer--;
                break;
            case ">":
                if(mpointer==memory.length-1)
                    memory.push(0,0,0);
                mpointer++;
                break;
            case "+":
                memory[mpointer]++;
                break;
            case "-":
                if(memory[mpointer])
                    memory[mpointer]--;
                break;
            case ".":
                sendOutput();
                break;
            case undefined :
                end=true;
                break;
            case "[":
                if(memory[mpointer]){
                    astack.push(ipointer);
                }else{
                    let count=0;
                    while(true){
                        ipointer++;
                        if(!program[ipointer]) break;
                        if(program[ipointer]==="[")
                            count++;
                        if(program[ipointer]==="]"){
                            if(count)count--;
                            else break;
                        }
                    }
                }
                break;
            case "]":
                ipointer = astack.pop()-1;
                break;
        }
    ipointer++;
    }
    console.log(output);
    return output;
}
interpret();