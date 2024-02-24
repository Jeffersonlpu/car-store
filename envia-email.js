const enviarEmail = ({email, subject, bodyEmail}) => {
  if (!email) {
    return {
      status: "Error",
      message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
    };
  }

  if (!subject) {
    return {
      status: "Error",
      message:
        "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
    };
  }

  if (!bodyEmail) {
    return {
      status: "Error",
      message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
    };
  }

  console.log(
    `
        De: news@carstore.com
        Para: ${email}
        Assunto: ${subject}
        
        ${bodyEmail}
        
        CarStore - Aqui você encontra o seu carro novo
      `
  );

  return { status: "Sucess", message: "E-mail enviado com sucesso!" };
};

module.exports = enviarEmail;
