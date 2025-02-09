// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./js/script.js'],  // Caminho do arquivo JS de entrada
  bundle: true,  // Junta todos os arquivos em um único
  minify: true,  // Ativa a minificação
  outfile: './dist/script.min.js', // Arquivo de saída minificado
}).catch(() => process.exit(1));  // Caso haja erro, sai com código 1

esbuild.build({
  // Para o CSS
  entryPoints: ['./css/style.css'],  // Caminho do arquivo CSS de entrada
  bundle: true,  // Junta os arquivos CSS
  minify: true,  // Minifica o CSS
  outfile: './dist/styles.min.css',  // Arquivo de saída minificado para CSS
}).catch(() => process.exit(1));
