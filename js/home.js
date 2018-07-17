document.addEventListener('DOMContentLoaded',function(){
  makeProgressBars();
  
  function makeProgressBar(value,id){

    var selector = "#"+id;
    var pb = document.querySelector(selector);

    if(pb != null){
    pb.innerHTML='<div class="progress">'+
        '<div class="progress-bar  progress-bar-striped active" role="progressbar"  aria-valuenow="'+value+'"'+
        'aria-valuemin="0" aria-valuemax="100" style="width:'+value+'%">'+
    '</div>'+
  '</div>';
    }
  }

  function makeProgressBars(){

      makeProgressBar(80,"java");
      makeProgressBar(70,"web");
      makeProgressBar(85,"php");
      makeProgressBar(70,"sql");
      makeProgressBar(85,"android");
      makeProgressBar(50,"nosql");
      makeProgressBar(65,"cpp");
  }


});