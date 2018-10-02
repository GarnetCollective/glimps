const GlimpsModel = (sequelize, Sequelize) => {
  return sequelize.define("glimps", {
    id: { type: Sequelize.UUID, primaryKey: true, validate: { isUUID: 4 } },
    imageUrl: { type: Sequelize.STRING },
    thumbUrl: { type: Sequelize.STRING }
  });
};

export default GlimpsModel;
