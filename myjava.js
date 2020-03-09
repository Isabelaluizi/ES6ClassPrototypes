class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        return "hello1";
    }

    methodTwo() {
        return "hello2";
    }

    methodThree() {
        return "hello3";
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
        console.log(kanyeQuote.methodOne());
        console.log(kanyeQuote.kanyeWisdom);
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