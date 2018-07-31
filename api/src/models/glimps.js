import sequelize from "../db";

const Glimps = sequelize.define("glimps", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  eventid: {
    type: Sequelize.STRING
  },
  created_at: {
    type: sequelize.DATE
  },
  updated_at: {
    type: sequelize.DATE
  }
});
