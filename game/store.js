setTimeout( () => {
    document.getElementById("human-store").addEventListener('click', ()=> {
      toggleTabs('.human-store', '.animal-store');
    });
    
    document.getElementById("animal-store").addEventListener('click', ()=> {
      toggleTabs('.animal-store', '.human-store');
    });
    
    function toggleTabs(toShow, toHide){
      const tabToHide = document.querySelector(toHide);
      tabToHide.classList.remove('show');
      tabToHide.classList.add('hide');
      const tabToShow = document.querySelector(toShow);
      tabToShow.classList.remove('hide');
      tabToShow.classList.add('show');
    }
}, 1000);
