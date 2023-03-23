let result;
        const myfun = () => {
            let temp = document.getElementById('temp').value;
            console.log(temp);
            let tempselector = document.getElementById('select_temp');
            let n = tempselector.options.selectedIndex;
            let selectionis = tempselector.options[n].value;
            if (selectionis == 'Celcius') {
                result = ((temp * 9/5) + 32)
                document.getElementById('myresult').innerHTML = `  ${result.toFixed(3)}  Fahrenheit`
            }
            else {
                result = ((temp - 32) / (9/5));
                document.getElementById('myresult').innerHTML = ` ${result.toFixed(3)} Celcius`
            }
        }