let backgroundChangeText = document.getElementById('backgroundInput');
let textSelector = document.getElementById('paragraphp')
let textSelectorH1 = document.getElementById('paragraphh1')


function backgroundChangerFunction(){
  document.body.style.background = 'white';
  let color = document.getElementById('colorInput').value;
  localStorage.color = color;
  document.body.style.background = localStorage.color;
}


