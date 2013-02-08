$(document).ready(function() {
    tl = new TimelineMax({paused:true});
    tl.to($(canvas),2,{autoAlpha:1})
      .to($(canvas),8,{y:"80px",rotationY:"360"},-1);
});

$(window).load(function() {
    tl.play();
});
