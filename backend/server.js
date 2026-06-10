import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors'; // 1. Importa o CORS

const app = express();

app.use(cors()); // 2. Habilita o CORS para permitir requisições do React
app.use(express.json());

const JWT_SECRET = 'sua_chave_secreta_aqui';

const emailValido = async function(email){
    return await app.query(`SELECT email FROM usuarios WHERE email = $1`, email)
}





app.get('/home', (request, response) => {
    return response.send("Bem-vindo à nossa API!");
});


app.post('/login', async (request, response) => {
    const { email, senha } = request.body;

    const hashGerado = await bcrypt.hash(senha, 10);

    console.log(emailValido(email));
    

    if (email !== emailValido(email)) {
        return response.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const emailVerificado = "SELECT"

    // Compara a senha digitada com ela mesma criptografada na hora (apenas para testar se passa!)
    const senhaValida = await bcrypt.compare(senha, 10);

    if (!senhaValida) {
        return response.status(401).json({ mensagem: ' Credenciais inválidas' });
    }

    const token = jwt.sign({ email: usuarioFake.email }, JWT_SECRET, { expiresIn: '1h' });
    return response.json({ token });
});

// ------------------------------------------------------

app.post('/registrar', async (request, response) => {

    try {
        const { nome, email, senha } = request.body;

        if (!email || !senha) {
            return response.status(400).json({ erro: 'Email e Senha são obrigatórios.' });
        }

        const hashGerado = await bcrypt.hash(senha, 10);

        const query = 'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3)';
        await app.query(query, [nome, email, hashGerado]);


    } catch (error) {
        console.error(error);
        return response.status(500).json({ erro: 'Erro interno ao salvar no banco de dados' })
    }

});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));