import { build } from 'esbuild';

build({
  entryPoints: ['src/index.jsx'],  // Entry point
  bundle: true,                    // Bundle all dependencies
  outfile: 'public/dist/index.js',  // Output file
  minify: true,                     // Minify the output
  sourcemap: true,                  // Source map for debugging
  loader: {
    '.js': 'jsx',                   // Handle JSX files
    '.png': 'file',                 // Add a loader for PNG files
  },
// eslint-disable-next-line no-undef
}).catch(() => process.exit(1));
