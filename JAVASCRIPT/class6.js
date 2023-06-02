//alert("Yes i am connected");
const mobNav = document.getElementById("mobile-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelectorAll("#close-btn")[0];

function showSideBar(){
  mobNav.classList.remove("d-none");
}
function hideSideBar(){
    mobNav.classList.add("d-none");
  }

menuBtn.addEventListener("click", showSideBar);
closeBtn.addEventListener("click", hideSideBar);