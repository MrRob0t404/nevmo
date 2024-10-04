"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Drop all existing users
    await queryInterface.bulkDelete("users", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });

    const hashedUsers = await Promise.all([
      {
        username: "user1",
        password: await bcrypt.hash("password1", 10),
        balance: 100.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user2",
        password: await bcrypt.hash("password2", 10),
        balance: 50.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("users", hashedUsers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
