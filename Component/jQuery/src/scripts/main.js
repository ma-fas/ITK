(function($){
  $.fn.listComponent = function(){
    return this.each(function(){

      var list = $('<ul></ul>');
      $(this).append(list);
      
      var listItems = $(document.createDocumentFragment());

        for (var i = 1; i <= 100; i++) {

          var newItem = $('<li></li>');
          newItem.html("New item (" + [i] + ")");
          newItem.css("list-style-type", "none");

          if (i % 3 === 0) {
            newItem.addClass('js-clickable'); 
            newItem.css({"textDecoration": "underline", "cursor": "pointer"}); 
          }
          
          listItems.append(newItem); 
        }

      list.append(listItems);
 
      var clickable = $('.js-clickable');
      clickable.click(function(){
        $(this).toggleClass('active');
      });

    });
  };
}(jQuery));

$('#newList').listComponent();