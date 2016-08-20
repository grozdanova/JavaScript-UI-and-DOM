/* globals document, window, console */

function solve() {
    return function(selector, initialSuggestions) {
        var root = document.querySelector(selector),
            fragment = document.createDocumentFragment(),
            list = document.querySelector('.suggestions-list'),
            suggestions = document.getElementsByClassName('suggestion'),
            input = document.getElementsByClassName('tb-pattern')[0],
            button = document.getElementsByClassName('btn-add')[0];
 
        function checkIfDuplicate(currentSuggestion) {
                for(var i = 0, len = suggestions.length; i < len; i += 1) {
                    if(currentSuggestion != undefined) {
                        if(currentSuggestion.toLowerCase() === suggestions[i].getElementsByTagName('a')[0].innerHTML.toLowerCase()) {
                            return true;
                        }
                    }
                }
            }
 
            function createLi(suggestion) {
                var li = document.createElement('li'),
                    a = document.createElement('a');
                li.className = 'suggestion';
                li.style.display = 'none';
                a.className = 'suggestion-link';
                a.innerHTML = suggestion;
                li.appendChild(a);
                list.appendChild(li);
            }
 
 
        if(initialSuggestions != undefined) {
            for (var i = 0, len = initialSuggestions.length; i < len; i += 1) {
                var currentSuggestion = initialSuggestions[i];
 
                if(i === 0) {
                   createLi(currentSuggestion);
                }
                else {
                    var duplicated = checkIfDuplicate(currentSuggestion);
                    if(!duplicated) {
                        createLi(currentSuggestion);
                    }
                }
            }
        }
 
        list.addEventListener('click', function (event) {
            var target = event.target;
           
                if(target.className === 'suggestion-link') {
                    input.value = target.innerHTML;
                }
                if(target.className === 'suggestion') {
                    input.value = target.firstChild.innerHTML;
                }
        });
 
        input.addEventListener('input', function () {
            var searchVal = input.value.toLowerCase();
           
            for(var i = 0, len = suggestions.length; i < len; i += 1) {
                var text = suggestions[i].getElementsByTagName('a')[0].innerHTML.toLowerCase();
               
                if(searchVal.length === 0) {
                    suggestions[i].style.display = 'none'
                }
                else {
                    if (text.indexOf(searchVal) < 0) {
                        suggestions[i].style.display = 'none';
                    }
                    else {
                        suggestions[i].style.display = '';
                    }
                }
            }
        });
 
        button.addEventListener('click', function (ev) {
            if(input.value.length > 0) {
                var duplicated = checkIfDuplicate(input.value);
               
                if(!duplicated) {
                    createLi(input.value);
                }
 
                input.value = '';
                for(var i = 0, len = suggestions.length; i < len; i += 1) {
                    suggestions[i].style.display = 'none';
                }
            }
        });
 
        fragment.appendChild(list);
        root.appendChild(fragment);


    };
}

module.exports = solve;