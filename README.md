1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

a. getElementById
i. Method : getElementById('id')
ii. Gets one element with a specific id
iii. Returns single element
iv. Example : document.getElementById('myDiv')

b. getElementsByClassName
i. Method : getElementsByClassName('class')
ii. Gets all elements with a class
iii. Returens HTMLCollection (like an array but not exactly)
iv. Example document.getElementsByClassName('box')

c. querySelector
i. Method : querySelector('selector')
ii. Gets the first element that matches any CSS selector
iii. Returns single element
iv. Example : document.querySelector('.box')

2. How to create and insert a new element

We can create a new element using document.createElement() and insert it using append or appendChild. Example 

const newDiv = document.createElement('div'); 
newDiv.innerText = 'I am new!';

const parent = document.getElementById('myDiv'); 
parent.append(newDiv); 

3. What is Event Bubbling?

i. Event Bubbling means when you click a child element, the event also happens on its parent elements, going upwards the DOM tree.

ii. We think of it as a bubble going up.
Example

<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
    document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent clicked!');
});

document.getElementById('child').addEventListener('click', function() {
  console.log('Child clicked!');
});

</script>

If we click the button, output will be :
Child clicked!
Parent clicked!

4. What is Event Delegation?

i. Instead of adding an event to every child, you add it to the parent and detect which child was clicked.

ii. Useful for dynamic elements (added later) or many children.

Example:

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
document.getElementById('list').addEventListener('click', function() {
  if(e.target.tagName === 'LI') {
    console.log('You clicked:', e.target.innerText);
  }
});
</script>

5. Difference between preventDefault() and stopPropagation()

a. preventDefault()
i. Stops the default browser action
Example :
Clicking a link but don’t go to href

b. stopPropagation()
i. Stops the event from bubbling up to parent elements
Example : 
Child click does not trigger parent click