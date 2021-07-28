function findMatching(collection, name){
    return collection.filter(function(driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(collection, nameCharacters){
  let nameLength= nameCharacters.length;
  return collection.filter(function(driverName){
      return driverName.slice(0, nameLength)=== nameCharacters;
  });
}

function matchName(collection, string){
    return collection.filter(function(driver){
        return driver.name.toLowerCase()=== string.toLowerCase();
    });
}