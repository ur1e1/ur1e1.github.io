//Menu desplegable
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,{
      constrainWidth: false	
    });
  });
  
  // Or with jQuery
  
  $('.dropdown-trigger').dropdown();