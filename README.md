# Frontend Mentor - Social links profile solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

Desktop
![Desktop](./screenshots/screenshot_desktop.png)

Mobile
![Mobile](./screenshots/screenshot_mobile.png)

Active1
![Active](./screenshots/screenshot_active1.png)

Active2
![Active](./screenshots/screenshot_active2.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/kephalosk/article-preview-component)
- Live Site URL: [Add live site URL here](https://kephalosk.github.io/article-preview-component/)

## My process

1. download Project


2. move Project to target folder


3. open Project in IDE


4. read README


5. add .gitignore-file


6. check files


7. check design


8. initialize repo
* create repo on GitHub
* git init
* git add .
* git commit -m "initial commit"
* git remote add origin git@github.com:kephalosk/${projectname}.git
* git push -u origin master

9. check html
* build general structure
* open index.html in browser for comparison

10. check css
* image styling
* font styling
* color styling
* frame styling
* spacing styling

11. check transitions


12. check javascript


13. check mobile/responsive design


14. check accessability
* semantic html
* headings
* alternative texts
* language
* clear language
* link texts

15. extract css


16. add screenshots


17. update README


18. publish website

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Desktop-first workflow

### What I learned

I learned to create overlays based on relative and absolut position of an html element
```css
.cardBoxBarRight {
  align-items: center;
  justify-content: end;
  position: relative;
  width: 100%;
}

.overlay {
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: none;
  position: absolute;
  top: -90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsl(217, 19%, 35%);
  width: 230px;
  padding: 16px 32px;
  border-radius: 10px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.2);
}
```

I trained to move and remove classes to and from html elements based on click events
```javascript
const body = document.querySelector('body');
body.addEventListener('click', hideSocials);
body.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' '){
hideSocials.call(this);
event.preventDefault();
}
});

function hideSocials() {
if(locked === true){
  locked = false;
  return;
}
cardBoxBar.classList.remove('visible');
cardBoxBarShared.classList.remove('visible');
overlay.classList.remove('visible');
triangle.classList.remove('visible');
cardBoxBarRightCircle.forEach(circle => {
circle.classList.remove('selected');
});
}
```

I learned to open a link per keydown:
```javascript
    document.addEventListener('keydown', function (event) {
        const focusedElement = document.activeElement;

        if (focusedElement.tagName === 'A') {
            if (event.key === 'Enter' || event.key === ' ') {
                window.open(focusedElement.href, '_blank');
            }
        }
    })
```

I learned to switch between components based on screensize and click-state.

I improved html, css and javascript skills in general.

### Continued development

* improve html
* improve css

### Useful resources

- [w3schools](https://www.w3schools.com/) - HTML and CSS knowledge
- [selfhtml](https://wiki.selfhtml.org/wiki/HTML) - HTML knowledge

## Author

- Website - [kephalosk](https://easywebpath.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

None.