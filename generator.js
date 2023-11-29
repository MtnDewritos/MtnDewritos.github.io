/*var names = [];
console.log("before function");
function displayImage(i){
    var images = []; 
    console.log("reached function");
$.ajax({
    //async: false,
    data: {names: names},
    data: {images: images},
    url : folder,
    
        success: function (data) {
            
        $(data).find("a").attr("href", function (i, val) {
            
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
              console.log(val);
                val = val.substr(1,val.length);
                images.push(val);
                console.log("added image path");
                
             
            } 
        });
      
    $(function(){
        var rand = Math.floor(Math.random() * images.length);
    
    var name = images[rand].substr(7, images[rand].length);
            console.log(images);
            console.log(names);
    
    console.log("reached random");
    if(names.indexOf(name) != -1){
        displayImage(i);
        console.log("name fail");
    }
    else{
        names.push(name);
        console.log(name);

        $('<img src="' + images[rand] + '" onload="setImageSize(this)">').appendTo('#panel' + ++i);

        if(i <4){
            displayImage(i+1)
            console.log("reached loop point");
        }
    }
                })
},
});
}
displayImage(0);
console.log("reached end of new code");
*/ //fuck optimization it's too fucking hard, now you get your multiples of the same thing sometimes with hadouken because I really can't be arsed it's fucking 1:30 I need sleep.

print("hello")

var images1 = []; 
var folder = "./panel1";


$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
               
                val = val.substr(1,val.length);
                
                images1.push(val);
                
                
              //  $("body").append( "<img src='"+ folder + val +"'>" );
            } 
        });
      //  images.concat(fuckingImagePathsMotherfucker);
var rand = Math.floor(Math.random() * images1.length);

$('<img src="' + images1[rand] + '" onload="setImageSize(this)">').appendTo('#panel1');


    }
    
});

var images2 = []; 
var folder = "panel2";


$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
               
                val = val.substr(1,val.length);
                
                images2.push(val);
                
                
              //  $("body").append( "<img src='"+ folder + val +"'>" );
            } 
        });
      //  images.concat(fuckingImagePathsMotherfucker);
var rand = Math.floor(Math.random() * images2.length);

$('<img src="' + images2[rand] + '" onload="setImageSize(this)">').appendTo('#panel2');


    }
    
});

var images3 = []; 
var folder = "panel3";


$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
               
                val = val.substr(1,val.length);
                
                images3.push(val);
                
                
              //  $("body").append( "<img src='"+ folder + val +"'>" );
            } 
        });
      //  images.concat(fuckingImagePathsMotherfucker);
var rand = Math.floor(Math.random() * images3.length);

$('<img src="' + images3[rand] + '"onload="setImageSize(this)">').appendTo('#panel3');


    }
    
});
var images4 = []; 
var folder = "panel4";


$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
               
                val = val.substr(1,val.length);
                
                images4.push(val);
                
                
              //  $("body").append( "<img src='"+ folder + val +"'>" );
            } 
        });
      //  images.concat(fuckingImagePathsMotherfucker);
var rand = Math.floor(Math.random() * images4.length);

$('<img src="' + images4[rand] + '"onload="setImageSize(this)">').appendTo('#panel4');


    }
    
});
