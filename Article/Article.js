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

      TweenMax.to(this.domElement, 1, {height:"auto"});
      this.expandButton.textContent = "Click to Close";
    } else {
      TweenMax.to(this.domElement, 1, {height:200});
      this.expandButton.textContent = "Click to Expand";
    } 
    if (this.closeButton.classList.contains("article-read")) {
      
    } else {
      this.closeButton.classList.add('article-read');
    }
  }

  closeArticle() {
    this.domElement.classList.add('article-delete');
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
