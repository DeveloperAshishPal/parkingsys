module.exports = (sequelize, Sequelize) => {
    const Slots = sequelize.define("slots", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.INTEGER,
        },
        is_available: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        is_under_maintance :{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Slots;
};