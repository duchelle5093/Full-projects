let button_code_bar = document.getElementById('button_code_bar')
let text = document.getElementById('text')
let box = document.getElementById('box')
let pdf_box = document.getElementById('pdf_box')


button_code_bar.onclick=function(){
    if(text.value.length>0){
        if(text.value.length<50){
            //generer le code bar
            box.innerHTML= "<svg id='barcode'></svg>"
            JsBarcode("#barcode", text.value);
            
            //creer un bouton pour telecharger le code bar
            pdf_box.innerHTML= "<button onclick='genererPdf()'>Télécharger le code bar</button>"
           
            //styliser le bouton pdf
            pdf_box.style.marginTop='10px'
            pdf_box.style.display='flex'

        }else{
            box.style.border ='0'
            box.innerHTML ="<p class='error' > Le text est trop long!</p>"
            pdf_box.style.display="none"
        }
    }else{
        box.style.border ='0'
        box.innerHTML ="<p class='error' > remplissez le champ !</p>"
        pdf_box.style.display="none"
    }
}

//generer le pdf
function genererPdf(){
    var opt = {
    margin:       1,
    filename:     `${text.value}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a6', orientation: 'l' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(box).save();

}