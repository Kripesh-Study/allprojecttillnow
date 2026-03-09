// Reverse the word
let word = "hello";
let splitWord = word.split("");
let reverseWord="";
for(i=word.length-1; i >= 0;i--){
    reverseWord += splitWord[i];
}
console.log(reverseWord);


let reversedWords = splitWord.reverse().join('');
console.log(reversedWords);


// largest number in array
let num = [1,2,3,4]
largestNum = num[0];
for(i=1;i<num.length;i++){
    if(largestNum < num[i]){
        largestNum = num[i];
    }
}
console.log(largestNum);

// count Vowels
function countVowels(word){
    vowels = "aeiouAEIOU"
    count=0;
    word.split('').forEach(element => {
        if(vowels.includes(element)){
            count++
        }
    });
    return count;
}

console.log(countVowels("aeiodddajasjdfapepiajasoiwadjfa"));

// palendrome words -> deed, level . those words reads from backward are same

function palendromeWord(word){
    
    // let wordsLetter = word.split('');
    // for(i=0;i<wordsLetter.length;i++){
    //     if(wordsLetter[i] != wordsLetter.reverse()[i]){
    //         return false;
    //     }
    // }
    // return true;


    // better way without creating new array

    let left = 0;
    let right = word.length-1;
    while(left > right){
        if(word[left] !== word[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

}




palendromeWord("deed");
palendromeWord("level");
palendromeWord("hello");





// swap two numbers using object destructuring
let a = 10, b =20;
[a,b] = [b,a];
console.log(b,a);




// let swparr = [1,2,4][1,3] = [3,1];

// console.log(swparr);



// factorial

let factNum = 5;
fact =1;
if(factNum == 0){
    fact = 1;
}else{
    for(i=1;i<=factNum;i++){
        fact *= i;
    }
}

console.log(fact);




// fibonacci series
function fib(n){
    // 1 1 2 3 5 8 13 21 34 55 89
    a = 1;
    b = 1;
    if(n == 0 || n==1 || n==2){
        return 1;
    }else{
        for(i=3;i<=n;i++){
            fibNum = a+b;
            a = b;
            b = fibNum;
        }
    }
    return fibNum;
}

console.log(fib(8));

function fibonacci(n) {
  if (n <= 0) return [];

  if (n === 1) return [0];

  let series = [0, 1];

  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

console.log(fibonacci(10))