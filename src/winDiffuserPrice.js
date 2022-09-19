export function winDiffuserPrice(winDiffuser, winMuntinsPrice) {
    var diffuserPrice = 0;
    if(winDiffuser == 'VENTEC pressure white') {
        diffuserPrice = 98;
    } else if(winDiffuser =='VENTEC pressure white/color'){
        diffuserPrice = 110;
    } else if(winDiffuser =='VENTEC pressure double-sided color'){
        diffuserPrice = 122;  
    } else if(winDiffuser =='VENTEC manual white'){
        diffuserPrice = 73;   
    } else if(winDiffuser =='VENTEC manual white/color'){
        diffuserPrice = 85;  
    } else if(winDiffuser =='VENTEC manual double-sided color'){
        diffuserPrice = 98; 
    } else if(winDiffuser =='VENTEC automatic white'){
        diffuserPrice = 220;
    } else if(winDiffuser =='VENTEC automatic white/color'){
        diffuserPrice = 232;
    } else if(winDiffuser =='VENTEC automatic double-sided color'){
        diffuserPrice = 244;  
    } else if(winDiffuser =='AERECO AMO 103'){
        diffuserPrice = 98;   
    } else if(winDiffuser =='AERECO EMM 707 white'){
        diffuserPrice = 250;  
    } else if(winDiffuser =='AERECO EMM 707 color'){
        diffuserPrice = 287; 
    } else if(winDiffuser =='AERECO EXR 306 white'){
        diffuserPrice = 323; 
    } else if(winDiffuser =='AERECO EXR 306 color'){
        diffuserPrice = 366;  
    } else if(winDiffuser =='AERECO EXR 309 white'){
        diffuserPrice = 433;  
    } else if(winDiffuser =='AERECO EXR 309 color'){
        diffuserPrice = 508; 
    } else if(winDiffuser =='RENSON TC45/24'){
        diffuserPrice = 592;
    } else if(winDiffuser =='RENSON TC60/24'){
        diffuserPrice = 616;
    } else if(winDiffuser =='RENSON THM90/24'){
        diffuserPrice = 787;                          
    } else if(winDiffuser == 'empty'){
        diffuserPrice = 0;
    } else {
        diffuserPrice = 0
    }
    const winDiffuserPrice = winMuntinsPrice + diffuserPrice;
    return winDiffuserPrice;
}