let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.getElementById("feedback").addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let text=document.getElementById("text").value;

    if(name.lenght<1)
    {
        alert("must be more than 1 letter")
    }
    if(!email.endsWith("@gmail.com"))
    {
        alert("email must have @gmail.com")
    }
    if(text.lenght<10)
    {
        alert("text must be more than 2 words")
    }
})

document.getElementById("subscribe").addEventListener("submit",(e)=>{
    e.preventDefault()

    let email=document.getElementById("email").value;

    if(!email.endsWith("@gmail.com"))
    {
        alert("email must have @gmail.com")
    }
})