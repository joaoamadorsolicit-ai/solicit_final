# SOLICIT — Visual pronto (com slots para imagens e cores)

Este pacote mostra imagens/logo e cores de marca **sem mexer em código**.

## Como usar (Vercel + GitHub, 4 passos)
1. Cria um repositório privado no GitHub (ex.: `solicit-site`).
2. Faz upload de TODO o conteúdo deste ZIP.
3. Na Vercel → *New Project* → **Import Git Repository** → Deploy (aceita defaults).
4. Abre o site: já tem placeholders. Basta substituí-los pelas tuas imagens.

## Trocar imagens (sem código)
- Vai ao GitHub → pasta `public/images/` → **Upload files** e **substitui** os ficheiros pelos teus, mantendo os **mesmos nomes**:  `logo.svg`, `cover.jpg`, `about.jpg`, `values.jpg`, `services.jpg`, `tech.jpg`, `team.jpg`, `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`.- O site atualiza sozinho (a Vercel faz redeploy automático).

## Trocar as cores/nomes (sem código)
- Edita o ficheiro `data/site.json` no GitHub (ícone do lápis) e muda:  `brand.name`, `brand.accent`, `brand.accent2`, `brand.bg`, `brand.text`.- Guarda (Commit). O site atualiza.

## Contactos
- Em `data/site.json` podes trocar `contact.email`, `contact.whatsapp`, `contact.address`.

> Dica: Se o site ainda pedir password, é porque tens um `middleware.js` antigo. Apaga-o do repositório para não haver login.
