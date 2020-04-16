$(document).ready(function(){
    $("label").click(function(){
        // get reference to the form control that goes with this label and then select it with jquery
        let slider = $("#"+$(this).attr("for"));
        let currentVal = slider.val();
        // figure out if i'm going to increment or decrement the control. we will assume it's a decrement, unless it has the class "adaptive"
        let up = $(this).hasClass("adaptive");
        let newVal = currentVal;
        
        if(up && currentVal <= 90) newVal=newVal*1+10;
        if(!up && currentVal >= 10) newVal -=10;
        $(slider).val(newVal);  

    });
}); 