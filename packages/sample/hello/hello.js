const main = async (args) => {
  const url = "https://sample-expressjs-ydg38.ondigitalocean.app/";

  await fetch(url).then((response) => console.log(response));

  let name = args?.name || "stranger";
  let greeting = "Hello " + name + "!";
  console.log(greeting);
  return { body: greeting };
};
main();
exports.main = main;
