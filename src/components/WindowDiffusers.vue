<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter the type of diffuser or select the window without diffuser</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Enter the type of diffuser or select the window option without diffuser</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p>Enter the type of diffuser.</p>
    </div>
    <div>
       <label>
           <div>
                <label class="noMuntin"> 
                    <input type="radio" id="brak" value="brak" v-model="windowDiffuser">
                    <p id="brakp">Window without diffuser</p>
                 </label> 
           </div>
         </label> 
    </div>
    <hr>
    <div class="choose">
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>VENTEC pressure</h3>
                <p>infiltration 6-27 m²/h</p>
                <p>acoustic insulation 34 dB (32 dB open)</p> 
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECcisnieniowybialy" value="VENTEC pressure white" v-model="windowDiffuser">
                            white <b>98,00 PLN</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECcisnieniowybialykolor" value="VENTEC pressure white/color" v-model="windowDiffuser">        
                            white/colour (caramel, brown, gray)  <b>110,00 PLN</b>
                        </label>                                      
                    </div>  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="VENTECcisnieniowydwustronnykolor" value="VENTEC pressure double-sided color" v-model="windowDiffuser">   
                            double-sided color (caramel, brown, gray) <b>122,00 PLN</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECmanualny.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>VENTEC manual</h3>
                <p>infiltration 4-20 m²/h</p>
                <p>acoustic insulation 36 dB (33 dB open)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECmanualnybialy" value="VENTEC manual white" v-model="windowDiffuser">
                            white <b>73,00 PLN</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECmanualnybialykolor" value="VENTEC manual white/color" v-model="windowDiffuser">        
                            white/colour (caramel, brown, gray) <b>85,00 PLN</b>
                        </label>                                      
                    </div>  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="VENTECmanualnydwustronnykolor" value="VENTEC manual double-sided color" v-model="windowDiffuser">   
                            double-sided color (caramel, brown, gray) <b>98,00 PLN</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>              
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECautomatyczny.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>VENTEC automatic, acoustic</h3>
                <p>infiltration 6-20 m²/h</p>
                <p>acoustic insulation 44 dB (40 dB open)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECautomatycznybialy" value="VENTEC automatic white" v-model="windowDiffuser">
                            white <b>220,00 PLN</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECautomatycznyybialykolor" value="VENTEC automatic white/color" v-model="windowDiffuser">        
                            white/colour (caramel, brown, gray) <b>232,00 zł</b>
                        </label>                                      
                    </div>  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="VENTECautomatycznydwustronnykolor" value="VENTEC automatic double-sided color" v-model="windowDiffuser">   
                            double-sided color (caramel, brown, gray) <b>244,00 zł</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>               
</div>
<hr>
    <div class="choose">
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOAMO103.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO AMO 103 pressure + hood AB</h3>
                <p>infiltration 6-27 m²/h</p>
                <p>acoustic insulation 33 dB (32 dB open)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOAMO103" value="AERECO AMO 103" v-model="windowDiffuser">
                            white, caramel, brown, anthracite <b>98,00 PLN</b>
                        </label>                    
                    </div>                             
                </div>                                 
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOEMM707.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO EMM 707 humidity sensitive + hood AB</h3>
                <p>infiltration 6-30 m²/h</p>
                <p>acoustic insulation 34 dB (32 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEMM707bialy" value="AERECO EMM 707 white" v-model="windowDiffuser">
                            biały <b>250,00 PLN</b>
                        </label>                    
                    </div>
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEMM707kolor" value="AERECO EMM 707 color" v-model="windowDiffuser">
                            white, caramel, brown, anthracite <b>287,00 PLN</b>
                        </label>                    
                    </div>                              
                </div>                                 
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOEXR306.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO EXR 306 humidity sensitive with acoustic damping + hood AB</h3>
                <p>infiltration 7-28 m²/h</p>
                <p>acoustic insulation 37 dB (35 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEXR306bialy" value="AERECO EXR 306 white" v-model="windowDiffuser">
                            white <b>323,00 PLN</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label>
                            <input type="radio" id="AERECOEXR306kolor" value="AERECO EXR 306 color" v-model="windowDiffuser">   
                            white, caramel, brown, anthracite <b>366,00 PLN</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>              
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOEXR306.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO EXR 309 humidity sensitive with acoustic damping + acoustic hood</h3>
                <p>infiltration 7-28 m²/h</p>
                <p>acoustic insulation 44 dB (42 dB open)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEXR309bialy" value="AERECO EXR 309 white" v-model="windowDiffuser">
                            white <b>433,00 PLN</b>
                        </label>                    
                    </div>                  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="AERECOEXR309kolor" value="AERECO EXR 309 color" v-model="windowDiffuser">   
                            white, caramel, brown, anthracite <b>508,00 PLN</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>               
</div>
<hr>
    <div class="choose">
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>RENSON TC45/24</h3>
                <p>infiltration 98 m²/h</p>
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="RENSONTC45" value="RENSON TC45/24" v-model="windowDiffuser">
                            white <b>592,00 PLN</b>
                        </label>                    
                    </div>  
                </div>                      
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>RENSON TC60/24</h3>
                <p>infiltration 141 m²/h</p>
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="RENSONTC60" value="RENSON TC60/24" v-model="windowDiffuser">
                            white <b>616,00 PLN</b>
                        </label>                    
                    </div>   
                </div>                     
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>RENSON THM90/24</h3>
                <p>infiltration 46 m²/h</p>
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="RENSONTHM90" value="RENSON THM90/24" v-model="windowDiffuser">
                            white <b>787,00 PLN</b>
                        </label>                    
                    </div> 
                </div>                       
        </label>         
</div>              
<div class="brookvent">
    <p>We also offer diffusers of the company <strong>Brookvent</strong>. For more information, call: +48 662 320 792</p>
</div>
<div>
    <button @click="navigateToWinMuntins" type="button" class="previous">Previous</button>
    <button @click="setDiffuser" type="button" class="next">Next</button>
</div>
</template>

<script>
    import {winDiffuserPrice} from '../winDiffuserPrice.js'
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowDiffuser: '',
                winDiffuserPrice: '',
                winFramesPrice: '',
                winGlass:'',
                inputIsInvalid: false,
                disabledBasket: true

            };
        },
        methods: {
            setDiffuser() {
                const winDiffuser = this.windowDiffuser;
                const winMuntinPrice = this.$store.state.winMuntinsPrice;
                if(this.windowDiffuser == '') {
                    this.inputIsInvalid = true;
                    return;
                } else {
                    const winDiffusersPrice = winDiffuserPrice(winDiffuser, winMuntinPrice); 
                this.$store.commit('setDiffuser', winDiffuser);
                this.$store.commit('setDiffuserPrice', winDiffusersPrice);
                this.$router.push("/windowBlind");                    
                }
            },
            navigateToWinMuntins() {
                this.$router.push("/windowMuntins");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },             
        },
            beforeRouteEnter(to, from, next){
                const winMuntins = store.state.winMuntins;
                next(winMuntins !== '');
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 10px 0;
}
#brakp {
    font-size: 19px;
}
.frame {
    text-align: center;
}
h3 {
    font-size: 22px;
    font-weight: bold;
    color: #690f0f;
    padding: 0;
    margin: 0 auto 5px auto;
    width: 400px;
    word-wrap: wrap;

}
.choose {
     display: flex;
     flex-direction: row;
     flex-flow: row wrap;
     justify-content: center;
     padding: 0;
     margin: 0;
 }
 .choose p:not(#brakp) {
     font-size: 13px;
     padding: 0;
     margin: 0;
     color: #535353;
 }
 label {
     font-size: 15.5px;
     word-wrap: wrap;
 }
 .noMuntin {
    display: flex;
    flex-direction: row;
    padding:0;
    margin: 10px 10px;
    justify-content: center;
    align-items: center;
}
.noMuntin p {
    margin: 0 15px;
}

  [type=radio] { 
    padding: 0;
    margin: 0;
    cursor: pointer;
}
  label { 
    padding: 0;
    margin: 0;
    cursor: pointer;
}
.diffuserBrand {
    margin: 10px;
}
.diffuserList {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 15px 0 0 0;
    font-size: 16px;
}
.listItem {
    padding: 0;
    margin: 0;
}
.listItem label {
    display: block;
    overflow: wrap;
}
.previous {
    float: left;
    padding: 10px 50px;
    display: inline-block;
    margin-top: 20px;
    margin-left: 20px;
    width: 200px;
}
.next {
    float: right;
    padding: 10px 50px;
    display: inline-block;
    margin-top: 20px;
    margin-right: 20px;
    width: 200px;
}
.header {
    font-size: 20px;
    text-align: center;
    background-color: #f3e0d1;
    margin: 0;
}
hr {
     border: 1px solid #690f0f;
}
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #cb2c2c;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  margin: 20px 0;
}

button:hover,
button:active {
  background-color: #690f0f;
  border-color: #270041;
}
.brookvent {
    padding: 15px;
    background-color: #f3e0d1;
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
    img {
        width: 300px;
        height: 106px;
    }
    .diffuserBrand {
        margin: 10px 0;
    }
    h3 {
        width: 100%;
    }
    .diffuserList {
        display: flex;
        flex-direction: column;
        width: 90vw;
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
    .brookvent {
        text-align: justify;
    }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .header {
        margin: 20px 0 20px 0;
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
        margin: 20px 0 20px 20px;
    }
    .next {
        margin: 20px 20px 20px 0;
    }
}
</style>