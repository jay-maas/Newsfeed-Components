// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand"
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandArticle = this.expandArticle.bind(this);
    this.expandButton.addEventListener('click', this.expandArticle); 
    // create a reference to the closeButton
    this.closeButton = this.domElement.querySelector(".closeButton");
    // set a click handler on the closeButton calling closeArticle
    this.closeArticle = this.closeArticle.bind(this);
    this.closeButton.addEventListener('click', this.closeArticle); 
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
   
    if (this.domElement.style.height === 200+"px"){
      TweenMax.to(this.domElement, 3, {height:"auto"});
      this.expandButton.textContent = "Click to Close";
    } else {
      TweenMax.to(this.domElement, 1, {height:200+"px"});
      this.expandButton.textContent = "Click to Expand";
    }  
    
    if (this.closeButton.classList.contains("article-read")) {
      
    } else {
      this.closeButton.classList.add('article-read');
    }
  }

  closeArticle() {
    this.domElement.classList.add('article-delete');
    this.expandButton.textContent = "Click to Read Again"
  }
}
/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles 
NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');
// console.log(articles);
const objectArticles = articles.forEach(articleBuilder)

function articleBuilder (domElement) {
  const objectArticles = new Article(domElement)
};


//Stretch for component constructor


let test = document.querySelector(".article");
let test2 = document.createElement('div');
test2.className = "newArticle";
test2.classList.add("article");
test.parentNode.insertBefore(test2, test);
test2.innerHTML = "<h2></h2><p class='date'></p><p class='lastP'></p><div class='textFade'><span class='expandButton'></span><div><button class = 'closeButton'>X</button>";
let test3 = document.querySelector(".newArticle");
test3.querySelector("h2").innerHTML = '<textArea class="inputH2" type="text" name="fname" placeholder="Write your content here..."></textArea>';
test3.querySelector(".date").innerHTML = '<textArea class="inputDate" type="text" name="fname" placeholder="Write your content here..."></textArea>';
test3.querySelector(".lastP").innerHTML = '<textArea class="inputLastP" type="text" name="fname" placeholder="Write your content here..."></textArea>';

 class NewArticle extends Article {
    constructor(domElement) {
      super(domElement);
		this.domElement = domElement;
    }
 }

const newArticles = document.querySelectorAll('.newArticle');
// console.log(articles);
const newObjectArticles = newArticles.forEach(newArticleBuilder)

function newArticleBuilder (domElement) {
  const newObjectArticles = new NewArticle(domElement)
};