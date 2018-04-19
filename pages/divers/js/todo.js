//TP8 - To Do list



//Fonction qui va ajouter un nouvel item à la liste si elle n'est pas vide
  $("input.add_item").click(function() {
	if ($("#nouveau").val() != '') {
		$("ul.todolist").append("<li class=\"todo\">"+" "+$("#nouveau").val()+"</li>");
	}
	$("#nouveau").val('') //vider la zone de saisie
   });
   
   
/*
//  Fonction qui va changer la classe des items lors d'un clic (sans selecteur parent)
   $(".todo").click(function() {
	$( this ).toggleClass("todo_checked");
 }); 
*/


//  Fonction qui va changer la classe des items lors d'un clic (avec selecteur parent)   
$("ul.todolist").on("click", ".todo", function(){
		$( this ).toggleClass("todo_checked");
});
