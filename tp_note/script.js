var couleurs = ['#eaa1c2', '#6227ae', '#747474', '#ea125e', '#2b0645'];

function genereNombre(min, max){
  return Math.floor((Math.random()*(max-min))+min)
}


//$(document).ready(function(){
	
	
$("#add_button").click(function() {
	var iteration = document.getElementsByName("add_particules");
	$("#add_particules").text('');
	for(var i=0; i < iteration[0].value; i++){
	creer_particule();
	};
	});


  /* A FAIRE --- Fonction permettant d'attacher 1 particule dans le DOM */
  function creer_particule() {
    var dimension = genereNombre(1,50);
    var positions = [genereNombre(dimension, 400-dimension), genereNombre(dimension, 400-dimension)];
    var couleur   = genereNombre(0,6);
	
	var elt = document.createElement("div")	
	elt.className="particule"
	elt.setAttribute("style","background-color:"+couleurs[couleur]+"; width:"+dimension+"px; height:"+dimension+"px; top:"+positions[0]+"px; left:"+positions[1]+"px;");

	50
	console.log(elt)
	document.getElementById("playground").appendChild(elt);
	//$("#playground").append(elt);

    // * Créer un élément portant la classe particule
    // * Lui assigner la classe qui va bien
    // * Lui donner une couleur (utiliser le tableau 'couleurs' ci-dessus)
    // * Spécifier ses dimensions
    // * Spécifier sa position
    //   (par rapport à 'top' avec positions[0], par rapport à 'left' avec positions[1])
    // * Attacher l'élément au DOM (bien choisir où l'attacher !!)

  }


  /* A FAIRE --- Ajouter n particules */


  /* A FAIRE --- Animer les particules */
  // Aide : code pour animer une particule sélectionnée avec jQuery
  // var positions =
  //  [genereNombre($(this).height(),400)- $(this).height(),
  //   genereNombre($(this).width(),400) - $(this).width()];
  // $(this).animate({top: positions[0], left: positions[1]}, genereNombre(200,600));


  $("#play_button").click(function() {
	var nb_iter = document.getElementsByName("play_particules");
	
	
	for(var i=0; i < nb_iter[0].value; i++){
	animerparticule()
		};
	});
	
	  function animerparticule() {
	$(".particule").each(function() {		  
		  var positions =
			[genereNombre($(this).height(),400)- $(this).height(),
			genereNombre($(this).width(),400) - $(this).width()];
			$(this).animate({top: positions[0], left: positions[1]}, genereNombre(200,600));
	  })
	};


  

//}); // Fin jQuery
