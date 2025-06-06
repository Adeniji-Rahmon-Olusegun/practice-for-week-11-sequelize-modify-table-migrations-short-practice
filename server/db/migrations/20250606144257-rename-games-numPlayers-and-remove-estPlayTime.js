'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn('Games', 'numPlayers', 'maxNumPlayers');
    await queryInterface.removeColumn('Games', 'estPlayTime');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('Games', 'maxNumPlayers', 'numPlayers');
    await queryInterface.addColumn('Games', 'estPlayTime', {
      type: Sequelize.INTEGER
    });
  }
};
