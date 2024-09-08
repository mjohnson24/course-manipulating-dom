


window.loadSlider = function (json) {

	const slider = document.createElement("input");
	slider.type = "range";
	slider.className = "form-range pb-5 pt-5";
	slider.min = 1;
	slider.max = 20;
	slider.value = 17;
	slider.id = 1234;
	

	const div = document.getElementById("slider");
	div.appendChild(slider);
  
}