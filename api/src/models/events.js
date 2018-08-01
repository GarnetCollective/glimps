const EventModel = (sequelize, Sequelize) => {
  return sequelize.define("event", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: {
          args: 4,
          msg: "Please provide a valid uuid."
        }
      }
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Pleade provide a name."
        }
      }
    },
    Date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });
};

export default EventModel;
