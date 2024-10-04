"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        username: "user1",
        password: "password1", // BIG NO NO we should hash this in prod ...
        balance: 100.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user2",
        password: "password2", // BIG NO NO we should hash this in prod ...
        balance: 50.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
