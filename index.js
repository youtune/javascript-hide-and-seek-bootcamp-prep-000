function getFirstSelector(selecter) {
  const firstElement =  document.querySelector(selecter);
  return firstElement
}

function nestedTarget() {
  const targetElement =  document.getElementById('nested').querySelector('div.target');
  return targetElement
}

function increaseRankBy(n) {
  const rankIncrease = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rankIncrease.length; i++) {
    rankIncrease[i].innerHTML = (parseInt(rankIncrease[i].innerHTML, 10) + n);
}

}

function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

 }
