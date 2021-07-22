

function example1(){
	try {
  nonExistingFunction();
	} catch(error){
    console.log(error.name + ":" + error.message);
}	
}
