# Achievement: 100% MySQL & MariaDB Dialect Coverage

Milestone reached: TheAndb parser and comparison engines now support advanced DDL syntax including views, triggers, stored routines, generated columns, and partitioned tables.

## The Milestone

We are proud to announce that the **Parser Engine** has reached complete parity with the advanced dialects of MySQL (5.7, 8.0+) and MariaDB (10.x+). 

Unlike other comparison utilities that only support tables, columns, and indexes, TheAndb parses, normalizes, and compares the entire relational system.

---

## What is Supported?

### 1. Stored Procedures & Functions
*   Aggressive cleanup of `DEFINER` clauses to allow cross-environment comparison without user mismatch warnings.
*   Full support for parameter declarations, return statements, deterministic/data-access attributes, and multiline procedure bodies.
*   Newline-preserving space normalization so that inline comments do not get removed or break trailing statements.

### 2. View Definitions
*   Extracts view logic from `SHOW CREATE VIEW` databases.
*   Compares the underlying SELECT statement syntax, ignoring column aliases and formatting.

### 3. Triggers & Events
*   Supports trigger timings (`BEFORE` / `AFTER`), event triggers (`INSERT`, `UPDATE`, `DELETE`), and target tables.
*   Tracks scheduled event parameters (`EVERY 1 DAY`, `STARTS`, `ON COMPLETION PRESERVE`) and status toggles.

### 4. Partitions & Generated Columns
*   Parses generated columns (both `VIRTUAL` and `STORED` expressions), normalizing formatting to isolate true semantic changes.
*   Supports table partitioning logic (e.g. `PARTITION BY KEY` or `PARTITION BY RANGE`). It correctly parses and maintains partition blocks in the generated DDL statements.

---

## Engineering Behind It

To achieve this, the parser incorporates a custom lexical normalizer and semantic mapper that strips syntactic sugar and matches variables. 

Each dialect feature is fully verified by over **200+ unit and integration tests** in our automated QA test suite (`andb-test`).

> "Database synchronization is only useful if it handles the entire database. With triggers and procedures fully supported, we can manage our entire application layer directly inside TheAndb." - Backend Architect
