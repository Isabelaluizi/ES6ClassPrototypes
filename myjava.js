class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        //DO SOMETHING WITH THE QUOTE
    }

    methodTwo() {
        //DO SOMETHING WITH THE QUOTE
    }

    methodThree() {
        //DO SOMETHING WITH THE QUOTE
    }
}


// MAKE AJAX REQUEST TO GET QUOTE
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
        console.log(resultJson.quote);
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