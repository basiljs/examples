/**
 * example shows how to parse a raw JSON string to a javascript object.
 * no idea what JSON is? then have a read here: http://en.wikipedia.org/wiki/JSON
 */

// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

// to load an external json file use
// var jsonString = loadString("path/to/file.json")

var jsonString = "{\
                  \"firstName\": \"John\",\
                  \"lastName\": \"Smith\",\
                  \"age\": 25,\
                  \"address\": {\
                      \"streetAddress\": \"21 2nd Street\",\
                      \"city\": \"New York\",\
                      \"state\": \"NY\",\
                      \"postalCode\": \"10021\"\
                  },\
                  \"phoneNumber\": [\
                      {\
                          \"type\": \"home\",\
                          \"number\": \"212 555-1234\"\
                      },\
                      {\
                          \"type\": \"fax\",\
                          \"number\": \"646 555-4567\"\
                      }\
                  ]\
                }";
// please note:
// you don't have normally a '\' at the end of a line ...
// this is just the character to have a multiline-string

function draw() {
  // parse JSON
  var jsonData = JSON.decode(jsonString);

  text(jsonData.firstName, 0, 0, width, 50);
  text(jsonData.address.city, 0, 50, width, 50);
  text(jsonData.phoneNumber[0].number, 0, 100, width, 50);

  // convert an object to a JSON-string
  println(JSON.encode(jsonData));
}
