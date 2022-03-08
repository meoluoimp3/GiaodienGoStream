
const show_slide=document.getElementById('show-slide'); 
const ListSlide=document.querySelectorAll(".List-slide .slide-prize");
const btn_prev=document.querySelector(".btn1-prev");
const btn_next=document.querySelector(".btn1-next");
 show_slide=ListSlide[0];
let position=0;
console.log(ListSlide);
const moveRight = () => {
    if (position >= ListSlide.length - 1) {
        position = 0
        show_slide = ListSlide[position];
        return;
    }
    show_slide =ListSlide[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = ListSlide.length - 1;
        show_slide = ListSlide[position];
        return;
    }
    show_slide = ListSlide[position - 1];
    position--;
}

btn_next.addEventListener("click", moveRight);
btn_prev.addEventListener("click", moveLeft);