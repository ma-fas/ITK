listComponent = function(element) {

  function generateList() {
    var list = document.createElement('ul');
    element.appendChild(list);

    var listItems = document.createDocumentFragment();

    for (var i = 1; i <= 100; i++) {
      var newItem = document.createElement('li');
        newItem.innerHTML = "New item (" + [i] + ")";
        newItem.style.listStyleType = "none";

      if (i % 3 === 0) {
        newItem.className += 'js-clickable'; 
        newItem.style.textDecoration = "underline"; 
        newItem.style.cursor = "pointer";  
      }

      listItems.appendChild(newItem); 
    }

    list.appendChild(listItems);
  };

  generateList();

  var clickable = document.getElementsByClassName('js-clickable');

  function reactToClick(e) {
    e.stopPropagation();
    var clickedItem = e.target;
    clickedItem.classList.toggle('active');  
  }

  for (var j = 0; j < clickable.length; j++) {
    clickable[j].addEventListener("click", reactToClick, false); 
  }
  
};



