const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('test.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
  console.log(data.toString());
}

main();
