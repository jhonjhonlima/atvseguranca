import React, { useState } from 'react';
import api from '../services/api';


export default function Login(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [msg, setMsg] = useState('');


async function handleSubmit(e){
e.preventDefault();
try{
const res = await api.post('/auth/login', { email, password });
const { token, user } = res.data;
localStorage.setItem('token', token);
localStorage.setItem('user', JSON.stringify(user));
setMsg('Logado com sucesso. Token armazenado no localStorage (apenas exemplo).');
}catch(err){
setMsg(err.response?.data?.message || 'Erro no login');
}
}


return (
<div>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div><input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
<div><input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required /></div>
<button type="submit">Entrar</button>
</form>
{msg && <p>{msg}</p>}
</div>
);
}
