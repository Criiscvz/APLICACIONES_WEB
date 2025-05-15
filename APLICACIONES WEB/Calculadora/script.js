        function realizarOperaciones() {
            // Obtener los valores de los inputs
            const num1 = parseFloat(document.getElementById('numero1').value);
            const num2 = parseFloat(document.getElementById('numero2').value);
            
            // Validar que los números sean válidos
            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor ingrese dos números válidos");
                return;
            }
            
            // Limpiar resultados anteriores
            const resultadosDiv = document.getElementById('resultados');
            resultadosDiv.innerHTML = '';
            
            // Realizar las 5 iteraciones/operaciones
            for (let i = 1; i <= 5; i++) {
                let resultado;
                let operacion;
                
                switch(i) {
                    case 1:
                        operacion = "Suma";
                        resultado = num1 + num2;
                        break;
                    case 2:
                        operacion = "Resta";
                        resultado = num1 - num2;
                        break;
                    case 3:
                        operacion = "Multiplicación";
                        resultado = num1 * num2;
                        break;
                    case 4:
                        operacion = "División";
                        // Validar división por cero
                        resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero";
                        break;
                    case 5:
                        operacion = "Módulo";
                        // Validar módulo por cero
                        resultado = num2 !== 0 ? num1 % num2 : "No se puede calcular módulo con cero";
                        break;
                }
                
                // Crear elemento para mostrar el resultado
                const resultadoElement = document.createElement('div');
                resultadoElement.className = 'result-item';
                resultadoElement.innerHTML = `<strong>${operacion}:</strong> ${num1} ${getSimboloOperacion(i)} ${num2} = ${resultado}`;
                
                // Agregar al contenedor de resultados
                resultadosDiv.appendChild(resultadoElement);
            }
        }
        
        function getSimboloOperacion(iteracion) {
            switch(iteracion) {
                case 1: return "+";
                case 2: return "-";
                case 3: return "*";
                case 4: return "÷";
                case 5: return "%";
                default: return "";
            }
        }