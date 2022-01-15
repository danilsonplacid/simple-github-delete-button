// by setting function name
const blueButton = document.getElementById('make-blue');
        blueButton.onclick= makeBlue;
        function makeBlue() {
            document.body.style.backgroundColor = 'blue';   
        }

// Anonymous Function

const RedButton = document.getElementById('make-chocolate');
        RedButton.onclick= function makeRed() {
            document.body.style.backgroundColor = 'chocolate';
        }

// using add event listener


const greyButton = document.getElementById('make-grey');
greyButton.addEventListener('click', makeGrey)
function makeGrey() {
    document.body.style.backgroundColor = 'grey';
    
}


// add event listener

const hotPink = document.getElementById('make-hotpink');

    hotPink.addEventListener('click', function makePink() {
     document.body.style.backgroundColor = 'hotpink';
            
    })


// direct action

    document.getElementById('make-tomato').addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
            
    })


    document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
            
    })
    document.getElementById('make-yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
            
    });


// blur --------

document.getElementById("make-yellow",).addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
document.getElementById("make-green",).addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
document.getElementById("make-blue").addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
document.getElementById("make-chocolate").addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
document.getElementById("make-grey").addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
document.getElementById("make-hotpink").addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
document.getElementById("make-tomato").addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})
// blur --------

// delete button display none
document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('secret-info').style.display = 'none';
    
})

// focus

document.getElementById('input-text').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
    
})

// blur

document.getElementById('input-text').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    
})

// keyup
document.getElementById('input-text').addEventListener('keyup', function () {
    const inputText = document.getElementById('input-text');
    console.log(inputText.value);
})
// change
document.getElementById('input-text').addEventListener('change', function () {
    const inputText = document.getElementById('input-text');
    console.log(inputText.value);
})





// if else
document.getElementById('input-text').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('delete-btn');


    if (event.target.value == "delete" ) {
    deleteBtn.removeAttribute('disabled')

    
    }
    else{
    deleteBtn.setAttribute('disabled' , true);
    }
    })

    





    












