+++
title = 'Running a Go Service as a systemd Unit'
date = 2023-01-15T09:00:00-07:00
draft = false
tags = ['linux', 'go', 'systemd']
+++

Deploying a Go binary to a server is the easy part. Keeping it running across
crashes, reboots, and deploys is where a process manager earns its keep. This
post walks through wrapping a Go service in a systemd unit, with logging and
graceful restarts.

## Why systemd

systemd is already on almost every Linux server, so you get supervision,
restart policies, and journald logging without adding a dependency. No extra
daemon, no container runtime required.

### Restart policy

`Restart=on-failure` brings the service back after a crash but leaves it down
when you stop it on purpose. Pair it with `RestartSec` so a crash-looping
binary does not hammer the machine.

### Journald logging

Anything the process writes to stdout and stderr lands in journald. You read it
with `journalctl -u myservice -f`, no log files to rotate yourself.

## Writing the unit

The unit file describes how to start the binary, which user to run it as, and
what to do when it exits. Keep it minimal and let systemd handle the rest.

### Service section

The `[Service]` section points at the binary and sets the working directory and
environment. Use a dedicated system user, not root.

### Install section

`WantedBy=multi-user.target` is what makes `systemctl enable` start the service
on boot. Without it, the unit runs only when started by hand.

## Graceful shutdown

systemd sends `SIGTERM` on stop. Catch it in Go, stop accepting new work, drain
in-flight requests, then exit. Set `TimeoutStopSec` to bound the drain.

## Conclusion

A single unit file turns a bare binary into a supervised service with logging
and restarts. Once it is in place, deploys are just replace-the-binary and
`systemctl restart`.
