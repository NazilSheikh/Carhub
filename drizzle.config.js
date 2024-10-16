/** @type { import("drizzle-kit").Config } */
export default {
    // giving proper path that we have created 
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:7MfrbHOELx5v@ep-holy-glitter-a5qenn3s.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };