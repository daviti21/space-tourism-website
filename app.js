const body = document.querySelector("body");

const backgrounds = {
    "index.html": {
        desktop: "background-home-desktop.jpg",
        tablet: "background-home-tablet.jpg",
        mobile: "background-home-mobile.jpg"
    },
    "crew.html": {
        desktop: "background-crew-desktop.jpg",
        tablet: "background-crew-tablet.jpg",
        mobile: "background-crew-mobile.jpg"
    },
    "destination.html": {
        desktop: "background-destination-desktop.jpg",
        tablet: "background-destination-tablet.jpg",
        mobile: "background-destination-mobile.jpg"
    },
    "technology.html": {
        desktop: "background-technology-desktop.jpg",
        tablet: "background-technology-tablet.jpg",
        mobile: "background-technology-mobile.jpg"
    }
};

const currentPage = window.location.pathname.split("/").pop();

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
 

 