# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot
![image](https://user-images.githubusercontent.com/92168231/218768539-6f03ed74-93af-4404-9583-5962468cea77.png)


### Links

- Solution URL: [Click](https://github.com/aman-abesec/Expenses-chart-component-solution)
- Live Site URL: [Click](https://aman-abesec.github.io/Expenses-chart-component-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

```html
<h1>Some HTML code I'm proud of</h1>
```

```js
var mdlChat=document.querySelectorAll('.outer-wrape');
for(var i=0;i<mdlChat.length;i++){
  mdlChat[i].addEventListener(('mouseover'),function(){
    this.firstChild.style.display='block';
  })
}
for(var i=0;i<mdlChat.length;i++){
  mdlChat[i].addEventListener(('mouseleave'),function(){
    this.firstChild.style.display='none';
  })
}
```

### Useful resources

- [W3schools.com](https://www.w3schools.com/jsref/event_onmouseover.asp) - From here i learn how the mouse event work.

## Author

- Frontend Mentor - [@aman-abesec](https://www.frontendmentor.io/profile/aman-abesec)

