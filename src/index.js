import React from 'react'; // Importa o React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar o aplicativo na DOM
import './index.css'; // Importa o arquivo de estilos CSS global
import App from './App'; // Importa o componente principal do aplicativo
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap para estilização

// Cria a raiz do aplicativo no elemento com id 'root' na página HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente 'App' dentro da raiz
root.render(<App />);
