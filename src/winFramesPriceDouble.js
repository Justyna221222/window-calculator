export function winFramesPriceDouble(area, winFrames, winGlassPrice) {
   if(winFrames == "black") {
        const winFramesPrice = winGlassPrice + (area * 30);
        return winFramesPrice;
    } else if(winFrames == "gray" || winFrames == "dark brown" || winFrames == "light brown"){
        const winFramesPrice = winGlassPrice + (area * 44);
        return winFramesPrice;
    } else if(winFrames == "white") {
        const winFramesPrice = winGlassPrice + (area * 70);
        return winFramesPrice;
    } else if(winFrames == "empty") {
        const winFramesPrice = winGlassPrice;
        return winFramesPrice; 
    } else {
        return 0;
    }
}

