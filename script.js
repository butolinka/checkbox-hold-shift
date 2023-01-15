const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e){
    //cheking that key shift is down and its cheked
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if (inBetween){
                checkbox.checked = true;
            }
        });

    }
    
    lastChecked=this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));