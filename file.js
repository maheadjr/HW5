
$(document).ready(function(){

    var  counter= 120;
  


function countdown(){
// var  counter= 120;
counter--; 
$(".number").html("<div> time left remaining " + counter + "</div>");
//for (i = 0; i<=counter; counter--)
 if (counter === 0) {console.log("TIME UP");}
}
  
var timer; 

function start () {
 //var timer; 
timer = setInterval(countdown, 1000);
}




//$("#1").click(function (){$(".number").text("timer :" + start)})
$("#1").click(function (){start()})

 $("#2").click(function(){
     alert("that's correct!!!")})

     $("#4").click(function(){
        alert("that's correct!!!")})

        $("#6").click(function(){
            alert("that's correct!!!")})

            $("#8").click(function(){
                alert("that's correct!!!")})

                $("#10").click(function(){
                    alert("that's correct!!!")})

});

