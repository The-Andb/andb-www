# Quick Start Guide

Welcome to **andb**, the zero-friction database schema management tool.

## Installation

Download the latest binary for your operating system or install via npm:

```bash
npm install -g @the-andb/cli
```

## First Steps

### 1. Initialize Project

Navigate to your project root and run:

```bash
andb init
```

This will create an `andb.yaml` file where you can define your environments.

### 2. Compare Schemas

Compare your local schema against a production or staging database:

```bash
andb compare --source local --dest production
```

### 3. Apply Migrations

Sync changes with a safe, interactive confirmation flow:

```bash
andb migrate local production
```

## Machine-Readable Mode

Integrate with CI/CD using JSON or YAML output:

```bash
andb compare -f json
```

---

> [!TIP]
> Use the `--auto-backup` flag to ensure a schema snapshot is taken before any destructive changes.
