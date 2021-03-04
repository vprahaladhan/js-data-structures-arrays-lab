// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = newdriver => drivers.push(newdriver);

const destructivelyPrependDriver = newdriver => drivers.unshift(newdriver);

const destructivelyRemoveLastDriver = () => drivers.pop();

const destructivelyRemoveFirstDriver = () => drivers.shift();

const appendDriver = newdriver => [...drivers, newdriver];

const prependDriver = newdriver => [newdriver, ...drivers];

const removeLastDriver = () => drivers.slice(0, drivers.length - 1);

const removeFirstDriver = () => drivers.slice(1);