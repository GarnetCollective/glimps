import { sequelize, Sequelize } from "../db";

import EventModel from "./events";
import GlimpsModel from "./glimps";

const Event = EventModel(sequelize, Sequelize);
const Glimps = GlimpsModel(sequelize, Sequelize);

export { Event, Glimps, sequelize };
