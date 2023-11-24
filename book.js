module.exports = (db, Sequelize) => {
    let book = db.define('book', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING(100)
        },
        author: {
            type: Sequelize.STRING(100)
        },
        ISBN: {
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
        tableName: 'book', schema: 'book', underscored: true,
    });
    return book;
};