import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api/sendMail": "http://localhost:3000",
      },
    },
    define: {
      "process.env.REACT_APP_OPENAI_API_KEY": JSON.stringify(
        env.REACT_APP_OPENAI_API_KEY
      ),
      "process.env.CORS_ANYWHERE": JSON.stringify(env.CORS_ANYWHERE),
    },
  });
};
