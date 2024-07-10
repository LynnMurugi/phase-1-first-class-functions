//function meals(food){
  //  return food;
//}
//food(()=> console.log("no food available"));

function receivesAFunction(callback){
    return callback ();
}
receivesAFunction(function(){return "spy"});


function returnsANamedFunction(){
    return(function namedFn(){})
    }
    function returnsAnAnonymousFunction(){
        return(function(){})
    }

