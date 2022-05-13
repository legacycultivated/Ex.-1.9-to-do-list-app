function newItem() {
  //jQuery code

  //1) User can add a new item to a list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //2) User can cross out an item from List
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //3) User can delete an item from List
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //eventlistener to delete item when crossOutButton is clicked
  crossOutButton.on("click", deleteListItem);

  function deleteListItem() {
    li.addClass("delete")
  }

  //4) User can change order of items from List
  $('#list').sortable();



}
