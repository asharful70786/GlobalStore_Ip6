import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import directoryRoutes from "./routes/directoryRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import checkAuth from "./middleWares/authMiddleWare.js";
import ConnectDb from "./db.js";


try {
   // // const db = await ConnectDb();
  // i will apply mongoDb later near with few days 
 

  const app = express();

  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: "http://[2405:201:8011:70a5:8521:f6be:f760:12d5]:8000",
      credentials: true,
    })
  );


  app.use("/directory", checkAuth, directoryRoutes);
  app.use("/file", checkAuth, fileRoutes);
  app.use("/user", userRoutes);

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({ message: "Something went wrong!!" });
  });

  app.listen(4000, "::", () => {
    console.log(`Server running on IPv6 port 4000`);
  });

} catch (error) {

}

