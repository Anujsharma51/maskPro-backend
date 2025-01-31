
const app_constants = require("../constant/index")
const login = async (req, res) => {
  const bodyData = JSON.stringify(req.body);

  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    } else {
      return res.json({
        message: "Login successful",
        success: app_constants.SUCCESS
      });
    }
  } catch (error) {
    console.log(error);
  }
};

function getUsers(req, res) {
  res.json({ message: "Get users successful" });
}

module.exports = { login, getUsers };
function updateUser(req, res) {
  res.json({ message: "Update users successful" });
}

module.exports = { login, getUsers };
