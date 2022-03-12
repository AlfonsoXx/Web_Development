var images = ["./img/1.jpeg","./img/2.jpeg","./img/3.jpeg", "./img/4.jpeg", "./img/5.jpeg", "./img/6.jpeg"];
    var index =1;
    document.querySelector('button').addEventListener('click',function(){
        var nextImage = images[index]
        document.querySelector('img').setAttribute('src', nextImage);
        index++;
        if(index=== images.length){
            index = 0;
        }
});

// Need to fix "Next" button
