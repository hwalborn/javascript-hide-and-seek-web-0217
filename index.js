function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget(){
  var result = document.querySelector('#nested .target');
  return result;
}

function deepestChild(){
  let query = document.querySelector('#grand-node');
  let child = query.children[0];
  while(child){
    query = child;
    child = query.children[0];
  }
  return query;
}

function increaseRankBy(n) {
  const list = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString();
  }
}
