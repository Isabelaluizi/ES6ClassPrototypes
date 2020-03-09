class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        return this.kanyeWisdom + "<br>" + "Hello";
    }

    methodTwo() {
        return "I am Isabela";
    }

    methodThree() {
        return  "And I am going to write after your quotes. Always.....";
    }
}

// ON COMPLETE, CREATE A NEW OBJECT FROM THE CLASS
// CALL YOUR THREE METHODS OF YOUR NEW OBJECT
$.ajax({
    "url":  "https://api.kanye.rest",
    "data": {},
    "type": "GET",
    "dataType": "json",
}).progress(
    function() {
        console.log("loading");
    }
).done(
    function (resultJson) {
        let kanyeQuote = new KayneQuote(resultJson.quote);
        $("#container").append("<h1>" + kanyeQuote.methodOne() +"</h1>");
        $("#container").append("<h1>" + kanyeQuote.methodTwo() +"</h1>");
        $("#container").append("<h1>" + kanyeQuote.methodThree() +"</h1>");
      }
).fail(
    function (xhr, status, error) {
        console.log("There was an error!" + error);
    }
).always(
    function (xhr, status) {
        console.log("Request complete with Status " + status);
    }
);