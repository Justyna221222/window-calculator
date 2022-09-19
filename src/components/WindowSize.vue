<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter the height and width of the window in millimeters</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<error-message v-if="incorrectSize" @close="confrimErrorSize">
    <template #default>
        <p>It looks like we don't offer a window with this size.</p>
        <p>If you need an unusual window, please contact us:</p>
        <p>e:mail: WK@windowscork.ie</p>
        <p>Phone: 087 467 4850</p>
    </template>
    <template #actions>
        <button @click="confrimErrorSize">Ok</button>
    </template>
</error-message>
 <div class="container">
    <div class="header">
        <p> Enter the height and width of the window in millimeters</p>
    </div>
    <div class="winImgInputs">
        <div :class="{invalid:widthValidity === 'invalid'}" class="WinWidth">
            <label to='winWidth'>Width</label>
            <input type='text' id='winWidth' v-model.trim="winWidth" @blur="validateWidth" size='10'>
            <p v-if="widthValidity === 'invalid'">Enter the window width in millimeters</p>
        </div>
     <div class="imgAndHeight">
        <img :src='source' alt="window">
        <div :class="{invalid:heightValidity === 'invalid'}">        
            <label to='winHeight'>Height</label>
            <input type='text' id='winHeight' v-model.trim="winHeight" @blur="validateHeight" size='10'>
            <p v-if="heightValidity === 'invalid'">Enter the window height in millimeters</p>      
        </div>
    </div>
    </div>
    <div class='nextAndPrevious'>
        <button @click="navigateToWinType" type="button" class="previous">Previous</button>
        <button @click="setWinSize" type="button" class="next">Next</button>
    </div>  
</div> 
</template>

<script>
    import { winSizePriceF } from '../winPriceF.js';
    import { winSizePriceR } from '../winPriceR.js';
    import { winSizePriceRRU } from '../winPriceRRU.js';
    import { winSizePriceRUF } from '../winPriceRUF.js';
    import { winSizePriceU } from '../winPriceU.js';
    import { winSizePriceRU } from '../winPriceRU.js';
    import { winSizePriceRRRU } from '../winPriceRRRU.js';
    import { winSizePriceFF } from '../winPriceFF.js';
    import { winSizePriceFFF } from '../winPriceFFF.js';
    import { winPriceDPSKF } from '../winPriceDPSKF.js';
    import { winPriceDPSKFPerfectherm } from '../winPriceDPSKFPerfectherm.js';
    import { winPriceHS } from '../winPriceHS.js';
    import { winPriceDsingle } from '../winPriceDsingle.js';
    import { winPriceDsingle1 } from '../winPriceDsingle1.js'
    import { winPriceDdoublePVC } from '../winPriceDdoublePVC.js'
    import { winPriceURU } from '../winPriceURU.js'
    import { winPriceRRUX2 } from '../winPriceRRUX2.js'
    import store from '../store/index.js';  // import the store    
    export default {
        data() {
            return {
                winWidth: null,
                winHeight: null,
                inputIsInvalid: false,
                incorrectSize: false,
                widthValidity: 'pending',
                heightValidity: 'pending',
                winType:''
            };
        },
        computed: {
            winSizePrice() {
            const wWidth = this.winWidth;
            const wHeight = this.winHeight;
            const winType = this.$store.state.winType;
            if(winType == 'Fixed in the frame') {
                 const winPrice = winSizePriceF(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Side-hung'){
                const winPrice = winSizePriceR(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Side-hung + tilt&turn'){
                const winPrice = winSizePriceRRU(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Tilt&turn + FIX'){
                const winPrice = winSizePriceRUF(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Tilt'){
                const winPrice = winSizePriceU(wWidth, wHeight);
                return winPrice;                                
            } else if(winType == 'Tilt&turn'){
                const winPrice = winSizePriceRU(wWidth, wHeight);
                return winPrice;  
            } else if(winType == 'Tilt + tilt&turn'){
                const winPrice = winPriceURU(wWidth, wHeight);
                return winPrice;  
            } else if(winType == 'Side-hung + tilt&turn x 2'){
                const winPrice = winPriceRRUX2(wWidth, wHeight);
                return winPrice; 
            } else if(winType == 'Side-hung + Side-hung + tilt&turn'){
                const winPrice = winSizePriceRRRU(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'FIX + FIX'){
                const winPrice = winSizePriceFF(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'FIX + FIX + FIX'){
                const winPrice = winSizePriceFFF(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'Door PSK + FIX'){
                const winPrice = winPriceDPSKF(wWidth, wHeight);
                return winPrice;     
            } else if(winType == 'Door PSK + FIX Perfectherm'){
                const winPrice = winPriceDPSKFPerfectherm(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'Door HS'){
                const winPrice = winPriceHS(wWidth, wHeight);
                return winPrice;    
            } else if(winType == 'Single-leaf door PVC 1'){
                const winPrice = winPriceDsingle(wWidth, wHeight);
                return winPrice; 
            } else if(winType == 'Single-leaf door PVC 2'){
                const winPrice = winPriceDsingle1(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Double-leaf door PVC'){
                const winPrice = winPriceDdoublePVC(wWidth, wHeight);
                return winPrice;                                              
            }  else {
                return 0;
            }
           
            },
        source() {
            const winType = this.$store.state.winType;
            if(winType == 'Fixed in the frame') {
                return '/images/WinSize/FIXwRamie1.png';
            } else if(winType == 'Side-hung'){
                return '/images/WinSize/rozwierne1.png';
            } else if(winType == 'Side-hung + tilt&turn'){
                return '/images/WinSize/rozwierne+rozwierno-uchylne1.png';
            } else if(winType == 'Tilt&turn + FIX'){
                return '/images/WinSize/rozwierno-uchylne+FIX1.png';
            } else if(winType == 'Tilt'){
                return '/images/WinSize/uchylne1.png';                                
            } else if(winType == 'Tilt&turn'){
                return '/images/WinSize/rozwierno-uchylne1.png';  
            } else if(winType == 'Side-hung + Side-hung + tilt&turn'){
                return '/images/WinSize/rozwierne+rozwierne+rozwierno-uchylne1.png';   
            } else if(winType == 'FIX + FIX'){
                return '/images/WinSize/staleFIX+FIX1.png';   
            } else if(winType == 'FIX + FIX + FIX'){
                return '/images/WinSize/stałeFIX+FIX+FIX1.png';
            } else if(winType == 'Door PSK + FIX'){
                return '/images/WinSize/DPSK+FIX.png';    
            } else if(winType == 'Door PSK + FIX Perfectherm'){
                return '/images/WinSize/DPSK+FIX.png';   
            } else if(winType == 'Door HS'){
                return '/images/WinSize/HS+FIX.png';  
            } else if(winType == 'Single-leaf door PVC 1'){
                return '/images/WinSize/DrzwiJednoPVC1.png';   
            } else if(winType == 'Single-leaf door PVC 2'){
                return '/images/WinSize/DrzwiJednoPVC2.png';   
            } else if(winType == 'Double-leaf door PVC'){
                return '/images/WinSize/DrzwiDwuPVC.png';  
            } else if(winType == 'Tilt + tilt&turn'){
                return '/images/WinSize/uchylne+rozwierno-uchylne.png';   
            } else if(winType == 'Side-hung + tilt&turn x 2'){
                return '/images/WinSize/rozwierne+rozwierno-uchylneX2.png';                                                  
            }  else {
                return 0;
            }
        }                 
        },
        methods: {
            setWinSize() {
                const winType = this.$store.state.winType;
                this.winType = winType;
                const windowWidth = this.winWidth;
                const windowHeight = this.winHeight;
                const winArea = ((windowHeight/1000) * (windowWidth/1000));
                const winSizePrice = this.winSizePrice;
                if(windowWidth == null || windowHeight == null || isNaN(this.winWidth) || isNaN(this.winHeight)) {
                    this.inputIsInvalid = true;
                    return;
                } else if(winSizePrice == 0) {
                    this.incorrectSize = true;
                    return;
                }
                this.$store.commit('setWidth', windowWidth);
                this.$store.commit('setHeight', windowHeight);
                this.$store.commit('setWinSizePrice', winSizePrice);
                this.$store.commit('setWinArea', winArea);
                if(winType == 'Door PSK + FIX' || winType == 'Door PSK + FIX Perfectherm' || winType == 'Door HS') {
                    this.$router.push("/windowVenner")
                } else if(winType == 'Single-leaf door PVC 1' || winType == 'Single-leaf door PVC 2' || winType == 'Double-leaf door PVC') {
                    this.$store.commit('setWinBlindPrice', winSizePrice);
                    this.$store.commit('setBasketDisabled');  
                    this.$router.push("/summary")
                } else {
                this.$router.push("/windowProfile");                      
                }


            },
            navigateToWinType() {
                this.$router.push("/windowType");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },
            confrimErrorSize() {
                this.incorrectSize = false;
            },
            validateWidth() {
                if(this.winWidth === null || isNaN(this.winWidth)) {
                    this.widthValidity = 'invalid';
                } else {
                    this.widthValidity = 'valid';
                }
            },
            validateHeight() {
                if(this.winHeight === null || isNaN(this.winHeight)) {
                    this.heightValidity = 'invalid';
                } else {
                    this.heightValidity = 'valid';
                }
            },            
        },
        beforeRouteEnter(to, from, next){
                const winType = store.state.winType;
                next(winType !== '');
            }
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.winImgInputs {
    margin: 30px 0 20px 0;
}

p {
    color: black;
}
label {
    padding: 10px;
}
.nextAndPrevious {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.next {
    padding: 10px 50px;
    margin-right: 100px;
    width: 200px;
}
.previous {
    padding: 10px 50px;
    margin-left: 20px;
    width: 200px;
}
.header {
    font-size: 20px;
    padding: 0;
    text-align: center;
    background-color: #f3e0d1;
    margin: 0;
    color: black;
}
div.invalid input {
    border: 1px solid red;
}
div.invalid label {
    color: red;
}
.imgAndHeight {
    display:flex;
    flex-direction: row;
    align-items: center;
}
img {
    width: "434px";
    height: "295px";
    margin: 20px 0 40px 0;
}
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #cb2c2c;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #690f0f;
  border-color: #270041;
}

@media only screen and (min-width: 0px) and (max-width: 576px) {
    * {
    margin: 0;
    padding: 0;
}
    .container {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        height: 100vw;
    }
   .imgAndHeight img {
        width: 180px;
        height: 122px;
    }
    .imgAndHeight label{
       margin: 0;
       padding: 0; 
    }
    .header p{
        margin: 15px 0 5px 0;
        font-size: 17px;
        padding: 0;
        width: 100%;
    }
    .next {
        padding: 5px 20px;
        font-size: 14px;
        margin-right: 20px;
        width: 120px;
    }
    .previous {
        padding: 5px 20px;
        font-size: 14px; 
        width: 120px;               
    }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .next {
        width: 200px;
    }
    .previous {
        width: 200px;
    }
    .header p{
        width: 100vw;
        background-color: #f3e0d1;
    }
}

</style>