# Class 09 JS Events!!

- What are events:
  - Things that occur in the browser, and our javascript can respond to.
  - These events a fired in our HTML, but our JS responds to those events.

```html
<p id="paragraph" onclick="function() {console.log('p clicked')}">
  Some text
</p>
```

or you can do this:

```js
var paragraph = document.getElementById('paragraph');

paragraph.addEventListener('click', function() {
  console.log('p clicked');
});

```
- this uses a callback: which is a function that is called, after something occurs.


## Form events

```html
<form id="person-form" onsubmit="handleSubmit()">
  <input name="person" type="text">
  <button type="submit">Submit</button>
</form>
```

```js
var form = document.getElementById('person-form');

// This would be used if you have NO onsubmit attribute
form.addEventListener('submit', function(event) {
  event.target.person.value // => user input data
  handleSubmit(args);
});

// handleSubmit === function
// handleSubmit() === return value from that function

function handleSubmit() {

}

```