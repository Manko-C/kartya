function valasz(elem) {

    let answers = {
        hun: "Budapest",
        can: "Ottawa",
        jap: "Tokió",
        ger: "Berlin",
        mex: "Mexikóváros",
        per: "Lima"
    };
    document.getElementById(elem).innerText = answers[elem];
}

