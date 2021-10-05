import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
	createProject,
	updateProject,
	getProjectById,
	getAllProjects,
	deleteProject,
} from '../controllers/projectController.js';

router.get('/', getAllProjects);
router.route('/new').post(protect, admin, createProject);
router.route('/:id').delete(protect, admin, deleteProject).get(getProjectById).put(protect, admin, updateProject);

export default router;
