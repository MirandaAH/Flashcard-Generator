# flash-card-generator


> A CLI FlashCard Generator that will create flashcards.

## Table of Contents

- [Usage](#usage)



## Usage

```
To build a basic card, simply enter your question and answer into the Basic Card function.
BasicCard("Who was the first President of the United States?", "George Washington");

To build a Cloze-Deletion Card, simply enter your statement and text to be deleted into the Cloze Card function.
ClozeCard("George Washington was the first President of the United States", "George Washington")



Each card is an object that is arranged like so:

BasicCard {
  front: 'Who was the first president of the United States?',
  back: 'George Washington'
}

ClozeCard {
  fullText: 'George Washington was the first president of the United States.',
  cloze: 'George Washington',
  partial: '______ was the first president of the United States.'
}
```

## Maintainers

[@MirandaAH](https://github.com/MirandaAH)

## Contribute

PRs accepted.


## License

MIT © 2017 Miranda Hane
