# ANDAAZAN — how to change the price and the dates

<!-- R3_Andaazan_EditingNotes v1.0 — 10_04_2026 -->

This file is **not** published to reddoor3.com. Only you can see it.

The page lives in one file: **`andaazan.html`**, in the same folder as
`index.html`. Open it in any text editor (Notepad works).

Everything you are likely to want to change sits inside one block. Search
the file for this line — it is about two-thirds of the way down:

```
DATES AND PRICE — THE ONLY PLACE ON THIS PAGE WITH A PRICE OR A DATE
```

Everything below is within twenty lines of that.

---

## To change the price

There are **two** lines marked `<!-- PRICE -->`, one above the other:

```html
<div class="price-note" style="margin-top:18px;"><span class="price-now">$500</span> for the whole table &mdash; four seats.</div>
<div class="price-note" style="margin-top:10px;"><span class="price-now">$125</span> for a single seat &mdash; I close the table at four.</div>
```

Change `$500` on the first and `$125` on the second. Leave everything else
on those lines alone.

**After saving you should see:** on the page, in the cream panel headed
"Dates & price", both lines now read your new numbers.

**One thing to remember:** the single-seat price also appears in the FAQ
answer under "Can I book a single seat?", which says `$125 each`. If you
change the seat price, change it there too — search the file for `$125`
and you will find both.

---

## To change the dates

There are **four** lines marked `<!-- DATE -->` — two in the panel, two in
the form's dropdown. All four must match, or someone will pick a date in
the form that the panel does not offer.

In the panel:

```html
<!-- DATE --><li><strong>Saturday 7 November 2026</strong> &mdash; 7:00 PM</li>
<!-- DATE --><li><strong>Sunday 8 November 2026</strong> &mdash; Diwali &mdash; 7:00 PM</li>
```

In the form, further down:

```html
<!-- DATE --><option>Saturday 7 November 2026</option>
<!-- DATE --><option>Sunday 8 November 2026 — Diwali</option>
```

**After saving you should see:** the new dates listed in the cream panel,
and the same dates in the "Preferred date" dropdown in the form. Check both.

**To add a third date:** copy one `<!-- DATE -->` line in the panel and one
in the dropdown, paste each directly below its twin, and edit the text.

---

## To change the time

The time `7:00 PM` appears on the two `<!-- DATE -->` lines in the panel.
Change both.

---

## To change the cancellation policy

Directly under the price, find:

```html
<p>Full refund if cancelled more than 48 hours before. No refund inside 48 hours — the food is bought by then.</p>
```

Change the words. Both mentions of 48 hours are on that one line.

---

## To put the price up or down for one night only

Do not edit the price line. Add a sentence under it instead, for example:

```html
<p>Diwali night is quoted separately.</p>
```

That way the standard price stays correct and the exception is visible.

---

## To change the spice choices

Guests pick their heat on the request form, and it arrives in the email with
their booking. Find `id="aSpice"` in `andaazan.html`. The choices are:

```html
<option>Mild</option>
<option>Medium</option>
<option>Hot</option>
<option>However you would cook it for yourself</option>
```

Add, remove or reword these freely — they are just text. Keep the
`<option value="">Select</option>` line above them, which is what forces
people to actually choose rather than skipping the question.

**After saving you should see:** the "Spice level" dropdown in the form
offering your new wording. The FAQ answer under "Is it spicy?" mentions
mild and cooking it the way you would for yourself, so if you change those
two ends of the scale, reword that answer too.

---

## Things you should NOT change without asking

- The block in the footer beginning **"Made in a Home Kitchen"**. The permit
  number, the wording, and the Public Health line are required by the county
  on anything that advertises the food. It must stay visible, as text, on
  the page.
- The alcohol paragraph. The wording is deliberate.
- The words **catering**, **caterer**, **private event** or **book us for
  your party** must not appear anywhere on this page. A home kitchen permit
  does not allow you to advertise as a caterer. Say "book the table".
- The street address must never appear on this page or anywhere in this
  repository. See Hard Rule 10 in `CLAUDE.md`.

---

## How the form works

It does not send anything to a server and nothing is stored on the website.
When someone presses "Send request", their own email program opens with the
message already written, addressed to `booking@reddoor3.com`. They press
send. It arrives as a normal email from them.

This matches how the rental enquiry form already works.

**What this means for you:** if someone fills the form in and then closes
their email without sending, you never find out. The email address, phone
number, WhatsApp and SMS links are all shown next to the form so nobody is
lost if the form misbehaves on their phone.

If you later want every enquiry captured in a list whether or not they send
the email, that needs a different setup — ask and it can be changed.

---

## After any edit

1. Save the file.
2. Ask Claude Code to publish it, or push the change yourself.
3. The live page updates within a few minutes at **reddoor3.com/andaazan**.

There is no staging copy. The moment it is pushed, it is public.
