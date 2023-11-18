dnaSequence = document.getElementById("dna").value;

function dnaToRna(dnaSequence){
    dnaSequence = document.getElementById("dna").value
    dnaSequenceSameCase = dnaSequence.toUpperCase()
    splitSequence = dnaSequenceSameCase.split("");
    reverseSequence = splitSequence;
    rnaSequence = []
    for (let i = 0; i < splitSequence.length; i++){
        if (splitSequence[i] == "A"){
            rnaSequence.push("A")
        } else if (splitSequence[i] == "T"){
            rnaSequence.push("U")
        } else if (splitSequence[i] == "G"){
            rnaSequence.push("G")
        } else if (splitSequence[i] == "C"){
            rnaSequence.push("C")
        }
    }
    joinSequence = rnaSequence.join("");
    return joinSequence
}

function capitalizeSequence(dnaSequence){
    dnaSequence = document.getElementById("dna").value
    dnaSequenceSameCase = dnaSequence.toUpperCase()
    return dnaSequenceSameCase
}


function onClick(){
    document.getElementById("dna").value = capitalizeSequence(dnaSequence)
}

function fillValues(){
    document.getElementById("rna").value = dnaToRna(dnaSequence);
    
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