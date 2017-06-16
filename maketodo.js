function makeToDos(owner, toDos) {
  let results = {};
  results.owner = owner;
  results.toDos = toDos;
  results.generateHtml = function generateHtml(toDos) {
    let first = "<ul>";
    this.toDos.forEach(function(toDo) {
      first += "<li>"+ toDo + "</li>";
    });
    return first + "</ul>";
  }
  return results;
}