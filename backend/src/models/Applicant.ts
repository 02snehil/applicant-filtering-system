import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/postgres';

class Applicant extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public skills!: string[];
  public experience!: number;
  public education!: string;
}

Applicant.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    skills: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    experience: { type: DataTypes.INTEGER, allowNull: false },
    education: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Applicant',
    tableName: 'applicants',
  }
);

export default Applicant;
