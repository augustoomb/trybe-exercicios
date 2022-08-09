module.exports = (err, _req, res, _next) => {
  res.status(err.status).json({ "error": { "code": err.code, "message": err.message } })
}