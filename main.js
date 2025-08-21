const display = document.getElementById('display');
        function append(char) {
            display.value += char;
        }
        function calculate() {
            try {
                display.value = eval(display.value) || '';
            } catch {
                display.value = 'Error';
            }
        }
        function clearDisplay() {
            display.value = '';
        }