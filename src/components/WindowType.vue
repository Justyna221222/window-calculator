<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Select the type of window or door</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<div><p class="header">Select the type of window or door</p></div>
<div><p class="header1">WINDOWS</p></div>

    <div class="choose"> 
        <div class="listItem">
            <div class="description">Fixed in the frame</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='fixWRamie'>  
                <input type="radio" id="fixWRamie" value="Fixed in the frame" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/FIXwRamie.png' alt="Fixed in the frame" width="96" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Side-hung</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne'>   
                <input type="radio" id="Rozwierne" value="Side-hung" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne.png' alt="Side-hung" width="92" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Side-hung + tilt&turn</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierno-uchylne'>  
                <input type="radio" id="Rozwierne + rozwierno-uchylne" value="Side-hung + tilt&turn" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne+rozwierno-uchylne.png' alt="Side-hung + tilt&turn" width="173" height="170">
            </label>   
        </div>    
        <div class="listItem">
            <div class="description">Tilt&turn + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozweirno-uchylne + FIX'>  
                <input type="radio" id="Rozweirno-uchylne + FIX" value="Tilt&turn + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierno-uchylne+FIX.png' alt="Tilt&turn + FIX" width="171" height="170">
            </label>   
        </div> 
        <div class="listItem">
            <div class="description">Tilt</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Uchylne'>  
                <input type="radio" id="Uchylne" value="Tilt" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/uchylne.png' alt="Tilt" width="170" height="88">
            </label>   
        </div>       
        <div class="listItem">
            <div class="description">Tilt&turn</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierno-uchylne'>  
                <input type="radio" id="Rozwierno-uchylne" value="Tilt&turn" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierno-uchylne.png' alt="Tilt&turn" width="92" height="170">
            </label>   
        </div>  
        <div class="listItem">
            <div class="description">Tilt + tilt&turn</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Uchylne + rozwierno-uchylne'>  
                <input type="radio" id="Uchylne + rozwierno-uchylne" value="Tilt + tilt&turn" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/uchylne+rozwierno-uchylne.png' alt="Tilt + tilt&turn" width="118" height="170">
            </label>   
        </div>
            <div class="listItem">
            <div class="description">Side-hung + tilt&turn x 2</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierno-uchylne x 2'>  
                <input type="radio" id="Rozwierne + rozwierno-uchylne x 2" value="Side-hung + tilt&turn x 2" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne+rozwierno-uchylneX2.png' alt="Side-hung + tilt&turn x 2" width="116" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Side-hung + Side-hung + tilt&turn</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierne + rozwierno-uchylne'>  
                <input type="radio" id="Rozwierne + rozwierne + rozwierno-uchylne" value="Side-hung + Side-hung + tilt&turn" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne+rozwierne+rozwierno-uchylne.png' alt="Side-hung + Side-hung + tilt&turn" width="250" height="170">
            </label>   
        </div>  
        <div class="listItem">
            <div class="description">FIX + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Stałe FIX + FIX'>  
                <input type="radio" id="Stałe FIX + FIX" value="FIX + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/staleFIX+FIX.png' alt="FIX + FIX" width="171" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">FIX + FIX + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Stałe FIX + FIX + FIX'>  
                <input type="radio" id="Stałe FIX + FIX + FIX" value="FIX + FIX + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/stałeFIX+FIX+FIX.png' alt="FIX + FIX + FIX" width="248" height="170">
            </label>   
        </div>
    </div>
<div><p class="header1">DOORS</p></div>
    <div class="choose">
        <div class="listItem">
            <div class="description">Door PSK + FIX</div>
            <div class="description1">ClassicTherm</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi PSK + FIX'>  
                <input type="radio" id="Drzwi PSK + FIX" value="Door PSK + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DPSK+FIX.png' alt="Door PSK + FIX" width="224" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Door PSK + FIX</div>
            <div class="description1">Perfectherm</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi PSK + FIX Perfectherm'>  
                <input type="radio" id="Drzwi PSK + FIX Perfectherm" value="Door PSK + FIX Perfectherm" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DPSK+FIX.png' alt="Door PSK + FIX Perfectherm" width="224" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Door HS</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi HS'>  
                <input type="radio" id="Drzwi HS" value="Door HS" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/HS+FIX.png' alt="Door HS" width="224" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Single-leaf door PVC</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi jednoskrzydłowe 1'>  
                <input type="radio" id="Drzwi jednoskrzydłowe 1" value="Single-leaf door PVC 1" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DrzwiJednoPVC1.png' alt="Single-leaf door PVC 1" width="115" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Single-leaf door PVC</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi jednoskrzydłowe 2'>  
                <input type="radio" id="Drzwi jednoskrzydłowe 2" value="Single-leaf door PVC 2" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DrzwiJednoPVC2.png' alt="Single-leaf door PVC 2" width="113" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Double-leaf door PVC</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi dwuskrzydłowe PVC'>  
                <input type="radio" id="Drzwi dwuskrzydłowe PVC" value="Double-leaf door PVC" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DrzwiDwuPVC.png' alt="Double-leaf door PVC" width="155" height="230">
            </label>   
        </div>
    </div>
    <div class="nextButtonFrame">
        <button @click="setWinType" type="button" class="next">Next</button>
    </div> 
    <div class="woodenWindows">
       <h4> The above calculator calculates the <strong>PCV</strong> window price . If you are interested in <strong>wooden</strong> windows or others, 
        fill in the form below and we will send you the price list to your e-mail address.</h4>

            <form @submit.prevent="sendEmail">
                <h5>I am interested in: </h5>
                <input type="checkbox" id="oknaDrewniane" name="window1" value="Wooden windows" v-model="windowPriceList" >
                <label for="oknaDrewniane"> Wooden windows</label><br>
                <input type="checkbox" id="oknaAluminiowe" name="window2" value="Aluminum windows" v-model="windowPriceList">
                <label for="oknaAluminiowe"> Aluminum windows</label><br>
                <input type="checkbox" id="drewnianeZNakladkami" name="window3" value="Wooden windows with aluminum covers" v-model="windowPriceList">
                <label for="drewnianeZNakladkami"> Wooden windows with aluminum covers</label><br>
                <input type="checkbox" id="PPOZ" name="window4" value="Fire-fighting woodwork Ei30 Ei60 Ei120" v-model="windowPriceList">
                <label for="PPOZ"> Fire-fighting woodwork Ei30 Ei60 Ei120</label><br>
            
            <div class="email">
                <p>Your e-mail address:</p>
               <input for="email" type="email" v-model="yourEmail" required >
            </div>
            <p class="small">There is no subscription to the newsletter. We will not send you any future messages.</p>    
            <div>
                <button class="buttonSendEmail">Send a price list</button>
            </div>
            <div v-if="emailSend" class="emailSend">
                <p>The message has been sent. Thank you!</p>
            </div>
            <div v-if="errSend">
                <p>Something went wrong, please try again!</p>
            </div>
            </form>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
 export default {
     data() {
         return {
            windowType:'',
            inputIsInvalid: false,
            windowPriceList: [],
            yourEmail: '',
            emailSend: false,
            errSend: false,
            msg: ''
         };
     },
     methods: {
         setWinType1($event) {
             const type = $event.target.value;
             this.$store.commit('setWinType', type);
             this.$router.push("/windowSize");

         },
         setWinType() {
             const winType = this.windowType;
             if(winType == '') {
                 this.inputIsInvalid = true;
                 return;
             }
             this.$store.commit('setWinType', winType);
             this.$router.push("/windowSize");
         },
         confrimError() {
             this.inputIsInvalid = false;
         },
        sendEmail() {
            const templateParams = {
            window: this.windowPriceList,
            email: this.yourEmail
            };            
            emailjs.send('service_u5bo6u3','template_q47tvk5', templateParams, 'Bk9OW_oJI8NKfrxhJ')
            .then((response) => {
            this.emailSend = true;
            console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
            this.errSend = true;
            console.log('FAILED...', err);
            });
            setTimeout(() => {
            this.$router.push("/windowType");            
            this.$store.state.winType = '',
            this.$store.state.width = '',
            this.$store.state.height = '',
            this.$store.state.winSizePrice = '',            
            this.$store.state.winArea = '',
            this.$store.state.winProfile = '',
            this.$store.state.winProfilePrice = '',
            this.$store.state.winVenner = '',
            this.$store.state.winVennerPrice = '',
            this.$store.state.winGlass = '',
            this.$store.state.winGlassPrice = '',
            this.$store.state.winFrame = '',
            this.$store.state.winFramePrice = '',
            this.$store.state.winMuntins = '',
            this.$store.state.winMuntinsPrice = '',
            this.$store.state.winDiffuser = '',
            this.$store.state.winDiffuserPrice = '',
            this.$store.state.winBlind = '',
            this.$store.state.winBlindPrice = '',
            this.$store.state.basketDisabled = false,
            this.$store.state.Windows = [],
            this.yourEmail = '',   
            this.windowPriceList = '',
            this.emailSend = false,
            this.errSend = false
            window.scrollTo(0, 0);
}, 5000);
        },
     }
 }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

 .choose {
    display: grid;
    grid-template-columns: auto auto auto;

 }
 .choose::after {
    content: '';
    display: block;
    grid-column: sidebar-start / end;
    grid-row: 1 / 4;
}
 h3 {
     margin: 0;
 }
 .next {
     float: right;
     padding: 10px 50px;
     margin: 20px 20px;
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
.header {
    font-size: 20px;
    padding: 5px;
    text-align: center;
    background-color: #f3e0d1;
    margin: 10px 0;
    padding: 0;
}
.header1 {
    font-size: 18px;
    padding: 5px;
    text-align: center;
    background-color: #E6E6E6;
    margin: 10px 0;
    padding: 0;    
}
.description {
    font-size: 16px;
    text-align: center;
    font-family: 'Merienda', cursive;
    font-family: 'Montserrat', sans-serif;
    color: #5E5B58;
    margin: 10px 0;
}
.description1 {
    font-size: 16px;
    text-align: center;
    font-family: 'Merienda', cursive;
    font-family: 'Montserrat', sans-serif;
    color: #5E5B58;
    padding: 0;
    margin: 0;
    font-weight: bold;
}
.listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: 1px solid #E6E6E6;
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

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
.woodenWindows {
    margin: 50px 20px;
    clear: both;
}
.woodenWindows h5 {
    margin: 30px 20px;
}
.woodenWindows [type=checkbox] + label {
    cursor: pointer;
}
.woodenWindows h4 {
    background-color: #f3e0d1;
    font-size: 18px;
    padding: 15px;
}
.email {
    margin: 30px 0 0 0;
}
.small {
    font-size: 15px;
}
.emailSend p{
    color: green;
    font-size: 18px;
    font-weight: bold;
}
.buttonSendEmail {
    margin: 20px 0;
}

form input {
    margin: 5px 10px;
}

@media only screen and (min-width: 0px) and (max-width: 576px) {
    .choose {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    }
    .listItem {
    margin: 0;
    padding: 0;
    font-size: 17px;
    }
    .woodenWindows h4 {
    font-size: 18px;
    padding: 10px;
    }
    .woodenWindows h5 {
    font-size: 18px;
    }
    .next {
     padding: 10px 50px;
 }
 button {
    min-width: 200px;
 }
 .nextButtonFrame {
    display: flex;
    justify-content: center;
 }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
    .choose {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    }
    .listItem {
    margin: 0;
    padding: 0;
    font-size: 17px;
    }
    .woodenWindows h4 {
    font-size: 18px;
    padding: 10px;
    }
    .woodenWindows h5 {
    font-size: 18px;
    }  
    .next {
     padding: 10px 50px;
    }
     .nextButtonFrame {
    display: flex;
    justify-content: center;
 }
    input {
        margin: 10px 10px;
    }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .choose {
    display: grid;
    grid-template-columns: auto auto;
    margin: 0;
    padding: 0;
    }
    .listItem {
    margin: 0;
    padding: 0;
    font-size: 17px;
    }
    .woodenWindows h4 {
    font-size: 18px;
    padding: 10px;
    }
    .woodenWindows h5 {
    font-size: 18px;
    } 
    .next {
     float: right;
     display: block;
     padding: 10px 50px;
 }
 .woodenWindows {
    clear:both;
}
}
</style>