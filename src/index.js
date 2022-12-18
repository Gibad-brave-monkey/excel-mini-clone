import "./module";
import "./scss/index.scss";

console.log("MEOW");

async function some() {
  return await Promise.resolve("sync working");
}

some().then(console.log);
