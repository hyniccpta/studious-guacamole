
const button = document.querySelector('button');


button.addEventListener('click', function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  alert("Thank you hommies!");
})



const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if ((r+g+b)>100){
   return `rgb(${r}, ${g}, ${b})`;
  }
  else
    return `rgb(255,255,255)`;
  
}

