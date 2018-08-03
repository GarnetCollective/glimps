const successResponse = (res, data) => {
  return res.status(200).send({ success: true, data: data });
};

const failureResponse = (res, data, code = 400) => {
  return res.status(code).send({ success: false, error: data });
};

export { successResponse, failureResponse };
