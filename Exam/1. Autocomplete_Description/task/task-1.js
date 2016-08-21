/* globals document, window, console */

function solve() {
    return function(selector, initialSuggestions) {
        var element = selector,
        fragment,
        initialSuggestions = initialSuggestions || [];
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (!element || !(element instanceof HTMLElement)) {
            throw new Error('Invalid HTML element!');
        }
        fragment = document.createDocumentFragment();
        var input = document.querySelector('.tb-pattern');
        var button = document.querySelector('.btn-add');
        var ul = document.querySelector('.suggestions-list');
        var suggestion = document.getElementsByClassName('suggestion'); 

           function createLi(suggestion) {
                var li = document.createElement('li'),
                    a = document.createElement('a');
                li.className = 'suggestion';
                li.style.display = 'none'; //trqbva da sa skriti
                a.className = 'suggestion-link';
                a.innerHTML = suggestion;
                li.appendChild(a);
                ul.appendChild(li);
            }

            function duplicate(current){
            for (var i = 0; i < suggestion.length; i+=1) {
                if(current != undefined){
                    if (current.toLowerCase() === suggestion[i].getElementsByTagName('a')[0].innerHTML.toLowerCase()) {
                        return true;
                    }
                }              
            }

            }
//suzdavame li-ta ot podadeniq ni masiv,kato proverqvame za dublir6ti se ot podadeniq ni masiv
            for (var i = 0; i < initialSuggestions.length; i+=1) {
                var currentSuggestion = initialSuggestions[i];
                if(!duplicate(currentSuggestion)){
                createLi(currentSuggestion);
                }
            }
    //add, no samo, ako ne se povtarq
            button.addEventListener('click', function(ev){
            if(!duplicate(input.value)){
            createLi(input.value);
            }
            input.value = '';
            });
//search, kato ne zabravqme caseSensitive na vuvedenoto i na samiq anchor(ot masiva)
    input.addEventListener('input', function(){
    var pattern = input.value.toLowerCase();
    for (i=0, len = suggestion.length; i < len; i+=1) {
        var text = suggestion[i].getElementsByTagName('a')[0].innerHTML.toLowerCase();
        if(pattern.length === 0) {
                suggestion[i].style.display = 'none'
            }
        if (text.indexOf(pattern) < 0) {
            suggestion[i].style.display = "none";
        }else{
            suggestion[i].style.display = "";
        }
    }
    });
//sled klikane na li, da se zapulni autocomplete(inputa)
    ul.addEventListener('click', function(ev){
        var target = ev.target;
        if (target.className === 'suggestion-link') {
            input.value = target.innerHTML;
        }
    });

        fragment.appendChild(ul);
        element.appendChild(fragment);
    };
}

module.exports = solve;