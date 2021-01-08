const config = {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-api-upload-bucket",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://htux8s3jz1.execute-api.ap-south-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_22YLZ0ArT",
    APP_CLIENT_ID: "4tuve7r9svngodcg401ckru71u",
    IDENTITY_POOL_ID: "ap-south-1:e792a6e7-cecc-43dc-a413-ad2bb8b52476",
  },
};

export default config;
