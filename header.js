fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
   const aBox = document.querySelectorAll(".aBox");

 aBox.forEach(el => {
    el.addEventListener("click",()=> {
         document.querySelectorAll(".headdown").forEach(line => line.remove());

         const headerD = document.createElement("div");
         el.appendChild(headerD);
         headerD.classList.add("headdown");
    })
 })
    })
    .catch(err => console.error('Header load failed:', err));

    const logo = document.querySelector(".logo-box");
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});
    
  

 