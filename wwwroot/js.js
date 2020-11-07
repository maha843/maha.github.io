
function myFunction() {
    document.getElementById("myForm").submit();
}
function myonclickfn() {
    document.location.herf = "sp.html";
}


    function Validate() {
            var password = document.getElementById("p").value;
            var confirmPassword = document.getElementById("cp").value;
            if (password != confirmPassword) {
        alert("Passwords do not match.");
    return false;
}
return true;
    }


function change() {
    document.getElementById("img").src = "p2.jpg";
}



var item = document.getElementById("myLI");

function removeLi() {
    item.parentNode.removeChild(item);
}

function appendLi() {
    var list = document.getElementById("myList");
    list.appendChild(item);
}
function show_price(){
    Var stadpe = document.stadprice.value;
    Var stad1= document.getElementById("stad1");
    stad1.innerhtml = "staduim price is " + stadpe ;



}
