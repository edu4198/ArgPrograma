function change_color_inf() {
    let varId =document.getElementById("divInf")
    if (varId.style.backgroundColor != "red") 
        {varId.style.backgroundColor = "red"
        varId.style.color= "white"
        varId.style.fontFamily="Roboto"

        }
    else {
        varId.style.backgroundColor = "white"
        varId.style.color= "black"
        varId.style.fontFamily="Arial"
    }    
}

function change_color_edu() {
    let varId =document.getElementById("divEdu")
    if (varId.style.backgroundColor!= "blue") 
    {varId.style.backgroundColor= "blue"
    varId.style.color= "white"
    varId.style.fontFamily="Roboto"}
    else {
        varId.style.backgroundColor = "white"
        varId.style.color= "black"
        varId.style.fontFamily="Arial"
    }
}
function change_color_exp() {
    let varId =document.getElementById("divExp")
    if (varId.style.backgroundColor!= "black") 
    {varId.style.backgroundColor= "black"
    varId.style.color= "white"
    varId.style.fontFamily="Roboto"}
    else {
        varId.style.backgroundColor = "white"
        varId.style.color= "black"
        varId.style.fontFamily="Arial"
    }
}
function hiddenImg() {
    let varId =document.getElementById("img")
    let varId2 =document.getElementById("navImg")
    if (varId.hidden==true) {
        varId.hidden=false

    }
    else{varId.hidden=true
        varId2.style.visibility=visible}
}
