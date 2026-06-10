import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o axios

function Registrar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

        // try {
        //     const resposta = axios.post('http://localhost:3000/registrar', {
        //         nome,
        //         email,
        //         senha
        //     });

        // } catch (err) {
        //     print("Infelizmente eu estou aqui - O erro")
        // }
    // };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Tela de Cadastro</h2>
            {/* <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}> */}
 
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>

                <div>
                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                <button type="submit">Cadastrar</button>
            {/* </form> */}
        </div>
    );
}

export default Registrar;