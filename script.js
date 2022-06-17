console.log("spotify");
let songindex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let pause=document.getElementById('masterpause');
let left=document.getElementById('left');
let songs=[
    {songName:"mujhe-peene-do",filePath:"spotify/1.mp3",coverPath:"spotify/box1.jpg"},
    {songName:"Aashiqui-aa-gayi",filePath:"spotify/2.mp3",coverPath:"spotify/box2.jpg"},
    {songName:"Mera-Yaar",filePath:"spotify/3.mp3",coverPath:"spotify/box3.jpg"},
    {songName:"Hoye-Ishq-Na",filePath:"spotify/4.mp3",coverPath:"spotify/box4.jpg"},
    {songName:"Boom-Boom",filePath:"spotify/5.mp3",coverPath:"spotify/box5.jpg"},
    {songName:"Tu-Mera-Yaar-Hogaya-Hai",filePath:"spotify/6.mp3",coverPath:"spotify/box6.jpg"}
]



masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0)
    {
        audioelement.play();
    }
})

// first.addEventListener('click',()=>{
//     if(audioelement.paused||audioelement.currentTime<=0)
//     {
//         audioelement.play();
//     }
// })

pause.addEventListener('click',()=>{
    if(audioelement.played)
    {
        audioelement.pause();
    }
})

audioelement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
});

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})
Array.from(document.getElementsByClassName('play')).forEach((element) => {
    element.addEventListener('click',(e)=>{
     songindex=parseInt(e.target.id);
     audioelement.src=`${songindex}.mp3`;
     audioelement.currentTime=0;
     audioelement.play();
     console.log('ok');
    })
})

left.addEventListener('click',()=>{
    
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    console.log('hello');
})

document.getElementById('right').addEventListener('click', ()=>{
    if(songindex>=6){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioelement.src = `${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();

})
