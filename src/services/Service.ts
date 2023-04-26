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


//metodo Busca por ID 
export const buscaId = async (url: string, setDados:any , header:any) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};

//Metodo Post
export const post = async (url: string, dados: any, setDados:any , header:any) => {
    const resposta = await api.post(url,dados ,header);
    setDados(resposta.data);
};

//metodo Put
export const put = async (url: string, dados: any, setDados:any , header:any) => {
    const resposta = await api.put(url,dados ,header);
    setDados(resposta.data);
};

//DeleteId
export const deleteId = async (url: string, header:any) => {
    await api.put(url,header);
};



