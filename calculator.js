const display = document.getElementById('display');
        function append(char) {
            display.value += char;
        }
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operator = document.getElementById('operator').value;
            const resultField = document.getElementById('result');
            let result = '';

            if (isNaN(num1) || isNaN(num2)) {
                result = 'Error';
            } else {
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num2 !== 0 ? num1 / num2 : 'Error';
                        break;
                    default:
                        result = 'Error';
                }
            }
            resultField.value = result;
        }

        function clearDisplay() {
            display.value = '';
        }

        function clearFields() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('result').value = '';
            document.getElementById('operator').value = '+';
        }