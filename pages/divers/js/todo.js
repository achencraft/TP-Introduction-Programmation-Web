//TP8 - To Do list   +  TP9 LocalStorage

var liste=new Array()

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





//création de l'objet ListItem
 function ListItem(tache, realise) {
  this.tache = tache
  this.realise = realise

}


// Fonction qui va mettre dans un tableau les objets contenant les taches et qui les envoi en Json vers localStorage
  $("input.save_list").click(function() {
	  liste.length=0 //vide le tableau
	  $(".todo").each(function() {		  
		  liste.push(new ListItem( $(this).text(), $(this).hasClass("todo_checked")))
	  })
	  
		if (typeof(Storage) !== "undefined") { // local storage utilisable
			localStorage.setItem("todolist",JSON.stringify(liste))
		}	  
  });
  
  
  
//  Fonction qui va recuperer le json du local storage, le convertir en tableau d'objets, puis modifier le html pour afficher la liste des taches
    $("input.load_list").click(function() {
	  liste.length=0 //vide le tableau
	

	if (typeof(Storage) !== "undefined") { // local storage utilisable
		var temp = JSON.parse(localStorage.getItem("todolist"))
		}	  

	for(var x in temp){
	liste.push(temp[x])	
	}
	
	$("ul.todolist").text('');
	for(i=0;i<liste.length;i++){

				if (liste[i].realise == true)
				{$("ul.todolist").append("<li class=\"todo todo_checked\">"+" "+liste[i].tache+"</li>")}
				else
				{$("ul.todolist").append("<li class=\"todo\">"+" "+liste[i].tache+"</li>")}

	}			
	
  });
