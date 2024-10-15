import express from 'express';
import { createApplicant, getApplicants, getApplicantById, updateApplicant, deleteApplicant } from '../controllers/applicantController';

const router = express.Router();

router.post('/', createApplicant); 
router.get('/', getApplicants); 
router.get('/:id', getApplicantById); 
router.put('/:id', updateApplicant); 
router.delete('/:id', deleteApplicant); 

export default router;
