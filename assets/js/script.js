let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


function openPopup(){

  let name=document.getElementById("name");
  let email=document.getElementById("email");
  let phone=document.getElementById("phone");
  let subject=document.getElementById("subject");
  let message=document.getElementById("Message");
  const form=document.querySelector("form");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
  })
  if(name.value !== "" && email.value !=="" && phone.value !=="" && subject.value !== "" && message.value !=="" ){
  popup.classList.add("open-popup");
}

}

function closePopup(){
  popup.classList.remove("open-popup")
}
