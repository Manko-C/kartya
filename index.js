
function valasz(elem) {
    let answers = {
        hun: "Budapest",
        can: "Ottawa",
        jap: "Tokió",
        ger: "Berlin",
        mex: "Mexikóváros",
        per: "Lima"
    };
    let aktual = document.getElementById(elem);
    if (aktual.innerText == ""){
        document.getElementById(elem).innerText = answers[elem];
    }
    else{
        document.getElementById(elem).innerText = "";
    }
    

}

