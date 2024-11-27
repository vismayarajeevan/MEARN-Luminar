// function to redirect dasboard page

function login(){
    // we have to store username
    const username=document.getElementById("username").value;
    console.log(username);

    // to store permanently in local storage

    localStorage.setItem("username",username)

    //redirect to dashboard
    window.location="dashboard.html"
    
}