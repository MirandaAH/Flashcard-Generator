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
    console.log(this.partial);
  }else{
    return new ClozeCard(text, cloze);
  }
}

module.exports = ClozeCard;

var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);
// "George Washington"
console.log(firstPresident.back);
var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");
// "George Washington"
console.log(firstPresidentCloze.cloze);
// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);
// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");
