+++
draft = false
date = '2026-05-02T10:00:00+07:00'
title = 'PixelPush'
type = 'project'
description = 'A self-hosted image resizing proxy in Rust that caches derivatives on disk, so you can serve responsive images without a paid CDN add-on.'
image = ''
repository = 'https://github.com/example/pixelpush'
languages = ['rust']
tools = ['nginx', 'docker']
+++

Serving the right image size for every device usually means paying for a CDN image feature or wiring up a heavy media service. For a personal project or a small product, both options are more than you need.

PixelPush is a Rust proxy that fetches a source image, resizes it on demand, and caches the result on disk keyed by the requested dimensions. Point your `<img>` tags at it with width hints and it does the rest.

## Key Features

- **On-demand resizing** - derivatives are generated the first time they are requested, then cached.
- **Single binary** - deploy one static binary behind your existing reverse proxy.
- **Content-addressed cache** - identical requests always hit the same cached file.

## Conclusion

PixelPush gives you responsive images on your own hardware. See the [repository](https://github.com/example/pixelpush) for the quick start.
