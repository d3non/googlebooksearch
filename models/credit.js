module.exports = (sequelize, Sequelize) => {
  var Credit = sequelize.define('credit', {
    id_credit: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    first_name: { type: Sequelize.STRING, notEmpty: true },
    mid_name: { type: Sequelize.STRING, notEmpty: true },
    last_name: { type: Sequelize.STRING, notEmpty: true },
    date_issued: { type: Sequelize.DATE, notEmpty: true },
    last_payment: { type: Sequelize.DATE, notEmpty: true },
    total_pay: { type: Sequelize.DOUBLE },
    total_debt: { type: Sequelize.DOUBLE }
  });

  return Credit;
};