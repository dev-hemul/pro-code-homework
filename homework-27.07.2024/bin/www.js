// Точка входу

import dbRunner from './runners/db.js';
import httpRunner from './runners/http.js';
import webRTCRunner from './runners/webRTC.js';
import fileRunner from './runners/file.js';
import websocketRunner from './runners/websocket.js';

await dbRunner();
await fileRunner();
await httpRunner();
await webRTCRunner();
await websocketRunner();