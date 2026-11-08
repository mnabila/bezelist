# Bezelist Theme

A clean, professional Hugo portfolio theme designed for software engineers.

## Features

- **Single Page Layout**: Core sections (About, Experience, Education, Skills, Projects) on the homepage for quick scanning.
- **Integrated Blog**: Dedicated space for technical writing.
- **Customizable Branding**: Easy configuration via `hugo.toml`.
- **Modern Stack**: Built with Hugo, optimized for performance and maintainability.

## Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (min version `0.146.0`)

### Installation

1. Clone this repository into your Hugo site's `themes/` directory:
   ```bash
   git clone <repository-url> themes/bezelist
   ```
2. Add the theme to your `hugo.toml`:
   ```toml
   theme = 'bezelist'
   ```

### Configuration

Modify the `[params]` section in your `hugo.toml` to personalize your site:

- **Author Info**: Name, subtitle, and tagline.
- **Tech Stack**: A list of languages and tools you use.
- **Social Links**: GitHub, LinkedIn, X, and Email.
- **Hero Section**: Customizable headline and accent highlights.
- **Section Titles**: Rename sections like "Career" or "Selected work".

## Content Structure

- `/content/about.md`: Your professional bio.
- `/content/experience/`: Individual markdown files for each role.
- `/content/education/`: Your academic background.
- `/content/skill/`: Categorized skill sets.
- `/content/project/`: Detailed project showcases.
- `/content/blog/`: Your technical articles.

## Development

To run the site locally:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313/`.
