// random pin setup by string/
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = (pin + '').length;
    if (pinString == 4) {
        return pin;
    }
    else {
        // console.log('3 length id detected');
        return getPin();
    }

}
//------------------generate Pin function-------------------------

// nicher akhane bojhar ache kno html e onclick="generatePin()" add korlam add event listener kore kano holona/
// const takeGenValue = document.getElementById('generate-pin');
function generatePin() {
    const pin = getPin();
    const pinvalue = document.getElementById('inp-display');
    pinvalue.value = pin;

}
// amara akhane click event ta html ei add kor niyechie/
//-------------calculetor key pad click and value add---------------------/
document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const getPadValue = event.target.innerText;
    const takeInpPad = document.getElementById('pad-inp');
    if (isNaN(getPadValue)) {
        // console.log(getPadValue);
        if (getPadValue == 'C') {
            takeInpPad.value = '';
        }
    }
    else {
        const padPrevalue = takeInpPad.value;
        const padInstValue = padPrevalue + getPadValue;
        takeInpPad.value = padInstValue;
    }
});
//------------------- verify submission-------------------
function verifySubmission() {
    const takeInpDis = document.getElementById('inp-display').value;
    const takeInpPad = document.getElementById('pad-inp').value;
    const successMsg = document.getElementById('noti-success');
    const failureMsg = document.getElementById('noti-error');

    if (takeInpDis == takeInpPad) {
        successMsg.style.display = 'block';
        failureMsg.style.display = 'none';
        //amra console diye check korte pri "html-notify-section display= none kora ache ""
    }
    else {
        successMsg.style.display = 'none';
        failureMsg.style.display = 'block';
    }
    // console.log(takeInpPad); console.log(takeInpDis); we add onclick at submit buuton
    //  in the html file
}
