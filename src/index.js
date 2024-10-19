


window.loadSlider = function (json) {
	
	const div = document.getElementById("slider");

	// create a slider
	const slider = document.createElement("input");
	slider.type = "range";
	slider.className = "form-range pb-5";
	slider.min = 1;
	slider.max = 20;
	slider.value = 17;
	slider.id = 1234;
	slider.oninput = function() {
		console.log(this.value);
		const divUpdate = document.getElementById("sliderValueDiv");
		divUpdate.innerHTML = this.value;
	}
	slider.onchange = function() {
		console.log(this.value);
		const divUpdate = document.getElementById("sliderValueDiv");
		divUpdate.innerHTML = this.value;
	}

	// create a question
	const questionDiv = document.createElement("p");
	questionDiv.innerHTML = `How old are you? <span id="sliderValueDiv" class="bg-primary text-white rounded p-1">5</span>`;

	// appending to div
	div.appendChild(questionDiv);
	div.appendChild(slider);
  
}