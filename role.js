module.exports = (db, Sequelize) => {
    let role = db.define('role', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(100)
        },
        code: {
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
        tableName: 'role', schema: 'user', underscored: true,
    });
    role.association = (models) => {
        role.hasMany(models.user, { foreignKey: 'userId' });
    }
    return role;
};