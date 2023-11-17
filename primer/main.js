oligoSequence = document.getElementById("oligo").value
cCount = (oligoSequence.match(/c/g) || []).length;
gCount = (oligoSequence.match(/g/g) || []).length;


function measureLength(oligoSequence){
    oligoSequence = document.getElementById("oligo").value
    return oligoSequence.length
}

function reverseComplementOligo(oligoSequence){
    oligoSequence = document.getElementById("oligo").value
    oligoSequenceSameCase = oligoSequence.toUpperCase()
    splitSequence = oligoSequenceSameCase.split("");
    reverseSequence = splitSequence.reverse();
    complementSequence = []
    for (let i = 0; i < reverseSequence.length; i++){
        if (reverseSequence[i] == "A"){
            complementSequence.push("T")
        } else if (reverseSequence[i] == "T"){
            complementSequence.push("A")
        } else if (reverseSequence[i] == "G"){
            complementSequence.push("C")
        } else if (reverseSequence[i] == "C"){
            complementSequence.push("G")
        }
    }
    joinSequence = complementSequence.join("");
    return joinSequence
}


function calculateGCPercentage(oligoSequence){
    oligoSequence = document.getElementById("oligo").value
    cCount = (oligoSequence.match(/c/g) || []).length;
    gCount = (oligoSequence.match(/g/g) || []).length;
    oligoLength = oligoSequence.length;
    percentGC = ((cCount+gCount)/oligoLength*100).toFixed(1);
    return percentGC
}

function calculateTM(oligoSequence){
    oligoSequence = document.getElementById("oligo").value
    cCount = (oligoSequence.match(/c/g) || []).length;
    gCount = (oligoSequence.match(/g/g) || []).length;
    TM = ((cCount + gCount)*4) + (((oligoSequence.length)-cCount-gCount)*2);
    return TM
}

function onClick(){
    fillValues()
}

function fillValues(){
    document.getElementById("length").value = measureLength(oligoSequence);
    document.getElementById("reverseComplement").value = reverseComplementOligo(oligoSequence);
    document.getElementById("gc").value = calculateGCPercentage(oligoSequence);
    document.getElementById("tm").value = calculateTM(oligoSequence);
}