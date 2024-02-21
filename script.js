var draggedElement = null;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  draggedElement = ev.target;
}

function drop(ev, targetId) {
  ev.preventDefault();
  var targetElement = document.getElementById(targetId);
  if (targetElement !== draggedElement) {
    var temp = draggedElement.innerHTML;
    draggedElement.innerHTML = targetElement.innerHTML;
    targetElement.innerHTML = temp;
  }
}
