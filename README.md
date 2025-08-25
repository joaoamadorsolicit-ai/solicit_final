# SOLICIT — Site pronto a publicar (Privado por Password)

Este pacote está preparado para **Vercel** e fica **privado** por password via *Basic Auth* (funciona no Edge).

## Passo-a-passo para publicar na Vercel

1. **Cria um repositório no GitHub** (ex.: `solicit-site`) e carrega todos os ficheiros deste ZIP.
2. Vai a **vercel.com** → *New Project* → **Import Git Repository** → escolhe o repo → *Deploy*.
3. No projeto da Vercel abre **Settings → Environment Variables** e adiciona:
   - `BASIC_AUTH_USER` → `Newsolicit`
   - `BASIC_AUTH_PASS` → `Solicit2025*`
4. Clica **Redeploy** (ou faz um novo deploy) para aplicar as variáveis.
5. Abre o domínio gerado. O site vai pedir **utilizador** e **password**.

### Se a password não funcionar
1. Confirma as variáveis exatamente como acima (sem espaços/aspas).
2. Garante que estão em **Preview** e **Production**.
3. Faz **Redeploy**.
4. Abre em **janela anónima** e volta a inserir *ambos* os campos.

## Personalização rápida
- **Logo:** substitui `public/logo.svg` no GitHub por um ficheiro com o mesmo nome.
- **Email:** está `geral@solict.pt`. Se quiseres outro, avisa-me e eu preparo.
- **WhatsApp:** marcado como “em atualização” — diz-me o número quando tiveres.

> Quando quiseres tornar público sem password, basta remover as variáveis ou desativar o middleware (posso preparar isso por ti).

