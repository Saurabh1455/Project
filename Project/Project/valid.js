
function validate() {
    var firstname = document.getElementById("fname");
    var alpha = /^[a-zA-Z\s-, ]+$/;  
    if (firstname.value == "") {
        alert('Please Enter First Name');
        return false;
    }
    else if (!firstname.value.match(alpha)) {
        alert('Invalid First Name');       
        return false;
    }
    else 
    {
        alert('Valid First Name');
        return true;
    }
}
function validate1() {
    var lastname = document.getElementById("lname");
    var alpha = /^[a-zA-Z\s-, ]+$/;  
    if (lastname.value == "") {
        alert('Please Enter Last Name');
        return false;
    }
    else if (!lastname.value.match(alpha)) {
        alert('Invalid Last Name');       
        return false;
    }
    else 
    {
        alert('Valid Last Name');
        return true;
    }
}
function validate2()
{
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone:"+phoneResult );
}
function mail_valid()
{
    var ename = document.getElementById ("email").value;                         

    var mail_id = /^[a-z A-Z 0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z A-Z 0-9 -]+(?:\.[a-z A-Z 0-9 -]+)*$/;

    if(mail_id.test(ename))
    {
       alert ("Valid Mail Id");
       return true;
    }
        else
        {
            alert("Invalid Mail Id");
            return false;
        }
}  


