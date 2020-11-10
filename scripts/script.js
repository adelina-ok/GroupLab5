document.getElementById("TacoID").addEventListener("click",displayTaco);
document.getElementById("EnchiladaID").addEventListener("click", displayEnchilada);
document.getElementById("TamaleID").addEventListener("click", displayTamal);
document.getElementById("GalleryID").addEventListener("click", displayGallery)

function displayTaco() 
{
  document.getElementById("articleID").innerHTML ="<h1>Taco</h1> <p>A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef<img src=\"./images/taco.jpg\" alt=taco style=\"width:250px; height:auto;\"> , pork, chicken, seafood, beans, vegetables, and cheese, allowing for great versatility and variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican street food, which have spread around the world.</p>"
}
			
function displayEnchilada() 
{
  document.getElementById("articleID").innerHTML = "<h1>Enchilada</h1><p>An enchilada is a corn tortilla rolled around a filling and covered with a savory sauce. Enchiladas can be filled with various ingredients,<img src=\"./images/enchilada.jpg\" alt=enchilada style=\"width:250px; height:auto;\"> including meats, cheese, beans, potatoes, vegetables or combinations. Sauces can also be used to cover enchiladas, including chili-based sauces, such as salsa roja, various moles, or cheese-based sauces, such as chile con queso. Originating in Mexico, enchiladas are a common dish in Mexican cuisine.</p>"
}
	
function displayTamal() 
{
  document.getElementById("articleID").innerHTML = "<div class=\"div3\"><img src=\"./images/tamale.jpg\" alt= tamale style=\"width:250px; height:auto;\"> </div> <div class=\"div4\"> <h1>Tamale</h1> <p>A tamale is a traditional Mesoamerican dish, made of masa or dough (starchy, and usually corn-based), which is steamed in a corn husk or banana leaf. The wrapping can either be discarded prior to eating or used as a plate. Tamales can be filled with meats, cheeses, fruits, vegetables, chilies or any preparation according to taste, and both the filling and the cooking liquid may be seasoned.</p> </div>";
}

function displayGallery()
{document.getElementById("articleID").innerHTML =
  "<div class=\"clearfix\"> <div class=\"img-container\"> <img src=\"./images/happytaco.jpg\" alt=smile taco style=\"width:100%\"> </div> <div class=\"img-container\"> <img src=\"./images/churro.jpg\" alt=churro style=\"width:100%\"> </div> <div class=\"img-container\"> <img src=\"./images/theman.jpg\" alt=my hero guy fieri style=\"width:100%\"> </div> </div>"
}