# ANIMATION_GUIDE.md

# Dream Space Studio — Motion Design System v1.0

---

# PURPOSE

Motion is not decoration.

Motion guides attention.

Motion tells the story.

Motion creates emotion.

Every animation should help visitors understand the product, the company, or the journey.

If an animation does not improve the experience, remove it.

---

# MOTION PHILOSOPHY

Every movement should feel:

• Elegant

• Calm

• Architectural

• Purposeful

• Premium

• Cinematic

• Organic

Avoid:

× Bounce effects

× Cartoon animations

× Flashing

× Over-rotation

× Excessive scaling

× Constant movement

× Distracting particles

---

# TECHNOLOGY STACK

Primary

GSAP

Secondary

Framer Motion

Smooth Scroll

Lenis

3D Motion

React Three Fiber

Scroll

GSAP ScrollTrigger

Counters

react-countup

Text Split

SplitType

---

# RESPONSIBILITY

GSAP

* Scroll animations
* Timelines
* Hero intro
* Horizontal scrolling
* Clip path reveals
* Mask reveals
* Image reveals

Framer Motion

* Buttons
* Cards
* Hover effects
* Page transitions
* Modal transitions
* Mobile navigation

Never recreate GSAP animations in Framer Motion.

---

# GLOBAL EASING

Primary

power3.out

Luxury

power4.out

Exit

power2.in

Text Reveal

expo.out

Slow Reveal

circ.out

Never use linear easing.

---

# STANDARD DURATION

Micro

0.20s

Fast

0.35s

Normal

0.60s

Luxury

0.90s

Hero

1.20–1.80s

Section Reveal

0.80–1.00s

Never exceed 2 seconds unless creating a cinematic intro.

---

# PAGE LOAD SEQUENCE

1

Black screen

↓

2

Thin gold line appears

↓

3

Logo fades in

↓

4

Architectural line animation

↓

5

Background video fades in

↓

6

Hero title reveals

↓

7

Subtitle reveals

↓

8

Buttons animate

↓

9

Statistics count

↓

10

Navbar fades in

The page should never appear instantly.

---

# SCROLL PHILOSOPHY

Scrolling should feel like walking through a luxury home.

Every section introduces something new.

Avoid revealing everything simultaneously.

---

# HERO ANIMATION

Background

Scale

1.15

↓

1.00

Opacity

0

↓

1

Hero Heading

Split into characters

Characters reveal upward

Delay

0.03

Hero Subtitle

Fade + Blur

Hero Buttons

Slide upward

Hero Statistics

Count animation

Hero Scroll Indicator

Loop animation

---

# NAVIGATION

Initial

Transparent

↓

Scroll

Glass background

↓

Scroll Down

Hide navbar

↓

Scroll Up

Show navbar

Duration

0.5 seconds

---

# TEXT REVEAL

Allowed

Mask Reveal

Character Reveal

Word Reveal

Line Reveal

Blur Reveal

Forbidden

Typing animation

Random letters

Machine effect

---

# IMAGE REVEAL

Reveal using

Clip Path

or

Mask

Animation

Scale

1.08

↓

1

Opacity

0

↓

1

Never use aggressive zoom.

---

# SECTION REVEAL

Every section

Opacity

0

↓

1

Y

80px

↓

0

Blur

10px

↓

0

Trigger

When 20% visible.

Once only.

---

# PARALLAX

Allowed

Large background images

Hero

Gallery

Project banners

Strength

5%

Maximum

15%

Never create exaggerated movement.

---

# HORIZONTAL SCROLL

Only for

Project Gallery

Use

ScrollTrigger

Pinned section

Smooth translation

Cards move naturally.

Never scroll too fast.

---

# CARD HOVER

Hover

Translate

-8px

Scale

1.02

Shadow increase

Image zoom

1.08

Text moves

4px

Duration

300ms

---

# BUTTON HOVER

Scale

1.03

Background transition

Border animation

Arrow slide

4px

Never bounce.

---

# SERVICE CARD

Hover

Expand slightly

Background image appears

Gold line grows

Icon rotates

5°

Text fades upward

---

# PROJECT CARD

Image zoom

Overlay fade

Category reveal

Button slides upward

Cursor enlarges

---

# BEFORE / AFTER

Handle movement

Very smooth

No snapping

Images transition softly

Support touch gestures

---

# TIMELINE

Golden line grows as user scrolls.

Timeline items reveal alternately.

Left

↓

Right

↓

Left

↓

Right

Icons rotate

5°

---

# GALLERY

Images fade

↓

Scale

↓

Reveal

Hover

Zoom

Overlay

Project info appears

---

# COUNTERS

Use CountUp.

Start only once.

Never restart.

Ease out.

---

# FAQ

Accordion

Height animation

Chevron rotates

180°

Duration

0.4 seconds

---

# FORMS

Field focus

Gold outline

Submit

Loading animation

Success

Checkmark animation

Error

Shake lightly

Never use excessive shaking.

---

# CURSOR

Desktop only.

Inner Dot

Gold

Outer Ring

Transparent

Hover button

Cursor enlarges

Hover image

Outer glow

Hover link

Arrow appears

Disable below tablet width.

---

# LOADER

Black background

↓

Gold line draws

↓

Architectural blueprint

↓

Logo appears

↓

Fade

↓

Homepage

Only once per session.

---

# PAGE TRANSITIONS

Fade

Scale

Clip reveal

Duration

0.8 seconds

Never use spinning transitions.

---

# VIDEO

Autoplay

Muted

Loop

Fade in

Poster image before loading

Lazy loaded

---

# SCROLL INDICATOR

Floating

Small bounce

Opacity pulse

Subtle only.

---

# MOUSE FOLLOWER

Desktop only.

Blend mode

Difference

Smooth interpolation

Never lag.

---

# MICRO INTERACTIONS

Links

Underline grows

Icons

Rotate slightly

Buttons

Scale

Inputs

Glow

Cards

Lift

Images

Zoom

Statistics

Count

Navigation

Slide

Everything should respond.

Nothing should feel static.

---

# MOBILE MOTION

Reduce animation intensity.

Disable

Cursor

Heavy parallax

Large blur

Long timelines

Keep

Fade

Slide

Small scale

Performance first.

---

# ACCESSIBILITY

Respect prefers-reduced-motion.

Disable unnecessary animations.

Keep content accessible without motion.

Focus states remain visible.

---

# PERFORMANCE

60 FPS target.

Animate only:

transform

opacity

clip-path (sparingly)

Avoid animating:

width

height

top

left

box-shadow continuously

Filter blur on large elements

Use will-change only where necessary.

---

# AI DEVELOPMENT RULES

Before adding an animation:

1. Check if the same motion already exists.
2. Reuse animation utilities.
3. Keep timings consistent.
4. Test on mobile.
5. Test reduced-motion mode.
6. Keep GSAP timelines organized.
7. Clean up ScrollTriggers on unmount.
8. Avoid animation conflicts.
9. Lazy-load heavy animation libraries if possible.
10. Maintain a single, consistent motion language across the website.

---

# MOTION CHECKLIST

Every animation should answer:

Does it improve storytelling?

Does it guide attention?

Does it feel premium?

Is it smooth?

Does it perform well?

Is it accessible?

If the answer to any of these is "no", redesign or remove the animation.

---

END OF DOCUMENT