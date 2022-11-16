    var a = document.getElementById("music");
    function clickA() {
        if(a.paused){
            a.play()
        }else{
            a.pause();
        }   
    }
