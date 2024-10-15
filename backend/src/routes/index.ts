import { Router } from 'express';
import applicantRoutes from './applicants';

const router = Router();
router.use('/applicants', applicantRoutes);

export default router;
