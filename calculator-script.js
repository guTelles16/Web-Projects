function insert(num) 
{
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean() 
{
    document.getElementById('result').innerHTML = "";
}

function backspace()
{
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculation()
{
    var result = document.getElementById('result').innerHTML;
    if(result) 
    {
        var calculatedResult = eval(result);
        document.getElementById('result').innerHTML = calculatedResult;
    }
    else
    {
        document.getElementById('result').innerHTML = "Error...";
    }
}