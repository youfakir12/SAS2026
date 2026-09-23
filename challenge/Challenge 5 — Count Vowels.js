let word = "hello";
let ez = "aeou"
let count = 0
function repetPha(word,ez,count){
  for(let i = 0; i < word.length; i++){
    for(let j = 0; j < ez.length; j++)
    if( ez[j] === word[i])
      count++
  }
  return count
}
console.log( repetPha(word,ez,count))