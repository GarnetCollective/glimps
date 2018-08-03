import { Glimps } from "../models";

/**
 * @param {string} id
 */
const find = id => Glimps.findById(id);

export default { find };
