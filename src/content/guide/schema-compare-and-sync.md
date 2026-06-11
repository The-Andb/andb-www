# Schema Compare & Synchronization

This guide covers how to inspect structural differences between database environments and synchronize them safely using both the GUI and CLI.

## 1. Comparing via the Desktop Interface

Once you have defined your database pair (e.g., `DEV → PROD`), follow these steps to review changes:

1.  **Select the Pair**: Click on the saved pair card in the **Compare** tab.
2.  **Toggle Visibility**: Click the environment name labels (e.g. `DEV` or `PROD`) under the pair card to show/hide the corresponding database trees.
3.  **Inspect Trees**: The tree explorer organizes objects by category (Tables, Views, Procedures, Functions, Triggers).
4.  **Filter Categories**: Use the sidebar checkboxes to exclude entire categories or specific databases from the sync scope.
5.  **Review Side-by-Side Diff**: Clicking a modified object opens the DDL Diff Viewer, highlighting added (green) and removed (red) statements.

---

## 2. Safe Synchronizations (Migrations)

Applying changes to target databases requires absolute trust and safety:

### The Batch Migrate Dialog
When you click **Sync Schema** or **Migrate Selected**:
*   A confirmation dialog displays the exact SQL `ALTER`/`CREATE`/`DROP` statements that will be run.
*   The system performs a structural check to highlight potential data loss warnings (e.g., column drops or type narrowing).
*   Upon approval, migrations are executed sequentially.
*   Once finished, the UI automatically refreshes the tree state, removing completed items from the diff list.

---

## 3. Automation via the CLI

For automation lovers, the CLI allows you to compare and apply migrations via terminal commands.

### Generate Diff Report
Generate a schema comparison between environments:
```bash
andb compare --source dev --dest production
```
Format as JSON for CI/CD checks:
```bash
andb compare --source dev --dest production -f json
```

### Apply DDL Migrations
To apply the changes interactively:
```bash
andb migrate dev production
```

---

> [!WARNING]
> While TheAndb generates safe ALTER statements, always run a full database backup before running migrations on production environments. TheAndb tracks DDL schema history but is not responsible for data loss.
