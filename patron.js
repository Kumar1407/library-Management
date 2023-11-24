module.exports = (db, Sequelize) => {
    let patron = db.define('patron', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        purchasesDate: {
            type: Sequelize.DATE
        },
        returnDate: {
            type: Sequelize.DATE
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
        tableName: 'patron', schema: 'user', underscored: true,
    });
    return patron ;
};