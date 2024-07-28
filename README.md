# flunty-website-portable
A portable version of my website. It's useless, I know.

![Screenshot of Flunty's Website Portable directory](https://github.com/user-attachments/assets/bb6cf3f8-8733-4339-8ae6-9a43e519d0f1)

## Usage
1. Download the ISO [here](https://github.com/Fluntyy/flunty-website-portable/releases/latest).
2. Burn it onto a USB or DVD, or just double-click the ISO.
3. Open Explorer and double-click Flunty's Website Portable.
4. That's it. The server is running on port 3000.

## Build
To build the project, you need to configure Flunty's Website for the Node adapter.

1. Clone the Flunty's Website repository and install the Node adapter:
    ```console
    git clone https://github.com/Fluntyy/flunty-website.git
    cd ./flunty-website
    npm i -D @sveltejs/adapter-node
    ```

2. Add the adapter to `svelte.config.js`:
    ```js
    import adapter from '@sveltejs/adapter-node';
    import preprocess from 'svelte-preprocess';
    import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

    /** @type {import('@sveltejs/kit').Config} */
    const config = {
        preprocess: [
            preprocess({
                postcss: true
            })
        ],
        kit: {
            adapter: adapter({ precompress: true })
        }
    };

    export default {
        // preprocess: [vitePreprocess()]
    } && config;
    ```

3. Build the project:
    ```console
    npm run build
    ```

4. Clone this repository and copy the `build` folder to `flunty-website-portable`:
    ```console
    git clone https://github.com/Fluntyy/flunty-website-portable.git
    ```

5. Download Node.js portable [here](https://nodejs.org/en/download/prebuilt-binaries/current), extract it, and copy it to the `flunty-website-portable` folder.

    <img src="https://github.com/user-attachments/assets/b2cb1948-c42f-48f7-94c2-c5eb6c0dab58" width="540">

6. Use [UltraISO](https://www.ultraiso.com/) or a similar tool to create the ISO.

    <img src="https://github.com/user-attachments/assets/c53dc4ce-0d17-4ab9-a1b5-646f1971acda" width="540">

7. That's it. Now you have your own `flunty-website-portable.iso`.

If you want to build the universal version, you will need to download every Node.js architecture (x86, x64, ARM64), put it into a folder (`.\node\x86\`, `.\node\x64\`, `.\node\arm64\`), and edit `start.bat` to the following:
```bat
@echo off
cd %~dp0

REM Start the local server
start http://127.0.0.1:3000

REM Determine the system architecture
set ARCHITECTURE=%PROCESSOR_ARCHITECTURE%

REM Execute the appropriate Node.js command based on architecture
echo Press Ctrl+C or close this window to stop the server.
if "%ARCHITECTURE%"=="X86" (
    node\x86\node build\index.js
) else if "%ARCHITECTURE%"=="AMD64" (
    node\x64\node build\index.js
) else if "%ARCHITECTURE%"=="ARM64" (
    node\arm64\node build\index.js
) else (
    echo Unable to determine architecture.
    pause
    exit /b 1
)
```
