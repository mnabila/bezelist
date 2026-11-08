+++
draft = false
date = '2026-01-10T09:00:00+07:00'
title = 'Acme Analytics'
type = 'experience'
role = 'Backend Engineer'
period_begin = '2021-02-01'
period_finish = '2023-06-30'
location = 'San Francisco, California'
workmode = 'hybrid'
worktype = 'full-time'
technologies = ['typescript', 'postgresql', 'docker']
tasks = [
  'Built the ingestion API that backed the customer dashboards',
  'Introduced structured logging and tracing across services',
  'Reduced nightly batch runtime from 6 hours to 90 minutes',
]
+++

Acme was my first production backend role, and it was a crash course in operating software other people depend on. I worked on the ingestion path that fed every customer dashboard, so correctness and throughput both mattered.

Most of my impact came from observability. When I joined, debugging a slow request meant guessing. I added structured logging and distributed tracing, which turned those guesses into a trail I could follow, and that visibility is what let me find the nightly batch job spending hours on work it could skip.

