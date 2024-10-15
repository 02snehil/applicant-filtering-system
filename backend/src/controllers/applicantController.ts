import { Request, Response } from 'express';
import Applicant from '../models/Applicant';

export const createApplicant = async (req: Request, res: Response) => {
  try {
    const applicant = await Applicant.create(req.body);
    res.status(201).json(applicant);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getApplicants = async (req: Request, res: Response) => {
  try {
    const applicants = await Applicant.findAll();
    res.status(200).json(applicants);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getApplicantById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) return res.status(404).json({ error: 'Applicant not found' });
    res.status(200).json(applicant);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateApplicant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) return res.status(404).json({ error: 'Applicant not found' });
    
    await applicant.update(req.body);
    res.status(200).json(applicant);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteApplicant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) return res.status(404).json({ error: 'Applicant not found' });
    
    await applicant.destroy();
    res.status(204).send(); // No content
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
