
const auth = (req, res, next) => {
    if (req.session?.admin) {
      return next();
    }  
    return res.status(401).send({ message: "You don't have access to this site. Please, contact your superior or the webmaster at xxxxxxx@gmail.com." });
  };
  
export default auth;
