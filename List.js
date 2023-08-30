const btn = document.querySelector('.buton');
const container = document.querySelector('.container');
const inp = document.querySelector('.inp');
const Spisok = document.getElementById('spisok');
//✖ для кнопки удаления
btn.addEventListener('click', Write);
function Write()
{
	if (inp.value !== "") {
		Spisok.innerHTML +=
		`<div class="cont"><div class="inner-cont"><img src="duck.png"><div class="text">${inp.value}</div></div><button class="delete">удалить</button></div><p>`
	  } 
	  else 
	  {
		inp.placeholder = "Введите что-нибудь!!!";
	  }
	  inp.value = "";
	  SaveData();
	  document.querySelectorAll('.delete').forEach((el) => { 
		el.addEventListener('click', Delete)
	})
}

function SaveData()
{
	localStorage.setItem('todoEl', Spisok.innerHTML);	
}

if (localStorage.getItem('todoEl')) 
{
	let tasks = localStorage.getItem('todoEl');
	Spisok.innerHTML += tasks;
}

function Delete(el) {
	el.target.parentElement.remove();
	SaveData();
}

if(document.querySelector('.delete'))
{
	document.querySelectorAll('.delete').forEach((el) => {
		el.addEventListener('click', Delete)})
}

document.addEventListener('keydown', el => {
	if(el.key == 'Enter')
		Write();
})





  
  

  