import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.TIEMPO_CLIMA': JSON.stringify(process.env.TIEMPO_CLIMA),
    'process.env.PAIS_CIUDAD': JSON.stringify(process.env.PAIS_CIUDAD)
  }
 
})
