import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token = authHeader.split(" ")[1]; // Bearer TOKEN

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Not Authorized Login Again",
    });
  }
};

export default authUser;
