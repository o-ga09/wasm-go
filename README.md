# goでwasmを試す

## How to Build

```
$ GOOS=js GOARCH=wasm go build -o main.wasm main.go
$ cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
```

## How to Run

```
$ node main.js
```

## Run on Browser

open index.html
