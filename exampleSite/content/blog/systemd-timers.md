+++
draft = false
date = '2026-02-20T09:00:00+07:00'
title = 'Replacing Cron with systemd Timers'
tags = ['linux', 'systemd', 'ops']
+++

Cron is everywhere and it works, but it is quiet when things go wrong. systemd timers give you the same scheduling with real logs, dependencies, and resource limits for free.

## Why switch

- **Logging** - every run lands in the journal, so `journalctl -u backup.timer` tells you what happened.
- **Dependencies** - a timer can wait for the network or the database to be up before firing.
- **Resource limits** - the job inherits the unit's memory and CPU limits.

## A minimal timer

A timer is two files: a `.service` that does the work and a `.timer` that schedules it.

```ini
# backup.timer
[Timer]
OnCalendar=*-*-* 02:30:00
Persistent=true

[Install]
WantedBy=timers.target
```

`Persistent=true` means a run missed while the machine was off fires on the next boot, which cron cannot do.

## Takeaway

For anything you would schedule on a Linux server, reach for a systemd timer first. You get the scheduling you wanted and the observability you did not know you were missing.
