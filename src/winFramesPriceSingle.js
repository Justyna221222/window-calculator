export function winFramesPriceSingle(area, winFrames, winGlassPrice) {

    if(winFrames == "black") {
        const winFramesPrice = winGlassPrice + (area * 15);
        return winFramesPrice;
    } else if(winFrames == "gray" || winFrames == "dark brown" || winFrames == "light brown"){
        const winFramesPrice = winGlassPrice + (area * 22);
        return winFramesPrice;
    } else if(winFrames == "white") {
        const winFramesPrice = winGlassPrice + (area * 40);
        return winFramesPrice;
    } else if(winFrames == "empty") {
    const winFramesPrice = winGlassPrice;
    return winFramesPrice;    
    } else {
        return 0;
    }
}