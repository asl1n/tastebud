module.exports = {
  apps: [
    {
      name: "tastebuds-web",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
