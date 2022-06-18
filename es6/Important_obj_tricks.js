const myObj = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
};

var keys = Object.keys(myObj);

console.log(keys);

var values = Object.values(myObj);

console.log(values);

var items = Object.entries(myObj);
console.log(items);