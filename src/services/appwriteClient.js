// /src/services/appwriteClient.js
import { Client, Databases } from 'appwrite';

const endPoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client();
client.setEndpoint(endPoint);
client.setProject(projectId);

const databases = new Databases(client);

export { client, databases };