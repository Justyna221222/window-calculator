<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter the type of roller shutter or select the window without roller shutter</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p>Enter the type of roller shutter or select the window without roller shutter </p>
    </div>
    <div class="choose">
        <div class="narrow">
            <div class="brak">
                <div class="noBlind">
                 <input type="radio" id="brak" value="empty" name ="winBlind" v-model="windowBlind">
                 <label for="brak">Window without a roller shutter.</label>    
                </div>   
            </div>  
        </div>
        <hr>
            <div class="chooseItems">
                    <div class="blindItem">
                        <div class="narrow">
                            <input type="radio" id="reczna" value="manual" name ="winBlind" v-model="windowBlind">
                            <label for="reczna">Manual roller blind</label>
                        </div>
                        <img src='/images/roletazewnetrzna.png' alt="roleta ręczna" width="138" height="250">
                    </div>          
                    <div class="blindItem">
                        <div class="narrow">                        
                            <input type="radio" id="zsilnikiem" value="motorized" name ="winBlind" v-model="windowBlind">
                            <label for="zsilnikiem">Motorized roller blind</label>
                        </div>
                        <img src='/images/roletaSilnik1.png' alt="window blind" width="184" height="250">
                    </div>      
                    <div class="blindItem">
                        <div class="narrow">                        
                            <input type="radio" id="zsilnikiemzprzeciazeniem" value="overload motor" name ="winBlind" v-model="windowBlind">
                            <label for="zsilnikiemzprzeciazeniem">Roller shutter with an overload motor</label>
                        </div>
                        <img src='/images/roletaSilnik2.png' alt="window blind" width="157" height="250">
                    </div>      
            </div>
</div>
<div>
    <button @click="navigateToWinDiffusers" type="button" class="previous">Previous</button>
    <button @click="setBlind" type="button" class="next">Next</button>
</div>
</template>

<script>
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowBlind: '',
                inputIsInvalid: false
            };
        },
        methods: {
            setBlind() {
                const winBlind = this.windowBlind;
                const winDiffuserPrice = this.$store.state.winDiffuserPrice;
                const winArea = this.$store.state.winArea;
                var winBlindPrice;
                if(winBlind == ''){
                    this.inputIsInvalid = true;
                    return;
                } else if (winBlind == 'empty') {
                    winBlindPrice = Math.round(winDiffuserPrice);
                } else if(winBlind == 'manual') {
                    winBlindPrice = Math.round(winDiffuserPrice + (winArea * 300));
                } else if(winBlind == 'motorized') {
                    winBlindPrice = Math.round(winDiffuserPrice + (winArea * 300) + 210);
                } else if(winBlind == 'overload motor') {
                    winBlindPrice = Math.round(winDiffuserPrice + (winArea * 300) + 340);
                } else {
                    return 0;
                }
                this.$store.commit('setWinBlind', winBlind);
                this.$store.commit('setWinBlindPrice', winBlindPrice);
                this.$store.commit('setBasketDisabled');               
                this.$router.push("/summary");
            },
            navigateToWinDiffusers() {
                this.$router.push("/windowDiffusers");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },              
        },
            beforeRouteEnter(to, from, next){
                const winDiffuser = store.state.winDiffuser;
                next(winDiffuser !== '');
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 0;
}
.brak p {
    text-align: center;
    padding: 0 15px;
}
.noBlind {
    display: flex;
    flex-direction: row;
    padding:0;
    margin: 15px 15px;
    justify-content: center;
    align-items: center;
}
.noBlind input {
    margin: 0 10px;
}
.narrow input {
    margin: 0 10px;
}
.narrow {
    margin: 18px;
}
.blindItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
}
.muntinItem p {
    padding: 0 10px;
}
.choose {
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin-bottom: 50px;
 }
 .chooseItems {
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
 }
.narrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.narrow p {
    margin: 0 0 0 15px;
}
input {
    padding: 0;
    margin: 0;
}
  [type=radio] + label {
    cursor: pointer;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}
[type=radio] + p {
    cursor: pointer;
}

.previous {
    float: left;
    padding: 10px 50px;
    display: inline-block;
    margin:20px;
    width: 200px;
}
.next {
    float: right;
    padding: 10px 50px;
    display: inline-block;
    margin: 20px;
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
        margin: 20px 0;
    }
    .choose {
        flex-direction: column;
        width: 100vw;
        margin:0;
        padding: 0;
    }
    .chooseItems {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .next {
        padding: 5px 20px;
        font-size: 14px;
        margin:20px 20px 20px 0;
        width: 120px;
    }
    .previous {
        padding: 5px 20px;
        font-size: 14px;  
        margin:20px 0 20px 20px; 
        width: 120px;             
    }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .header {
        margin: 20px 0 20px 0;
    }
    .chooseItems {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .previous {
        margin: 20px 0 20px 20px;
        padding: 5px 20px;
        font-size: 14px;
    }
    .next {
        margin: 20px 20px 20px 0;
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