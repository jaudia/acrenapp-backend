export const NODE_ENV = process.env.NODE_ENV || 'development';
export const HOST = process.env.HOST || 'localhost';
export const PORT = process.env.PORT || 3000;
export const DATABASE = process.env.DATABASE || 'acrenapp_dev_db';
export const DB_PORT = process.env.DB_PORT || 5432;
export const DB_USERNAME = process.env.DB_USERNAME || 'db_admin_dev';
export const DB_PASSWORD = process.env.DB_PASSWORD || '123456';
export const SECRET_PRIVATE_KEY = process.env.SECRET_PRIVATE_KEY || 'secreto-dev';



export const mailConfig = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'acrenapp@gmail.com',
      pass: 'yourpassword'
    }
  });