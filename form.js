function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}
function seterror(id, error, num){
    //set error inside id
    element = document.getElementById(id);
    element = document.getElementsByClassName('formerror')[num].innerHTML = error;
}
function validateForm(){
    var returnval = true;
    clearErrors();
    var names = document.forms['myForm']["fname"].value;
    if (names.length<5)
    {
        seterror("names","! Length of name is too short",0);
        returnval = false;
    }

    var number = document.forms['myForm']["mnumber"].value;
    if (number.length!=10)
    {
        seterror("number","! Length of number is too short",1);
        returnval = false;
    }

    var numbers = document.forms['myForm']["pncode"].value;
    if (numbers.length<5)
    {
        seterror("numbers","! Length of pin is too short",2);
        returnval = false;
    }

    var area = document.forms['myForm']["farea"].value;
    if (area.length<5)
    {
        seterror("area","! Length too short",3);
        returnval = false;
    }

    var areas = document.forms['myForm']["varea"].value;
    if (areas.length<5)
    {
        seterror("areas","! Length is too short",4);
        returnval = false;
    }

    var ared = document.forms['myForm']["larea"].value;
    if (ared.length<5)
    {
        seterror("ared","! Length too short",5);
        returnval = false;
    }

    var areds = document.forms['myForm']["tarea"].value;
    if (areds.length<5)
    {
        seterror("areds","! Length is too short",6);
        returnval = false;
    }
    return returnval;
}