import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_URI as string);

export const connectToPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error);
  }
};

export default sequelize;
