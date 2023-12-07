var Snake = document.getElementById('Snake');
Snake.value = 0;

var Water = document.getElementById('Water');
Water.value = 1;

var Gun = document.getElementById('Gun');
Gun.value = 2;
let no_of_chances=0
let user_point=0
let comp_point=0
function result(comp_point,user_point){
    if(user_point>comp_point){
        document.write("Hurry you won this series")
        document.body.style.backgroundColor = "pink";
    }
    else if(user_point==comp_point){
        document.write("this series is tied")
        document.body.style.backgroundColor = "green";
    }
    else{
        document.write("You lost this series")
        document.body.style.backgroundColor = "red";
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function SKGG(temp){
        let x=getRandomInt(0,3)
        let user=temp
        user=Number.parseInt(user)
        x=Number.parseInt(x)
        if(no_of_chances==10){
            result(comp_point,user_point)
        }
        else if(x==0 && user==2){
            alert("you win this round because computer choose snake")
            user_point+=1
        }
        else if(x==0 && user==1){
            alert("you lost this round because computer choose snake")
            comp_point+=1
        }
        else if(x==1 && user==0){
            alert("you win this round because computer choose water")
            user_point+=1
        }
        else if(x==1 && user==2){
            alert("you lost this round because computer choose water")
            comp_point+=1
        }
        else if(x==2 && user==0){
            alert("you lost this round because computer choose Gun")
            comp_point+=1
        }
        else if(x==2 && user==1){
            alert("you win this round because computer choose water")
            user_point+=1
        }
        else{
            alert("This round tied both are choose same")
        }
        no_of_chances+=1
    }
    

