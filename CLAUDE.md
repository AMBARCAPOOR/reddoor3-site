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
8. **Never publish a full surname or a third-party telephone number.** Testimonials and references on the site are first name and initial only. Reference contact details stay in the emailed packet and never reach the website.
9. **Never publish a legal-entity name on the site.** No LLC, no ownership structure. It invites questions that belong in a lease, not on a web page.
10. **Do not advertise a maximum tenancy length.** The rate card may show a longest priced term; the site must not state a ceiling. See outstanding item 5.

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

**Monthly rate card** (Ambar-supplied, Executive Housing Packet V3, 23 August 2026):

| Term | Monthly rate |
|---|---|
| 30-89 days | $4,250 |
| 3 months | $4,000 |
| 6 months | $3,750 |
| 11 months | $3,500 |

Security deposit equal to one month's rent, held per California law. Utilities included up to $100 per month. Minimum term 30 days. Available from 1 October 2026. 741 sq ft. Two adults. Ample free street parking. Self check-in. W-9 and certificate of insurance issued together. Written quote within one business day.

**Preferential rate for nurses, healthcare staff and first responders.** Advertised on the site in three places (top banner, booking panel, `#corporate` section). **No figure is published and none has been set** — it is quoted case by case and negotiated. Do not invent a percentage or a dollar amount. Context: the published 3-month rate of $4,000 sits above the LA travel-nurse furnished band of roughly $2,200-$3,500/month, so this segment is expected to negotiate.

**Nightly pricing was retired from the site on 23 August 2026.** Do not reintroduce it before the date in DATED REMINDERS below.

**Contact:** booking@reddoor3.com · +1 323 896 3696 (call, SMS, WhatsApp)

---

## KNOWN OUTSTANDING WORK

1. **RESOLVED 23 Aug 2026.** The `script.js` countdown that wrote `00` forever was deleted with its section. No countdown exists on the site. Hard Rule 4 still applies if one is ever reintroduced.
2. **RESOLVED 23 Aug 2026.** Monthly rate card published in the booking panel. Figures in VERIFIED FACTS above.
3. **Parking is "ample free street parking".** If dedicated parking is ever secured, this remains the highest-value copy change on the site for corporate buyers.
4. **PARTLY RESOLVED 23 Aug 2026.** The `#corporate` section and the monthly panel now carry the corporate path. The enquiry form's "Purpose of stay" list has not been revisited and still reads like a holiday-let form.
5. **Tenancy structure is unresolved and needs a California landlord-tenant attorney.** Open questions: does holding the property in an LLC forfeit the AB 1482 single-family exemption; does the City of Los Angeles just-cause ordinance apply here and from what point; does a corporate-tenant-of-record structure change either answer. Until these are answered the site advertises no maximum tenancy. Note for that conversation: a mortgage lender holds a lien, not title — whoever is on the deed is the legal owner.
6. **Five dead World Cup landing pages** (`brazil-fans-la-private-retreat`, `england-fans-world-cup-la-rental`, `los-angeles-world-cup-accommodation`, `mexico-fans-world-cup-los-angeles-stay`, `world-cup-stay-near-universal-studios`) are still advertised to search engines in `sitemap.xml`. Task Brief 002.
7. **Around twenty landing pages still sell short stays** while the site now carries a 30-day minimum. They advertise something not currently offered and need reconciling.

---

## DATED REMINDERS

- **14 March 2028 — bring back the event pricing panel.** The nightly early-bird banner and the nightly booking card were retired on 23 August 2026 and should return roughly four months before the Olympic Games open on 14 July 2028. The retired wording is recoverable from git history, in the commit that introduced the monthly rate card.

---

## HOW TO FINISH A SESSION

Before you say a task is done:

- State which files changed and what each change does, in plain words.
- State exactly what Ambar should see on reddoor3.com, and where on the page.
- If a date, price or number was involved, restate it so he can check it.
- If you could not verify something, say so plainly rather than guessing.
