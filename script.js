// Get elements from the DOM
const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submitButton');
const resultTextarea = document.getElementById('resultTextarea');

const CN1 = ['| A | A | A |A |',"10"];
const CN2 = ['|A| A| A| B|',"9.38"];
const CN3 = ['|A| A| B| B|',"8.75"];
const CN4 = ['|A| B| B| B|',"8.13"];
const CN5 = ['|B| B| B| B|',"7.50"];
const CN6 = ['|A| B| C| C|',"6.88"];
const CN7 = ['|C| C| C| A|',"6.25"];
const CN8 = ['|B| C| C| C|',"5.63"];
const CN9 = ['|C| C| C| C|',"5.00"];
const CN10 =['|B| B| C| A|',"7.50"];
const CN11 =['|C| D| D| A|',"4.38"];
const CN12 = ['|D| D| D| B|',"3.75"];
const CN13 = ['|D| D| C| C|',"3.75"];
const CN14 = ['|D| D| D| C|',"3.13"];
const CN15 = ['|D| D| D| D|',"2.50"];
const CN16 = ['|A| F| F| F|',"3.13"];
const CN17 = ['|B| F| F| F|',"1.88"];
const CN18 = ['|C| F| F| F|',"1.25"];
const CN19 = ['|D| F| F| F|',"0.63"];



// Add click event listener to the submit button
submitButton.addEventListener('click', () => {
   

    const enteredNumber = parseFloat(numberInput.value);
   let a = (enteredNumber*16)/10;
    console.log(a);
    if ( a  == 16) {
        resultTextarea.value = `Number:${CN1[0]} Grade: ${CN1[1]}`;
      
    }
 
    if ( a  >= 14.4 && a<16) {
        resultTextarea.value = `Number:${CN2[0]} Grade: ${CN2[1]}`;
     
    }
    if ( a  >= 12.8 && a<14.4) {
        resultTextarea.value = `Number:${CN3[0]} Grade: ${CN3[1]}\nNumber:${CN4[0]} Grade: ${CN4[1]}`;
     
    }

    if ( a  >= 11.2 && a<12.8) {
        resultTextarea.value = `Number:${CN5[0]} Grade: ${CN5[1]}\nNumber:${CN10[0]} Grade: ${CN10[1]}`;
     
    }

    if ( a  >= 9.6 && a<11.2 ) {
        resultTextarea.value = `Number:${CN6[0]} Grade: ${CN6[1]}\nNumber:${CN7[0]} Grade: ${CN7[1]}`;
     
    }
    if ( a  >= 8 && a<9.6 ) {
        resultTextarea.value = `Number:${CN8[0]} Grade: ${CN8[1]}\nNumber:${CN9[0]} Grade: ${CN9[1]}`;
     
    }
    if ( a  >= 6.4 && a<8) {
        resultTextarea.value = `Number:${CN11[0]} Grade: ${CN11[1]}`;
     
    }
    if ( a  >= 4.8 && a<6.4) {
        resultTextarea.value = `Number:${CN13[0]} Grade: ${CN13[1]}\nNumber:${CN14[0]} Grade: ${CN14[1]}`;
     
    }
    if ( a  >= 3.2 && a<6.4) {
        resultTextarea.value = `Number:${CN15[0]} Grade: ${CN15[1]}`;
     
    }
    if ( a  >= 1.6 && a<3.2) {
        resultTextarea.value = `Number:${CN17[0]} Grade: ${CN17[1]}\nNumber:${CN18[0]} Grade: ${CN18[1]}`;
     
    }
    if ( a  >= 0&& a<1.6) {
        resultTextarea.value = `Number:${CN19[0]} Grade: ${CN19[1]}`;
     
    }

});


