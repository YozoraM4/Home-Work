for (var x = 1; x <= 100; x++) {
    if (x%3 == 0 && x%5 == 0){
        document.write("<p>" + "Fizz Buzz" +  "</p>");
    }
    else if (x%5 == 0){
        document.write("<p>" + "Buzz" + "</p>");
    }
    else if (x%3 == 0){
        document.write("<p>" + "Fizz" + "</p>");
    }
    else{
        document.write("<p>" + x + "</p>");
    }
}
// to complain the sorting of lines

var star = ["*", "* *", "* * *", "* * * *", "* * * * *", "* * * * * *"];
        var i = 0;
        for (var i = 0; i < 5; i++){
            document.write("<p>"+ star[i] +"</p>");
        }
