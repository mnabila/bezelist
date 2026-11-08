+++
date = 2026-05-12T10:00:00+07:00
draft = false
title = 'slog4me'
type = 'project'
description = 'A structured logging helper for Go built on log/slog, with sane defaults, context propagation, and pluggable handlers for production and local dev.'
image = ''
repository = 'https://github.com/mnabila/slog4me'
languages = ['go']
tools = ['slog', 'opentelemetry']
+++

A thin, opinionated layer over Go's `log/slog` that wires in context, trace IDs, and environment-aware handlers so logging is consistent across services.
