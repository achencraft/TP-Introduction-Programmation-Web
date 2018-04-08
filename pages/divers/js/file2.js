var listeEtudiant=new Array()

$(document).ready(function () {
	
 $("p").click(function() {
 alert($(this).text());
 });
  
  $(".tramway").click(function() {
 alert("classe "+$(this).text());
 });
 
  $("#citadis").click(function() {
 alert("ID "+$(this).text());
 });
 
 $(".callback").click(function() {
  $(".disparaitre").fadeOut(1000, function() {;
  $(".disparaitre").text("Coucou c moi");
  });
  $(".disparaitre").fadeIn(1000);
 });
 

 
   $(".boutonSoumission").click(function() {
   $("#sortie_formulaire").append($("#nom").val()+"  "+$("#prenom").val()
   +"  "+$("#numero").val()+"  "+$("#filiere").val()+"  "+"<br>");

   });

 
});
