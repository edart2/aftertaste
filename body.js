document.addEventListener('DOMContentLoaded', () => {
    let activeItem = null;

    document.addEventListener('click', event => {
      if (event.target.classList.contains('gradient')) {
        const rList = event.target.closest('.r-list');
        const itemDescription = rList.querySelector('.item-description');
        const onPopUp = rList.querySelector('.on-pop-up');
        if (rList !== activeItem) {
          if (activeItem) {
            resetElement(activeItem);
          }
          activeItem = rList;
          const rect = rList.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const translateX = window.innerWidth / 2 - centerX;
          const translateY = window.innerHeight / 2 - centerY;
          rList.style.transition = 'transform 0.2s ease';
          rList.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.71)`;
          rList.style.zIndex = '8';
          rList.classList.add('bShadow');
          itemDescription.style.display = 'block';
          itemDescription.style.fontSize = '2.5vw';
          const itemTitle = rList.querySelector('.item-title');
          itemTitle.style.fontSize = '3vw';
          itemTitle.style.minWidth = '';
          const itemPrice = rList.querySelector('.item-price');
          itemPrice.style.fontSize = '3vw';
          const textWrap = rList.querySelector('.text-wrap');
          textWrap.style.width = 'auto';
          onPopUp.style.display = 'flex';
        } else {
          resetElement(activeItem);
          activeItem = null;
        }
      } else if (activeItem) {
        resetElement(activeItem);
        activeItem = null;
      }
    });

    function resetElement(element) {
      element.style.transition = 'transform 0.2s ease';
      element.style.transform = 'none';
      element.style.zIndex = '1';
      element.classList.remove('bShadow');
      const itemDescription = element.querySelector('.item-description');
      itemDescription.style.display = 'none';
      itemDescription.style.fontSize = '';
      const itemTitle = element.querySelector('.item-title');
      itemTitle.style.fontSize = '';
      itemTitle.style.minWidth = '38vw';
      const itemPrice = element.querySelector('.item-price');
      itemPrice.style.fontSize = '';
      const onPopUp = element.querySelector('.on-pop-up');
      onPopUp.style.display = 'block';
      const textWrap = element.querySelector('.text-wrap');
      textWrap.style.width = '';
    }
  });
  
  




document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  if (id) {
    // Handle the "id" query parameter here, e.g. show specific content, make an API call, etc.
    console.log('ID:', id);
  }
});




  $( function() {
    $( "#resizable" ).resizable();
  } );
 







  document.addEventListener('DOMContentLoaded', () => {
    let activeItem = null;

    document.addEventListener('click', event => {
      // ... (Existing click event code remains unchanged)
    });

    function resetElement(element) {
      // ... (Existing resetElement function code remains unchanged)
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
      // Handle the "id" query parameter here, e.g. show specific content, make an API call, etc.
      console.log('ID:', id);
    }

