const asyncHandler = require("./asyncHandler");

const verifyRoles = (roles) => {
  if (!Array.isArray(roles)) roles = [roles];
  return asyncHandler((req, res, next) => {
    const user = req.user;
    if (!roles.includes(user?.role)) {
      throw new Error(`${roles.join(" ,")} can only perform this action`);
    }
    next();
  });
};

module.exports = verifyRoles;
