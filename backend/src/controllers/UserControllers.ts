import { Request, Response } from 'express';
import EmailService from '../services/EmailService';
import EMailService from '../services/EmailService';

const users = [
    { name: 'Lucas', email: 'lucas.n.123@outlook.com.br' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EMailService();

        emailService.sendMail({
            to: {
                name: 'Lucas OLiveira',
                email: 'lucas.n.123@outlook.com.br',
            },
            message: {
                subject: 'Bem-vindo ao Sistema',
                body: 'Seja Bem-vindo'
            }
        });

        return res.send();
    }
};