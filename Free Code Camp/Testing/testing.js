function whatIsInAName(collection, source) {
  function whatIsInAName(collection, source) {
    var matchedObjects = [];
    collection.forEach(function(objectArgument) {
      var objectProps = Object.keys(objectArgument);
      function whatIsInAName(collection, source) {
        function whatIsInAName(collection, source) {
          var matchedObjects = [];
          collection.forEach(function(objectArgument) {
            var objectProps = Object.keys(objectArgument);
            for (var key in source) {
              if (objectProps.includes(key) && objectArgument[key] === source[key]) {
              }
            }
          });
          return matchedObjects;
        }
        whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
        