import express from 'express';
import { getOneResource } from '../controllers/getOneResource';


const router = express.Router();

// Get all folders route
router.get('/:resourceId', getOneResource);

export default router;