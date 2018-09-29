var input = document.getElementById("num"),
    num1,num2,operator,result;

var number = document.getElementsByClassName("number");



/****************************************************/
/************** display number on screen ************/
/****************************************************/

for (var i = 0 ; i < number.length ; i++)
    {
        number[i].onclick = function()
        {
            
            input.value += this.innerHTML;
            num1 = parseInt(input.value);
        }
        
    }

var x = [];

/****************************************************/
/************ display operators on screen ***********/
/****************************************************/

document.getElementById("plus").onclick = function()
{
    input.value += this.innerHTML;
    operator = "+";
}

document.getElementById("mult").onclick = function()
{
    if (input.value == "")
        {
          input.value = "";
        }
    else
        {
           input.value += this.innerHTML;
           operator = "*";
        }
}

document.getElementById("div").onclick = function()
{
    if (input.value == "")
        {
          input.value = "";
        }
    else
        {
           input.value += this.innerHTML;
           operator = "/";
        }
}

document.getElementById("subs").onclick = function()
{
    input.value += this.innerHTML;
    operator = "-";
}

document.getElementById("sin").onclick = function()
{
    if (input.value == "")
        {
          input.value = "sin(0)";
            operator = "sin";
        }
    else
        {
           input.value = "sin(" + input.value + ")";
           operator = "sin";
        }
    
}

document.getElementById("cos").onclick = function()
{
    if (input.value == "")
        {
          input.value = "cos(0)";
            operator = "cos";
        }
    else
        {
           input.value = "cos(" + input.value + ")";
           operator = "cos";
        }
    
}

document.getElementById("dot").onclick = function()
{
    input.value += this.innerHTML;
    num1 = parseFloat(input.value);
}



document.getElementById("tan").onclick = function()
{
    if (input.value == "")
        {
          input.value = "tan(0)";
          operator = "tan";
        }
    else
        {
           input.value = "tan(" + input.value + ")";
           operator = "tan";
        }
    
}

document.getElementById("rem").onclick = function()
{
    if (input.value == "")
        {
          input.value = "";
        }
    else
        {
           input.value += this.innerHTML;
           operator = "%";
        }
    
}

document.getElementById("divx").onclick = function()
{
    if (input.value == "")
        {
          input.value = "1/0";
          operator = "1/x";
        }
    else
        {
            input.value = "1/" + input.value;
            operator = "1/x";
        }
}

document.getElementById("clearall").onclick = function()
{
    input.value = "";
}

document.getElementById("sqrt").onclick = function()
{
    if (input.value == "")
        {
            input.value = "sqrt(0)";
            operator = "sqrt";
        }
    else
        {
           input.value = "sqrt(" + input.value + ")";
           operator = "sqrt"; 
        }
}


/****************************************************/
/************ calculate the numbers *****************/
/****************************************************/

document.getElementById("equl").onclick = function()
{
    switch (operator)
        {
            case "+":
                x = input.value.split("+");
                num1 = parseFloat(x[0]);
                num2 = parseFloat(x[1]);
                result = num1 + num2;
                input.value = result;
            break;
                
            case "-":
                x = input.value.split("-");
                num1 = parseFloat(x[0]);
                num2 = parseFloat(x[1]);
                result = num1 - num2;
                input.value = result;
            break;
                
            case "*":
                x = input.value.split("*");
                num1 = parseFloat(x[0]);
                num2 = parseFloat(x[1]);
                result = num1 * num2;
                input.value = result;
            break;
                
            case "/":
                x = input.value.split("/");
                num1 = parseFloat(x[0]);
                num2 = parseFloat(x[1]);
                if (num2 == 0)
                    {
                        input.value = "Math error";
                    }
                else
                    {
                        result = num1 / num2;
                        input.value = result;
                    }
            break;
                
            case "sin":
                x = input.value.split("(");
                num2 = parseInt(x[1]);
                result = Math.sin(num2);
                input.value = result;
            break;
                
            case "cos":
                x = input.value.split("(");
                num2 = parseFloat(x[1]);
                result = Math.cos(num2);
                input.value = result;
            break;
                
            case "tan":
                x = input.value.split("(");
                num2 = parseFloat(x[1]);
                result = Math.tan(num2);
                input.value = result;
            break;
                
            case "%":
                x = input.value.split("%");
                num1 = parseFloat(x[0]);
                num2 = parseFloat(x[1]);
                alert(num2);
            break;
                
            case "1/x":
                x = input.value.split("/");
                num2 = parseFloat(x[1]);
                if (num2 == 0)
                    {
                        input.value = "Math error";
                    }
                else
                    {
                        result = 1 / num2;
                        input.value = result; 
                    }
            break;
                
            case "sqrt":
                x = input.value.split("(");
                num2 = parseFloat(x[1]);
                result = Math.sqrt(num2);
                input.value = result;
        }
        
            
    
}

/*function calc()
{
    
}*/