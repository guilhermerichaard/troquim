# Troquim — site público

Landing B2B do Troquim.

O produto é um copiloto operacional para negócios de serviço: atendimento no WhatsApp, agenda e automações ligadas à operação real. Este repositório contém somente a experiência pública de marketing.

## Separação de responsabilidades

- `troquim.app`: site público e posicionamento comercial.
- `painel.troquim.app`: produto autenticado do dono.
- `guilhermerichaard/troquim-bot`: backend, domínio, integrações e console real.

A landing não replica regras de agenda, catálogo, clientes ou faturamento.

## Princípios

- sem dados comerciais fictícios;
- sem métricas de ROI inventadas;
- sem painel mock apresentado como produto real;
- IA não é a proposta principal de valor;
- foco em atendimento, agenda, recuperação de oportunidades e tempo devolvido.

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Validação

```bash
npm run build
```

O CI executa instalação limpa e build a cada pull request para `main`.
