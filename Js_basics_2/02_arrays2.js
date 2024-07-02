const marvel = ["ironman", "spiderman", "captain america", "thor", "hulk"];
const dc = ["batman", "superman", "wolverine", "flash", "aquaman"];

marvel.push(dc)
console.log(marvel);//["ironman", "spiderman", "captain america", "thor", "hulk", Array(5)]
//since array can take any data so it took arrays as a data
console.log(marvel.length);//6
//to access a value from the nested array
console.log(marvel[5][1]);//superman

//to fix this we can use concat method
const marvel1 = ["ironman", "spiderman", "captain america", "thor", "hulk"];
const dc1 = ["batman", "superman", "wolverine", "flash", "aquaman"];
const heroes = marvel1.concat(dc1);
console.log(heroes);//["ironman", "spiderman", "captain america", "thor", "hulk", "batman", "superman", "wolverine", "flash", "aquaman"]

//a better way to do this is using spread operator ...
const allHeroes = [...marvel1, ...dc1];
console.log(allHeroes);//["ironman", "spiderman", "captain america", "thor", "hulk", "batman", "superman", "wolverine", "flash", "aquaman"]
