let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/微信图片_20191123153415.jpg'){
        myImage.setAttribute('src','images/firefox2.png');
    }else if(mySrc==='images/firefox2.png'){
        myImage.setAttribute('src','images/firefox3.png');
    }else{
        myImage.setAttribute('src','images/微信图片_20191123153415.jpg');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt('请输入你的名字');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla 酷毙了，'+ myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla 酷毙了，'+storedName;
}

myButton.onclick=function(){
    setUserName();
}