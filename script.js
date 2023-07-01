function handleGetFormData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    return {
        name : name, 
        email : email, 
        city : city, 
        zipCode : zipCode, 
        status : status
        };
}

function isNumber(string){
    if(isNaN(string)){
        return false;
    }else{
        return true;
    }
}

function checkboxIsChecked(){
    let status = document.getElementById("status");
    if(status.checked == true){
        return true;
    }else{
        return false;
    }
}

function validateFormData(handleGetFormData){
    if(handleGetFormData !== null && isNumber(handleGetFormData.zipCode) && checkboxIsChecked()){
        return true;
    }else{
        return false;
    }
}
