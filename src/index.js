


window.loadSlider = function (json) {
	const div = document.getElementById("slider");

	// Create a slider
	const slider = document.createElement("input");
	slider.type = "range";
	slider.className = "form-range pb-5 pt-5";
	slider.min = 1;
	slider.max = 20;
	slider.value = 17;
	slider.id = 1234;

	// Create the question
	const questionDiv = document.createElement("p");
	questionDiv.innerHTML = "How old are you?";
	

	// Appending to div
	div.appendChild(questionDiv);
	div.appendChild(slider);
  
}