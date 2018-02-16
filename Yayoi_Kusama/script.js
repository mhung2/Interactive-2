$(document).ready(function(){
    animateDiv('#aa');
    animateDiv('#bb');
    animateDiv('#cc');
    animateDiv('#dd');
    animateDiv('#e');
    animateDiv('#f');
    animateDiv('#g');
    animateDiv('#h');
    animateDiv('#i');
    animateDiv('#j');
    animateDiv('#k');
    animateDiv('#l');
    animateDiv('#m');
    animateDiv('#n');
    animateDiv('#o');
    animateDiv('#p');
    animateDiv('#q');
    animateDiv('#r');

    // animateDiv('#igm');
    // animateDiv('#igm2');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    // var xspeed= 1;
    // var yspeed=1; 

    var h = $(window).height() -10;
    var w = $(window).width() - 500;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){

    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });
    
};