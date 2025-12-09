# Next.js AI Chatbot

<p align="center">
  <img alt="Next.js AI Chatbot" src="app/(chat)/opengraph-image.png">
  <h1 align="center">Next.js AI Chatbot</h1>
</p>

<p align="center">
  Um chatbot moderno e completo construído com Next.js, AI SDK e TypeScript, totalmente traduzido para português.
</p>

<p align="center">
  <a href="#-funcionalidades"><strong>Funcionalidades</strong></a> ·
  <a href="#-tecnologias"><strong>Tecnologias</strong></a> ·
  <a href="#-instalação"><strong>Instalação</strong></a> ·
  <a href="#-configuração"><strong>Configuração</strong></a> ·
  <a href="#-deploy"><strong>Deploy</strong></a>
</p>

## ✨ Funcionalidades

- 💬 **Chat em tempo real** com streaming de mensagens
- 🤖 **Suporte a múltiplos modelos de IA** (xAI, OpenAI, Fireworks)
- 📝 **Histórico de conversas** persistente
- 🔐 **Autenticação segura** com Auth.js
- 📄 **Criação e edição de documentos** (texto, código, planilhas, imagens)
- 💡 **Sugestões de melhoria** para documentos de texto
- 🌐 **Chats públicos e privados**
- 🎨 **Interface moderna** com Tailwind CSS e shadcn/ui
- 🌙 **Modo escuro/claro**
- 📱 **Design responsivo**
- 🇧🇷 **Totalmente em português**

## 🛠️ Tecnologias

- **[Next.js 16](https://nextjs.org)** - Framework React com App Router
- **[AI SDK](https://ai-sdk.dev)** - SDK unificado para integração com LLMs
- **[TypeScript](https://www.typescriptlang.org)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com)** - Estilização
- **[shadcn/ui](https://ui.shadcn.com)** - Componentes UI acessíveis
- **[Auth.js](https://authjs.dev)** - Autenticação
- **[Drizzle ORM](https://orm.drizzle.team)** - ORM para PostgreSQL
- **[Neon Postgres](https://neon.tech)** - Banco de dados serverless
- **[Vercel Blob](https://vercel.com/storage/blob)** - Armazenamento de arquivos
- **[Biome](https://biomejs.dev)** - Linter e formatador

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- pnpm (ou npm/yarn)
- Conta no Vercel (para deploy)
- Banco de dados PostgreSQL (Neon recomendado)

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/anthonymengottii/nextjs-ai-chatbot.git
cd nextjs-ai-chatbot
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

Copie o arquivo `.env.example` para `.env.local` e preencha com suas credenciais:

```bash
cp .env.example .env.local
```

Variáveis necessárias:

```env
# Banco de dados
POSTGRES_URL=postgresql://user:password@host:port/database

# Autenticação
AUTH_SECRET=seu-secret-key-aqui

# AI Gateway (opcional para Vercel)
AI_GATEWAY_API_KEY=sua-api-key-aqui

# Redis (opcional, para streams resumíveis)
REDIS_URL=redis://localhost:6379
```

4. **Execute as migrações do banco de dados**

```bash
pnpm db:migrate
```

5. **Inicie o servidor de desenvolvimento**

```bash
pnpm dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuração

### Modelos de IA

O projeto suporta múltiplos provedores de modelos através do Vercel AI Gateway:

- **Cupula IA**: Modelo multimodal avançado com capacidades de visão e texto
- **OpenAI**: GPT-4, GPT-3.5
- **Fireworks**: Modelos Claude e outros

Para configurar, edite `lib/ai/models.ts` e `lib/ai/providers.ts`.

### Autenticação

O sistema requer autenticação para usar o chatbot. Usuários não autenticados são redirecionados para a página de registro.

### Banco de Dados

O projeto usa Drizzle ORM para gerenciar o esquema do banco de dados:

- **Gerar migrações**: `pnpm db:generate`
- **Aplicar migrações**: `pnpm db:migrate`
- **Abrir Drizzle Studio**: `pnpm db:studio`

## 🚀 Deploy

### Deploy na Vercel

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente na Vercel
3. O deploy será feito automaticamente

### Deploy Manual

```bash
pnpm build
pnpm start
```

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o linter
- `pnpm format` - Formata o código
- `pnpm db:migrate` - Aplica migrações do banco
- `pnpm db:studio` - Abre o Drizzle Studio
- `pnpm test` - Executa os testes

## 🔒 Segurança

- ✅ Autenticação obrigatória para uso do chatbot
- ✅ Validação de entrada com Zod
- ✅ Proteção contra SQL injection (Drizzle ORM)
- ✅ Variáveis de ambiente para credenciais sensíveis
- ✅ Rate limiting para prevenir abuso

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

