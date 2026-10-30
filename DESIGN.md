# ReelsBuddy Website - Design Direction

Status: implemented in `web-site`. Release assets and final legal review remain external.

## 1. Product Position

ReelsBuddy is a desktop-first AI video studio for individuals who want to turn
ideas into finished short-form video.

Primary formats:

1. Short drama
2. Brand promotion
3. Product explanation
4. Visualized data
5. Social media advertising
6. Science explanation

The website should sell a finished outcome, not a pile of AI features.

Core promise:

> From an idea to a finished creation.

Chinese launch copy:

> 从一个创意，到一部创作。

Supporting promise:

> ReelsBuddy turns your ideas, references, product links or data into a
> finished short video, from the first script to the last export.

The page should feel like a real production studio: cinematic enough to make
the output desirable, but personal enough for one creator to direct the whole
process.

## 2. Reference Translation

Take from likli:

- A wall of finished work creates an immediate quality signal.
- One large, plain-language value proposition sits above the product.
- The layout moves from emotional proof to a clear product workflow.

Take from CoAnimator:

- A dark, cinematic opening gives video creation weight.
- Oversized type and restrained navigation feel confident.
- A real-looking studio interface is more persuasive than abstract diagrams.

Take from MiniMax Design:

- A light, structured middle section keeps dense product information readable.
- Skills and templates are presented as repeatable production methods.
- The local desktop product story is treated as a serious professional tool.

Take from Fotor Agent:

- Emphasize idea-to-final-cut continuity.
- Show an editable visual canvas, not a one-shot prompt box.
- Show data and motion graphics as first-class video content.

## 3. Visual Direction

Name: Signal Studio

The design combines a cinematic black hero with a warm editorial page surface.
It avoids the generic purple AI-gradient look. The identity comes from sharp
type, content-first color blocking, and a small set of high-signal accents.

### Palette

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#111210` | Hero, product shell, primary text |
| Paper | `#F4F1E9` | Main page surface |
| Warm white | `#FFFDF7` | Content bands and editor contrast |
| Signal orange | `#FF5C35` | Primary CTA and brand-promotion energy |
| Acid lime | `#D7FF63` | Highlights, success, final CTA |
| Cobalt | `#6DA2FF` | Product and data accents |
| Aqua | `#79DFD0` | Science and production accents |
| Sun | `#F4CF55` | Social and editorial accents |

Color rules:

- Keep 70 percent of the page neutral.
- Use color to identify a format or action, not as decoration.
- Do not use purple gradients or decorative gradient orbs.
- Keep every content block on a flat, readable surface.

### Typography

- Display and UI: Manrope, 600-800.
- Technical labels: IBM Plex Mono, 500-600.
- Hero headline: 72px desktop, 56px tablet, 43px mobile.
- Section headline: 47px desktop, 41px tablet, 36px mobile.
- Body: 14-16px, with a maximum line length of about 65 characters.
- Labels: 8-10px, uppercase, tracked for product credibility.

### Shape And Surface

- Main cards use 8px radii or less.
- Product windows may use 8px outer radii.
- Pills are reserved for filters and format tabs.
- No cards inside cards.
- Product chrome is opaque and grounded. Avoid floating glass panels.

### Multilingual Experience

English and Simplified Chinese are the launch languages.

- Keep the language switch visible in the header at every breakpoint:
  `EN | 中文`.
- Use the two-option segmented switch while there are exactly two launch
  languages. When a third language ships, replace it with a compact language
  menu rather than widening the header.
- Put the switch before the download action on desktop and beside the menu
  button on mobile.
- Preserve the selected language when moving between routes.
- Use shareable `?lang=en` and `?lang=zh` URLs for the static launch, with
  `hreflang` metadata and a sensible `x-default`. Move to locale-prefixed
  routes when the site gains additional standalone pages.
- Do not force an automatic redirect. Detect the browser language only as a
  soft recommendation.
- Store an explicit language preference after the first switch.
- Set the document language to `en` or `zh-CN` so screen readers and browser
  typography behave correctly.
- Externalize every user-facing string. Do not bake text into screenshots,
  thumbnails or videos.
- Keep product, brand and fictional project names in their original Latin form
  when that helps recognition.
- Use Manrope for Latin text and Noto Sans SC for Chinese. Chinese headlines
  need slightly looser line height and less negative tracking than English.
- Self-host subsetted WOFF2 files in production. Do not depend on Google Fonts
  being reachable from mainland China or on a visitor having a specific system
  font. Include PingFang SC, Hiragino Sans GB and Microsoft YaHei as fallbacks.
- Avoid all-caps text-transform on Chinese labels.
- Keep paragraph line lengths controlled after translation. Chinese copy is
  often shorter, but buttons and tab labels must be re-measured.
- Translate navigation, buttons, alt text, form placeholders, validation
  states, media controls, legal links and metadata.
- A future locale such as `zh-TW`, `ja` or `ko` should use the same content
  model rather than duplicating page markup.

## 4. Homepage Structure

### 4.1 Header

Left: current RB mark, ReelsBuddy wordmark, "by Playsout".

Center: Product, Formats, Workflow, Showcase.

Right: language switch, Download app.

The website has no sign-in entry. Account creation and authentication belong
inside the desktop application.

The header is black in the hero state. On scroll or inner pages it can become
warm white with an ink wordmark.

### 4.2 Hero

Goal: make the outcome and product category obvious within five seconds.

Visual: a dark, full-bleed wall of twelve short video moments. The wall is
dimmed and desaturated so the headline remains dominant. Use real client work
when available; do not use generic stock footage.

Copy:

- Eyebrow: `THE AI VIDEO STUDIO FOR INDIVIDUALS`
- H1: `From an idea to a finished creation.`
- Body: `ReelsBuddy turns your ideas, references, product links or data into a finished short video, from the first script to the last export.`
- Primary CTA: `Download the app`
- Secondary CTA: `See how it works`
- Proof line: `Mac and Windows / Local asset library / Every channel ratio`

Below the CTAs, a restrained idea composer makes the product action concrete:

- Prompt example: `Make a 30-second product film for my new skincare launch...`
- Start modes: Describe an idea, product URL, dataset, existing assets.
- The composer should look like part of the studio, not a separate generic form.

Chinese launch copy:

- Eyebrow: `面向个人的 AI 视频工作室`
- H1: `从一个创意，到一部创作。`
- Body: `ReelsBuddy 把你的想法、参考资料、产品链接或数据转化为一支完整的短视频，从脚本、分镜一直完成到最终导出。`
- Primary CTA: `下载应用`
- Secondary CTA: `查看工作方式`

### 4.3 Product Snapshot Strip

A compact band immediately below the hero answers "what is this?"

- One studio for your next idea
- From an idea and your files
- To a finished video you are proud of
- Made for creators, founders and storytellers
- Desktop-first: a real studio, not a toy

This uses plain bordered cells, not floating cards.

### 4.4 Formats

Heading: `Every format you want to create.`

Six segmented tabs:

- Short drama
- Brand promo
- Product demo
- Data story
- Social ad
- Science explainer

Each tab updates a focused preview, a short outcome-led description, and three
format specs. Keep all six options visible on desktop. Every tab also includes
one concrete example idea so the format is immediately understandable.

### 4.5 Workflow

Heading: `Direct the Agent. Keep the craft.`

Four steps:

1. Direction
2. Script
3. Production
4. Delivery

The steps are connected by one horizontal rule and a moving accent line. This
should read as an actual production process, not a feature grid.

Workflow summary: `The work stays editable. Review the direction, change a
scene, or take over the canvas at any point.`

### 4.6 Product Studio

Heading: `A studio you can actually direct.`

Show a realistic desktop window with:

- Asset library on the left
- Connected idea, script, reference, scene and output nodes on one visual canvas
- Agent conversation on the right
- Scene-level comments
- Character, product and brand consistency
- Timed captions and voice

This section is the main evidence that ReelsBuddy is an editable studio rather
than a prompt-only generator.

### 4.7 Showcase

Heading: `Made for the feed, not the folder.`

Show three finished outputs with format and ratio metadata. Use real output
videos when available. Every card should be able to play inline without leaving
the page.

### 4.8 Final CTA

Acid-lime full-width band.

Headline: `Start with your next idea.`

Primary actions: Download for Mac, Download for Windows.

Supporting line: `Bring the idea. ReelsBuddy will help shape the story, build the scenes and get it ready to publish.`

### 4.9 Footer

Groups:

- Product
- Formats
- Company
- Legal

Keep it quiet and operational. No newsletter form unless it has a real owner
and publishing cadence.

## 5. Interaction Rules

- Format tabs change one shared stage; do not move the whole page.
- Format tabs support left/right keyboard navigation and expose the active
  tab through `aria-labelledby`.
- Workflow steps highlight a single current step.
- Showcase cards play in place.
- Download buttons expose the current platform and file details.
- Download URLs live in `site-config.js`. Until a platform build is published,
  the button gives a localized availability message instead of a broken file.
- Use sticky header only after the hero.
- Use one motion language: fast in, calm out, no looping ambient animation.
- Respect `prefers-reduced-motion`.
- Mobile: stack sections, keep the hero at 43px, and use a real menu button.
- Interactive controls need visible focus states and an icon change when the
  mobile menu opens or closes.
- Language changes update all visible content without reloading or moving the
  current section.

## 6. Brand Mark

The current RB app icon is used as a placeholder. It is recognizable but
generic. Before launch, explore a simple monogram that combines R, B and a
subtle play/transport cue without using a literal film-strip illustration.

Do not change the app icon until the wordmark and mark are tested together at
16px, 32px and app-store tile size.

## 7. Asset Requirements

Before implementation, collect:

- 6-12 hero video stills from real output
- 3 playable showcase videos
- 1 desktop studio capture
- Current RB app icon
- Mac and Windows download URLs
- Final legal company name and footer links
- Any approved customer names or logos

Until real footage is available, use designed placeholders that preserve the
format and framing. Do not use unrelated stock footage as if it were customer
work.

## 8. Secondary Pages

The homepage is the launch surface. The first supporting pages should be:

1. Formats index
2. Short drama
3. Brand promo
4. Product demo
5. Data story
6. Social ad
7. Science explainer
8. Download

Each format page should reuse the homepage format language:

- Outcome headline
- One hero example
- Process
- Deliverable specs
- Two or three real examples
- CTA

## 9. Approval Decisions

Confirm these before production implementation:

1. Product name: ReelsBuddy with "by Playsout", or a new Reels sub-brand.
2. Visual direction: cinematic Signal Studio, or a lighter editorial variant.
3. Primary conversion is desktop download. The website has no web signup.
4. Whether real client footage will be ready for launch.
5. A pricing page is deferred until plans are approved.

## 10. Design Review Log

Resolved in the first review pass:

- Added an idea composer to make the first product action visible in the hero.
- Replaced the generic "agentic" hero label with audience-first wording.
- Raised kicker contrast on light sections and kept lime for dark surfaces.
- Added a concrete example idea to every video format.
- Kept format color subtle and functional through the preview border and stage.
- Replaced tab semantics on the workflow with pressed-button semantics.
- Removed invalid button nesting from showcase cards.
- Added keyboard navigation and visible dynamic state to the format tabs.
- Added mobile input sizing that avoids browser zoom on iOS.
- Added a complete English and Simplified Chinese translation layer.
- Added a persistent `EN | 中文` language switch in the header.
- Localized navigation, hero, formats, workflow, studio labels, showcase,
  calls to action, footer and accessible labels.
- Added Chinese-specific typography rules rather than relying on browser
  fallback at the same tracking values.
- Changed the core promise to `From an idea to a finished creation.` /
  `从一个创意，到一部创作。`
- Reframed the audience around individual creators and removed team-oriented
  queue and delivery language.
- Replaced the previous editing concept and graphic with a connected visual
  canvas that links idea, script, references, scene and output.

Still pending before production:

- Replace conceptual frames with real output footage.
- Confirm download links and platform detection behavior.
- Confirm legal copy, privacy, terms and company details.

