function resetSize(e){
    e.style.width = "auto";
    e.style.height = "auto";
}
 
//tror att den bara fungerar på <img> element.
function setImageSize(img){
    
    resetSize(img);
    var size = 400;
    var scWidth = size, // screan width
        scale = 1,
        w = img.width,
        h = img.height;
   
    scale = scWidth / w;
//    if(scale * h > size){ // screan hight
//        scale = size / h;
// }
   
    img.style.width = (w * scale) + "px";
    img.style.height = (h * scale) + "px";
}