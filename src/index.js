


window.loadSlider = function (json) {
	console.log(json);
	const obj = JSON.parse(json);
	console.log(obj);
	const data = obj.data;
	console.table(data);

	const div = document.getElementById("slider");
	// create a slider
	const createSlider = function(question) {
		// console.log(question);
		const fieldData = question?.fieldData || {};
		const text = fieldData?.Question;
		const minValue = fieldData?.MinValue;
		const maxValue = fieldData?.MaxValue;
		const Value = fieldData?.Value;
		const id = fieldData?.PrimaryKey;
		


		const slider = document.createElement("input");
		slider.type = "range";
		slider.className = "form-range pb-5";
		slider.min = minValue;
		slider.max = maxValue;
		slider.value = Value;
		slider.id = id;
		slider.oninput = function() {
			console.log(this.value);
			const divUpdate = document.getElementById(`sliderValueDiv_${id}`);
			divUpdate.innerHTML = this.value;
		}
		slider.onchange = function() {
			console.log(this.value);
			const value = this.value;
			const id = this.id;
			const obj = { value, id };
			console.log(obj);
			FileMaker.PerformScript("UpdateField", JSON.stringify(obj));
		}

		// create a question
		const questionDiv = document.createElement("p");
		questionDiv.innerHTML = `${text} <span id="sliderValueDiv_${id}" class="bg-primary text-white rounded p-1">5</span>`;

		// appending to div
		div.appendChild(questionDiv);
		div.appendChild(slider);
	}

	data.forEach(function(question) {
		createSlider(question);
	});

	//createSlider();
  
}