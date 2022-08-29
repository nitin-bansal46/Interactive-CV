//variable declaration 
let marioObject = document.getElementById("mario");
marioObject.style.left = "0";
var leftv = 0;              //mario position
let bg_position = 0;        //background X position
let bg_img = document.body;
let mountain = document.querySelector('.mountain');
let mario = document.querySelector(".mario");
let marks = document.querySelector('.marks');
let fire_1 = document.querySelector(".fire-1");
let fire_2 = document.querySelector(".fire-2");
let fire_3 = document.querySelector(".fire-3");
let fire_4 = document.querySelector(".fire-4");
let que_1 = document.querySelector(".question-1");
let que_2 = document.querySelector(".question-2");
let que_3 = document.querySelector(".question-3");
let que_4 = document.querySelector(".question-4");
let html = document.querySelector(".html")
let css = document.querySelector(".css")
let js = document.querySelector(".js")
let postgre = document.querySelector(".postgre")
let html_flag = false;
let css_flag = false;
let js_flag = false;
let postgre_flag = false;
let marioImage = document.getElementById("mario-img");
// let class_10 = document.querySelector('.class-10');
// let class_12 = document.querySelector('.class-12');
// let jee = document.querySelector('.jee-img');


let func1 =  (event) =>{
    var keyPressed = event.key;
    move(keyPressed);
    console.log('pressed');
}
document.addEventListener("keydown", func1);



document.addEventListener("keyup", function (event) {
    marioImage.src = "Images/mario standing.png";
    marioObject.classList.remove("move-right");
    marioObject.classList.remove("move-left");
    marioImage.style.display = "inline";
    
})


function move(key) {

    //mountain transition 
    if (bg_position == -220) {
        mountain.classList.add("move");
    }
    //baloon fly transition
    if (bg_position == -200) {
        marks.classList.add("fly");
    }
   
    
    if(bg_position == -592 && html_flag == false){
        fire_1.classList.add("show");
        setTimeout(function () {
            fire_1.classList.remove("show");
        }, 300);
        que_1.classList.add("noshow");
        html.classList.add("show");
        html.style.opacity = 1;
        html_flag = true;
    }
    
    if(bg_position == -604 && css_flag == false){
        fire_2.classList.add("show");
        setTimeout(function () {
            fire_2.classList.remove("show");
        }, 300);
        que_2.classList.add("noshow");
        css.classList.add("show");
        css.style.opacity = 1;
        css_flag = true;
    }

    
    if(bg_position == -616 && js_flag == false){
        fire_3.classList.add("show");
        setTimeout(function () {
            fire_3.classList.remove("show");
        }, 300);
        que_3.classList.add("noshow");
        js.classList.add("show");
        js.style.opacity = 1;
        js_flag = true;
    }
    
    if(bg_position == -628 && postgre_flag == false){
        fire_4.classList.add("show");
        setTimeout(function () {
            fire_4.classList.remove("show");
          }, 300);
        que_4.classList.add("noshow");
        postgre.classList.add("show");
        postgre.style.opacity = 1;
        postgre_flag = true;
    }
    
    //mario sprite animation
    marioAnimation(key);

    //mario movement controls
    if (key == "ArrowRight") {

        if (leftv <= 50) {
            leftv += 2;
            marioObject.style.left = `${leftv}rem`;
        }
        else {
            
            if(bg_position == -468){
                bg_position = -524;
                marioObject.classList.add("up");
                
            }
            if(bg_position == -544){
                marioObject.classList.remove("up");
                bg_position = -560;
            }
            
            if(bg_position == -1208){
                document.removeEventListener("keydown", func1);
                animateLast();

            }
            if(bg_position > -1208){
                
                bg_position -= 2;
                moveBg(key, bg_position);   
            }


        }
    
    }
    else if (key == "ArrowLeft") {
        if (leftv >= 50 & bg_position < 0) {
            bg_position += 2;
            if( bg_position == -556){
                marioObject.classList.add("up");
                bg_position = -540;
            }
            if(bg_position == -520 ){
                marioObject.classList.remove("up");
                bg_position = -468;
            }
            moveBg(key, bg_position);
        }
        if (bg_position == 0) {
            if (leftv >= 0) {
                marioObject.style.left = `${leftv}rem`;
                leftv -= 2;
            }
        }
    }
    console.log(bg_position);
}
//mario sprite animation
function marioAnimation(key) {
    if (key == "ArrowRight") {
        marioImage.style.display = "none";
        marioObject.classList.add("move-right");
    }
    if (key == "ArrowLeft") {
        marioImage.style.display = "none";
        marioObject.classList.add("move-left");
     }
}

function moveBg(key, position) {
    if (key == "ArrowRight") {
        bg_img.style.backgroundPositionX = `${position}rem`;
        updateFrame(document.querySelector(".instruction"), key, 45 + position);
        updateFrame(document.querySelector(".name"), key, 35 + position);
        updateFrame(document.querySelector(".sign-board_1"), key, 90 + position);
        updateFrame(document.querySelector(".home-town"), key, 130 + position);
        updateFrame(document.querySelector(".raj-img"), key, 110 + position);
        updateFrame(document.querySelector(".place-img"), key, 120 + position);
        updateFrame(document.querySelector(".teacher-img"), key, 150 + position);
        updateFrame(document.querySelector(".school-name-div"), key, 180 + position);
        updateFrame(document.querySelector(".school-img"), key, 190 + position);
        updateFrame(document.querySelector(".marks"), key, 290 + position);
        updateFrame(document.querySelector(".mountain-img"), key, 360 + position);
        updateFrame(document.querySelector(".college-name"), key, 385 + position);
        updateFrame(document.querySelector(".college-img"), key, 380 + position);
        updateFrame(document.querySelector(".sign-board_2"), key, 430 + position);
        updateFrame(document.querySelector(".language"), key, 450 + position);
        updateFrame(document.querySelector(".monkey-1-img"), key, 470 + position);
        updateFrame(document.querySelector(".cpp"), key, 474 + position);
        updateFrame(document.querySelector(".monkey-2-img"), key, 485 + position);
        updateFrame(document.querySelector(".python"), key, 487 + position);
        updateFrame(document.querySelector(".monkey-3-img"), key, 500 + position);
        updateFrame(document.querySelector(".javascript"), key, 505 + position);
        updateFrame(document.querySelector(".circle-img"), key, 530 + position);
        updateFrame(document.querySelector(".core"), key, 545 + position);
        updateFrame(document.querySelector(".spike"), key, 575 + position);
        updateFrame(document.querySelector(".brick-2-img"), key, 580 + position);
        updateFrame(document.querySelector(".brick-3-img"), key, 588 + position);
        updateFrame(document.querySelector(".pipe-img"), key, 600 + position);
        updateFrame(document.querySelector(".coin"), key, 585 + position);
        updateFrame(document.querySelector(".development"), key, 610 + position);
        updateFrame(document.querySelector(".bri"), key, 640 + position);
        updateFrame(document.querySelector(".dev"), key, 640 + position);
        updateFrame(document.querySelector(".fire"), key, 640 + position);
        updateFrame(document.querySelector(".board-3-img"), key, 740 + position);
        updateFrame(document.querySelector(".internship"), key, 800 + position);
        updateFrame(document.querySelector(".board-4-img"), key, 880 + position);
        updateFrame(document.querySelector(".project"), key, 920 + position);
        updateFrame(document.querySelector(".paper"), key, 950 + position);
        updateFrame(document.querySelector(".board-5-img"), key, 1030 + position);
        updateFrame(document.querySelector(".trophy"), key, 1080 + position);
        updateFrame(document.querySelector(".achievments-1"), key, 1120 + position);
        updateFrame(document.querySelector(".finish-text"), key, 1230 + position);
        updateFrame(document.querySelector(".finish-img"), key, 1220 + position);
    }
    else if (key == "ArrowLeft") {
        bg_img.style.backgroundPositionX = `${position}rem`;
        updateFrame(document.querySelector(".instruction"), key, 45 + position);
         updateFrame(document.querySelector(".name"), key, 35 + position);
        updateFrame(document.querySelector(".sign-board_1"), key, 90 + position);
        updateFrame(document.querySelector(".home-town"), key, 130 + position);
        updateFrame(document.querySelector(".raj-img"), key, 110 + position);
        updateFrame(document.querySelector(".place-img"), key, 120 + position);
        updateFrame(document.querySelector(".teacher-img"), key, 150 + position);
        updateFrame(document.querySelector(".school-name-div"), key, 180 + position);
        updateFrame(document.querySelector(".school-img"), key, 190 + position);
        updateFrame(document.querySelector(".marks"), key, 290 + position);
        updateFrame(document.querySelector(".college-name"), key, 390 + position);
        updateFrame(document.querySelector(".mountain-img"), key, 360 + position);
        updateFrame(document.querySelector(".college-img"), key, 385 + position);
        updateFrame(document.querySelector(".sign-board_2"), key, 430 + position);
        updateFrame(document.querySelector(".language"), key, 450 + position);
        updateFrame(document.querySelector(".monkey-1-img"), key, 470 + position);
        updateFrame(document.querySelector(".cpp"), key, 474 + position);
        updateFrame(document.querySelector(".monkey-2-img"), key, 485 + position);
        updateFrame(document.querySelector(".python"), key, 487 + position);
        updateFrame(document.querySelector(".monkey-3-img"), key, 500 + position);
        updateFrame(document.querySelector(".javascript"), key, 505 + position);
        updateFrame(document.querySelector(".circle-img"), key, 530 + position);
        updateFrame(document.querySelector(".core"), key, 545 + position);
        updateFrame(document.querySelector(".spike"), key, 575 + position);
        updateFrame(document.querySelector(".brick-2-img"), key, 580 + position);
        updateFrame(document.querySelector(".brick-3-img"), key, 588 + position);
        updateFrame(document.querySelector(".pipe-img"), key, 600 + position);
        updateFrame(document.querySelector(".coin"), key, 585 + position);
        updateFrame(document.querySelector(".development"), key, 610 + position);
        updateFrame(document.querySelector(".bri"), key, 640 + position);
        updateFrame(document.querySelector(".dev"), key, 640 + position);
        updateFrame(document.querySelector(".fire"), key, 640 + position);
        updateFrame(document.querySelector(".board-3-img"), key, 740 + position);
        updateFrame(document.querySelector(".internship"), key, 800 + position);
        updateFrame(document.querySelector(".board-4-img"), key, 880 + position);
        updateFrame(document.querySelector(".project"), key, 920 + position);
        updateFrame(document.querySelector(".paper"), key, 950 + position);
        updateFrame(document.querySelector(".board-5-img"), key, 1030 + position);
        updateFrame(document.querySelector(".trophy"), key, 1080 + position);
        updateFrame(document.querySelector(".achievments-1"), key, 1120 + position);
        updateFrame(document.querySelector(".finish-text"), key, 1230 + position);
        updateFrame(document.querySelector(".finish-img"), key, 1220 + position);
    }
}

function updateFrame(ele, key, position) {
    if (key == "ArrowRight") {
        ele.style.left = `${position}rem`;
    }

    else if (key == "ArrowLeft") {
        ele.style.left = `${position}rem`;
    }
}


//tilt effect js
let publication = document.querySelector('.paper');
publication.addEventListener('mousemove', tilt);
publication.addEventListener('mouseout', ()=>{
    publication.style.transform = `perspective(1000px) rotateX(0deg)  rotateY(0deg)`;
})
function tilt(event){
    let width = publication.clientWidth;
    let height = publication.clientHeight;

    let x = publication.offsetLeft + width/2;
    let y = publication.offsetTop + height/2;

    let dx = x - event.x;
    let dy = y - event.y;
    
    let factorX = 2*dx / width;
    let factorY = 2*dy / height;

    let rotateX =  (-1) * 25 * factorX;
    let rotateY = 25 * factorY;

    console.log(rotateX, rotateY);
    publication.style.transform = `perspective(1000px) rotateX(${rotateY}deg)  rotateY(${rotateX}deg)`;
}


// function marioJump() {
//     marioObject.style.bottom = `${20}%`;
//     marioObject.style.bottom = `${10}%`;
// }

function animateLast(){
    
    marioObject.classList.add("jump");
}