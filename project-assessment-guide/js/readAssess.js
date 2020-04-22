$(document).ready(function() {
    // initialize all the readiness images
    let imgPath ="http://utils.troyweb.com.s3-website-us-east-1.amazonaws.com/img/";
    let scale = 5;
    let legend = {
      "strategy":["is simply dummy text of the printing and typesetting" 
      ,"industry. Lorem Ipsum has been the industry's standard dummy text"
      ,"ever since the 1500s, when an unknown printer took a galley of type" 
      ,"and scrambled it to make a type specimen book. It has survived not only" 
      ,"five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]

      ,"availability":["is simply dummy text of the printing and typesetting" 
      ,"industry. Lorem Ipsum has been the industry's standard dummy text"
      ,"ever since the 1500s, when an unknown printer took a galley of type" 
      ,"and scrambled it to make a type specimen book. It has survived not only" 
      ,"five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]

      ,"technical":["is simply dummy text of the printing and typesetting" 
      ,"industry. Lorem Ipsum has been the industry's standard dummy text"
      ,"ever since the 1500s, when an unknown printer took a galley of type" 
      ,"and scrambled it to make a type specimen book. It has survived not only" 
      ,"five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]

      ,"processes":["is simply dummy text of the printing and typesetting" 
      ,"industry. Lorem Ipsum has been the industry's standard dummy text"
      ,"ever since the 1500s, when an unknown printer took a galley of type" 
      ,"and scrambled it to make a type specimen book. It has survived not only" 
      ,"five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]

      ,"identity":["is simply dummy text of the printing and typesetting" 
      ,"industry. Lorem Ipsum has been the industry's standard dummy text"
      ,"ever since the 1500s, when an unknown printer took a galley of type" 
      ,"and scrambled it to make a type specimen book. It has survived not only" 
      ,"five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
    };
    
    for(i in legend){
      $("#"+i+"-text").html(legend[i][0]);
      console.log(i);
    }
    
    $("#readiness-assessment-grid h2").click(function(){
      let target = $(this).attr("data-target");
      if(target){
        let current = $("#"+target+"-image").attr("src").split("/"); 
        current = current[current.length-1].split(".");
        current = current[0].split("-");
        current = current[current.length-1];
        let next = current*1+1;
        if(next > scale ) next = 1;
        $("#"+target+"-image").attr("src",imgPath+"readiness-"+next+".png");
        $("#"+target+"-text").html(legend[target][next-1]);
        //console.log(next);
      }
    })  
  });