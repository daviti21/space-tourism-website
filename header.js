fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
   
    })
    .catch(err => console.error('Header load failed:', err));
    
  

 