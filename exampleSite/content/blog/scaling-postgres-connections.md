+++
draft = false
date = '2026-04-14T09:00:00+07:00'
title = 'Taming PostgreSQL Connections with PgBouncer'
tags = ['postgresql', 'pgbouncer', 'performance']
+++

A service that opens a fresh database connection per request will fall over long before the database itself runs out of capacity. Connections are expensive, and PostgreSQL is happiest with a small, steady pool.

## The problem

Each PostgreSQL backend is a full process with its own memory. A few hundred idle connections can eat gigabytes of RAM and drag down scheduling, even when almost none of them are doing work.

## Pooling modes

PgBouncer sits between the app and the database and multiplexes many client connections onto a few server ones.

| Mode        | Reuses a server connection | Good for                    |
| ----------- | -------------------------- | --------------------------- |
| session     | per client session         | compatibility, prepared stmts |
| transaction | per transaction            | most web workloads          |
| statement   | per statement              | read-heavy, no transactions |

For a typical web backend, **transaction** mode gives the biggest win with the fewest surprises.

## Takeaway

Put a pooler in front of PostgreSQL before you think you need one. It turns an unbounded connection count into a predictable one, and that predictability is what keeps the database calm under load.
