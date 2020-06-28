 <script>
       
       var keywords = ["heat pump","heating","cooling","pool","hot water","water heater","pompe à chaleur", "chauffage","refroidissement","piscine", "eau chaude", "chauffe-eau", "bomba de calor", "calefacción", "enfriamiento", "piscina", "agua caliente","calentador de agua", "pompa di calore","riscaldamento","raffreddamento","piscina", "acqua calda", "scaldabagno"];
       dataLayer.push({'inquiry-status': 'invalid'}); // valid invalid
      
       function validateInquiry(str) {
          return keywords.some(arrVal => str.indexOf(arrVal)!=-1);
        }

       document.querySelector('#bform .request_btn button[type=button]').addEventListener('click', e => {
         let bform_content = document.querySelector('#bform textarea[name=content]').value.trim();
         
         if(validateInquiry(bform_content)){
          dataLayer.push({'inquiry-status': 'valid'});
         }else{
          dataLayer.push({'inquiry-status': 'invalid'});
         }
       });
      
</script>
