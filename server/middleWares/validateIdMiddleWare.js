function validIdMiddleWare(req, res, next, id) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidRegex.test(id)) {
    return res.status(400).json({ error: `Invalid UUID: ${id}` });
  }

  next();
}

export default validIdMiddleWare;
