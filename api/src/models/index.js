import { sequelize, Sequelize } from "../db";

import EventModel from "./events";

const Event = EventModel(sequelize, Sequelize);

export { Event, sequelize };
