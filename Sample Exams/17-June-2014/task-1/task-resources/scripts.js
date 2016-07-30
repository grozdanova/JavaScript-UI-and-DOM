function createImagesPreviewer(selector, items) {
var root = document.querySelector(selector);
var fragment = document.createDocumentFragment();

var imagePreview = document.createElement("div");
imagePreview.className = "image-preview";
imagePreview.style.display = "inline-block";
imagePreview.style.width = "70%";
imagePreview.style.textAlign = "center";
imagePreview.style.float = "left";
var selectedImageHeader = document.createElement("h2");
selectedImageHeader.innerText = items[0].title;
var selectedImage = document.createElement("img");
selectedImage.src = items[0].url;
selectedImage.style.width = "70%";

imagePreview.appendChild(selectedImageHeader);
imagePreview.appendChild(selectedImage);

var aside = document.createElement("div");
aside.style.display = "inline-block";
aside.style.width = "30%";
aside.style.textAlign = "center";
var input = document.createElement("input");
var inputHeader = document.createElement("header");
inputHeader.innerHTML = "Filter";
input.addEventListener("keyup", function (ev) {
  var text = ev.target.value;
  var liChildren = listOfItems.getElementsByTagName("li");
  for (var i = 0, len = liChildren.length; i < len; i+=1) {
    var currentLi = liChildren[i];
    var header = currentLi.firstElementChild.innerText; 
//console.log(header); Proverqvame dali sme vzeli vsichki imena
if (header.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
  currentLi.style.display = "block";//da si bude kakvoto e bilo
}else{
  currentLi.style.display = "none";
}
  }
}, false);

aside.appendChild(inputHeader);
aside.appendChild(input);
var listOfItems = document.createElement("ul");
listOfItems.style.listStyleType = "none";
listOfItems.style.overflowY = "scroll";
listOfItems.style.height = "500px";
listOfItems.addEventListener("click", function (ev) {
  var target = ev.target;
  if (target.tagName === "IMG") {
    var header = target.previousElementSibling.innerText;
    var src = target.src;
    selectedImageHeader.innerText = header;
    selectedImage.src = src;
  }
}, false);
listOfItems.addEventListener("mouseover", function (ev) {
  var target = ev.target;
  if (target.tagName === "IMG") {
    target.parentElement.style.backgroundColor = "gray";
  }
}, false);
listOfItems.addEventListener("mouseout", function (ev) {
  var target = ev.target;
  if (target.tagName === "IMG") {
    target.parentElement.style.backgroundColor = "initial";
  }
}, false);
var li = document.createElement("li");
li.className = "image-container";
var imageHeader = document.createElement("h3");
var image = document.createElement("img");
image.style.width = "100%";
//Klonirame kartinkite
for (var i = 0, len = items.length; i < len; i+=1){
var currentItem = items[i];
var currentLi = li.cloneNode(true);
var currentImageHeader = imageHeader.cloneNode(true);
currentImageHeader.innerHTML = currentItem.title;
var currentImage = image.cloneNode(true);
currentImage.src = currentItem.url;

currentLi.appendChild(currentImageHeader);
currentLi.appendChild(currentImage);
listOfItems.appendChild(currentLi);
}

aside.appendChild(listOfItems);

fragment.appendChild(imagePreview);
fragment.appendChild(aside);
root.appendChild(fragment);
}