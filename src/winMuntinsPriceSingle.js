export function winMuntinsPriceSingle(winMuntins, winType, winWidth, winHeight, winFramePrice) {
    //return 9 + winMuntins + winType;
    var muntinArea = 0;
    var muntinLength = 0;
    if(winType == "Fixed in the frame" || winType == "Side-hung" || winType == "Tilt" || winType == "Tilt&turn") {
        muntinArea = 4;
        muntinLength = winWidth + winHeight;
    } else if(winType == "Side-hung + tilt&turn" || winType == "Tilt&turn + FIX" || winType == "FIX + FIX" || winType == 'Tilt + tilt&turn') {
        muntinArea = 8;
        muntinLength = winWidth + (2 * winHeight);
    } else if(winType == "Side-hung + Side-hung + tilt&turn" || winType == "FIX + FIX + FIX") {
        muntinArea = 12;
        muntinLength = winWidth + (3 * winHeight);
    } else if(winType == "Side-hung + tilt&turn x 2") {
        muntinArea = 16;
        muntinLength = winWidth + (3 * winHeight);
    } else {
       muntinArea = 0;
    }
    if(winMuntins == 'white 26mm') {
        var meterPrice = 46;
    } else if(winMuntins == 'in the color of wood 26mm') {
        meterPrice = 69;
    } else if(winMuntins == 'white 45mm') {
        meterPrice = 65;
    } else if(winMuntins == 'in the color of wood 45mm') {
        meterPrice = 88;
    } else if(winMuntins == 'empty') {
        meterPrice = 0;
        muntinArea = 0;
    } else {
        return 0;
    }
    const winMuntinsPrice = winFramePrice + ((2 * 38 * muntinArea) + (muntinLength * meterPrice));
    return winMuntinsPrice;

}