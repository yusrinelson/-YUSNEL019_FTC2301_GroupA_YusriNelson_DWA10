const MAX_NUMBER = 10;
const MIN_NUMBER = 0;

const keys = {
  add: document.querySelector('[data-key = "add"]'),
  subtract: document.querySelector('[data-key = "subtract"]'),
  input: document.querySelector('[data-key = "number"]'),
  reset: document.querySelector('[data-key = "reset"]'),
};
 const body = document.querySelector('body')

const addHandler = () => {
  const newValue = parseInt(keys.input.value) + 1;
  keys.input.value = newValue;

  if (newValue >= MAX_NUMBER) {
    keys.add.style.color = "red";
    keys.add.disabled = true
  }

  if (keys.subtract.disabled === true) {
    keys.subtract.style.color = "grey"
    keys.subtract.disabled = false;
  }
};

const subtractHandler = () => {
  const newValue = parseInt(keys.input.value) - 1;
  keys.input.value = newValue;

  if (newValue <= MIN_NUMBER) {
    keys.subtract.style.color = "red";
    keys.subtract.disabled = true;
  }
  if (keys.add.disabled === true) {
    keys.add.style.color = "grey"
    keys.add.disabled = false;
  }
};

const resetHandler = () => {
    keys.input.value = 0
}


keys.reset.addEventListener("click", function(){
  const alertElement = document.createElement('sl-alert')
  alertElement.open = true
  alertElement.innerHTML = `
  <sl-alert open duration= "2000">
            <sl-icon
                data-key="alerted" 
                slot="icon" 
                name="info-circle">
            </sl-icon>
            you have reset the tally count
          </sl-alert>
  `
  document.body.append(alertElement)
})

keys.add.addEventListener("click", addHandler);
keys.subtract.addEventListener("click", subtractHandler);
keys.reset.addEventListener("click", resetHandler);
