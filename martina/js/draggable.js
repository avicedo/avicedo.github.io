var draggableElements = document.getElementsByClassName("draggable");

  for (var i = 0; i < draggableElements.length; i++) {
    dragElement(draggableElements[i]);
  }

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = elmnt.querySelector(".bar");

    if (header) {
      header.onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
      return false;
    }

    function elementDrag(e) {
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.getTime();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime + ("  FREE MEMORY");
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);


function bringToTop(windowNumber) {
    var elements = document.getElementsByClassName('draggable');
  
    if (elements.length > 0) {
          // Find the highest z-index value on the page
        var highestZIndex = Math.max.apply(null, Array.from(document.querySelectorAll('.draggable'), function (el) {
        return parseFloat(window.getComputedStyle(el).zIndex) || 1;
        }));
  
          // Set the z-index of the targeted element to one higher than the highest z-index
        var targetElement = document.getElementById('window' + windowNumber);
        if (targetElement) {
         targetElement.style.zIndex = highestZIndex + 1;
        }
    }
}

function hideWindow(windowNumber) {
    var windowId = 'window' + windowNumber;
    var windowElement = document.getElementById(windowId);

    if (windowElement) {
      windowElement.style.display = 'none';
    }
}

function showWindow(windowNumber) {
    var windowId = 'window' + windowNumber;
    var windowElement = document.getElementById(windowId);

    if (windowElement) {
      windowElement.style.display = 'block';
    }
}

function toggleDivs(obraNumber) {
    // Construct the IDs for the divs
    var obraId = 'obra' + obraNumber;
    var footerObraId = 'footer_obra' + obraNumber;

    // Get references to the existing divs
    var repositorioDiv = document.getElementById('repositorio');
    var footerGeneralDiv = document.getElementById('footer_general');

    // Get references to the new divs
    var obraDiv = document.getElementById(obraId);
    var footerObraDiv = document.getElementById(footerObraId);

    // Toggle the display property to hide/show the divs
    if (repositorioDiv && footerGeneralDiv && obraDiv && footerObraDiv) {
      repositorioDiv.style.display = (repositorioDiv.style.display === 'none') ? 'block' : 'none';
      footerGeneralDiv.style.display = (footerGeneralDiv.style.display === 'none') ? 'block' : 'none';

      obraDiv.style.display = (obraDiv.style.display === 'none') ? 'block' : 'none';
      footerObraDiv.style.display = (footerObraDiv.style.display === 'none') ? 'block' : 'none';
    }
  }

  function revertDivs() {
    // Get references to the existing divs
    var repositorioDiv = document.getElementById('repositorio');
    var footerGeneralDiv = document.getElementById('footer_general');

    // Get references to all new divs
    var obraDivs = document.querySelectorAll('.obra');
    var footerObraDivs = document.querySelectorAll('[id^="footer_obra"]');
    var obraAndFooterObraDivs = document.querySelectorAll('[id^="obra"], [id^="footer_obra"]');

    // Show the existing divs and hide all new divs
    if (repositorioDiv && footerGeneralDiv) {
      repositorioDiv.style.display = 'block';
      footerGeneralDiv.style.display = 'block';
    }

    obraDivs.forEach(function (obraDiv) {
      obraDiv.style.display = 'none';
    });

    obraAndFooterObraDivs.forEach(function (div) {
      div.style.display = 'none';
    });
  }