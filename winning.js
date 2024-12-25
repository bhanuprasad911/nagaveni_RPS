const play_again=document.getElementById('play_again');
const miniSection=document.getElementById("mini_section");
const ruleBtn=document.getElementById('rules-btn');
const closeBtn=document.getElementById('close-btn');

ruleBtn.addEventListener('click',()=>{
    miniSection.style.display="block";
});
closeBtn.addEventListener('click',()=>{
    miniSection.style.display="none";
})