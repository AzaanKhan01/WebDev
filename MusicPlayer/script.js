document.getElementById('Sound1').addEventListener('click',function(){
    const audio = new Audio("music1.mp3");
    audio.pause();
});
document.getElementById('Sound2').addEventListener('click',function(){
    const audio = new Audio("music2.mp3");
    audio.play();
});
document.getElementById('Sound3').addEventListener('click',function(){
    const audio = new Audio("music3.mp3");
    audio.play();
});