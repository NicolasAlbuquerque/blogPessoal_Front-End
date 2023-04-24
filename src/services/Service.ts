import axios from "axios";

export const api=axios.create({baseURL:'https://blogpessoal-ppmf.onrender.com'})


export const cadastroUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data.token);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data.token);
};


// a tipagem correta do headers é object pq nele podem ter vários dados
export const busca = async (url: string, setDados:any , header:any) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};
