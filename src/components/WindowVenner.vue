<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter the type of veneer.</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>

<div class="header">
     <p> Enter the type of veneer.</p>
</div>
     
<div class="choose">
    <div class="vennerItem">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="type1" value="one-sided" v-model="winVenner">
            <img src='/images/jednostronna.jpg' alt="window glass" width="256" height="256">
            <p> One-sided veneer</p>
            <p class="small"> Outer side - color, inner side - white</p>
        </label>   
    </div>
    <div class="vennerItem">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="type2" value="two-sided" v-model="winVenner">
            <img src='/images/dwustronna.jpg' alt="window glass" width="256" height="256">
            <p> Two-sided veneer</p>
            <p class="small"> Outer side and inner side in color</p>
        </label>
    </div>
</div>

    <div>
        <button @click="navigateToWinProfile" type="button" class="previous">Previous</button>
        <button @click="setWinVenner" type="button" class="next">Next</button>
    </div>   
</template>

<script>
    import store from '../store/index.js';  // import the store
    import { winPriceHSDoubleColor } from '../winPriceHSDoubleColor.js';
    export default {
        data() {
            return {
                winVenner: "",
                inputIsInvalid: false,
                winType: "cos"
            };
        },
        methods: {
            setWinVenner() {
                const windowVenner = this.winVenner;
                const winSizePrice = this.$store.state.winSizePrice;
                var winProfilePrice;
                const winType = this.$store.state.winType;
                const wWidth = this.$store.state.width;
                const wHeight = this.$store.state.height;
                if(winType == 'Door PSK + FIX' || winType == 'Door PSK + FIX Perfectherm') {
                    winProfilePrice = winSizePrice;
                } else {
                    winProfilePrice = this.$store.state.winProfilePrice;
                } 
                if(windowVenner == '') {
                    this.inputIsInvalid = true;
                    return;
                } else if(winType == 'Door HS' && windowVenner == 'one-sided') {
                    const winVennerPrice = winSizePrice;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else if(winType == 'Door HS' && windowVenner == 'two-sided') {
                    const winVennerPrice = winPriceHSDoubleColor(wWidth, wHeight);
                    this.$store.commit('setWinVennerPrice', winVennerPrice);                
                } else if(windowVenner == 'one-sided') {
                    const winVennerPrice = (Math.round((winSizePrice * 0.25) * 100) / 100) + winProfilePrice;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else if (windowVenner == 'two-sided') {
                    const winVennerPrice = (Math.round((winSizePrice * 0.44) * 100) / 100) + winProfilePrice;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else {
                    return 0;
                }
                if(winType == 'Door HS') {
                    this.$store.commit('setWinGlass', 'two-chamber');
                    this.$store.commit('setWinVenner', windowVenner);
                    this.$router.push('/windowFrames');                    
                } else {
                    this.$store.commit('setWinVenner', windowVenner);
                    this.$router.push('/windowGlass');                    
                }

            },
            navigateToWinProfile() {
                this.$router.push("/windowProfile");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },
        },
            beforeRouteEnter(to, from, next){
                const winWidth = store.state.width;
                const winHeight = store.state.height;
                const winType = store.state.winType;
                    next(winType !=='' && winType !== 'Single-leaf door PVC 1' && winType !== 'Single-leaf door PVC 2' && winType !== 'Double-leaf door PVC' && winHeight !=='' && winWidth !== '');
            }
    }

</script>

<style scoped>
.choose {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
 }

.choose p {
    color: black;
    padding: 15px 0 0 0;
}
label {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.vennerItem {
    margin: 5px;
}
  [type=radio] { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  outline: 3px solid red;
}
label p {
    padding: 0;
    margin: 0;
}
.small {
    font-size: 15px;
    padding: 0;
    margin: 0;
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
    margin: 0;
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