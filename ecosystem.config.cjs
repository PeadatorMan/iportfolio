module.exports = {
    apps: [
        {
            name: "cv-app",
            script: "serve", // we are running the 'serve' command
            env: {
                PM2_SERVE_PATH: "./dist", // path to the built files
                PM2_SERVE_PORT: 5173, // port number
                PM2_SERVE_SPA: "true", // for SPA
                NODE_ENV: "production",
            },
        },
    ],
};
