console.log("Hello world")

function scrollingText(word) {
	word = word.toUpperCase()
	let result = [];
	result.push(word);
	const stable = word.length
	for (let i = 0; i < stable - 1; i++) {
	  word += word[0]
	  word = word.replace(word[0], "")
	  
	  result.push(word)
	}
	return result
  
  
  console.log(scrollingText("word"))
  console.log(scrollingText("word"))
  