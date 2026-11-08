+++
draft = false
date = '2026-03-18T10:00:00+07:00'
title = 'TaskFlow'
type = 'project'
description = 'A lightweight job queue for Go that persists tasks in PostgreSQL, so you get durable background work without running a separate broker.'
image = ''
repository = 'https://github.com/example/taskflow'
languages = ['go']
tools = ['postgresql', 'docker']
+++

Most background job setups reach for Redis or a dedicated broker on day one. For small and mid-size services that already run PostgreSQL, that is an extra moving part to operate and monitor. TaskFlow keeps the queue in the database you already trust.

TaskFlow is a small Go library that stores tasks in a single table and leases them to workers with `SELECT ... FOR UPDATE SKIP LOCKED`. It handles retries, scheduling, and graceful shutdown, and ships with a tiny CLI for inspecting the queue.

## Key Features

- **Durable by default** - tasks survive restarts because they live in PostgreSQL, not memory.
- **No extra broker** - one table and one dependency, nothing new to deploy.
- **At-least-once delivery** - failed tasks are retried with exponential backoff.

## Conclusion

TaskFlow is for teams that want reliable background work without adding infrastructure. See the [repository](https://github.com/example/taskflow) to get started.
