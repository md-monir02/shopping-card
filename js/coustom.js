
//disabled all text area.
var length = document.querySelectorAll(".input").length;
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".input")[i].disabled = true;
}
var unitPriceOfPhone = parseInt(document.getElementById("iphonPrice").innerText); // price of phone per unit
var unitPriceOfCover = parseInt(document.getElementById("Coverprice").innerText); // price of cover per unit

//add event listener in plus button (Incriment Number)
function incrimentNumber(pluseButtonID, iphoneCountValue) {
    var countButton = document.getElementById(pluseButtonID);//find button
    countButton.onclick = function () {//add onclick listener with btn
        var runningValueInInputField =parseInt (document.getElementById(iphoneCountValue).value); //get value from input field
        runningValueInInputField++;
        document.getElementById(iphoneCountValue).value = runningValueInInputField; //replace value of incriment
        if(pluseButtonID == "iphoneCountBtnPlus"){
            incrimentPriceOfPhone("iphonPrice",runningValueInInputField,unitPriceOfPhone);
        }else{
            incrimentPriceOfCover("Coverprice",runningValueInInputField,unitPriceOfCover);
        }
    }
}

incrimentNumber("iphoneCountBtnPlus", "iphoneCount"); // call for iphone
incrimentNumber("coverCountBtnPlus", "coverCount"); // call for cover

//calculate live price of phone incriment:
function incrimentPriceOfPhone(priceId,quantintyOfProduct, unitPrice) {
    var total = quantintyOfProduct * unitPrice;
    document.getElementById(priceId).innerText = total; //replace value
    var Taka = parseInt (document.getElementById("totalTaka").innerText);
    var totalTaka = total + Taka;
    document.getElementById("totalTaka").innerText = totalTaka;
}

//calculate live price of cover incriment:
function incrimentPriceOfCover(priceId,quantintyOfProduct, unitPrice) {
    var total = quantintyOfProduct * unitPrice;
    document.getElementById(priceId).innerText = total; //replace value

    document.getElementById(priceId).innerText = total; //replace value
    var Taka = parseInt (document.getElementById("totalTaka").innerText);
    var totalTaka = total + Taka;
    document.getElementById("totalTaka").innerText = totalTaka;
}


//add event listener in plus button (Decrement Number)
function decrementNumber(minusButtonID, iphoneCountLessValue) {
    var countButton = document.getElementById(minusButtonID); //find button
    countButton.onclick = function () { //add onclick listener with btn
        var runningValueInInputField = document.getElementById(iphoneCountLessValue).value; //get value from input field
        runningValueInInputField--;
        if (runningValueInInputField < 0) { //check if decrement value goes to < 0
            runningValueInInputField = 0;
        } else {
            document.getElementById(iphoneCountLessValue).value = runningValueInInputField;
        }
//// dectiment total live price when click minus button
        if(minusButtonID == "iphoneCountBtnMinus"){
            incrimentPriceOfPhone("iphonPrice",runningValueInInputField,unitPriceOfPhone);
        }else if(minusButtonID == "coverCountBtnMinus"){
            incrimentPriceOfCover("Coverprice",runningValueInInputField,unitPriceOfCover);
        }
    }
}
decrementNumber("iphoneCountBtnMinus", "iphoneCount"); //call for Iphone
decrementNumber("coverCountBtnMinus", "coverCount"); // call for cover


