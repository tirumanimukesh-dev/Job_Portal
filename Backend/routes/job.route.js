import express from "express";

import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

// router.route("/post").post(authenticateToken, postJob);
// router.route("/get").get(authenticateToken, getAllJobs);
// router.route("/getadminjobs").get(authenticateToken, getAdminJobs);
// router.route("/get/:id").get(authenticateToken, getJobById);
// PUBLIC ROUTES
router.route("/get").get(getAllJobs);
router.route("/get/:id").get(getJobById);

// PROTECTED ROUTES
router.route("/post").post(authenticateToken, postJob);
router.route("/getadminjobs").get(authenticateToken, getAdminJobs);
export default router;
