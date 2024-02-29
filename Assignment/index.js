togglebox();

function togglebox() {
    var checkeddiv1 = document.getElementById("Radio1")
    var checkeddiv2 = document.getElementById("Radio2")
    var checkeddiv3 = document.getElementById("Radio3")

    var div1 = document.getElementById("div1")
    var div2 = document.getElementById("div2")
    var div3 = document.getElementById("div3")
    var line1 = document.getElementById("line1")
    var line2 = document.getElementById("line2")
    var line3 = document.getElementById("line3")
    var amount1 = document.getElementById("amount1")

    

    if (checkeddiv2.checked) {
        line2.style.display = "";
        line1.style.display = "none";
        line3.style.display = "none";
        div2.style.height = "150px"
        div1.style.height =  "50px"
        div3.style.height = "50px"
        div2.style.background ="pink";
        div1.style.background ="none";
        div3.style.background ="none"
        div2.style.border = "3.5px solid firebrick";
        div2.style.borderRadius = "15px"
        div1.style.border = "none";
        div3.style.border = "none";
        amount1.innerText = "18.00 USD"

    } else if ( checkeddiv3.checked) {
        line1.style.display = "none"
        line2.style.display = "none"
        line3.style.display = "";
        div3.style.height = "170px"
        div1.style.height = "50px"
        div2.style.height = "50px"
        div3.style.background ="pink"
        div1.style.background ="none"
        div2.style.background ="none"
        div2.style.border = "none";
        div1.style.border = "none";
        div3.style.border = "3.5px solid firebrick";
        div3.style.borderRadius = "15px"
        amount1.innerText = "24.00 USD"

    } else if (checkeddiv1.checked ) {
        line1.style.display = "";
        line2.style.display = "none"
        line3.style.display = "none"
        div1.style.height = "130px"    
        div2.style.height = "50px"
        div3.style.height = "50px"
        div1.style.background ="pink"
        div2.style.background ="none"
        div3.style.background ="none"
        div2.style.border = "none";
        div1.style.border = "3.5px solid firebrick";
        div1.style.borderRadius = "15px"
        div3.style.border = "none";
        amount1.innerText = "10.00 USD"
    } else {
        line1.style.display = "block";
        line2.style.display = "block";
        line3.style.display = "block";
        
    }
}