//js href of logo
$("logo").click(function(){
  window.location=$(this).find("a").attr("href"); return false;
});
    
//js href button 
$("title-button").click(function(){
  window.location=$(this).find("button").attr("href"); return false;
});