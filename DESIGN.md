# ReelsBuddy Website - Design Direction

Status: the Cut Room visual revision is implemented in `web-site` with concept
previews. Final output footage, release assets and legal review remain external.

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

> From first idea to final cut.

Chinese launch copy:

> 从一念，到成片。

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

Name: Cut Room

The page is built around one production-world motif: a director's contact
sheet. A conceptual video wall, flat selection rail and editable canvas carry
the identity. Footage supplies the color; the interface chrome stays quiet.

### Palette

| Token | Value | Use |
| --- | --- | --- |
| Projector ink | `#0C0D0E` | Hero, studio, final CTA and header |
| Cutting paper | `#E9E7E1` | Main page surface |
| Screen white | `#F8F6F0` | Controls and high-contrast surfaces |
| Signal red | `#E64B35` | Primary action and active selection |
| Slate | `#737D80` | Secondary interface accents |

Color rules:

- Keep the interface chrome neutral; conceptual footage supplies visual color.
- Use signal red only for action and current state.
- Do not use purple gradients or decorative gradient orbs.
- Keep every content block on a flat, readable surface.
- On dark surfaces, use `#454D4F` for subtle separators and `#596164` for
  interactive boundaries or outer frames.

### Typography

- Display and UI: Manrope for Latin, weights 400-800.
- Chinese: self-hosted Noto Sans SC subset, weights 400-800.
- Remove decorative monospace labels. Use tabular numerals for time and ratios.
- Hero headline: 64px on wide desktop, 62px desktop, 54px compact desktop,
  50px tablet, 38px mobile.
- Section headline: 48px desktop, 39px tablet, 32px mobile.
- Body: 14-16px, with a maximum line length of about 65 characters.
- Desktop readability floor: navigation and buttons 14px, supporting copy
  13-14px, metadata 12px. Reserve 10px for decorative product-interface details.
- Use sentence case and zero letter spacing throughout.

### Shape And Surface

- Interface cards use 4px radii or less.
- Product windows may use a 4px outer radius.
- Format controls are a flat selection rail, not pills.
- No cards inside cards.
- Product chrome is opaque and grounded. Avoid glass panels and backdrop blur.

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

Left: ReelsBuddy wordmark and "by Playsout".

Center: Formats, Workflow, Preview.

Right: language switch, Download app.

The website has no sign-in entry. Account creation and authentication belong
inside the desktop application.

The header uses a compact ink bar and a wordmark-only lockup. The placeholder
RB app icon remains reserved for OS and favicon use.

### 4.2 Hero

Goal: make the outcome and product category obvious within five seconds.

Visual: an asymmetric two-column composition. The left column carries the
promise and product facts; the right column is a conceptual contact sheet with
one dominant frame and smaller supporting frames. It is labelled
`Concept preview` until real output footage is available.

Copy:

- H1: `From first idea to final cut.`
- Body: `Turn a line, a link, or your footage into an editable short video.`
- Primary actions: direct `Download Mac` and `Download Windows` buttons
- Secondary CTA: `See how it works`
- Proof line: `Mac and Windows / Editable canvas / AI Agent workflow`

Chinese launch copy:

- H1: `从一念，到成片。`
- Body: `一句创意、一个链接或一段素材，变成可继续剪辑的完整短视频。`
- Primary actions: `下载 Mac 版` and `下载 Windows 版`
- Secondary CTA: `查看工作方式`

### 4.3 Product Snapshot Strip

The product facts are a single bordered proof row inside the hero. This keeps
the first viewport focused and avoids adding another band.

### 4.4 Formats

Heading: `Every format you want to create.`

Six flat options in one selection rail:

- Short drama
- Brand promo
- Product demo
- Data story
- Social ad
- Science explainer

Each option updates a dark screening stage, an outcome-led description and three
format specs. Keep all six options visible on desktop. On small screens the
selection rail may wrap into two rows so every format remains discoverable.

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

Heading: `A look at what you can make.`

Show three concept outputs with format and ratio metadata. Label them
`Concept preview` and state that real work will replace them at launch. When
real outputs arrive, every card should play inline without leaving the page.

### 4.8 Final CTA

Ink full-width end card with no decorative watermark.

Headline: `Start with your next idea.`

Primary actions: Download for Mac, Download for Windows.

Supporting line: `Bring the idea. ReelsBuddy helps shape the story, build the scenes and finish the cut.`

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
- Concept previews explain their status in place. When real outputs arrive,
  showcase cards should play inline.
- Download buttons expose the current platform and file details.
- Download URLs live in `site-config.js`. Until a platform build is published,
  the button gives a localized availability message instead of a broken file.
- Use a compact sticky header at every breakpoint so language and menu controls
  remain reachable without introducing a second navigation pattern.
- Use one motion language: fast in, calm out, no looping ambient animation.
- Respect `prefers-reduced-motion`.
- Mobile: stack sections, keep the hero at 43px, and use a real menu button.
- Interactive controls need visible focus states and an icon change when the
  mobile menu opens or closes.
- Language changes update all visible content without reloading or moving the
  current section.

## 6. Brand Mark

The website currently uses a wordmark-only lockup. The existing RB app icon is
recognizable but generic, so it remains limited to the favicon, app tile and
operating-system surfaces until a stronger mark is ready.

Before launch, explore a simple monogram that combines R, B and a subtle
play/transport cue without using a literal film-strip illustration. Do not add
it to the website header until the wordmark and mark are tested together at
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
2. Visual direction: Cut Room, or a lighter editorial variant.
3. Primary conversion is desktop download. The website has no web signup.
4. Whether real client footage will be ready for launch.
5. A pricing page is deferred until plans are approved.

## 10. Design Review Log

Resolved in the earlier review pass:

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
- Changed the core promise to `From first idea to final cut.` /
  `从一念，到成片。`
- Reframed the audience around individual creators and removed team-oriented
  queue and delivery language.
- Replaced the previous editing concept and graphic with a connected visual
  canvas that links idea, script, references, scene and output.

Resolved in the Cut Room review pass:

- Replaced the full-background tile wall with an asymmetric contact sheet and a
  product-fact proof row.
- Reduced the palette to projector ink, cutting paper, screen white, signal red
  and slate.
- Replaced the format pills with a flat selection rail and a dark screening
  stage.
- Self-hosted a Noto Sans SC page subset and removed decorative monospace and
  tracked uppercase labels.
- Recomposed the mobile studio into a legible scene, idea and script view.
- Clearly labelled all illustrated media as `Concept preview`.
- Replaced the acid-lime download band with a quiet ink end card.
- Removed the placeholder RB icon from the wordmark lockup.
- Verified English and Chinese layouts at 320px, 390px, 768px and 1440px with
  no horizontal overflow or runtime errors. The final axe-core matrix reports
  zero WCAG A/AA violations.

Still pending before production:

- Replace conceptual frames with real output footage.
- Confirm download links and platform detection behavior.
- Confirm legal copy, privacy, terms and company details.

