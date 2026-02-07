// import jwt from "jsonwebtoken";

// const adminAuth = async (req, res, next) => {
//   try {
//     const token = req.headers.token;
    


//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Not Authorized, login again"
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     if (decoded.email !== process.env.ADMIN_EMAIL) {
//       return res.status(403).json({
//         success: false,
//         message: "Not Authorized"
//       });
//     }

//     next();

//   } catch (error) {
//     console.log("ADMIN AUTH ERROR ❌", error.message);
//     res.status(401).json({
//       success: false,
//       message: "Invalid or expired token"
//     });
//   }
// };

// export default adminAuth;

import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not Authorized, login again" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    
    req.user = decoded;

য
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    next();
  } catch (error) {
    console.log("ADMIN AUTH ERROR ❌", error.message);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default adminAuth;


export default adminAuth;
