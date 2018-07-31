const EventModel = (sequelize, Sequelize) => {
  sequelize.define("event", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING
    },
    Date: {
      type: Sequelize.DATE
    }
  });
};

export default EventModel;
