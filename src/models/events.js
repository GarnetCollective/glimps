const EventModel = (sequelize, Sequelize) => {
  return sequelize.define("event", {
    id: { type: Sequelize.UUID, primaryKey: true, validate: { isUUID: 4 } },
    name: { type: Sequelize.STRING, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false },
    mainImageUrl: { type: Sequelize.STRING },
    logoUrl: { type: Sequelize.STRING },
    secretKey: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING }
  });
};

export default EventModel;
