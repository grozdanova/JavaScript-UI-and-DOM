/* globals module, document, HTMLElement, console */

function solve() {
    return function(selector, isCaseSensitive) {
        var element = selector,
            fragment;
isCaseSensitive = isCaseSensitive || false;
if (typeof element === "string") {
    element = document.querySelector(element);
}
if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid HTML element or slector!");
}
fragment = document.createDocumentFragment();
//Add Controls
var addControls = document.createElement("div");
addControls.className = "add-controls";
var labelAdd = document.createElement("label");
labelAdd.innerHTML = "Enter text: ";
var inputAdd = document.createElement("input");
labelAdd.appendChild(inputAdd);
//pishem go anchor, zashtoto, ako poglednem v css tam na button ima hover
var buttonAdd = document.createElement("a");
buttonAdd.className = "button";
buttonAdd.innerHTML = "Add";
buttonAdd.style.display = "block";
buttonAdd.addEventListener("click", onAddBtnClick, false);

addControls.appendChild(labelAdd);
addControls.appendChild(buttonAdd);

//Result
var result = document.createElement("div");
result.className = "result-controls";
var listResults = document.createElement("ul");
listResults.className = "items-list";

var listItem = document.createElement("li");
listItem.className = "list-item";

var btnDelete = document.createElement("a");
btnDelete.className = "button button-delete";
btnDelete.innerHTML = "X";

var textLi = document.createElement("strong");
listItem.appendChild(btnDelete);
listItem.appendChild(textLi);
listResults.addEventListener("click", onListResultClick, false);
        function onListResultClick(ev) {
            var btn = ev.target,
                parent;
            if (btn.className.indexOf("button-delete") < 0) {
                return;
            }

            parent = btn;
            while (parent && parent.className.indexOf("list-item") < 0) {
                console.log(parent.nodeName);
                parent = parent.parentNode;
            }

            if (!parent) {
                return;
            }

            listResults.removeChild(parent);
        }
        function onAddBtnClick() {
            var value = inputAdd.value;
            inputAdd.value = "";
            textLi.innerHTML = value;
            listResults.appendChild(listItem.cloneNode(true));
        }
result.appendChild(listResults);
var getItems = element.getElementsByClassName("list-item");
//Search Controls
var search = document.createElement("div");
search.className = "search-controls";

var labelSearch = document.createElement("label");
labelSearch.innerHTML = "Search: ";
var inputSearch = document.createElement("input");
inputSearch.addEventListener("input", onSearchTextInput, false);
function onSearchTextInput() {
    var i = 0,
    len = getItems.length,
    text,
    pattern = inputSearch.value;
    if (!isCaseSensitive) {
        pattern = pattern.toLowerCase();
    }
    for (i; i < len; i+=1) {
        text = getItems[i].getElementsByTagName("strong")[0].innerHTML;
        if (!isCaseSensitive) {
            text = text.toLowerCase();
        }
        if (text.indexOf(pattern) < 0) {
            getItems[i].style.display = "none";
        }else{
            getItems[i].style.display = "";
        }
    }
}
labelSearch.appendChild(inputSearch);
search.appendChild(labelSearch);

fragment.appendChild(addControls);
fragment.appendChild(result);
fragment.appendChild(search);

element.appendChild(fragment);
element.className += "items-control";
    };
}

//module.exports = solve;