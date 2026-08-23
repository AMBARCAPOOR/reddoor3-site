# CLAUDE.md — RedDoor3 website

**Repository:** AMBARCAPOOR/reddoor3-site · **Version:** V1 · **Created:** 08/23/2026
This file is read automatically at the start of every Claude Code session in this repository.
It is standing instructions. Update it whenever a rule below stops being true.

---

## WHAT THIS REPOSITORY IS

A hand-built static website. No framework, no build step, no package manager.
It publishes to **reddoor3.com** through GitHub Pages, driven by the `CNAME` file.

**Editing a file on the `main` branch changes the live public website within a few minutes.
There is no staging site. Treat every change as production.**

| File | What it is |
|---|---|
| `index.html` | The entire site. One page, all sections. |
| `style.css` | All styling. Uses CSS custom properties declared at the top. |
| `script.js` | Menu toggle, countdown timer, footer year. |
| `CNAME` | Contains `reddoor3.com`. **Never delete or edit this — it is what points the domain at this repo.** |
| `assets/` | Photographs and logo. |

---

## WHO YOU ARE WORKING FOR

Ambar "Guruji" Capoor. Cinematographer and 1st AC. **Not a programmer.**

- Never tell him to run a terminal command unless there is genuinely no other way.
- Never assume he can read a diff and spot a problem. Describe in plain words what changed and what he should see on the page.
- When you finish, tell him the exact section of reddoor3.com to look at and what it should now say.

---

## WHAT THE SITE IS FOR

RedDoor3 is a furnished one-bedroom executive residence at 10823 Whipple St, North Hollywood, CA 91602.

The site is being repositioned from a nightly holiday-let toward **mid-term and corporate tenancy** — 30 days to 12 months. The audiences are relocation managers, production offices, corporate-housing operators, and travelling healthcare staff on 13-week contracts.

**When writing copy, price by the month, never by the night.** Nightly pricing signals "holiday let" to a corporate buyer and loses the sale.

---

## HARD RULES

1. **Never invent a fact.** No prices, dates, square footage, distances, availability, review counts or occupancy figures unless they are already in the repository or Ambar supplied them in the session. If a number is needed and missing, put a visible placeholder and tell him.
2. **Never commit directly to `main` without saying so first.** Propose the change, name the file and the section, get a yes.
3. **Never touch `CNAME`.**
4. **Any countdown or dated content must degrade gracefully.** If the target date passes, it must hide itself or show a sensible message. It must never show zeros or a negative number. This has already gone wrong once.
5. **Do not add analytics, trackers, cookie banners, chat widgets or third-party scripts** without asking. The site is deliberately fast and private.
6. **Do not introduce a framework, a build step, or npm.** Plain HTML, CSS and JavaScript only. He must be able to read and repair this site himself.
7. **Keep it accessible and mobile-first.** Most enquiries arrive on a phone.

---

## LEGAL AND BRAND CAUTIONS

- **LA28 / Olympic content:** the words "Olympic", "Olympics" and "LA28" are protected marks in the United States and RedDoor3 is not a sponsor. Any section referencing the Games must keep the non-affiliation disclaimer that is already in `index.html`. Do not add Olympic rings, LA28 logos, or wording that implies partnership.
- **Universal Studios, Warner Bros., Disney, NBCUniversal, Providence:** may be named factually as nearby employers and landmarks. Never imply affiliation, endorsement, or an accommodation partnership.
- **Guest testimonials:** the site carries first-name-and-city reviews. Do not upgrade them to look like corporate references or invent job titles for them.

---

## VERIFIED FACTS YOU MAY USE

Straight-line distances from 10823 Whipple St (34.1483206, −118.3655278), computed from Google Places coordinates on 23 August 2026. These are **not** driving distances.

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

**LA28 dates (verified, la28.org):** Olympic Games 14–30 July 2028. Paralympic Games 15–27 August 2028. Olympic squash is at Courthouse Square on the Universal Studios lot. The Sepulveda Basin is the Valley Zone, hosting BMX, skateboarding, modern pentathlon and 3x3 basketball.

**Contact:** booking@reddoor3.com · +1 323 896 3696 (call, SMS, WhatsApp)

---

## KNOWN OUTSTANDING WORK

1. **`script.js` countdown fails after its target date.** The `if (distance <= 0)` branch writes `00` and never recovers. Target is currently 14 July 2028. This must be rewritten before then — see Hard Rule 4.
2. **The site has no monthly rate card.** It shows nightly pricing only. A corporate rate card is needed once Ambar supplies the figures.
3. **Parking is described as "free street parking".** If dedicated parking is ever secured, this is the highest-value copy change on the site for corporate buyers.
4. **No corporate enquiry path.** The form's "Purpose of stay" list includes relocation, but there is no dedicated corporate or extended-stay section.

---

## HOW TO FINISH A SESSION

Before you say a task is done:

- State which files changed and what each change does, in plain words.
- State exactly what Ambar should see on reddoor3.com, and where on the page.
- If a date, price or number was involved, restate it so he can check it.
- If you could not verify something, say so plainly rather than guessing.
