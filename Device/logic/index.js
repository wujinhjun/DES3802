const bodyEle = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");

btn.onclick = () => {
    if (bodyEle.requestFullscreen) {
        bodyEle.requestFullscreen();
        console.log("ok");
    }
    screen.orientation.lock("landscape")
        .then(() => {
            console.log("yes!!!");
        })
        .catch((err) => {
            console.error(err);
        })
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }

}



if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
        // // alpha: rotation around z-axis
        // var rotateDegrees = event.alpha;
        // // gamma: left to right
        // var leftToRight = event.gamma;
        // beta: front back motion
        const tempX = event.beta;
        handleOrientationEvent(tempX);

    }, true);
}


const handleOrientationEvent = function (x) {
    // do something amazing
    // alert(`x: ${frontToBack}; y: ${leftToRight}; z: ${rotateDegrees}`);
    // console.log(`x: ${frontToBack}`);
    // console.log(`y: ${leftToRight}`);
    // console.log(`z: ${rotateDegrees}`);
    const target = document.getElementById("x");
    const pX = target.innerHTML;
    // console.log(typeof pX);
    const tempX = x.toFixed(1);
    if (Math.abs(pX - tempX) > 1) {
        // console.log(`pX: ${pX}`);
        // console.log(`tempX: ${tempX}`);
        target.innerHTML = tempX;
        myHttp();
    }
};

const myHttp = () => {
    // console.log("hello");
    return 0;
}