const body = document.querySelector("body");

const backgrounds = { 
    "index.html": { 
        desktop: "images/background-home-desktop.jpg",
        tablet: "images/background-home-tablet.jpg",
        mobile: "images/background-home-mobile.jpg" 
    },
    "crew.html": { 
        desktop: "images/background-crew-desktop.jpg", 
        tablet: "images/background-crew-tablet.jpg",
        mobile: "images/background-crew-mobile.jpg" 
    }, 
    "destination.html": { 
        desktop: "images/background-destination-desktop.jpg",
        tablet: "images/background-destination-tablet.jpg",
        mobile: "images/background-destination-mobile.jpg" 
    },
    "technology.html": { 
        desktop: "images/background-technology-desktop.jpg", 
        tablet: "images/background-technology-tablet.jpg",
        mobile: "images/background-technology-mobile.jpg" 
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
        nameP[0].click()
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
 
function crewInf(){
    const crewButton = document.querySelectorAll(".crew-btn");
    const crewName = document.querySelector(".crew-name");
    const crewPos = document.querySelector(".position");
    const crewTxt = document.querySelector(".crew-txt");
    const personBox = document.querySelector(".person-box");

    crewButton.forEach(el => {
        crewButton[0].click();
        el.addEventListener("click", () => {
             crewButton.forEach(btn => {
                btn.style.backgroundColor = "#25262a"
             })

             el.style.backgroundColor = "#fff";

             if(el.id.includes("btn1")){
                crewPos.textContent = "Commander Douglas";
                crewName.textContent = "Hurley Douglas";
                crewTxt.textContent = "Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                personBox.style.backgroundImage = `url(image-douglas-hurley.png)`;
            }else if(el.id.includes("btn2")){
                 crewPos.textContent = "Pilot";
                crewName.textContent = "Victor Glover";
                crewTxt.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
                personBox.style.backgroundImage = `url(image-victor-glover.png)`;

            }else if(el.id.includes("btn3")){
                 crewPos.textContent = "Mission Specialist";
                crewName.textContent = "Mark Shuttleworth";
                crewTxt.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                personBox.style.backgroundImage = `url(image-mark-shuttleworth.png)`;

            }else if(el.id.includes("btn4")){
                 crewPos.textContent = "Flight Engineer";
                crewName.textContent = "Anousheh Ansari";
                crewTxt.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
                personBox.style.backgroundImage = `url(image-anousheh-ansari.png)`;

            }

        })

    })
}
crewInf()


function tecInf(){
    const tecButtons = document.querySelectorAll(".tec-btn");
    const tecTit = document.querySelector(".tec-tit");
    const tecTxt = document.querySelector(".tec-txt");
    const tecImg = document.querySelector(".tec-img");
    const minSize = 1024;
    const imgType = window.innerWidth <= minSize ? "landscape" : "portrait";
      
    tecButtons.forEach(el => {
       
        el.addEventListener("click", () => {
            tecButtons.forEach(btn => {
                  btn.style.color = "#fff";
                btn.style.border = "0.5px solid rgba(255, 255, 255, 0.397)";
                btn.style.backgroundColor = "transparent";
            })

            el.style.color = "#0b0d19";
            el.style.backgroundColor = "#fff"

            if(el.id.includes("tec1")){
                tecTit.textContent = "Launch vehicle";
                tecTxt.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
                tecImg.style.backgroundImage = `url("image-launch-vehicle-${imgType}.jpg")`;
            }else if(el.id.includes("tec2")){
                tecTit.textContent = "Space capsule"
                 tecTxt.textContent= "capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";   
                    tecImg.style.backgroundImage = `url("image-space-capsule-${imgType}.jpg")`;
                 
        }else if(el.id.includes("tec3")){
                tecTit.textContent = "Spaceport"
                 tecTxt.textContent= "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
                    tecImg.style.backgroundImage = `url("image-spaceport-${imgType}.jpg")`;
        }
    })
    })
    tecButtons[0].click()
}

tecInf()