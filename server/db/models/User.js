const Sequelize = require('sequelize')
const db = require('../dbSetup')
const { userTypes } = require('../../../secrets')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {saltRounds} = require('../../../secrets')

const User = db.define("user", {
  type: {
    type: Sequelize.ENUM(...userTypes)
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  budget:{
    type: Sequelize.ENUM('lessThan1500', '1500to2000','2000to2500','over2500', 'any', '')
  },
  firstName: {
    type: Sequelize.BOOLEAN,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  aboutYou: {
    type: Sequelize.STRING,
  },
  firstCat: {
    type: Sequelize.STRING,
  },
  otherPets: {
    type: Sequelize.STRING,
  },
  fB: {
    type: Sequelize.STRING,
  },
  iG: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  ears: {
    type: Sequelize.STRING,
  },
  eyeColor: {
    type: Sequelize.STRING,
  },
  furColor: {
    type: Sequelize.STRING,
  },
  mif: {
    type: Sequelize.STRING,
  },
  eMail: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  IPaddress: {
    type: Sequelize.STRING,
  },
  hasBeenReviewedByAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
})

/**
 * instanceMethods
 */
 User.prototype.passwordConfirmed = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id, type:this.type }, process.env.JWT_SIG);
};

User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.passwordConfirmed(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    if (token){
      const { id } = await jwt.verify(token, process.env.JWT_SIG);
      const user = User.findByPk(id);
      if (!user) {
        throw "Bad, Bad, KittyToken";
      }
      return user;
    }
    return {
      fail: true,
      token: token,
    }
  } catch (ex) {
    const error = Error(" bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */
 const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

module.exports = User
