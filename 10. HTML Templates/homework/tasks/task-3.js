function solve(){
  return function(){
    $.fn.listview = function(data){
      var teplateHolderId = this.attr('data-template'),
      template = $('#' + templateHolderId).html(),
      compileHTML = handlebars.compile(template),
      i,
      len = data.length;
      for (i = 0; i < len; i+=1) {
        this.append(compileHTML(data[i]));  
      }
      return this;
    };
  };
}

module.exports = solve;