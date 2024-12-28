let form = document.getElementById("form")

form.addEventListener("submit",function(){
    event.preventDefault()
    let email = form.email.value;

    console.log(email,password)

    if(email == "admin@empher.com" && password=="empher@123"){
        alert("Logged in as Admin")
        window.location.href ="admin.html"
    }
})

form.addEventListener("submit",function(){
    event.preventDefault()
    let email = form.email.value;

    console.log(email,password)

    if(email == "user@empher.com" && password=="user@123"){
        alert("Logged in as Admin")
        window.location.href ="books.html"
    }
    else{
        alert("Error")
    }
})