export function capitalize(word){
    let split_word= word.toLowerCase().split("");
    return (word[0].toUpperCase() + split_word.slice(1).join(""));
}

export function reverseString(word){
    let split_word= word.split("")
    let reverseWord=[]
    for(let i = split_word.length-1; i>=0 ; i--){
        reverseWord.push(split_word[i])
    }
    return reverseWord.join("")
}

export const calculate = (()=>{
    function add(a,b){
        return a + b
    }
    function subtract(a,b){
        return a - b
    }
    function divide(a,b){
        return a / b
    }
    function multiply(a,b){
        return a * b
    }
    return {add,subtract,divide,multiply}
})();

export function caesarCipher(word,shiftNum){
    let split_word = word.split("")
    const alphabet="abcdefghijklmnopqrstuvwxyz"
    let shiftWord = [];
    split_word.forEach(element => {
        if (alphabet.includes(element.toLowerCase())){
           let shiftLetter = alphabet.indexOf(element.toLowerCase())+ shiftNum

            if(shiftLetter>=26)
                shiftLetter-=26 

            if(element.toLowerCase()==element)
                shiftWord.push(alphabet[shiftLetter])
            else
                shiftWord.push(alphabet[shiftLetter].toUpperCase())

        }
        else
            shiftWord.push(element)    
    });
    return shiftWord.join("")
}   

export function analyzeArray(arr){
    average = arr.reduce((summation,currval)=>summation+currval)/arr.length
    min = Math.min(...arr)
    max = Math.max(...arr)
    length = arr.length
    console.log(average)
    console.log(min)
    console.log(max)
    console.log(length)
    console.log({average,min,max,length})
    return {average,min,max,length}
}