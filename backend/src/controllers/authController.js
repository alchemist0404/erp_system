const { Users, Sessions } = require('../model');

const sessionCheck = async (req, res) => {
  var r_data = req.body;
  var sessionData = await Sessions.findOne({ token: r_data.token });
  if(sessionData) {
    let flag = sessionData.expireStatus(sessionData.expire_time);
    if(flag) {
      res.json({ status: true });
    } else {
      res.json({
        status: false,
        userdata: {}
      });
    }
  } else {
    res.json({
      status: false,
      userdata: {}
    });
  }
};

const signin = async (req, res) => {

  var r_data = req.body;
  var oneUser = await Users.findOne({ email: r_data.email });

  if(oneUser) {
    var pFlag = oneUser.comparePassword(r_data.password, oneUser.password);
    let userData = oneUser;
    if(pFlag) {
      var sessionData = new Sessions({ token: userData._id, expire_time: 1 })
      sessionData.save()

      res.json({
        status: true,
        userdata: userData
      });
    } else {
      res.json({
        status: false,
        msg: "Password doesn't match."
      });
    }
  } else {
    res.json({
      status: false,
      msg: "User doesn't exists."
    });
  }
}

const signup = async (req, res) => {

  var r_data = req.body;
  var oneUser = await Users.findOne({ email: r_data.email });

  if(oneUser) {
    res.json({
      status: false,
      msg: "User is already exists."
    });
  } else {
    var saveData = new Users(r_data);
    saveData.save()
    res.json({ status: true });
  }
}

module.exports = {
	signin:signin,
	signup:signup,
	sessionCheck:sessionCheck
};
