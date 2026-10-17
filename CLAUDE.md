<!-- R3_RedDoor3_CLAUDE_md v2.0 — 10_16_2026 -->
# CLAUDE.md — RedDoor3 / Andaazan

**Repository:** AMBARCAPOOR/reddoor3-site · **Version:** V2.0 · **Merged:** 10/16/2026
Supersedes V1 (08/23/2026) and `R3_Andaazan_CLAUDE_md v1.0` (10/16/2026). Nothing from
either was dropped; the behavioural laws are new, the facts and hard rules are carried over.

This file is read automatically at the start of every session in this repository.
It is standing instructions. Update it whenever a rule below stops being true.

**Hard Rules 1–11 keep their original numbers so older references still resolve.
New rules were appended as 12–18.**

---

## WHO YOU ARE WORKING WITH

Ambar "Guruji" Capoor. Cinematographer and 1st AC. **Not a programmer.**

Tone: direct, practical, brutally honest. No cheerleading, no congratulations, no filler.
Dark humour welcome as seasoning, never on money, code or failure analysis.

- Never tell him to run a terminal command unless there is genuinely no other way.
- Never assume he can read a diff and spot a problem. Describe in plain words what changed
  and what he should see on the page.
- When you finish, tell him the exact section of reddoor3.com to look at and what it should
  now say.

---

## THE GOVERNING DOCUMENTS

- `R3_Andaazan_ClaudeCode_Handoff_V1_1_10_16_2026.md` — project state, build queue,
  constraints, open questions. **This is the authority for Andaazan.** It is **not currently
  in this repository** — it contains personal financial figures and this repository is public
  on GitHub. See outstanding item 10.
- **The live site is the truth.** Older planning documents are history and must not override
  what is published. In particular: never revert the Andaazan price or remove single-seat
  booking on the authority of the 10/04 document.

---

## RESPONSE SHAPE — every response, every time

1. **VERDICT.** One sentence. The answer or the finding. No preamble.
2. **THE MATH.** Full working: formula, inputs, intermediate values. Never a stub.
3. **IN PLAIN ENGLISH.** The same argument in words he could read aloud and understand
   every one of.
4. **WHAT TO DO.** Numbered steps, last, maximum ten.

On first use of any technical term in a response, give the plain-English meaning in the same
sentence. Every response. A term explained last week is unexplained today.

---

## VERIFICATION LAW

Never state a fact about live reality — prices, file contents, code state, legal
requirements, platform behaviour — from memory. Read the file or search first.

Tag every number, every claim about file or code state, and every causal claim:
**READ** (opened this session) / **SEARCHED** (live web) / **STATED** (he said it) /
**UNVERIFIED**.

An UNVERIFIED claim may never be the basis of a build step. Typing the tag is the check.

Before saying X happened *because* of Y, state the check that would disprove Y and whether it
was run. If it was not run, say so.

---

## INSTRUCTION LAW

Every step must be executable exactly as written by a non-programmer. Each step names:

1. **WHERE** — which application, which file, which menu.
2. **WHAT** — the exact action.
3. **WHAT HE SHOULD SEE** afterwards.

Missing any of the three, it is a hint, not an instruction, and it does not ship. Ten steps
maximum. More than ten means it is more than one job — split it and say so.

Before any destructive step, list the exact targets first and confirm.

---

## CHALLENGE LAW

Flawed ideas get called out with evidence, not diplomacy. Before agreeing to any plan, build
or money decision, state the strongest argument against it. If there is none, say so
explicitly.

Ask one clarifying question when genuinely ambiguous. Otherwise answer.

---

## GATE AND PROOF LAW

Multi-phase work goes through gates in order. A gate failure stops the sequence — never
noted and bypassed.

Nothing is reported done without shown proof: file rendered, page opened, output verified,
count matched. "I wrote it" is not done.

Three failed attempts at the same method is a hard stop. Say "three attempts failed —
stopping this method", restate the goal, and list structurally different approaches. Check
the dumbest solution first.

---

## ENVIRONMENT LAW

**Clarified 16 Oct 2026 — the distinction is who consumes the output.** [STATED]

**Things Ambar himself opens** — documents, notes, scripts, tooling, anything produced for
him to read or run: **Windows, Android and Google stack only.** No Apple formats, no
Microsoft Office formats. That is his operating environment and his constraint. Every such
output must open cleanly in Google Workspace, Windows and Android.

**Things the public sees** — the website and anything else outward-facing: **optimise for
every major environment, Apple included.** His own platform limits are not the visitors'
limits. That means Safari and iOS get the same care as Chrome and Android: `-webkit-`
prefixes where Safari needs them, `apple-touch-icon`, and anything else a major browser
requires. Treating iPhone visitors as second class costs enquiries.

All printable output must be black-and-white safe — no information carried by colour.

Every printable document carries its document name, version number and Page X of Y.

---

## VERSIONING LAW

Every file produced carries a version: in the filename where practical, and embedded in the
file. Code files carry a version comment at the head:

`<!-- R3_Andaazan_<name> v1.x — MM_DD_YYYY -->`

Versions increment meticulously. Never reused, never skipped. Filenames carry MM_DD_YYYY.

---

## WHAT THIS REPOSITORY IS

A hand-built static website. No framework, no build step, no package manager.
It publishes to **reddoor3.com** through GitHub Pages, driven by the `CNAME` file.

**Editing a file on the `main` branch changes the live public website within a few minutes.
There is no staging site. Treat every change as production.**

**This repository is public on GitHub.** `_config.yml` keeps files off the website; it does
nothing about github.com. Anything committed here is readable by anyone.

| File | What it is |
|---|---|
| `index.html` | The rental homepage. One page, all sections. |
| `andaazan.html` | The Andaazan supper-club page, served at `/andaazan`. Separate product, separate page. |
| `style.css` | All styling. CSS custom properties at the top. Brand red `#7d0e08`. |
| `script.js` | Menu toggle, footer year, both enquiry forms. |
| `404.html` | Shown for any URL that does not exist. Offers the residence and Andaazan. |
| `CNAME` | Contains `reddoor3.com`. **Never delete or edit this.** |
| `_config.yml` | Tells GitHub Pages which files NOT to publish. Keep `CLAUDE.md` in its exclude list. |
| `ANDAAZAN_EDITING_NOTES.md` | Plain-English instructions for changing the Andaazan price and dates. Not published. |
| `assets/` | Photographs and logo. Nine images, 5.2 MB — oversized, see outstanding item 11. |
| Ten landing pages | Search pages, all styled, all consistent with monthly tenancy. |

**How the site is built and deployed** [READ 10/16/2026]: static HTML, no framework, one
plain stylesheet, no build step. Deploy is `git push` to `main`. `/andaazan` is a flat
`andaazan.html` served extensionless by GitHub Pages. There are no reusable
header/footer components — every page is standalone, so "reuse the header" means copy the
markup and accept two places to change.

---

## WHAT THE SITE IS FOR

**Two products, two buyers, one building.**

**The rental.** A furnished one-bedroom executive residence in North Hollywood, Los Angeles.
Repositioned from nightly holiday-let to **mid-term and corporate tenancy**. Audiences:
relocation managers, production offices, corporate-housing operators, travelling healthcare
staff on 13-week contracts. **Price by the month, never by the night.**

**Andaazan.** A four-seat home dinner cooked in a licensed home kitchen under MEHKO permit
PR0366245.

**They cannot run at the same time.** [STATED, Guruji, 10/16/2026] Both use the same
kitchen, and only one activity can run at a time. While the unit is let, Andaazan is paused.
While Andaazan is running, the unit is not let. Two consequences:

1. **The tenant cross-sell is impossible.** Any plan counting on tenants booking tables is
   void. A tenant in residence means the kitchen is closed.
2. **A cooking month is a month of rent given up.** The rental is not a separate income
   stream — it is the alternative use of the same asset, and therefore the hurdle rate that
   Andaazan has to clear. The arithmetic is in the handoff, Part 3.

---

## HARD RULES

1. **Never invent a fact.** No prices, dates, square footage, distances, availability, review
   counts or occupancy figures unless they are already in the repository or Ambar supplied
   them in the session. If a number is needed and missing, put a visible placeholder and tell
   him.
2. **Never commit directly to `main` without saying so first.** Propose the change, name the
   file and the section, get a yes.
3. **Never touch `CNAME`.**
4. **Any countdown or dated content must degrade gracefully.** If the target date passes, it
   must hide itself or show a sensible message. Never zeros, never a negative number. This
   has already gone wrong once.
5. **Do not add analytics, trackers, cookie banners, chat widgets or third-party scripts**
   without asking. The site is deliberately fast and private.
6. **Do not introduce a framework, a build step, or npm.** Plain HTML, CSS and JavaScript
   only. He must be able to read and repair this site himself.
7. **Keep it accessible and mobile-first.** Most enquiries arrive on a phone, usually from an
   Instagram link.
8. **Never publish a full surname or a third-party telephone number.** Testimonials and
   references on the site are first name and initial only. Reference contact details stay in
   the emailed packet and never reach the website.
9. **Never publish a legal-entity name on the site.** No LLC, no ownership structure.
10. **Never write the street address, postcode or GPS coordinates into any file in this
    repository.** It is public on GitHub and its history is readable. The property is "North
    Hollywood, Los Angeles" and nothing more specific. The unlabelled Google Maps pin on the
    homepage is the only location pointer permitted.
11. **Do not advertise a maximum tenancy length.** The rate card may show a longest priced
    term; the site must not state a ceiling. See outstanding item 5.
12. **Works with JavaScript off**, down to: all text readable, the compliance block visible,
    email and phone reachable.
13. **Black-and-white safe.** No information carried by colour alone. The red `#7d0e08` is
    decoration.
14. **Alt text on every image.**
15. **Prices and dates live in one clearly commented block per page, and nowhere else.**
    Changing a price must be a single edit. *Note: a JavaScript config block would break Rule
    12, so the values sit in markup, confined to one commented block.*
16. **Do not scaffold a new project.** The site is live and search-indexed.
17. **Do not restructure the homepage.** Two products, two buyers. Mixing weakens both.
18. **Do not touch rental content** beyond the single Andaazan add-on line.

---

## LEGAL AND BRAND CAUTIONS

- **ANDAAZAN / home kitchen (MEHKO permit PR0366245):** the footer compliance block on
  `andaazan.html` — "Made in a Home Kitchen", the permit number, and the LA County Public
  Health line — is a legal requirement on anything advertising the food. Plain text, always
  visible, never an image, never behind a toggle, never dependent on JavaScript. It survives
  every edit, and must also appear in the Instagram bio and on any post advertising the food.
  [SEARCHED — county MEHKO advertising-disclosure guidance]
- **Banned words anywhere on the Andaazan page:** "catering", "caterer", "we cater", "private
  event", "book us for your party". A home kitchen permit prohibits advertising as a caterer.
  Say "book the table." [SEARCHED]
- **No alcohol** may be served or permitted, and no alcohol imagery. The alcohol wording on
  the page stays verbatim. [SEARCHED — a licensed home kitchen needs a separate state licence]
- **LA28 / Olympic content:** "Olympic", "Olympics" and "LA28" are protected marks in the
  United States and RedDoor3 is not a sponsor. Any section referencing the Games keeps the
  non-affiliation disclaimer already in `index.html`. No rings, no LA28 logos, no wording
  implying partnership.
- **Universal Studios, Warner Bros., Disney, NBCUniversal, Providence:** may be named
  factually as nearby employers and landmarks. Never imply affiliation or endorsement.
- **Guest testimonials:** first-name-and-initial reviews only. Do not upgrade them to look
  like corporate references or invent job titles.

---

## VERIFIED FACTS YOU MAY USE

Straight-line distances from the property, computed from Google Places coordinates on
23 August 2026. These are **not** driving distances.

| Employer | Miles |
|---|---|
| NBCUniversal / Universal Studios | 0.7 |
| Radford Studio Center | 1.6 |
| Warner Bros. Studios | 1.7 |
| Providence Saint Joseph Medical Center | 2.2 |
| The Walt Disney Studios | 2.4 |
| Cast & Crew | 3.5 |
| Hollywood Burbank Airport | 3.5 |
| Crane Aerospace / Hydro-Aire | 3.7 |
| Entertainment Partners | 3.9 |

**LA28 dates** [SEARCHED, la28.org]: Olympic Games 14–30 July 2028. Paralympic Games
15–27 August 2028. Olympic squash is at Courthouse Square on the Universal Studios lot. The
Sepulveda Basin is the Valley Zone, hosting BMX, skateboarding, modern pentathlon and
3x3 basketball.

### The rental

**Monthly rate card** [STATED — Executive Housing Packet V3, 23 August 2026]:

| Term | Monthly rate |
|---|---|
| 30–89 days | $4,250 |
| 3 months | $4,000 |
| 6 months | $3,750 |
| 11 months | $3,500 |

Security deposit equal to one month's rent, held per California law. Utilities included up to
$100 per month. Minimum term 30 days. Available from 1 October 2026. 741 sq ft. Two adults.
Ample free street parking. Self check-in. W-9 and certificate of insurance issued together.
Written quote within one business day.

**Preferential rate for nurses, healthcare staff and first responders.** Advertised in three
places (top banner, booking panel, `#corporate` section). **No figure is published and none
has been set** — quoted case by case. Do not invent a percentage or a dollar amount.

**Nightly pricing was retired on 23 August 2026.** Do not reintroduce it before the date in
DATED REMINDERS.

### Andaazan — the live page governs

[READ 10/16/2026] $500 for the whole table (four seats), or $125 for a single seat with
strangers seated together; the table closes once four are in. Dates Saturday 7 November 2026
and Sunday 8 November 2026, both 7:00 PM. **The Diwali table on 8 November is a special
Diwali vegetarian menu.** Full payment on booking. Full refund over 48 hours before; none
inside 48 hours. Indian family food, not Punjabi. Menu arc: apps, dinner, sweets, chai.
Spice level chosen by the guest in the request form — Mild / Medium / Hot / "However you
would cook it for yourself".

**$125 is a launch price, not a price.** [STATED] The stated condition for review is three
paid tables with photographs. Price and dates live in one block in `andaazan.html` — see
`ANDAAZAN_EDITING_NOTES.md`.

### County answers [STATED — Guruji relaying the County, 10/16/2026]

| Question | Answer |
|---|---|
| Do complimentary meals count against the 90-meals-per-week cap? | **No** |
| Must complimentary meals be recorded in sales records? | **No** |
| 2026 gross annual sales cap | **$110,000** |

**Consequence:** a free table costs groceries and nothing else — no legal headroom consumed,
no paperwork. Seeding is the cheapest marketing channel available and the only one that
produces the thing actually missing: photographs and quotes.

**Provenance is thin.** The name of the County officer and the date of the call are not
recorded. See outstanding item 13.

**Contact:** booking@reddoor3.com · +1 323 896 3696 (call, SMS, WhatsApp)

---

## KNOWN OUTSTANDING WORK

1. **RESOLVED 23 Aug 2026.** The `script.js` countdown that wrote `00` forever was deleted
   with its section. Hard Rule 4 still applies if one is ever reintroduced.
2. **RESOLVED 23 Aug 2026.** Monthly rate card published in the booking panel.
3. **CLOSED 16 Oct 2026.** No dedicated parking, and none expected. [STATED] The site says
   "ample free street parking" and that stays. Reopen only if a dedicated space is ever
   secured — it would be the highest-value copy change on the site for corporate buyers.
4. **PARTLY RESOLVED 23 Aug 2026.** The `#corporate` section and the monthly panel carry the
   corporate path. The enquiry form's "Purpose of stay" list still reads like a holiday-let
   form.
5. **Tenancy structure needs a California landlord-tenant attorney.** Does holding the
   property in an LLC forfeit the AB 1482 single-family exemption; does the City of Los
   Angeles just-cause ordinance apply and from when; does a corporate-tenant-of-record
   structure change either answer. Until answered the site advertises no maximum tenancy.
   Note for that conversation: a mortgage lender holds a lien, not title — whoever is on the
   deed is the legal owner.
6. **RESOLVED 5 Oct 2026 (Task Brief 002).** Five dead World Cup landing pages deleted,
   sitemap entries removed, branded `404.html` added.
7. **RESOLVED 5 Oct 2026.** Landing pages reconciled with the 30-day minimum. Four stubs
   rebuilt as proper pages, five deleted, six existing pages given site fonts and a
   30-day-minimum line. Ten remain, all styled and consistent.
8. **RESOLVED 16 Oct 2026.** The unit is not currently let and there are no future bookings
   [STATED, Guruji, 16 Oct 2026], so the published dates of Saturday 7 and Sunday 8 November
   2026 are deliverable. **This also unblocks the whole sequence** — Andaazan can run now.
   Re-check before publishing any further date: a let month is a month the kitchen is closed.
9. **DECIDED 16 Oct 2026 — Route A stays. Do not re-propose B or C.** [STATED] Ambar
   declined stored enquiry capture: he does not want the privacy, storage and regulatory
   obligations that come with holding personal data. Both forms will continue to open the
   visitor's own email client and store nothing.
   **Accepted consequences:** an enquiry abandoned before the email is sent is lost, and no
   waitlist is being built, so the Block D "offer the first paid date to the waitlist" step
   has no list to offer it to. Marketing that depends on a list must be re-planned around
   Instagram, Nextdoor and direct messaging instead.
   **Benefit, and it is real:** nothing is stored, so there is no database to secure, no
   processor agreement, no breach exposure and no deletion requests.
10. **The handoff document is not in this repository.** It contains personal financial figures
    and the repo is public. Options: make the repo private (GitHub Pages on a private repo
    generally needs a paid plan — check before switching or the site goes dark), split the
    document, or keep it local and accept that cloud sessions cannot read it. **His call.**
11. **Images are oversized.** 5.2 MB across nine files; `garden.jpg` is 1.1 MB,
    `patio-firepit.jpg` 920 KB, `logo.png` 256 KB. HTML serves in 0.13s; the images dominate
    everything. Highest-value performance fix. [READ 10/16/2026]
12. **Andaazan has no social proof at all.** No photographs of a table, no guest quotes. The
    page asks a stranger for $500 with nothing to show. Build the section between Dates &
    price and the form, reusing the homepage star-rating component. **Do not move the
    Anjali M. homepage review without written confirmation it refers to his cooking.**
    [UNVERIFIED]
13. **PARTLY ANSWERED 16 Oct 2026.** The County officer who gave the three answers was
    **Lisa** at LA County Department of Public Health. [STATED] Surname and call date still
    not recorded. Good enough to proceed; if a dispute ever arises, the call would need to
    be made again and logged properly.
14. **The building's governing documents have not been read** for a home-based-business
    clause. He has direct access to them. [STATED, unresolved]
15. **CLOSED 16 Oct 2026.** Ambar manages the cooking-versus-letting calendar manually.
    [STATED] There is no shared calendar and none is wanted. **Before publishing any new
    dinner date, ask him whether the unit is free across it** — the two uses cannot overlap,
    and he is the only record of which is which.
16. **`/table` and `/book` do not exist** — both return 404. [READ 10/16/2026] GitHub Pages
    cannot redirect; they would have to be meta-refresh stub files. Deliberately not built.
17. **MOSTLY RESOLVED 16 Oct 2026.** Favicon added to all 13 pages (`favicon.ico` plus 32px
    and 192px PNGs, generated from the logo; no `apple-touch-icon`, per Environment law).
    Social preview tags added to the 10 landing pages, so all 12 indexed pages now preview
    with an image when shared. Colour contrast fixed: `--gold` (#d6a24c, 2.03:1 on cream)
    was failing on `.eyebrow`, which is meaningful text. A second token `--gold-ink`
    (#8a5f18, **4.97:1**) now serves `.eyebrow` and `.stars` on light backgrounds, while
    `.hero .eyebrow` keeps the light gold because it sits on a dark photo overlay —
    darkening it globally would have made the hero worse. [READ 16/10/2026]

    **Apple and cross-platform work, 16 Oct 2026.** `apple-touch-icon` (180x180, opaque —
    iOS composites transparent PNGs onto black), `site.webmanifest` with 192 and 512 icons,
    and `theme-color` on the six landing pages that lacked it; all 13 pages now carry the
    full set. Two real Safari bugs fixed in `style.css`: `-webkit-backdrop-filter`, without
    which the sticky header had **no blur at all on any iPhone**, and
    `-webkit-text-size-adjust: 100%`, which stops iOS inflating text in landscape. Form
    inputs were already 16px, so iOS does not zoom on focus. **Not tested on real Safari
    hardware** — these are known-good fixes applied from the source, not verified on a
    device. [UNVERIFIED on device]

    **Still open: no privacy policy or terms page.** Position as of 16 Oct 2026, following
    the item 9 decision: the site stores nothing, sets no cookies, runs no analytics and
    uses no third-party processor. Enquiries travel from the visitor's own email client to
    his inbox. On that basis a privacy policy looks like good practice rather than a legal
    requirement at this scale — the CCPA business thresholds are not met. **This is not
    legal advice.** Three things would change the answer and must trigger a rethink:
    adding analytics or any tracker, adding a form that stores submissions anywhere, or
    taking payment on the site.

---

## DATED REMINDERS

- **14 March 2028 — bring back the event pricing panel.** The nightly early-bird banner and
  nightly booking card were retired on 23 August 2026 and should return roughly four months
  before the Olympic Games open on 14 July 2028. The retired wording is recoverable from git
  history, in the commit that introduced the monthly rate card.

---

## LANDING PAGE TEMPLATE

New landing pages follow the v2.0 pattern in
`travel-nurse-furnished-apartment-los-angeles.html`: canonical, site fonts, eyebrow, h1, two
paragraphs, a `.feature-strip` of verified facts, three `.benefit-card` items, the
30-day/non-affiliation small-note, then the two buttons.

**Never put a dollar figure on a landing page** — the rate card lives on the homepage only,
so there is one place to change it.

---

## HOW TO FINISH A SESSION

- State which files changed and what each change does, in plain words.
- State exactly what Ambar should see on reddoor3.com, and where on the page.
- If a date, price or number was involved, restate it so he can check it.
- If you could not verify something, say so plainly rather than guessing.
- Nothing is reported done without shown proof.

<!-- END CLAUDE.md v2.0 -->
