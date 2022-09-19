<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter the type of glass</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p> Enter the type of glass</p>
    </div>
    <div class="choose">
    <div v-if="glassAccepted" class="glassItem">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="jednokomorowe" value="single-chamber" v-model="windowGlass">
            <img src='/images/glass2.jpg' alt="window glass" width="256" height="256">
            <p> Single-chamber</p>
        </label>
    </div>
    <div class="glassItem">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="dwukomorowe" value="two-chamber" v-model="windowGlass">
            <img src='/images/glass3.jpg' alt="window glass" width="256" height="256">
            <p> Two-chamber </p>
        </label>
    </div>

</div>
<div v-if="!glassAccepted" class="onlyTwoChamber">
    <p>Profile <strong>{{ this.$store.state.winProfile }}</strong> it is only available with the two-chamber package</p>
</div>
<div>
    <button @click="navigateToWinVenner" type="button" class="previous">Previous</button>
    <button @click="setGlass" type="button" class="next">Next</button>
</div>
</template>

<script>
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowGlass: '',
                area:'',
                inputIsInvalid: false
            };
        },
        computed: {
            glassAccepted() {
                const winProfile = this.$store.state.winProfile;
                if(winProfile == "schuco" || winProfile == "veka" || winProfile == "aluplast" || winProfile == "sonarol") {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods: {
            setGlass() {
                const winGlass = this.windowGlass;
                const winVennerPrice = this.$store.state.winVennerPrice;
                const winArea = this.$store.state.winArea;
                this.area = winArea;
                if(winGlass == '') {
                    this.inputIsInvalid = true;
                    return;
                } else if(winGlass == 'single-chamber') {
                    const winGlassPrice = winVennerPrice;
                    this.$store.commit('setWinGlassPrice', winGlassPrice);
                } else if(winGlass == 'two-chamber') {
                    const winGlassPrice = Math.round(winVennerPrice + (140 * winArea)) * 100 / 100;
                    this.$store.commit('setWinGlassPrice', winGlassPrice);
                } else {
                    return 0;
                }
                this.$store.commit('setWinGlass', winGlass);
                this.$router.push("/windowFrames");
            },
            navigateToWinVenner() {
                this.$router.push("/windowVenner");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },            
        },
        beforeRouteEnter(to, from, next){
                const winVenner = store.state.winVenner;
                const winType = store.state.winType;
                next(winVenner !== '' && winType !== 'Drzwi HS');
            }
    };
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
.glassItem {
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
.onlyTwoChamber {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    margin: 0 0 30px 0;
}
.onlyTwoChamber p {
    display: block;
    width: 100%;
    color: darkred;
    background-color: #E6E6E6;
    padding: 10px 20px;
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