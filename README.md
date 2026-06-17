# Troquim

Prototipo do app de manutencao de celulares (Troquim) e do painel administrativo (Troquim Negocios).

## Stack

- React 18
- Vite 5
- Estilos inline (sem Tailwind / sem bibliotecas de UI externas)

## Estrutura

```
troquim-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # ponto de entrada
    ├── App.jsx         # alterna entre App Cliente e Painel Admin
    ├── index.css       # reset global minimo
    ├── Troquim.jsx      # app do cliente (responsivo: mobile + desktop)
    └── TroquimAdmin.jsx # painel da assistencia (pedidos, precos, avaliacoes)
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereco mostrado no terminal (normalmente http://localhost:5173).

## Status atual

Isso e um prototipo de frontend com dados fixos (mock). Para virar um produto real ainda falta:

- Backend / banco de dados (ex: Supabase, Node + PostgreSQL)
- Autenticacao real
- Integracao com Google Maps API
- Pagamentos (Stripe / Mercado Pago)
- Notificacoes push reais
