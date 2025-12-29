import app from "@missingstudio/api";

// Export type for Eden Treaty
export type App = typeof app;

// Export HTTP method handlers
export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const DELETE = app.handle;
export const PATCH = app.handle;
