const body = document.querySelector("body");

const backgrounds = {
    "index.html": {
        desktop: "./assets/home/background-home-desktop.jpg",
        tablet: "./assets/home/background-home-tablet.jpg",
        mobile: "./assets/home/background-home-mobile.jpg"
    },
    "crew.html": {
        desktop: "./assets/crew/background-crew-desktop.jpg",
        tablet: "./assets/crew/background-crew-tablet.jpg",
        mobile: "./assets/crew/background-crew-mobile.jpg"
    },
    "destination.html": {
        desktop: "./assets/destination/background-destination-desktop.jpg",
        tablet: "./assets/destination/background-destination-tablet.jpg",
        mobile: "./assets/destination/background-destination-mobile.jpg"
    },
    "technology.html": {
        desktop: "./assets/technology/background-technology-desktop.jpg",
        tablet: "./assets/technology/background-technology-tablet.jpg",
        mobile: "./assets/technology/background-technology-mobile.jpg"
    }
};

 const currentPage = window.location.pathname.split("/").pop() || "index.html";;

function setBackground() {
    const width = window.innerWidth;
    if (backgrounds[currentPage]) {
        let bg = "";
        if (width >= 1024) bg = backgrounds[currentPage].desktop;
        else if (width >= 768) bg = backgrounds[currentPage].tablet;
        else bg = backgrounds[currentPage].mobile;

        body.style.backgroundImage = `url('${bg}')`;

    }
}

 
setBackground();

 
window.addEventListener('resize', setBackground);

function planetInf(){
    const nameP = document.querySelectorAll(".nameP");
    const planettit = document.querySelector(".planettit")
    const planettxt = document.querySelector(".planettxt");
    const milTxt = document.querySelector(".mil-txt");
    const milMonth = document.querySelector(".month-txt")
    const planetBox = document.querySelector(".planet-box");
     
    nameP.forEach(el => {
        el.addEventListener("click", () => {
                document.querySelectorAll(".down-line").forEach(line => line.remove());

        
        const downLine = document.createElement("div");
        downLine.classList.add("down-line");
        el.appendChild(downLine);
            if(el.id.includes("moon")){
                planettit.textContent = "Moon";
                planettxt .textContent = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                milTxt.textContent = "384,400 km Est.";
                milMonth.textContent = "3 days";
                planetBox.style.backgroundImage = `url("image-moon.png")`
            }else if(el.id.includes("mars")){
                 planettit.textContent = "Mars";
                 planettxt.textContent = " Don't forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
                 milTxt.textContent = "225 mil. km Est.";
                  
                 milMonth.textContent = "9 months"
                  planetBox.style.backgroundImage = `url("image-mars.webp")`;
            }else if(el.id.includes("europa")){
                 planettit.textContent = "Europa";
                 planettxt.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
                 milTxt.textContent = "628 mil. km Est.";
                 milMonth.textContent = "3 years";
                 planetBox.style.backgroundImage = `url("image-europa.png")`;
            }else if(el.id.includes("titan")){
                  planettit.textContent = "Titan";
                   planettxt.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
                   milTxt.textContent = "1.6 bil. km Est.";
                   milMonth.textContent = "7 years";
                    planetBox.style.backgroundImage = `url("image-titan.png")`;
            }
        })
    })

    }
 
 
planetInf()
 