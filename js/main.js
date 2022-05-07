let navLinks = document.getElementById("mobile-menu")
let showBtn = document.getElementById("show")
let hideBtn = document.getElementById("hide")

function showMenu(){
  navLinks.classList.remove('hidden');
  showBtn.classList.add('hidden');
  hideBtn.classList.remove('hidden');
}

function hideMenu(){
  navLinks.classList.add('hidden');
  showBtn.classList.remove('hidden');
  hideBtn.classList.add('hidden');
}
