export default () => ({
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    hostPort: process.env.DB_HOST_PORT,
    containerPort: process.env.DB_CONTAINER_PORT,
  },
});
