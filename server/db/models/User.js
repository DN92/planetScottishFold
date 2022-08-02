const Sequelize = require('sequelize')
const db = require('../dbSetup')
const { userTypes, } = require('../../../myModelsConfig')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { eyeColorsAdmin, budgetRanges, mifOptions, genderOptions, earOptions, willBreedOptions, hasAllergiesOptions, foundUsByOptions, applyStatusOptions } = require('../../../myModelsConfig')


const User = db.define("user", {
  type: {
    type: Sequelize.ENUM(userTypes),
    defaultValue: userTypes[0]
  },
  eMail: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  password: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  firstName: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  budget:{
    type: Sequelize.ENUM(budgetRanges)
  },
  aboutYou: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  firstCat: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  otherPets: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  city: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  IPaddress: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  fB: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  iG: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  gender: {
    type: Sequelize.ENUM(genderOptions),
    defaultValue: genderOptions[0],
  },
  ears: {
    type: Sequelize.ENUM(earOptions),
    defaultValue: earOptions[1],
  },
  eyeColor: {
    type: Sequelize.ENUM(eyeColorsAdmin, 'No Preference'),
    defaultValue: eyeColorsAdmin[0],
  },
  furColor: {     // Stringified JSON array from frontend
    type: Sequelize.STRING,
    defaultValue: '',
  },
  mif: {
    type: Sequelize.ENUM(mifOptions),
    defaultValue: mifOptions[0],
  },
  //
  phoneNumber:{
    type: Sequelize.STRING,
    defaultValue: '',
  },
  willBreed: {
    type: Sequelize.ENUM(willBreedOptions),
    defaultValue: willBreedOptions[0],
  },
  hasAllergies: {
    type: Sequelize.ENUM(hasAllergiesOptions),
    defaultValue: hasAllergiesOptions[0],
  },
  foundUsBy: {
    type: Sequelize.ENUM(foundUsByOptions),
    defaultValue: foundUsByOptions[foundUsByOptions.length - 1],
  },
  applyStatus: {
    type: Sequelize.ENUM(applyStatusOptions),
    defaultValue: applyStatusOptions[0],
  }
})

/**
 * instanceMethods
 */
 User.prototype.passwordConfirmed = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  const token = jwt.sign({ id: this.id, type:this.type }, process.env.JWT_SIG);
  console.log('TOKEN WAS GENERATED :: ', token)
  return token
};

User.authenticate = async function ({ eMail, password }) {
  const user = await this.findOne({ where: { eMail: eMail } });
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
      const { id } = jwt.verify(token, process.env.JWT_SIG);
      const user = await User.findByPk(id);
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
    user.password = await bcrypt.hash(user.password, 6);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

module.exports = User
