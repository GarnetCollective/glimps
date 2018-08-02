import { Event } from "../models";

const createEvent = name => {
  return Event.create({
    id: "feb4ff69-58b2-482d-bcb2-b87a40460599",
    Name: name
  });
};

export { createEvent };
