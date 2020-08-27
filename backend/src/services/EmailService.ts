interface IMailTo {
}

interface IMailMessage {
}

interface IMessageDTO {
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EMailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EMailService;