module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        vehicle_no: {
            type: Sequelize.STRING
        },
        vehicle_name:{
            type: Sequelize.STRING
        },
        slot_no: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        }
    });

    return Sale;
};