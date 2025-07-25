// script.js 
console.log('Script running...');

// addition

    function addition(num){
        let resultString = '';
        for(let i = 1; i<= 10; i++){
            const sum = i + num;
            resultString += ` ${i} + ${num} = ${sum}<br>`;
        }
        document.getElementById('add').innerHTML = resultString;
    }

// substraction

    function substraction(num){
        let resulSub = '';
        let j = 1;
        while(j <= 10){
            const sub = j - num;
            resulSub += ` ${j} - ${num} = ${sub}<br>`;
            j++;
        }
        document.getElementById('sub').innerHTML = resulSub;
    }

 // multiplication

    function multiplication(num){
        let resulMult = '';
        let x = 1;
        do{
            const mul = x * num;
            resulMult += ` ${x} x ${num} = ${mul}<br>`;
            x++;
        } while (x <= 10);
        document.getElementById('mult').innerHTML = resulMult;
    }

    // division

    function division(num){
        let resulDiv = '';
        let y = 1;
        while(y <= 10){
            let div;
            div = (y / num).toFixed(2);
            resulDiv += ` ${y} / ${num} = ${div}<br>`;
            y++;
        }
        document.getElementById('div').innerHTML = resulDiv;
    }


    // run all the functions
    
    document.querySelector('.myButton').addEventListener('click', function(){
    const num = parseInt(document.getElementById('num').value);
    if (isNaN(num)){
        alert('Please enter a valid number !');
        return;
        }

        addition(num);
        substraction(num);
        multiplication(num);
        division(num);
    });