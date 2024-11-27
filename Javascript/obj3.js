sentence="hai hello hai hello world"
// display the word count of each word as an object- split
//output- {hai:2,hello:2,world:1}


//logic:-

//1)first convert sentence to words:split()

//2) create an empty object to hold output

//3)get the each word from array, then check it is in output object

//4)if it is in output object: updatesits value by one

//5)if it is not in output object: insert that word in output with value 1.




output={}
sentence.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(output);

















