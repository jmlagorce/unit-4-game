


$(document).ready(function() {
    
    var randomNumber = Math.floor((Math.random() * 121) + 18);
    var totalNumber = 0;
    var red = Math.floor((Math.random() * 13) + 1);
    var blue = Math.floor((Math.random() * 13) + 1);
    var orange = Math.floor((Math.random() * 13) + 1);
    var green = Math.floor((Math.random() * 13) + 1);
    var losses = 0;
    var wins = 0;

 
    
    function restart (){
        randomNumber = Math.floor((Math.random() * 121) + 18);
        totalNumber = 0;
        red = Math.floor((Math.random() * 13) + 1);
        blue = Math.floor((Math.random() * 13) + 1);
        orange = Math.floor((Math.random() * 13) + 1);
        green = Math.floor((Math.random() * 13) + 1);


    }
    
    //computer generates random number
    $(".generatedNumber").html(randomNumber);

    //when the user clicks a gem add the value of the gem to the total score
    $(".gembtn").on("click", function(){
        var color = this.value;
        
        if (color === "red"){
            totalNumber += red;
        }

        if (color === "blue"){
            totalNumber += blue;
        }

        if (color === "orange"){
            totalNumber += orange;
        }
        
        if (color === "green"){
            totalNumber += green;
        }
    
        if (totalNumber === randomNumber){
            wins++;
            alert("You won!");
            restart()
            $(".generatedNumber").html(randomNumber);
        } 
        if (totalNumber > randomNumber){
            losses++;
            alert("You lost!");
            restart()
            $(".generatedNumber").html(randomNumber);

        }
        
        
        $(".score").html(totalNumber);
        $(".wins").html("wins: " + wins);
        $(".losses").html("losses: " + losses);
    })

   


    
    
    














});
 

