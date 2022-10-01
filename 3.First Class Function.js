function tellUsWhenYouDone(tell){
    console.log("Start process...");
    tell();
}

function done(){
    console.log('Process is done!');
}

tellUsWhenYouDone(done);