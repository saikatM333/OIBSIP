const carousel  = document.querySelector(".carousel")
const firstImg = carousel.querySelectorAll("img")[0]
const arrowIcons = document.querySelector(".more")

let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //maxwidth
let counter=0
const img = ["finlyy.png","finally8.png"]


let isDragStart= false , prevPageX , prevScrollLeft ; 
let firstImgWidth = firstImg.clientWidth + 7 ;
const image = document.querySelectorAll(".image")[1]
function change(){
    
    
    counter++;
    
    if(counter>img.length-1){
         counter=0;
         image.src=img[counter]
         
    }
    image.src=img[counter]
    return change 
}

     setInterval(change(),2000)
   
    

arrowIcons .addEventListener("click",()=>
{
    carousel.scrollLeft += arrowIcons.class=="more"? - firstImgWidth :firstImgWidth ;
})

const dragStart = (e) =>{
    isDragStart= true ; 
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft ; 
}

const dragStop = () =>{
    isDragStart= false ; 
    carousel.classList.remove("dragging")
}

const dragging = (e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging")
    let positionDiff = e.pageX - prevPageX;

   carousel.scrollLeft = prevScrollLeft - positionDiff;
}

carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("mouseup",dragStop)


