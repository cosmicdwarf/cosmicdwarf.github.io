/*----------------Contact Us-------------------*/

/*---------Greeting------------*/

document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Hey, there", "How was your experience ?", "We appreciate your valuable feedback."];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("#greetcont").innerHTML = text.substring(0, i+1) +'<span id="spanid" aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }

   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  
  StartTextAnimation(0);
});

/*----------Contact-----------*/

document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Have some questions ?", "Get in touch with us."];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("#contcont").innerHTML = text.substring(0, i+1) +'<span id="spanid" aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1500);
    }
  }

   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  
  StartTextAnimation(0);
});
