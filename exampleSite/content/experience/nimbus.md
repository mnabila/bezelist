+++
draft = false
date = '2026-01-10T09:00:00+07:00'
title = 'Nimbus Cloud'
type = 'experience'
role = 'Senior Backend Engineer'
period_begin = '2023-07-01'
location = 'Remote'
workmode = 'remote'
worktype = 'full-time'
technologies = ['go', 'postgresql', 'redis', 'kubernetes']
tasks = [
  'Led the rewrite of the billing service, cutting p99 latency by 40%',
  'Designed an event-driven pipeline handling 20k messages per second',
  'Mentored three engineers and owned the on-call runbook',
]
+++

At Nimbus I own the services behind billing and usage metering, the parts of the platform that have to be correct every single time. My day is a mix of designing new APIs, tightening the ones already in production, and making operations boring: better dashboards, tighter alerts, and runbooks a tired on-call engineer can actually follow at 3am.

The billing rewrite was the work I am most proud of. The old service coupled pricing logic to the HTTP handlers, so every rate change was risky. I pulled pricing into a pure, well-tested core and put the queue in PostgreSQL, which cut tail latency and made the system far easier to reason about.

