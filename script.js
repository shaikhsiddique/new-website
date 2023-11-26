const saleimagecontainer=document.getElementById('sale');
const displayedImage=document.getElementById('display-image');
const leftclick=document.getElementById('-');
const rightclick=document.getElementById('+');
let i=1;
let photoPaths=['sale1.webp','sale2.jpeg' ,'sale3.jpg', 'sale4.jpeg','sale5.jpg','sale6.png','sale7.webp','sale8.jpg','sale9.jpeg'];





// function declaration
function  changephoto(){
    if(i>8){
        i=0;
        
    }
    if(i<0){

        i=8;
    }
    document.querySelector('.deal-of-day').innerHTML=`<img src="${photoPaths[i]}" alt="" id="display-image">`
    
    i++;
   
}
    
// ADD-EVENT-LISTERNER

leftclick.addEventListener('click',()=>{
    i-2;
    console.log(i);
    changephoto();

});
rightclick.addEventListener('click',()=>{

   i++;
   changephoto();
});
setInterval(changephoto,5000);

