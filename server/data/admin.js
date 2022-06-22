const bcrypt = require("bcryptjs");

let admins = async () => {
  let pass;
  pass = await bcrypt.hash("12345678", 10);
  // console.log("pass", pass);
  const admins = [
    {
      email: "admin@gmail.com",
      password: pass,
      role: "admin",
    },
  ];
  return admins;
};

module.exports = admins;
