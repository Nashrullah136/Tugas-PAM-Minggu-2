function counter(){
    var index = 0;

    return () => {
        return index++;
    };
}

var count = counter();

for (let index = 0; index < 5; index++) {
    console.log(count());
}