const cube = document.getElementById("cube");

document.onmousedown = function(e){
    let x = e.clientX,
    y =e.clientY;

    document.onmousemove = function(e){
        let dx = e.clientX -x ,
        dy =e.clientY -y;
        cube.style.transform = "rotateX(" + dy + "deg) rotateY(" + dx + "deg)";
    };

    document.onmouseup = function(){
        document.onmousemove = null;
    };
};