import os
import shutil
import requests
import subprocess
import platform
from pathlib import Path

TEMP_DIR = Path(os.getenv('TEMP')) / "flunty-setup"
REPO_URL = "https://github.com/Fluntyy/flunty-website.git"
NODEJS_URL_BASE = "https://nodejs.org/dist/v"
ICON_URL = "https://raw.githubusercontent.com/Fluntyy/flunty-website-portable/refs/heads/main/icon.ico"
OSCDIMG_URLS = {
    "x64": "https://github.com/hydrz/oscdimg/raw/main/oscdimg-amd64.zip",
    "x86": "https://github.com/hydrz/oscdimg/raw/main/oscdimg-x86.zip",
    "arm64": "https://github.com/hydrz/oscdimg/raw/main/oscdimg-arm64.zip"
}
BUILD_DIR = TEMP_DIR / "flunty-website" / "build"
PORTABLE_DIR = Path(__file__).parent / "flunty-website-portable"
NODE_DIR = PORTABLE_DIR / "node"
ISO_OUTPUT_PATH = Path(__file__).parent / "flunty-website-portable.iso"

TEMP_DIR.mkdir(parents=True, exist_ok=True)

def check_git():
    if shutil.which("git") is None:
        choice = input("Git is not installed. Type 'y' to install Git using winget, or press any key to exit: ")
        if choice.lower() == 'y':
            subprocess.run(["winget", "install", "Git.Git"])
        else:
            exit(1)

def clone_repo():
    subprocess.run(["git", "clone", REPO_URL, str(TEMP_DIR / "flunty-website")])

def check_node():
    if shutil.which("node") is None:
        choice = input("Node.js is not installed. Type 'y' to install Node.js using winget, or press any key to exit: ")
        if choice.lower() == 'y':
            subprocess.run(["winget", "install", "OpenJS.NodeJS"])
        else:
            exit(1)

def install_dependencies():
    project_dir = TEMP_DIR / "flunty-website"
    subprocess.run("npm install", cwd=project_dir, shell=True)
    subprocess.run("npm install -D @sveltejs/adapter-node", cwd=project_dir, shell=True)

def configure_svelte():
    config_content = '''import adapter from '@sveltejs/adapter-node';
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
'''
    config_path = TEMP_DIR / "flunty-website" / "svelte.config.js"
    with open(config_path, "w") as config_file:
        config_file.write(config_content)

def build_project():
    subprocess.run("npm run build", cwd=TEMP_DIR / "flunty-website", shell=True)

def copy_build_files():
    build_dest = PORTABLE_DIR / "build"
    build_dest.mkdir(parents=True, exist_ok=True)
    if BUILD_DIR.exists():
        shutil.copytree(BUILD_DIR, build_dest, dirs_exist_ok=True)

def configure_node():
    node_version = input("Which Node.js version would you like to use? (LTS only, default 22.13.1): ") or "22.13.1"
    for arch in ["x86", "x64", "arm64"]:
        print(f"Downloading Node.js {arch}")
        node_url = f"{NODEJS_URL_BASE}{node_version}/node-v{node_version}-win-{arch}.zip"
        node_zip_path = TEMP_DIR / f"node-{arch}.zip"
        with requests.get(node_url, stream=True) as r:
            with open(node_zip_path, 'wb') as f:
                shutil.copyfileobj(r.raw, f)
        print(f"Extracting Node.js {arch}")
        shutil.unpack_archive(str(node_zip_path), str(TEMP_DIR / f"node-{arch}"))
        node_exe_path = TEMP_DIR / f"node-{arch}" / f"node-v{node_version}-win-{arch}" / "node.exe"
        node_dest_dir = NODE_DIR / arch
        node_dest_dir.mkdir(parents=True, exist_ok=True)
        shutil.copy(node_exe_path, node_dest_dir / "node.exe")

def create_start_bat():
    start_bat_content = r'''
@echo off
cd %~dp0

REM Start the local server
start http://127.0.0.1:3000

REM Determine the system architecture
set ARCHITECTURE=%PROCESSOR_ARCHITECTURE%

REM Execute the appropriate Node.js command based on architecture
echo Press Ctrl+C or close this window to stop the server.
if "%ARCHITECTURE%"=="X86" (node\x86\node build\index.js) else if "%ARCHITECTURE%"=="AMD64" (node\x64\node build\index.js) else if "%ARCHITECTURE%"=="ARM64" (node\arm64\node build\index.js) else (echo Unable to determine architecture. & pause & exit /b 1)
'''
    with open(PORTABLE_DIR / "start.bat", "w", encoding="utf-8") as start_file:
        start_file.write(start_bat_content)

def download_icon():
    icon_path = PORTABLE_DIR / "icon.ico"
    with requests.get(ICON_URL, stream=True) as r:
        with open(icon_path, 'wb') as f:
            shutil.copyfileobj(r.raw, f)

def create_autorun_inf():
    autorun_content = '''[autorun]
open=start.bat
icon=icon.ico
label=Flunty's Website Portable
'''
    with open(PORTABLE_DIR / "autorun.inf", "w") as autorun_file:
        autorun_file.write(autorun_content)

def download_and_extract_oscdimg():
    arch = platform.machine().lower()
    if arch == "amd64" or arch == "x86_64":
        url = OSCDIMG_URLS["x64"]
    elif arch == "x86":
        url = OSCDIMG_URLS["x86"]
    elif arch == "arm64":
        url = OSCDIMG_URLS["arm64"]
    else:
        raise Exception(f"Unsupported architecture: {arch}")

    oscdimg_zip_path = TEMP_DIR / "oscdimg.zip"
    oscdimg_extracted_path = TEMP_DIR / "oscdimg"


    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(oscdimg_zip_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)

    shutil.unpack_archive(oscdimg_zip_path, oscdimg_extracted_path)

    return oscdimg_extracted_path / "oscdimg.exe"

def create_iso():
    oscdimg_path = download_and_extract_oscdimg()
    subprocess.run([str(oscdimg_path), "-d", "-o", "-n", "-m", str(PORTABLE_DIR), str(ISO_OUTPUT_PATH)])

if __name__ == "__main__":
    check_git()
    clone_repo()
    check_node()
    install_dependencies()
    configure_svelte()
    build_project()
    copy_build_files()
    configure_node()
    create_start_bat()
    download_icon()
    create_autorun_inf()
    create_iso()
    print("Process completed successfully.")