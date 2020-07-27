# Common question in javascript Beginners :point_up:

## what is the difference between innerTex, innerHTML and input.value

innerText, input.value and innerHTML are all properties of JavaScript.

### innerTex and innerHTML

there are differences in which the text is handle. 

* innerHTML lets you work with HTML rich text and doesn't automatically encode and decode text. In other words, innerText retrieves and sets the content of the tag as plain text.

* innerHTML retrieves and sets the content in HTML format. 

### document.getElementById('input').value

input.value depends on the element that you've targeted. it contain the value of input(what the user write).

## DOM

## what is DOM ?

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web or browser. You write code in text editor and in  the browser turned into the DOM.

### Is the html you write in text-editor is DOM ?

NO !

### Is view source is DOM ?

 NO !

### Is the code in dev-tools the DOM ?

YES !

> [For more info about DOM](https://css-tricks.com/dom/)
