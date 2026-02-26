# Production-Ready: JSON Logic & Auto-Backup

We are excited to announce major stability and automation features in our latest update.

## Clean Automation with JSON Output

Building robust CI/CD pipelines requires clean, machine-readable data. In this update, we've refined our CLI to ensure that when you request JSON or YAML formats, the output is "pipe-clean".

- **Log Silencing**: All NestJS and internal initialization logs are now suppressed.
- **Error Streams**: Destructive change warnings are intelligently routed to `stderr`, keeping your `stdout` parseable.

## Safety First: Auto-Backup

Manual backups before a migration are a thing of the past. The `andb` engine now includes a lightweight schema snapshot mechanism.

### How it works:

1. Before any `ALTER` or `DROP` operation, the engine fetches the current DDL.
2. A snapshot is saved to the local SQLite storage.
3. If anything goes wrong, you have a perfect record of the "Before" state.

## What's Next?

We are moving towards full DB-to-DB sync capabilities and expanding our driver support. Stay tuned!
