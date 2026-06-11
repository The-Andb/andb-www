# Installation & Setup Guide

Learn how to install and configure the complete **TheAndb** ecosystem, including the Desktop App, the CLI tool, and the local storage setup.

## 1. Desktop Application Installation

**TheAndb Desktop** is a premium, localized desktop client designed for database schema comparison and synchronization.

### macOS
You can install the app via Homebrew (recommended) or download the manual installer:

*   **Via Homebrew:**
    ```bash
    brew tap The-Andb/tap && brew install --cask the-andb
    ```
*   **Manual Install (.dmg):**
    Download the latest macOS installer from our releases. If you encounter the "App is damaged" macOS warning because the app is unsigned, open Terminal and run:
    ```bash
    xattr -cr /Applications/The\ Andb.app
    ```

### Linux
We distribute the Linux version as a portable **AppImage** and a standard **.deb** package:
*   **AppImage:**
    Make it executable and run it:
    ```bash
    chmod +x TheAndb-*.AppImage
    ./TheAndb-*.AppImage
    ```
*   **Debian/Ubuntu (.deb):**
    Install it using `dpkg`:
    ```bash
    sudo dpkg -i the-andb_*.deb
    sudo apt-get install -f # Install missing dependencies if any
    ```

---

## 2. CLI Tool Installation

The command-line interface handles automations, exports, and runs within your CI/CD pipelines.

```bash
# Install globally via npm
npm install -g @the-andb/cli
```

Verify your installation:
```bash
andb --version
```

---

## 3. Configuring Database Connections

TheAndb values your data privacy. All connection strings and local schema configurations are stored locally on your machine in a secure SQLite database (`andb-storage.db`).

### Step 1: Add a Connection
Open the Desktop App, navigate to **Settings** -> **Connections**, and add your databases:
*   Choose your database driver (e.g., MySQL / MariaDB, SQLite).
*   Enter credentials (host, port, username, password, database).
*   Test the connection to ensure connectivity.

### Step 2: Define a Comparison Pair
Create a comparison pair to link environments together:
*   Go to **Compare View**.
*   Select a **Source (SRC)** connection (e.g., your local Dev database).
*   Select a **Target (TGT)** connection (e.g., your UAT or Production database).
*   Save the pair. The environment toggle (e.g., `DEV → UAT`) will now be active in your tree explorer.

---

> [!IMPORTANT]
> TheAndb does not upload your connection details or database schemas to any cloud server. All analysis and script generation are computed 100% locally.
