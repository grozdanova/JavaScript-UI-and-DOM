/* globals $ */

//function solve() {
  $.fn.gallery = function (col) {
var col = col || 4;
    //vzemame tekyshtiq element
    var $this = this;
    $this.addClass('gallery');//na id=gallery my slojihme i takuv klas
    var $selected = $this.children('.selected');
    var $imageContainers = $galleryList.children('.image-container');
    var $galleryList = $this.children('.gallery-list');
    var $currentImage = $selected.find('#current-image');
    var $previousImage = $selected.find('#previous-image');
    var $nextImage = $selected.find('#next-image');
    //trqbva da gi pozicionirame
    $imageContainers.each(function(index, element){
      if (index % col == 0) {
        $element.addClass('clearfix');
      }
    });
     $selected.hide();
 
    $galleryList.on('click', 'img', function(){
      var imgSrc = $(this).attr('src');
      var index = $(this).data('info');
      $currentImage.attr('src', imgSrc);
      $selected.show();
    });

    return this;
  };
//}
//module.exports = solve;