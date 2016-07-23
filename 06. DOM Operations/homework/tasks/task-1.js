/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {
  return function (element, contents) {
    if (typeof (element)==='string') {
      element = document.getElementById(element);
      if (!element) {
        throw new Error();
      }
    }
else if (!(element instanceof HTMLElement)) {
  throw new Error();
}
var fragment = document.createDocumentFragment(),
len = contents.length,
content, div, i;
for (var i = 0; i < len; i+=1) {
  content = contents[i];
  div = document.createElement('div');
  if (typeof (content) !== 'string' && typeof (content) !=='number') {
    throw new Error();
  }
  div.innerHTML = content;
  fragment.appendChild(div);
}
element.innerHTML = '';
element.appendChild(fragment);
  }
}
