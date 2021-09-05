// Note: Assets are referenced using the following path: '/assets/your-file.png'
/*------------------------------------------------------------*/
//  BALL
/*------------------------------------------------------------*/
function Ball() {
    this.element = document.getElementById("ballContainer");
    this.ballGraphic = document.querySelector("#ballContainer #ball");
    this.totalFrames = 23;
    this._frame = 1;
    this.frameHeight = this.element.offsetHeight;
}

Ball.prototype = {
    get left(){
        return this.element.offsetLeft;
    },
    set left(val){
        this.element.style.left = val+"px";
    },
    get top(){
        return this.element.offsetTop;
    },
    set top(val){
        this.element.style.top = val+"px";
    },
    get frame(){
        return this._frame;
    },
    set frame(val){
        // gets remainder
        this._frame = Math.round(val);
        var remainder = Math.round(val) % this.totalFrames;
        var yPos = ((-1*(remainder * this.frameHeight)) + "px");
        this.ballGraphic.style.backgroundPosition = "0px " + yPos;
        // console.log("REMAINDER: "+remainder+" | POSITION: "+("0px " + yPos));
    },
}

// Instantiates our ball object
var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
var ball = new Ball();

/*------------------------------------------------------------*/
//  FUNCTIONS
/*------------------------------------------------------------*/
// SETUP ANIMATION ITEMS
initAnimation = function () {
    console.log("DID THIS ANIMATE?");
    tl.to("#bg", 0.5, {opacity:1, ease:Linear.easeNone}, "0.5");
    tl.to(ball, 1.35, {left:361, frame:85, ease:Quad.easeOut}, "0.5");
    tl.to("#frameContainer", 1.35, {width:"422px", ease:Quad.easeOut}, "0.5");
    tl.to("#graphicContainer1 #graphic", 0.65, {bottom:"0px", ease:Quad.easeOut}, "0.85");
    tl.to("#graphicContainer1 #graphic", 0.65, {left:"227px", ease:Quad.easeInOut}, "3.5");
    tl.to("#text1", 0.5, {opacity:0, ease:Linear.easeNone}, "3.5");
    tl.to("#barTop", 0.65, {top:"37px", ease:Quad.easeInOut}, "3.5");
    tl.to("#frameContainer #textArea", 0.65, {height:"111px", ease:Quad.easeInOut}, "3.5");
    tl.to("#text2, #award", 0.5, {opacity:1, ease:Linear.easeNone}, "4");
    tl.to("#graphicContainer1 #graphic", 0.65, {left:"227px", top:"6px", width:"55px", height: "117px", ease:Quad.easeInOut}, "4.2");
    tl.to("#graphicContainer1 #graphic", 0.5, {top:"153px", ease:Quad.easeIn}, "7.25");
    tl.to("#award", 0.45, {opacity:0, ease:Linear.easeNone}, "7.75");
    tl.to(ball, 1.35, {left:-61, frame:1, ease:Quad.easeOut}, "7.5");
    tl.to("#frameContainer", 1.35, {width:"0px", ease:Quad.easeOut}, "7.5");
    tl.to("#resolve", 1.35, {width:"422px", ease:Quad.easeOut}, "7.5");

    tl.to(ball, 1.2, {onStart:function(){ball.top=117;}, left:127, frame:35, ease:Quad.easeOut}, "8.9");
    tl.to("#graphicContainer2 #graphic", 0.65, {bottom:"0px", ease:Quad.easeOut}, "9.15");

    tl.play();
}