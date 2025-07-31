const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
//John Smith is 50 years old and his hobbies are swimming and dancing
fs.readFile("./firstname.txt", "utf-8")
  .then((data1) => {
    fs.readFile("./lastname.txt", "utf-8").then((data2) => {
      fs.readFile("./age.txt", "utf-8").then((data3) => {
        fs.readFile("./hobbies.txt", "utf-8").then((data4) => {
          let arr = JSON.parse(data4);
          console.log(
            `${data1} ${data2} is ${data3} old and his hobbies are ${arr[0]} ${arr[1]}`
          );
          //console.log(data3);
          //console.log(data4);
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

async function combineStrings() {
  try {
    const data1 = await fs.readFile("./firstname.txt", "utf-8");
    const data2 = await fs.readFile("./lastname.txt", "utf-8");
    const data3 = await fs.readFile("./age.txt", "utf-8");
    const data4 = await fs.readFile("./hobbies.txt", "utf-8");

    const arrData4 = JSON.parse(data4);

    console.log(
      `${data1} ${data2} is ${data3} old and his hobbies are ${arrData4[0]} ${arrData4[1]}`
    );
  } catch (err) {
    console.log(err);
  }
}

combineStrings();

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

//John Smith is 50 years old and his hobbies are swimming and dancing
