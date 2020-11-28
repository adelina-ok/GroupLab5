document.getElementById("TXID").addEventListener("click",displayTX);
document.getElementById("KentID").addEventListener("click", displayKent);
document.getElementById("SeattleID").addEventListener("click", displaySeattle);

function displayTX() 
{
  document.getElementById("articleID").innerHTML ="<h1>Brownsville, TX</h1> <p>The first Amigos restaurant was founded here in 1976! Come visit us at<img src=\"/images/brownsville.jpeg\" alt=TX style=\"width:250px; height:auto;\"> our first location in the US!</p>"
}
			
function displayKent() 
{
  document.getElementById("articleID").innerHTML = "<h1>Kent</h1><p>An enchilada is a corn tortilla rolled around a filling and covered with a savory sauce. Enchiladas can be filled with various ingredients,<img src=\"/images/kent.jpg\" alt=kent style=\"width:250px; height:auto;\"> including meats, cheese, beans, potatoes, vegetables or combinations. Sauces can also be used to cover enchiladas, including chili-based sauces, such as salsa roja, various moles, or cheese-based sauces, such as chile con queso. Originating in Mexico, enchiladas are a common dish in Mexican cuisine. What does this have to do with Kent? Well, they have enchiladas! Consume.</p>"
}
	
function displaySeattle() 
{
  document.getElementById("articleID").innerHTML = "<div class=\"div3\"><img src=\"/images/seattle.jpg\" alt= seattle style=\"width:250px; height:auto;\"> </div> <div class=\"div4\"> <h1>Seattle, WA</h1> <p>Opened after the end of the Clone Wars, the Seattle location is the crown jewel of our great taco Empire. Come see us. We demand it. </p> </div>";
}

