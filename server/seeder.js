const admins = require("./data/admin.js");
const User = require("./models/Users.js");
const connectDB = require("./db.js");

const importData = async () => {
  try {
    // await User.deleteMany();
    let adminsArray = await admins();
    // console.log("adminsArray", adminsArray);
    const createdAdmins = await User.insertMany(adminsArray);

    // const adminUser = createdAdmins[0]._id;

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error("error db");
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
