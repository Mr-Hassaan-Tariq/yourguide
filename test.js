const allowedParams = ['name', 'age', 'email'];

// Check if all query parameters are allowed
const queryParams = Object.keys(req.query);
const isAllowed = queryParams.every(param => allowedParams.includes(param));

if (!isAllowed) {
  // If any parameter is not allowed, send an error response
  return res.status(400).json({ error: 'Invalid query parameters' });
}

// Use only the allowed parameters in the where clause
const where = {};
allowedParams.forEach(param => {
  if (req.query[param]) {
    where[param] = req.query[param];
  }
});

// Find users with allowed parameters only
User.findAll({ where }).then(users => {
  res.json(users);
}).catch(error => {
  res.status(500).json({ error: 'Internal server error' });
});
