var rand = 2;
var prom = new Promise((resolve, reject) => {
    if(rand % 2 === 0){
        resolve(rand);
    }
    else{
        reject("Not even number!");
    }
})

async function isDivided(div){
    let n = await prom;
    if(n % div !== 0){
        console.log(`${n} can't be divided by ${div}`);
    }
    else{
        console.log(`${n} can be divided by ${div} `)
    }
    return n % div;
}

isDivided(2).then((val) => console.log(`The remainder is ${val}`));