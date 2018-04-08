//TP4


var notes = [10, 15, 6, 14, 14, 13, 19, 10, 17, 9];
var listeEtudiant=new Array()



function modifierTexte ()
{
document.getElementById("demoJS").innerHTML = "ceci est un nouveau texte";
}

function afficherTabFor (tab)
{
	ligne = document.getElementById("note")	
	tableau = document.getElementById("tableau")	
	tableau.setAttribute("border","1")
	ligne.innerHTML = "";	
	
	for(i=0;i<tab.length;i++) {
	ligne.innerHTML += "<td>"+tab[i]+"</td>";
	}

}



function afficherTabWhile (tab, bool){
   ligne = document.getElementById("note2");
   tableau = document.getElementById("tableau2");
   tableau.setAttribute("border","1");
   ligne.innerHTML = "";
   var i = 0;
   
   if(typeof(bool) === "boolean"){

   
	   while(i<tab.length){
		   if((!bool && tab[i]>=15)||bool){
			ligne.innerHTML += "<td>"+tab[i]+"</td>";
		   }
		i++
	   }
    } else {
	   alert("Usage : afficherTabWhile(tableau,booléen)")
   }
}

function rep_formulaire ()
{
	var nom = document.getElementsByName("nom");
	var prenom = document.getElementsByName("prenom");
	var cts = document.getElementsByName("cts");
	var filiere = document.getElementsByName("filiere");
	var numero = document.getElementsByName("numero");
	
	var abo;
	if(document.contact.cts1.checked){
		abo = "abonné";
	} else {
		if (document.contact.cts2.checked){
			abo = "non-abonné";
		} else {
			abo = "?";
		}
	}
	
	var sortie = nom[0].value+"&emsp;"+prenom[0].value+"&emsp;"+numero[0].value+"&emsp;"+abo+"&emsp;"+filiere[0].value;
	
	var ligne_sortie = document.createElement("p");
	ligne_sortie.className="toto";
	ligne_sortie.innerHTML = sortie;
	document.getElementById("sortie_formulaire").appendChild(ligne_sortie);
	nombre();
	
	listeEtudiant.push(new Etudiant(prenom[0].value, nom[0].value, numero[0].value, abo, filiere[0].value))
}


function nombre ()
{
    document.getElementById("quantite").innerHTML = document.getElementsByClassName("toto").length; 
}

//TP6

 function Etudiant(prenom, nom, numero, cts, filiere) {
  this.nom = nom
  this.prenom = prenom
  this.numero = numero;
  this.cts = cts;
  this.filiere = filiere;
  this.sePresenter = function() {
    document.getElementById("Etudiants").innerHTML = "Bonjour, je m\'appelle "+ this.prenom + " et je suis en " + this.filiere +".";
  };
  this.reorienter = function(new_filiere) {
	if(new_filiere === "Maths" || new_filiere === "Info" || new_filiere === "CMI" || new_filiere === "MPA"){
		this['filiere']=new_filiere;
	} else {
		alert('filière inexistante');  
		}
	}	
}

function reorientation (nbr){
		listeEtudiant[nbr].reorienter(document.getElementById("new_filiere").value)
}


//TP6 - image



var images = document.getElementsByClassName("js-image");
var i;
var num = 0;
for (i=0; i<images.length; i++)
{
    images[i].addEventListener("mouseenter", addlegend(i));
    images[i].addEventListener("mouseleave", removelegend(i));
    num = num + 1;
}

function addlegend (num) {
    return function () {
	images[num].getElementsByClassName("js-description")[0].style.display = "inline";
    }
}

function removelegend (num) {
    return function ()
    {
	images[num].getElementsByClassName("js-description")[0].style.display = "none";
    }
}