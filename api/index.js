import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "../routes/auth.route.js";
import movieRoutes from "../routes/movie.route.js";
import tvRoutes from "../routes/tv.route.js";
import searchRoutes from "../routes/search.route.js";
import { ENV_VARS } from "../config/envVars.js";
import { connectDB } from "../config/db.js";
import { protectRoute } from "../middleware/protectRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

export default app;
