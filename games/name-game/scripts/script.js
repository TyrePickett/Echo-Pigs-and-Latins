// A $( document ).ready() block.

// $ = jQuery world 
$( document ).ready(function() { 
  
  console.log( "ready!" ); 
  
  //click the button
  
  //vanilla JS
  // let el; 
  // el = document.getElementById("btnUserName"); 
  // el.innerText = "something cool";
  
  $('#btnUserName').click(function() { 
    console.log("button clicked")
//     var x; 
//     var x = ""; //string
//     var y = 8; 
//     var z = TRUE; 
    
    let fname = $('#fname').val()
     
    console.log(fname);
      // $('#fname').val()
       
    let greeting;
    
    greeting = "Hey my name is, " + fname + "! who's asking?"

      fname = pigLatin(fname);
      $('#something').text(`Pig Latin name: ${fname}`);

 
    

  }); 
    function pigLatin(fname){
        /*Simplified pig latin*/
        fname = fname.toLowerCase();
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        var vowelFound = false;
        var vowelIndex = -1;
        var firstLetter = fname[0];
        const firstIsVowel = vowels.includes(firstLetter);
        var newName = "";
        if (firstIsVowel){
            console.log('first vowel');
            newName = `${fname+'ay'}`;
    
        }
        else {
            
            for (var i = 0; i < fname.length; i++) {
                if (vowels.includes(fname[i])) {
                    vowelFound = true;
                    vowelIndex = i;
                    console.log(`Vowel: ${fname[i]}`);
                    newName = `${fname.substring(i, fname.length)+fname.substring(0, i)+'ay'}`
                    break;
                }
    
            }
        }
        return newName;
    }
  
});