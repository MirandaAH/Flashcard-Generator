var BasicCard = require('./BasicCard');

function ClozeCard (text, cloze) {
  if (this instanceof ClozeCard){
	 var textLC = text.toLowerCase();
	 var clozeLC = cloze.toLowerCase();
	 if (!textLC.includes(clozeLC)) {
	    console.log('ERROR: cloze-deletion does not appear within full text');
		  return;
	  }
	  this.fullText = text;
	  this.cloze = cloze;
	  this.partial = text.replace(cloze, '______');
    // console.log(this.partial);
  }else{
    return new ClozeCard(text, cloze);
  }
}
module.exports = ClozeCard;
//Two working Flashcards
var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");


console.log("Basic Card Front: " + firstPresident.front + "\n"
+ "Basic Card Back: " + firstPresident.back);
console.log("Cloze Card with Partial : " + firstPresidentCloze.partial + "\n"
+ "Cloze Card Complete: " + firstPresidentCloze.fullText);
