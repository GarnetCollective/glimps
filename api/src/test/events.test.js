import request from "supertest";

import app from "../index";

describe("GET /events", () => {
  test("It should respond with all the events given a limit and offset", () => {
    return request(app)
      .get("/api/events")
      .expect(200)
      .then(res => {
        const { success } = res.body;
        expect(success).toBe(true);
      });
  });
});
