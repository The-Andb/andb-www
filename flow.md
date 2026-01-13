```mermaid
flowchart LR
    %% =====================================================
    %% NEURAL CLIENT INTERFACE
    %% =====================================================
    subgraph CLIENTS["🟪 NEURAL CLIENTS"]
        direction TB
        UI["🖥️ ANDB GUI<br/>Visual Diff Console"]
        CLI["⌨️ andb-cli<br/>Command Ops"]
    end

    %% =====================================================
    %% CORE BRAIN
    %% =====================================================
    subgraph CORE["🧠 CORE BRAIN : andb-core"]
        direction TB

        Parser["🧩 Schema Parser<br/>(DDL Scanner)"]
        Cache["🧬 Schema Cache<br/>(Fingerprint / Hash)"]
        Diff["⚔️ Diff Engine<br/>(AST Compare)"]
        Planner["🗺️ Migration Planner<br/>(Order / Dependency)"]
        Guard["🛡️ Risk Gate<br/>(Danger Detection)"]
        Generator["🧾 SQL Generator<br/>(Reversible Scripts)"]

        Parser --> Cache
        Cache --> Diff
        Diff --> Planner
        Planner --> Guard
        Guard --> Generator
    end

    %% =====================================================
    %% DATA REALMS
    %% =====================================================
    subgraph REALMS["🟩 DATA REALMS"]
        direction TB

        subgraph READONLY["🌐 SOURCE REALM"]
            SrcDB[("🛢️ Source DB<br/>(Prod / Staging)")]
        end

        subgraph TARGET["💻 TARGET REALM"]
            TgtDB[("🛢️ Target DB<br/>(Dev / Local)")]
        end

        Workspace["📁 WORKSPACE<br/>(SQL • Snapshots • Logs)"]
    end

    %% =====================================================
    %% FLOWS
    %% =====================================================

    UI -->|INIT DIFF| Parser
    CLI -->|INIT DIFF| Parser

    SrcDB -->|READ METADATA| Parser
    TgtDB -->|READ METADATA| Parser

    Generator -->|WRITE| Workspace
    Workspace -.->|APPLY (OPTIONAL)| TgtDB

    Guard -.->|WARN / BLOCK| UI
    Guard -.->|WARN / BLOCK| CLI

    %% =====================================================
    %% STYLES
    %% =====================================================
    classDef zone fill:#020617,stroke:#7c3aed,stroke-width:3px,color:#e5e7eb;
    classDef core fill:#1e1b4b,stroke:#a855f7,stroke-width:3px,color:#f5f3ff;
    classDef io fill:#022c22,stroke:#22c55e,stroke-width:3px,color:#dcfce7;
    classDef danger fill:#3b0764,stroke:#f472b6,stroke-width:3px,color:#fdf4ff;

    class CLIENTS,CORE,REALMS zone;
    class Parser,Cache,Diff,Planner,Generator core;
    class Guard danger;
    class SrcDB,TgtDB,Workspace io;

```

## Logic Breakdown

1.  **🟪 CLIENT ZONE**: Interaction layer (GUI/CLI).
2.  **🟦 CORE MATRIX**: Processing engine (`andb-core`) + local project metadata storage (`DataStore`).
3.  **🟩 DATA REALMS**:
    - **Source DB**: High-level environment (Production/Staging) to read schema from.
    - **Target DB**: Your local or development environment to apply changes to.
    - **Workspace**: Local storage for generated migration SQL scripts and configs.

## Workflow Flow

1. **Trigger**: User starts a comparison via UI/CLI.
2. **Fetch**: The engine connects to both Source and Target DBs to grab metadata.
3. **Compare & Gen**: Core runs the diffing logic and writes a Migration Script (SQL) to your local Workspace.
4. **Apply**: User reviews the script and applies it to the Target DB.
