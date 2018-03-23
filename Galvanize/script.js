// $(document).ready(function(){
//     animateDiv('#a');
//     animateDiv('#b');
//     animateDiv('#c');
//     animateDiv('#d');
//     animateDiv('#e');
//     animateDiv('#f');
//     animateDiv('#g');
//     animateDiv('#h');
//     animateDiv('#i');
//     animateDiv('#j');
//     animateDiv('#k');
//     animateDiv('#l');
//     animateDiv('#m');
//     animateDiv('#n');
//     animateDiv('#o');
//      animateDiv('#p');
//       animateDiv('#q');
//        animateDiv('#r');
// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     // var xspeed= 1;
//     // var yspeed=1; 

//     var h = $(window).height() - 100;
//     var w = $(window).width() - 100;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(myclass){

//     var newq = makeNewPosition();
//     $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
//       animateDiv(myclass);        
//     });
    
// };

