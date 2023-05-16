
import express from "express";
import productRouter from "./routes/products.js";
import cartRouter from "./routes/carts.js";
import { connectDB } from "./db/mongoConnection.js";
import * as dotenv from "dotenv";
import session from "express-session";
import mongoStore from "connect-mongo";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 8088;
const app = express();
const SECRET_KEY = process.env.SECRET_KEY || "CoderS3cR3tC0D3";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.use(cookieParser());
app.use(
  session({
    store: mongoStore.create({
      mongoUrl: MONGO_URL,
      ttl: 20,
    }),
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api/sessions", sessionRouter);
app.use("/api/users", userRouter);

const httpServer = app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
  connectDB(process.env.MONGO_URI);
});
