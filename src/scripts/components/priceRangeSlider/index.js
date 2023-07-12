import * as noUiSlider from "nouislider";

export function PriceRangeSlider() {
  let stepsSlider = document.getElementById('slider-price');
  let input0 = document.getElementById('input_min');
  let input1 = document.getElementById('input_max');
  let inputs = [input0, input1];

  // обязательно проверку на присутствие элемента в DOM, иначе, например, на главной странице будут ошибки

  if(stepsSlider) {
    noUiSlider.create(stepsSlider, {
      start: [10000, 40000],
      connect: true,
      tooltips: false,
      range: {
        'min': 500,
        'max': 50000
      }
    });

    stepsSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle].slice(0, -3);
    });

    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
      });
      input.addEventListener('keydown', function (e) {
        let values = stepsSlider.noUiSlider.get();
        let value = Number(values[handle]);
        let steps = stepsSlider.noUiSlider.steps();
        let step = steps[handle];
        let position;
        switch (e.which) {
          case 13:
            stepsSlider.noUiSlider.setHandle(handle, this.value);
            break;
          case 38:
            position = step[1];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              stepsSlider.noUiSlider.setHandle(handle, value + position);
            }
            break;

          case 40:
            position = step[0];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              stepsSlider.noUiSlider.setHandle(handle, value - position);
            }
            break;
        }
      });
    });
  }
}
