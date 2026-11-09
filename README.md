# Docinhos da Pathy — landing page

Landing page em React + Vite com CSS puro, catálogo visual e pedidos pelo WhatsApp.

## Executar

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (geralmente `http://localhost:5173`).

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Onde editar

| O que | Onde |
| --- | --- |
| Número do WhatsApp | `.env` (veja `.env.example`) |
| Instagram, mensagens, textos do "Sobre" e etapas | `src/data/site.js` |
| Produtos (nome, descrição, foto) | `src/data/products.js` |
| Fotos da galeria | `src/data/gallery.js` |
| Cores e fontes | início de `src/styles/global.css` e `index.html` |

## WhatsApp

Copie `.env.example` para `.env` e coloque o número em `VITE_WHATSAPP_NUMBER`: `55` + DDD + número, só dígitos. O `.env` não vai para o git; na hospedagem (Vercel, Netlify etc.), cadastre a mesma variável nas configurações do projeto.
O valor atual é propositalmente inválido. **Não publique sem trocar.**

## Fotos

Ficam em `src/assets/fotos/`. O jeito mais simples de trocar é salvar a foto nova e ajustar o `import`
no arquivo de dados correspondente (o Hero e o Sobre importam as fotos direto em `Hero.jsx` e `About.jsx`).

As fotos dos doces são recortes de capturas de tela do Instagram, em baixa resolução, e servem só como
versão temporária. Prefira os arquivos originais, com pelo menos 1200 px no lado maior.

Fotos dos produtos: salve em `src/assets/fotos/produtos/` com o id da categoria no nome (por exemplo, `cupcakes.jpg`). A foto entra sozinha no card. Os ids estão em `src/data/products.js`.

Uma categoria sem foto mostra automaticamente um placeholder identificado como "Foto temporária".
O mesmo acontece se uma foto não carregar.

## Antes de publicar

- Trocar o número do WhatsApp e testar os botões no celular.
- Substituir as fotos temporárias pelos originais.
- Revisar com a Pathy os textos, os produtos e a ligação de cada foto com sua categoria.
- Confirmar autorização para usar as fotos dos trabalhos e a foto da Pathy.
- Rodar `npm run build`.
