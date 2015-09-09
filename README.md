# JSONtoLowerCase
This recursive JS function will convert the whole JSON object to lower case by traversing through all childs. 

Usage:
var sampleObj = [
                  {"title":"Test","ID":"1","Childs":{"title":"Child1","ID":"1"}},
                  {"title":"Test","ID":"1","Childs":{"title":"Child2","ID":"1"}}
                ];

var outputObj = tolower(sampleObj);
console.log(outputObj);

Output:
                [
                  {"title":"test","id":"1","childs":{"title":"child1","id":"1"}},
                  {"title":"test","id":"1","childs":{"title":"child2","id":"1"}}
                ];
