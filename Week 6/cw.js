let x = 5;

if (x === 5) {
    console.log("inside if");
}

let y = 4;

if (y != 5) {
    console.log("true");
}





let day = ("Enter your day");


if (day == "saturday") {
    console.log("holiday");
} else if (day == "sunday" || day =="wednesday") {
    console.log("Web dev class");
} else {
    console.log("other class");
}

for (let i = 1; i<=5; i++) {
    console.log("hello", i);
}


for (let i = 1; i <= 10; i++) {
    let product = 2 * i;
    // let output = "2 * " + i + "= " + product;
    let output = `2 * ${i} = ${product}`;
    console.log(output);
}


