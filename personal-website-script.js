/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleOrbitingIslands() {
    document.getElementById("orbitingIslandDropdown").classList.toggle("show");
  }

function toggleWaterCV() {
    document.getElementById("waterCVDropdown").classList.toggle("show");
  }

function toggleConePeak2021() {
    document.getElementById("ConePeak2021Dropdown").classList.toggle("show");
  }

function toggleTelescopePeak2022() {
    document.getElementById("TelescopePeak2022Dropdown").classList.toggle("show");
  }

function toggleMicroMouse() {
    document.getElementById("MicroMouseDropdown").classList.toggle("show");
  }

function toggleSlaveShipDatabase() {
    document.getElementById("SlaveShipDatabaseDropdown").classList.toggle("show");
  }

  
  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropdownbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }