const authEvent = (req, res, next) => {
  const {id} = req.params;
  const event = req.user;

  if (event.id !== id) {
    return res.status(401).send("Unauthorized");
  }

  next();
}

export default authEvent;