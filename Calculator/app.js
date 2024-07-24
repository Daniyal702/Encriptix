

 var input = (input) => {
    document.getElementById('screen').innerHTML+=input 
 }
 var ClearScreen = () =>{
    document.getElementById('screen').innerHTML = ""
 }

 var answer = () => {
    var a = document.getElementById("screen").innerHTML;
    var result = eval(a);
    document.getElementById("screen").innerHTML = result;
}