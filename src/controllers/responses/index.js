const successResponse = (res, data) => {
  return res.status(200).send({ success: true, data: data });
};

const failureResponse = (res, data, code = 400) => {
  return res.status(code).send({ success: false, error: data });
};

const emptyResponse = res => {
  return res.status(204).send();
};

export { successResponse, failureResponse, emptyResponse };
