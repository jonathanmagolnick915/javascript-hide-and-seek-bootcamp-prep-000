function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  var nodeList = document.getElementById('app').querySelectorAll('ul.ranked-list')
  var list1 = nodeList[0]
  var list2 = nodeList[1]

  let children = list1.children
  for(let i = 0; i < children.length; i++){
    parseInt(nodeList[i].innerHTML = ((1 + i + n).toString()));
  }

  children = list2.children
  for(let i = 0; i < children.length; i++)
    parseInt(nodeList[i].innerHTML = (12 - i + n).toString())
}
