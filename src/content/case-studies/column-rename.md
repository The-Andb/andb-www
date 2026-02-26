# Case Study: The Column Rename Dilemma

Managing column renames in MySQL has always been risky. Most tools treat a rename as a `DROP` followed by an `ADD`, leading to data loss.

## The Challenge

One of our early adopters needed to rename `user_login` to `username` across 50+ tables without downtime or data migration scripts.

## The andb Approach

With our advanced matching engine, we detected the rename by analyzing the column structure parity.

- **Intelligent Detection**: Instead of a blind SQL diff, the playground engine identifies when a column's properties match a "missing" column in the source.
- **Guided Migration**: The CLI warns the user: `⚠️ DESTRUCTIVE CHANGES DETECTED`.
- **Safe Execution**: By using `andb migrate`, the user could review the exact `ALTER` statement before applying it.

## The Result

What used to take hours of manual scripting was completed in **less than 5 minutes**.

> "andb didn't just find the change; it understood the intent behind it." - Engineering Lead @ FinTech SaaS
