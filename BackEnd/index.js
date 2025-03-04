import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
//const __dirname = path.resolve();

app.use(cors({
  origin: 'http://localhost:5173', // Adjust for your frontend
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  credentials: true,
}));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/auth", authRoutes);

// if (process.env.NODE_ENV === "development") {
// 	app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "FrontEnd", "dist", "index.html"));
// 	});
// }

app.listen(PORT, () => {
 connectDB();
  console.log("Server is running on port: ",PORT);
});
