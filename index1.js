document.getElementById("subbtn").addEventListener("click",validateForm);
const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const req = new XMLHttpRequest();

    req.open("post", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe3sePnFqsx5QnNqCEfoOQjTCLFk2N4HEBuE4GqvaTtOjL0ig/formResponse");
    req.onload = function() {
        console.log(req.responseText);
    }

    req.send(new FormData(myForm));
});

function validateForm() 
{
    if (validateName() && validatePhone() && validateAddress() && validateQuantity() ) 
    {
        alert("Order Received. Thanks for Choosing us!");
        redirect();
    }
}

function redirect()
{
    window.location.redirect("index1.html");
}

function validateName() 
{
    var name = document.getElementById('Name').value;
    if(name.length == 0) 
    {
        alert("Name can't be blank!") ;
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) 
    {
        alert("Please enter your correct name!") ;//Validation Message
        return false;
    }
    return true;
}

function validatePhone() 
{
    var phone = document.getElementById('Phone').value;
    if(phone.length == 0) 
    {
        alert("Phone number can't be blank!") ;//Validation Message
        return false;
    }
    if(!phone.match(/^[0]?[789]\d{9}$/)) {
        alert("Please enter a correct phone number!") ;//Validation Message
        return false;
    }
    return true;
}

function validateAddress ()
{
    var add = document.getElementById('Address').value;
    if (add.length == 0)
    {
        alert("Please fill in the address!");
        return false;
    }
    return true;
}

function validateQuantity ()
{
    var quan = document.getElementById('Quantity').value;
    if (quan.length == 0)
    {
        alert("Please fill in the quantity required!");
        return false;
    }
    return true;
}

