const moon = document.querySelector(".moon");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
let moons = ["moon1", "moon2", "moon3", "moon4"];
let quality=["144px", "360px", "720px", "ULTRA HD 4K"]
const audio= new Audio;
audio.src="nfak2.mp3";


let i = 0; // Initialize i to 0 to start with the first moon class
text.innerHTML="Quality--> "+quality[i];
moon.classList.add(moons[i]); // Add the first moon class to the moon element

class reload{
    reload() {
        location.reload();
    }  
}

btn.addEventListener("click", function() {
    moon.classList.remove(moons[i]);
    
    i = (i + 1) % moons.length; 
    text.innerHTML="Quality--> "+quality[i];
    moon.classList.add(moons[i]); 
    if(i==3){
        audio.play();
        btn.classList.remove(".btn");
        btn.style.display="none";
    }
});
