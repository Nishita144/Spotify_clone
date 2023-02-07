console.log("Welcome to Spotify");

// initialize the variables
let songIndex=0;
let audioElement= new Audio('images/1.mp3');
// audioElement.play();
let masterplay = document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname =document.getElementById('mastersongname');

let songs=[
    {songName:"Running Up the Hill- Kate Bush", filePath: "images/1.mp3",coverpath: "images/cover1.jpg"},
    {songName:"Walls Could Talk - Halsey", filePath: "images/2.mp3",coverpath: "images/wct.jpg"},
    {songName:"Challa ", filePath: "images/3.mp3",coverpath: "images/challa.jpg"},
    {songName:"Priyathama ", filePath: "images/4.mp3",coverpath: "images/YVM.jpg"},
    {songName:"Ain't My Fault ", filePath: "images/5.mp3",coverpath: "images/amf.jpeg"},
    {songName:"Something Something", filePath: "images/6.mp3",coverpath: "images/nvno.jpg"},
    {songName:"Side To Side", filePath: "images/7.mp3",coverpath: "images/sts.webp"},
    {songName:"Yeh Ishq Hai", filePath: "images/8.mp3",coverpath: "images/yih.jpg"},
    {songName:"Sin Pijama", filePath: "images/9.mp3",coverpath: "images/sinp.jpg"},
    {songName:"Run Away - Sophia", filePath: "images/9.mp3",coverpath: "images/cover1.jpg"}
]

songitems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByClassName("image")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
})



// Handling play/pause through click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        //next time when u press, it has to pause so remove play button and add pause button
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        //when song is playing ur.gif should activate
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
         //next time when u press, it has to play so remove pause button and add play button
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        //when song is paused ur gif should also de-activate
        gif.style.opacity=0;
    } 
})

// listen to Events
//when the time is updating in audioelement(audio), what action takes place is given by below eventlistener.
audioElement.addEventListener('timeupdate', ()=>{
    //this is triggered for every second
    // updating seekbar
    console.log("time");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
// current progressbar time
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//showcasing all the buttons in play mode as any one of those might be playing
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e)=>{
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-play-circle');
        
})
}
//adding action to mini icons
Array.from(document.getElementsByClassName('songitemplay')).forEach((e)=>{
     e.addEventListener('click',(ele)=>{ 
        makeAllPlays(); 
        songIndex= parseInt(ele.target.id);
        ele.target.classList.remove('fa-play-circle');
        ele.target.classList.add('fa-pause-circle');
        audioElement.src= 'images/${songIndex+1}.mp3';
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
     })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=9){
    songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src= `images/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
    songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src= `images/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

//js songs list is not directly appending to html page
//start from mini icons next time.
