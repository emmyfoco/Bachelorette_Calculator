function calculatePrice(costCalculator){

    //Get selected data  
    var elt = document.getElementById("nightsMansion");
    var nights = elt.options[elt.selectedIndex].value;
      
    var elt = document.getElementById("dinners");
    var dinners = elt.options[elt.selectedIndex].value;
      
    var elt = document.getElementById("brunches");
    var brunches = elt.options[elt.selectedIndex].value;
      
    var elt = document.getElementById("booze");
    var booze = elt.options[elt.selectedIndex].value;

    //convert data to integers
    nights = parseInt(nights);
    dinners = parseInt(dinners);
    brunches = parseInt(brunches);
    booze = parseInt(booze);
    
    //calculate total value  
    var total = nights+dinners+brunches+booze; 
      
    //print value to  PicExtPrice 
    document.getElementById("finalTotal").value=total;
  }