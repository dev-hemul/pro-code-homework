// Entry point
import httpRunner from './runners/http.js';
import ws from './runners/ws.js';


await httpRunner();
await ws();

