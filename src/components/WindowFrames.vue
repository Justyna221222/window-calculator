<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter a frame type or select a window without a frame</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p > Enter the color of the frame.</p>
    </div>
    <div class= "brakRamki">
        <label class="noFrame">
            <input type="radio" id="brak" value="empty" v-model="windowFrame">
            <p>Window without frame. </p>
        </label>   
    </div> 
    <div class="choose">
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="czarna" value="black" v-model="windowFrame">
            <img src='/images/ramkaCzarna.png' alt="window frame" width="49" height="286">
            <p>Black</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="szara" value="gray" v-model="windowFrame">
            <img src='/images/ramkaSzara.png' alt="window frame" width="49" height="286">
            <p>Gray</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="ciemnyBraz" value="dark brown" v-model="windowFrame">
            <img src='/images/ramkaCiemnyBraz.png' alt="window frame" width="49" height="286">
            <p>Dark brown</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="jasnyBraz" value="light brown" v-model="windowFrame">
            <img src='/images/ramkaJasnyBraz.png' alt="window frame" width="49" height="286">
            <p>Light brown</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="biala" value="white" v-model="windowFrame">
            <img src='/images/ramkaBiala.png' alt="window frame" width="49" height="286">
            <p>White</p>
        </label>   
    </div>   
</div>
<div>
    <button @click="navigateToWinGlass" type="button" class="previous">Previous</button>
    <button @click="setFrames" type="button" class="next">Next</button>
</div>
</template>

<script>
    import {winFramesPriceSingle} from '../winFramesPriceSingle.js'
    import {winFramesPriceDouble} from '../winFramesPriceDouble.js'
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowFrame: '',
                winFramesPrice: '',
                winGlass:'',
                inputIsInvalid: false

            };
        },
        methods: {
            setFrames() {
                const winFrames = this.windowFrame;
                const winGlass = this.$store.state.winGlass;
                this.winGlass = winGlass;
                const area = this.$store.state.winArea;
                const winType = this.$store.state.winType;
                const winGlassPrice = this.$store.state.winGlassPrice;                    

                if(winFrames == ''){
                    this.inputIsInvalid = true;
                    return;
                } else if(winType == 'Door HS' && winGlass == 'single-chamber') {
                    const winGlassPrice = this.$store.state.winVennerPrice;
                    const winFramesPrice = winFramesPriceSingle(area, winFrames, winGlassPrice);
                    this.$store.commit('setWinFramePrice', winFramesPrice);
                    this.winFramesPrice = winFramesPrice;
                } else if(winType == 'Door HS' && winGlass == 'two-chamber') {
                    const winGlassPrice = this.$store.state.winVennerPrice;
                    const winFramesPrice = winFramesPriceDouble(area, winFrames, winGlassPrice);
                    this.$store.commit('setWinFramePrice', winFramesPrice);
                    this.winFramesPrice = winFramesPrice;
                } else if(winGlass == 'single-chamber') {
                    const winFramesPrice = winFramesPriceSingle(area, winFrames, winGlassPrice);
                    this.$store.commit('setWinFramePrice', winFramesPrice);
                    this.winFramesPrice = winFramesPrice;                  
                } else if(winGlass == 'two-chamber') {
                    const winFramesPrice = winFramesPriceDouble(area, winFrames, winGlassPrice);
                    this.$store.commit('setWinFramePrice', winFramesPrice);
                    this.winFramesPrice = winFramesPrice;
                } else {
                    this.winFramesPrice = 0;
                }
                this.$store.commit('setWinFrames', winFrames);                
                this.$router.push("/windowMuntins");
            },
            navigateToWinGlass() {
                this.$router.push("/windowGlass");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },             
        },
        beforeRouteEnter(to, from, next){
                const winGlass = store.state.winGlass;
                const winType = store.state.winType;
                var letIn;
                if(winGlass == '' && winType == 'Door HS') {
                    letIn = true;
                } else if(winGlass == '') {
                    letIn = false;
                } else {
                    letIn = true;
                }         
                next( letIn);
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 0 15px;
}
.choose {
     display: flex;
     flex-direction: row;
     flex-flow: row wrap;
     justify-content: center;
 }
.brakRamki {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}
.noFrame {
    display: flex;
    flex-direction: row;
    padding:0;
    margin: 20px auto auto 20%;
    justify-content: center;
    align-items: center;
}
.frame {
    margin: 5px;
}
.frame label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  [type=radio]:not(#brak) { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}
[type=radio] + p {
    cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked:not(#brak) + img {
  outline: 3px solid red;
}

[type=radio]:checked:not(#brak) + p {
  outline: 2px solid red;
}
.previous {
    float: left;
    padding: 10px 50px;
    display: inline-block;
    margin-left: 20px;
    width: 200px;
}
.next {
    float: right;
    padding: 10px 50px;
    display: inline-block;
    margin-right: 20px;
    width: 200px;
}
.header {
    font-size: 20px;
    padding: 5px;
    text-align: center;
    background-color: #f3e0d1;
    margin: 0 0 10px 0;
    padding: 0;
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
    .header {
        margin: 20px 0 20px;
    }
    .noFrame {
        margin: 20px auto auto auto;
    }
    img {
        width: 150px;
        height: 150px;
    }
    .next {
        padding: 5px 20px;
        font-size: 14px;
        margin:0 20px 20px 0;
        width: 120px;
    }
    .previous {
        padding: 5px 20px;
        font-size: 14px;  
        margin:0 0 20px 20px;
        width: 120px;

    }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .header {
        margin: 20px 0 20px 0;
    }
    .previous {
        margin: 0 0 20px 20px;
        padding: 5px 20px;
        font-size: 14px;
    }
    .next {
        margin: 0 20px 20px 0;
        padding: 5px 20px;
        font-size: 14px;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {

    .header {
        margin: 20px 0 20px 0;
    }
    .previous {
        margin: 0 0 20px 20px;
    }
    .next {
        margin: 0 20px 20px 0;
    }
}
</style>