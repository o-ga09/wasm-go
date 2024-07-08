global.crypto = require('crypto-browserify');
require("./wasm_exec.js");

const fs = require("fs");
const path = require("path");

const go = new Go();
const wasmPath = path.join(__dirname, "main.wasm");
const buffer = fs.readFileSync(wasmPath);

WebAssembly.instantiate(buffer, go.importObject).then((result) => {
  go.run(result.instance);
});