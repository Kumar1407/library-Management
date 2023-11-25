const bcrypt_p = require('bcrypt-promise');
const bcrypt = require('bcrypt')
module.exports = (db, Sequelize) => {
    let user = db.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING(100)
        },
        lastName: {
            type: Sequelize.STRING(100)
        },
        email: {
            type: Sequelize.STRING(100)
        },
        password: {
            type: Sequelize.STRING(100)
        },
        phoneNo: {
            type: Sequelize.INTEGER
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        modifiedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        tableName: 'user', schema: 'user', underscored: true,
    });
    user.association = (models) => {
        user.belongsTo(models.role, { foreignKey: 'roleId' });
    }
    user.beforeSave(async (user, options) => {
        let err;
        // Hash the password if it has been changed or is new
        if (user.changed('password')) {
          // if (user.changed('password') && (!user.importId) && (user.password)) {
    
          let salt, hash;
          //Asynchronously generates a salt.
          // Randomly select rounds(b/w 4-10) for generating hash
          let rounds = Math.floor(Math.random() * 6 + 4);
          [err, salt] = await to(bcrypt.genSalt(rounds));
          if (err) {
            console.log(err.message);
          }
          //Asynchronously generates a hash with salt
          [err, hash] = await to(bcrypt.hash(user.password, salt));
          if (err) {
            console.log(err.message);
          }
          user.password = hash;
        }
      });
      //Instance level methods to compare the password
      user.prototype.comparePassword = async function (pw) {
        let err, pass;
        if (!this.password) TE('PWD_NOT_SET');
        //Password verification
        [err, pass] = await to(bcrypt_p.compare(pw, this.password));
        if (err) TE(err.message);
        if (!pass) TE('INVALID_PASSWORD_MSG');
        return this;
      };
    return user;
};