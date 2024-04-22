import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GraphQLClient, ClientContext } from 'graphql-hooks';

//const token = '6ebe4ac8f330d6e3b0cb3ddac098f2';
const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_READ_ONLY_API_TOKEN}`, 
    },
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClientContext.Provider value={client}>
            <App />
        </ClientContext.Provider>
    </React.StrictMode>
);