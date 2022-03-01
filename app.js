const container_div = document.querySelector(".container");
const clear_button_div = document.querySelector(".clear-button");
const input_button_div = document.querySelector(".input");
const new_div = document.getElementsByClassName("grid-item-hover");

function clear(){
  var divsNumber = container_div.childNodes.length;
  for(var i=0;i<divsNumber;i++) new_div[i].style.setProperty('--color','');
}

function boardSize(){
  let rows = parseInt(prompt('how many'));
  if(rows>0){
  makeRows(rows, rows);}
};

input_button_div.addEventListener('click',()=>{
  boardSize();
})

clear_button_div.addEventListener('click',()=>{
  clear();
})

function color(){
  let a = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let c = Math.floor(Math.random()*256);
  return `rgb(${a},${b},${c})`;
}
 
function setColor(e){
  const style = getComputedStyle(e.target);
  const backgroundColor = style.backgroundColor;
  let i,j,jj;
  let color1='';
  let color2='';
  let color3='';
  if(backgroundColor==='rgba(0, 0, 0, 0)'){
    e.target.style.setProperty('--color',color());
  } else {
    for(i=4;backgroundColor[i]!==',';i++ ){
      color1 += backgroundColor[i];
    };
    for(j=i+1;backgroundColor[j]!==',';j++ ){
      color2 += backgroundColor[j];
    };
    for(jj=j+1;backgroundColor[jj]!==')';jj++ ){
      color3 += backgroundColor[jj];
    };
    let color1Number = parseInt(color1)-(parseInt(color1)*0.5);
    let color2Number = parseInt(color2)-(parseInt(color2)*0.5);
    let color3Number = parseInt(color3)-(parseInt(color3)*0.5);
    e.target.style.setProperty('--color',`rgb(${color1Number}, ${color2Number}, ${color3Number})`);
  }
  
}

function makeRows(rows, cols) {
  container_div.style.setProperty('--grid-rows',rows);
  container_div.style.setProperty('--grid-cols', cols);
  container_div.style.setProperty('--padding', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', e => {
      e.target.classList.add('grid-item-hover');
      setColor(e); 
    })
    container_div.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
