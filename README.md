# Editor de Markdown (GitHub Pages)

Editor de Markdown lleuger, minimalista i sense servidor dissenyat per executar-se directament a **GitHub Pages**.

## 🚀 Característiques

- **100% Sense Servidor**: No requereix cap backend Node.js. Funciona directament en qualsevol navegador.
- **Autoguardat a `localStorage`**: Desa automàticament qualsevol canvi després de 500 ms d'inactivitat.
- **Autoguardat a Disc (File System Access API)**: Permet vincular l'editor amb un fitxer `.md` local del teu ordinador per desar els canvis directament al teu disc dur en temps real.
- **Formatat en Temps Real**: Reconeixement de capçaleres, llistes, negreta, cursiva, codi i cites sense perdre la posició del cursor.
- **Comptador**: Mostra en temps real les paraules i els caràcters escrits.
- **Exportació**: Botó per carregar fitxers o descarregar el contingut actual en format `.md`.

## 📦 Com publicar a GitHub Pages

1. Crea un nou repositori públic o privat a [GitHub](https://github.com/new).
2. Puja aquest repositori des de la teva terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Serverless Markdown Editor"
   git branch -M main
   git remote add origin https://github.com/EL_TEU_USUARI/EL_TEU_REPO.git
   git push -u origin main
   ```
3. A GitHub, ves a **Settings** > **Pages**.
4. A **Source**, selecciona `Deploy from a branch` i tria la branca `main` / `root`.
5. Fes clic a **Save**. En uns segons la teva aplicació estarà online i accessible globalment!
