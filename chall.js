document.getElementById("ticket-form").addEventListener("submit",function(event){
    event.preventDefault()
    const fullName=document.getElementById("full-Name").value ;
    const email=document.getElementById("email").value ;

    document.getElementById("ticket-full-Name").textContent=fullName;
    document.getElementById("ticket-email").textContent=email;

    document.getElementById("form-section").classList.add("hidden");
    document.getElementById("ticket-section").classList.remove("hidden");
   

})