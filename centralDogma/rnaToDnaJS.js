rnaSequence = document.getElementById("rna").value;

function rnaToDna(rnaSequence){
    rnaSequence = document.getElementById("rna").value
    rnaSequenceSameCase = rnaSequence.toUpperCase()
    splitSequence = rnaSequenceSameCase.split("");
    dnaSequence = []
    for (let i = 0; i < splitSequence.length; i++){
        if (splitSequence[i] == "A"){
            dnaSequence.push("A")
        } else if (splitSequence[i] == "U"){
            dnaSequence.push("T")
        } else if (splitSequence[i] == "G"){
            dnaSequence.push("G")
        } else if (splitSequence[i] == "C"){
            dnaSequence.push("C")
        }
    }
    joinSequence = dnaSequence.join("");
    return joinSequence
}

function capitalizeSequence(dnaSequence){
    rnaSequence = document.getElementById("rna").value
    rnaSequenceSameCase = rnaSequence.toUpperCase()
    return rnaSequenceSameCase
}


function onClick(){
    document.getElementById("rna").value = capitalizeSequence(rnaSequence)
}

function fillValues(){
    document.getElementById("dna").value = rnaToDna(rnaSequence);
    
}


//rna = document.getElementById("rna").value
//document.getElementById("rna").value = rnaToDna(rna);
/*function rnaToDna(rna){
    rna = document.getElementById("rna").value
    rnaSequenceSameCase = rna.toUpperCase()
    splitSequence = rnaSequenceSameCase.split("");
    complementSequence = []
    for (let i = 0; i < splitSequence.length; i++){
        if (splitSequence[i] == "U"){
            complementSequence.push("T")
        } else {
            complementSequence.push(...complementSequence)
        }
    }
    joinSequence = complementSequence.join("");
    return joinSequence
}
*/