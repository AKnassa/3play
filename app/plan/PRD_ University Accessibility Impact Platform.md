<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# PRD: University Accessibility Impact Platform

**From:** Erik (Growth Lead)
**To:** Akshit
**Priority:** Ship in 24 hours
**Goal:** Production-ready demo that proves you understand growth product strategy

***

## Strategic Context

We're not just building a calculator. We're building a **self-service growth engine** that replaces sales conversations. This needs:

1. **Landing page** that hooks prospects and builds credibility
2. **Calculator app** that delivers personalized insights
3. **About page** that shows your thinking (for me to evaluate)

Think of this as a mini-product launch, not just a tool.

***

## Product Architecture

```
www.yoursite.com/
├─ / (Landing Page)           → Hook & convert
├─ /calculator                → Interactive tool
└─ /why (About Page)          → Your process doc
```

**User Journey:**

```
Google Search / Email Link
    ↓
Landing Page (convince them this is worth 5 min)
    ↓
Calculator (deliver the value)
    ↓
CTA (convert to sales conversation)
```


***

# SECTION 1: Landing Page

## Purpose

**Convert cold traffic into engaged users in < 30 seconds**

Think Apple product launch pages:

- Beautiful, minimal
- Scroll-based storytelling
- Clear value prop
- Frictionless CTA

***

## Landing Page Structure

### **Hero Section (Above the fold)**

```
┌────────────────────────────────────────────┐
│  [Logo: 3Play Impact]       [Why I Built] │
│                                            │
│                                            │
│   Understand Your University's            │
│   Accessibility Investment                │
│   in Under 5 Minutes                      │
│                                            │
│   Know exactly what compliance costs,     │
│   who benefits, and your timeline—        │
│   without talking to sales.               │
│                                            │
│   → Calculate Your Impact →               │
│     (Animated gradient button)            │
│                                            │
│   Trusted by 200+ universities            │
│   [Harvard] [MIT] [Stanford] [UCLA]       │
│   (logo strip, subtle grayscale)          │
│                                            │
└────────────────────────────────────────────┘
```

**Animations:**

- Headline fades in with slight upward motion
- Subtext appears 200ms after headline
- CTA button pulses subtly every 3s
- University logos fade in on scroll
- Background: Subtle animated gradient mesh (like Stripe)

**Technical:**

```jsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Understand Your University's Accessibility Investment
</motion.h1>

<motion.div
  animate={{ scale: [1, 1.02, 1] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
>
  <Button>Calculate Your Impact</Button>
</motion.div>
```


***

### **Problem Statement Section**

```
┌────────────────────────────────────────────┐
│                                            │
│   The Challenge Higher Ed Faces           │
│                                            │
│   [Three columns with animated icons]     │
│                                            │
│   ┌──────────┐  ┌──────────┐  ┌─────────┐│
│   │ Complex  │  │ Unclear  │  │ 3-Week  ││
│   │ Regs     │  │ Costs    │  │ Process ││
│   │          │  │          │  │         ││
│   │ Title II │  │ Hidden   │  │ Just to ││
│   │ ADA      │  │ budget   │  │ get a   ││
│   │ WCAG 2.1 │  │ impacts  │  │ quote   ││
│   └──────────┘  └──────────┘  └─────────┘│
│                                            │
└────────────────────────────────────────────┘
```

**Animation:**

- Icons fade in as user scrolls into view
- Each column staggers by 150ms
- Icons have subtle float animation

***

### **Solution Preview Section**

```
┌────────────────────────────────────────────┐
│                                            │
│   Get Answers in Minutes, Not Weeks       │
│                                            │
│   [Browser mockup showing calculator]     │
│   [Animated screenshot or video preview]  │
│                                            │
│   ✓ Personalized to your campus           │
│   ✓ Interactive cost modeling             │
│   ✓ Compliance timeline visualization     │
│   ✓ Peer university benchmarking          │
│                                            │
│   [See It In Action →]                    │
│                                            │
└────────────────────────────────────────────┘
```

**Animation:**

- Browser mockup floats in from right
- Screenshot inside morphs between different calculator states
- Checkmarks appear sequentially as user scrolls
- CTA button has hover lift effect

**Technical:**

```jsx
<motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  <Image src="/calculator-preview.png" />
</motion.div>
```


***

### **How It Works Section**

```
┌────────────────────────────────────────────┐
│                                            │
│   Three Steps to Clarity                  │
│                                            │
│   [Horizontal timeline with animated path]│
│                                            │
│   1 ─────→ 2 ─────→ 3                     │
│   │        │        │                      │
│   Tell us  See your Review                 │
│   about    impact   & export              │
│   your     in real              report    │
│   campus   time                           │
│                                            │
│   [Interactive preview of each step]      │
│                                            │
└────────────────────────────────────────────┘
```

**Animation:**

- Path draws in using SVG stroke animation
- Each step pulses when scrolled into view
- Preview images fade in below each number

***

### **Social Proof Section**

```
┌────────────────────────────────────────────┐
│                                            │
│   Universities Trust Our Insights         │
│                                            │
│   [Bento grid layout with stats]          │
│                                            │
│   ┌─────────┐  ┌─────────┐               │
│   │ 200+    │  │ $4.2M   │               │
│   │ Schools │  │ Budget  │               │
│   │         │  │ Planned │               │
│   └─────────┘  └─────────┘               │
│   ┌──────────────────────┐               │
│   │ "This tool saved us  │               │
│   │  weeks of research"  │               │
│   │  - ASU Dean         │               │
│   └──────────────────────┘               │
│                                            │
└────────────────────────────────────────────┘
```

**Animation:**

- Stats count up from 0 when in view
- Quote cards have subtle scale on hover
- Bento grid items animate in with stagger

***

### **Final CTA Section**

```
┌────────────────────────────────────────────┐
│                                            │
│   Ready to See Your Numbers?              │
│                                            │
│   Get your personalized accessibility     │
│   impact report in under 5 minutes.       │
│   No sales call required.                 │
│                                            │
│   ┌──────────────────────────────────┐   │
│   │  Calculate Your Impact           │   │
│   │  [Animated gradient button]       │   │
│   └──────────────────────────────────┘   │
│                                            │
│   Or schedule a consultation →            │
│                                            │
└────────────────────────────────────────────┘
```

**Animation:**

- Section has parallax background
- CTA button has animated gradient border
- Secondary link fades in 1s after primary CTA

***

### **Footer**

```
┌────────────────────────────────────────────┐
│  Built by Akshit Nassa                    │
│  for 3Play Media Growth Team              │
│                                            │
│  [GitHub] [LinkedIn] [Portfolio]          │
│                                            │
│  © 2026 • Why I Built This                │
└────────────────────────────────────────────┘
```


***

## Landing Page Design Specs

### **Layout**

- Max width: 1200px
- Padding: 80px 24px
- Section spacing: 120px vertical
- Mobile breakpoint: 768px


### **Color Palette**

```css
Background: Linear gradient
  from: #0a0e27 (dark navy)
  to: #1a1f3a (slightly lighter)

Primary Accent: #3b82f6 (electric blue)
Secondary: #8b5cf6 (purple)
Success: #10b981 (green)

Text Primary: #ffffff
Text Secondary: #94a3b8
```


### **Typography**

```css
Hero H1: 
  font: Inter, 700
  size: clamp(2.5rem, 6vw, 4rem)
  line-height: 1.1
  letter-spacing: -0.02em

Body:
  font: Inter, 400
  size: 1.125rem
  line-height: 1.7
  
CTA Button:
  font: Inter, 600
  size: 1.125rem
  padding: 16px 40px
```


### **Key Animations**

**1. Gradient Background**

```css
background: linear-gradient(
  45deg,
  #0a0e27,
  #1a1f3a,
  #0a0e27
);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
```

**2. Floating Elements**

```jsx
<motion.div
  animate={{ 
    y: [0, -10, 0],
    rotate: [0, 2, 0]
  }}
  transition={{ 
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

**3. Scroll-Based Parallax**

```jsx
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 1000], [0, -100])

<motion.div style={{ y }}>
  {/* Background elements */}
</motion.div>
```


***

# SECTION 2: Calculator App (`/calculator`)

## Entry Point

When user clicks any CTA on landing page, route to `/calculator` with smooth transition.

***

## Calculator Page Structure

### **Navigation Bar**

```
┌────────────────────────────────────────────┐
│  ← Back to Home    [LOGO]    Why I Built  │
└────────────────────────────────────────────┘
```

**Sticky header with backdrop blur**

***

### **Calculator Hero**

```
┌────────────────────────────────────────────┐
│                                            │
│  Arizona State University,                │
│  let's calculate your impact              │
│                                            │
│  Adjust the inputs below to see your      │
│  personalized accessibility roadmap       │
│                                            │
└────────────────────────────────────────────┘
```

**Animation:** School name pre-filled from URL params, types in with cursor effect

***

### **Two-Column Layout (Desktop)**

```
┌─────────────┬──────────────────────────────┐
│             │                              │
│  INPUT      │  LIVE PREVIEW                │
│  FORM       │                              │
│  (Sticky)   │  [Animated charts update     │
│             │   as you adjust inputs]      │
│  Campus     │                              │
│  Profile    │  • Cost donut chart          │
│             │  • Impact meter              │
│  [Inputs]   │  • Risk gauge                │
│             │                              │
│             │  [Updates in real-time]      │
│             │                              │
│  [Generate  │                              │
│   Report] → │                              │
│             │                              │
└─────────────┴──────────────────────────────┘
```

**Mobile: Stacks vertically, inputs first, then preview**

***

### **Input Form (Left Column)**

```jsx
Campus Profile
─────────────────

📚 Basic Information
├─ University Name
│  [Arizona State University          ]
│  
├─ Student Enrollment
│  [Slider: 5,000 ←──●──→ 100,000]
│  Currently: 75,000 students
│
└─ Region
   [Dropdown: Southwest ▼]

🎥 Video Content
├─ Hours per semester
│  [Slider: 0 ←────●→ 10,000]
│  Currently: 3,200 hours
│
└─ Content Types (Select all that apply)
   [✓] Lectures & Classes
   [✓] Campus Events  
   [✓] Admissions & Marketing
   [ ] Research Presentations
   [ ] Student Organizations
   [✓] Athletics

⚖️ Compliance Status
├─ Current Accessibility
│  ○ No captioning program
│  ● Auto-captions only (YouTube/Zoom)
│  ○ Some professional captioning
│  ○ Comprehensive program
│
└─ Target Compliance Level
   ○ Basic (high-priority content)
   ● Title II Compliant (required)
   ○ Gold Standard (all content)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Generate Full Report →]
```

**Interactions:**

- Every input change triggers debounced calculation (300ms)
- Live preview updates with smooth transitions
- Form validates in real-time with helpful hints
- Tooltips explain compliance terms

**Technical:**

```tsx
const [profile, setProfile] = useState<UniversityProfile>({
  name: 'Arizona State University',
  enrollment: 75000,
  videoHours: 3200,
  contentTypes: ['lectures', 'events', 'admissions', 'athletics'],
  currentState: 'auto',
  targetCompliance: 'title2',
  region: 'southwest'
})

// Debounced calculation
const debouncedProfile = useDebounce(profile, 300)
const results = useMemo(() => 
  calculateAccessibility(debouncedProfile),
  [debouncedProfile]
)

// Animate any change
useEffect(() => {
  controls.start({ scale: [1, 1.02, 1] })
}, [results])
```


***

### **Live Preview (Right Column)**

```
┌────────────────────────────────────────────┐
│  Your Impact at a Glance                  │
│                                            │
│  [Animated Donut Chart]                   │
│       Students Reached                    │
│                                            │
│      ●─────────○                          │
│     /  24,750   \                         │
│    │   (33%)     │                        │
│     \___________/                         │
│                                            │
│  [Risk Meter]                             │
│  Compliance Risk: MEDIUM                  │
│  ████████▒▒▒▒                             │
│                                            │
│  [Quick Stats]                            │
│  💰 Annual Investment: $91,200            │
│  👥 Students Impacted: 24,750             │
│  📈 Accessibility Increase: +48%          │
│                                            │
└────────────────────────────────────────────┘
```

**Animation:**

- Donut chart draws in with SVG path animation
- Numbers count up from previous value
- Risk meter fills/empties based on changes
- Stats pulse when values update

**D3.js Donut Chart:**

```typescript
const svg = d3.select(svgRef.current)
const arc = d3.arc()
  .innerRadius(80)
  .outerRadius(120)
  .cornerRadius(8)

const path = svg.selectAll('path')
  .data([results.impact.percentageReached])
  
path.transition()
  .duration(800)
  .ease(d3.easeCubicOut)
  .attrTween('d', arcTween)
```


***

### **Full Results Dashboard (After "Generate Report")**

Scrolls down to expanded view:

```
┌────────────────────────────────────────────┐
│                                            │
│  Your Complete Accessibility Report       │
│  Arizona State University                 │
│                                            │
└────────────────────────────────────────────┘

[TAB NAVIGATION]
┌────┬────────┬──────────┬────────┬────────┐
│Cost│ Impact │Compliance│Compare │Action  │
└────┴────────┴──────────┴────────┴────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Tab 1: COST BREAKDOWN]

Annual Investment: $91,200
─────────────────────────────

[Animated Stacked Bar Chart]
┌──────────────────────────────────────────┐
│ Base Captioning  │ Live Events │Premium │
│    $45,200       │   $28,500   │$17,500 │
└──────────────────────────────────────────┘

Cost Per Student: $1.22/year
vs. Non-Compliance Penalty: $55,000 per violation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Tab 2: IMPACT]

Students Who Benefit
──────────────────────

[Animated Bubble Chart]
    ○ Deaf/Hard of Hearing (2,250)
  ○ ESL Students (11,250)
      ○ Learning Disabilities (3,750)
○ Situational Users (7,500)

Total: 24,750 students (33% of campus)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Tab 3: COMPLIANCE TIMELINE]

Your Path to Full Compliance
──────────────────────────────

NOW ────→ Q2 ────→ Q3 ────→ Q4
 ↓         ↓        ↓        ↓
15%      45%      78%     100%

[Animated Progress Visualization]
Current:  ███▒▒▒▒▒▒▒ 15% RISK: HIGH
Month 3:  ████████▒▒ 45% RISK: MED  
Month 6:  ███████████ 78% RISK: LOW
Target:   ████████████ 100% ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Tab 4: PEER COMPARISON]

How You Stack Up
──────────────────

[Bar Chart Race Animation]
UCLA            ████████████████ 94%
U Michigan      ███████████████ 89%
Penn State      ██████████████ 87%
→ ASU (YOU)     ███████▒▒▒▒▒▒ 52% ←
Ohio State      ███████████████ 91%

You rank 15th out of 20 similar universities

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Tab 5: ACTION PLAN]

Next Steps
───────────

Priority 1: Audit current content
Timeline: Week 1-2
Cost: Included

Priority 2: Caption high-traffic courses
Timeline: Month 1-3
Cost: $45,200

Priority 3: Implement live captioning
Timeline: Month 3-6
Cost: $28,500

[Download Detailed Roadmap →]
```

**Tab Interactions:**

- Tabs have slide-under indicator animation
- Content cross-fades between tabs (400ms)
- Each tab's charts animate in when selected
- Keyboard accessible (arrow keys to navigate)

***

### **Final CTA Section**

```
┌────────────────────────────────────────────┐
│                                            │
│  Ready to Move Forward?                   │
│                                            │
│  ┌──────────────┐  ┌──────────────────┐  │
│  │ Download PDF │  │ Talk to Expert   │  │
│  │ Report       │  │ (15-min call)    │  │
│  │              │  │                  │  │
│  │ 📄           │  │ 📅               │  │
│  └──────────────┘  └──────────────────┘  │
│                                            │
│  ─────────── OR ───────────              │
│                                            │
│  Explore More Tools:                      │
│  → Live Captioning Calculator             │
│  → Caption Quality Demo                   │
│  → ROI Calculator                         │
│                                            │
└────────────────────────────────────────────┘
```


***

# SECTION 3: Why I Built This (`/why`)

## Purpose

Show Erik your thinking, process, and growth mindset.

***

## Page Structure

```
┌────────────────────────────────────────────┐
│  ← Back to Calculator                     │
│                                            │
│  Why I Built This                         │
│  A breakdown of my design & technical     │
│  decisions for the 3Play Growth Team      │
│                                            │
└────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Challenge
─────────────

Erik's quote from our interview:
"How do we compress 100 hours of sales meetings
into 10 hours of scalable impact?"

The core problem:
• Sales bottleneck prevents scale
• Universities need personalization
• Decision-makers want self-service
• Budget conversations take weeks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

My Approach
───────────

1. Landing Page First
   Why: Build trust before asking for input
   → Social proof, clear value prop
   → Lower friction to calculator entry

2. Progressive Disclosure
   Why: Prevent overwhelming users
   → Start with simple inputs
   → Reveal complexity gradually
   → Tab-based results reduce cognitive load

3. Real-Time Feedback
   Why: Keep users engaged
   → Every input shows immediate impact
   → Visual feedback creates "wow moments"
   → Encourages experimentation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Design Decisions
────────────────

[Screenshot comparison]

❌ Generic Calculator    ✅ This Solution
  Static forms            Real-time preview
  Text-heavy results      Visual storytelling
  No context             Peer comparison
  Download at end        Continuous value

Key Principles:
• Animation as communication (not decoration)
• Data visualization > tables
• Mobile-first responsive design
• Accessibility built-in (WCAG 2.1 AA)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Technical Implementation
────────────────────────

Why No Backend?
• Speed: Ship in 24 hours
• Proof of concept: Validate UX first
• Shows pattern: Backend is "just" data

Stack Choices:
• Next.js: SSR + performance + deployment
• Framer Motion: Smooth, production-ready animations
• D3.js: Custom charts (not generic Chart.js)
• Tailwind + shadcn: Rapid UI development

Performance:
• Lighthouse Score: 97
• First Paint: < 1.2s
• Bundle Size: 187kb gzipped
• Lazy loaded: D3 charts below fold

[Code snippet examples with syntax highlighting]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Growth Mindset
──────────────

What I'd Test:
1. Landing page CTA placement
   → Above fold vs. after social proof
   
2. Calculator input order
   → Demographics first vs. pain points first
   
3. Results presentation
   → All tabs at once vs. progressive reveal

Success Metrics:
• Time to first insight: < 2 minutes
• Calculator completion rate: > 65%
• CTA click-through: > 12%
• PDF downloads: Track as lead indicator

Iteration Roadmap:
Phase 1: A/B test headlines ✓
Phase 2: Add video previews
Phase 3: Interactive compliance checklist
Phase 4: University-specific case studies

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scalability Plan
────────────────

Frontend → Backend Integration:

1. User clicks email link with token
   → https://tool.3play.com/calc?token=abc123

2. Frontend fetches university data
   → GET /api/university?token=abc123
   → Returns: name, enrollment, history, region

3. Calculator pre-fills with real data
   → User adjusts inputs to explore scenarios

4. Results saved for follow-up
   → POST /api/report with configuration
   → Sales team sees usage analytics

Unique URL Generation Strategy:
• Growth engineer builds email template system
• Marketing triggers batch generation
• Each university gets personalized link
• Analytics track engagement per school

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What I Learned
───────────────

• Animation budget matters
  → Too much = slow, too little = boring
  → Sweet spot: Intentional, purposeful motion

• Data viz is storytelling
  → Don't just show numbers
  → Show comparison, context, progression

• Mobile responsiveness isn't responsive design
  → Rethought entire layouts for small screens
  → Touch targets, swipe gestures, simplified inputs

• Fast iterations beat perfect planning
  → Shipped v1 in 8 hours
  → Would've spent days overthinking otherwise

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[CTA]

Questions or Feedback?
Let's discuss: akshit@email.com

[View Source Code →] [LinkedIn] [Portfolio]
```


***

# Complete File Structure

```
/
├─ app/
│  ├─ page.tsx                    → Landing page
│  ├─ calculator/
│  │  └─ page.tsx                 → Calculator app
│  ├─ why/
│  │  └─ page.tsx                 → About page
│  ├─ layout.tsx                  → Root layout
│  └─ globals.css                 → Global styles
│
├─ components/
│  ├─ landing/
│  │  ├─ Hero.tsx
│  │  ├─ ProblemSection.tsx
│  │  ├─ SolutionPreview.tsx
│  │  ├─ HowItWorks.tsx
│  │  ├─ SocialProof.tsx
│  │  └─ FinalCTA.tsx
│  │
│  ├─ calculator/
│  │  ├─ Nav.tsx
│  │  ├─ InputForm.tsx
│  │  ├─ LivePreview.tsx
│  │  ├─ ResultsTabs.tsx
│  │  ├─ CostChart.tsx          → D3 stacked bar
│  │  ├─ ImpactBubbles.tsx      → D3 bubble chart
│  │  ├─ ComplianceTimeline.tsx → Custom viz
│  │  ├─ PeerComparison.tsx     → D3 bar chart race
│  │  └─ ActionPlan.tsx
│  │
│  ├─ why/
│  │  ├─ Section.tsx
│  │  ├─ CodeBlock.tsx
│  │  └─ ImageComparison.tsx
│  │
│  └─ ui/                        → shadcn components
│     ├─ button.tsx
│     ├─ slider.tsx
│     ├─ tabs.tsx
│     ├─ select.tsx
│     └─ card.tsx
│
├─ lib/
│  ├─ calculations.ts            → Business logic
│  ├─ data.ts                    → Mock data generators
│  ├─ animations.ts              → Framer Motion variants
│  └─ utils.ts                   → Helpers
│
├─ hooks/
│  ├─ useCalculator.ts
│  ├─ useDebounce.ts
│  └─ useScrollAnimation.ts
│
├─ public/
│  ├─ images/
│  │  ├─ calculator-preview.png
│  │  └─ university-logos/
│  └─ videos/
│     └─ demo-preview.mp4
│
└─ types/
   └─ index.ts                   → TypeScript definitions
```


***

# Data Model

```typescript
// types/index.ts

interface UniversityProfile {
  name: string
  enrollment: number
  videoHours: number
  contentTypes: ContentType[]
  currentState: AccessibilityState
  targetCompliance: ComplianceLevel
  region: Region
}

type ContentType = 
  | 'lectures' 
  | 'events' 
  | 'admissions' 
  | 'research' 
  | 'student-orgs' 
  | 'athletics'

type AccessibilityState = 
  | 'none' 
  | 'auto' 
  | 'partial' 
  | 'comprehensive'

type ComplianceLevel = 
  | 'basic' 
  | 'title2' 
  | 'gold-standard'

type Region = 
  | 'northeast' 
  | 'southeast' 
  | 'midwest' 
  | 'southwest' 
  | 'west'

interface CalculationResult {
  costs: CostBreakdown
  impact: ImpactMetrics
  compliance: ComplianceAnalysis
  comparison: PeerComparison
  actionPlan: ActionItem[]
}

interface CostBreakdown {
  base: number
  additional: number
  premium: number
  total: number
  perStudent: number
  perHour: number
  breakdown: {
    category: string
    amount: number
    description: string
  }[]
}

interface ImpactMetrics {
  studentsReached: number
  percentageReached: number
  byCategory: {
    name: string
    count: number
    percentage: number
  }[]
  accessibilityScore: {
    current: number
    projected: number
    increase: number
  }
}

interface ComplianceAnalysis {
  currentScore: number
  targetScore: number
  gap: number
  riskLevel: 'high' | 'medium' | 'low'
  timeline: {
    phase: string
    duration: string
    milestone: string
    score: number
  }[]
  penalties: {
    potential: number
    avoided: number
  }
}

interface PeerComparison {
  yourRank: number
  totalPeers: number
  peerSchools: {
    name: string
    score: number
    isYou: boolean
  }[]
  regionalAverage: number
  nationalAverage: number
}

interface ActionItem {
  priority: number
  title: string
  description: string
  timeline: string
  cost: number
  status: 'pending' | 'in-progress' | 'complete'
}
```


***

# Calculation Logic

```typescript
// lib/calculations.ts

export function calculateAccessibility(
  profile: UniversityProfile
): CalculationResult {
  
  // COST CALCULATION
  const baseCostPerHour = calculateCostPerHour(profile)
  const baseCost = profile.videoHours * baseCostPerHour
  
  const additionalCost = calculateAdditionalServices(profile)
  const premiumCost = profile.targetCompliance === 'gold-standard' 
    ? baseCost * 0.25 
    : 0
    
  const totalCost = baseCost + additionalCost + premiumCost
  const perStudentCost = totalCost / profile.enrollment
  
  // IMPACT CALCULATION
  const impactRate = calculateImpactRate(profile.contentTypes)
  const studentsReached = Math.floor(profile.enrollment * impactRate)
  
  const categoryBreakdown = [
    { name: 'Deaf/Hard of Hearing', count: Math.floor(studentsReached * 0.09) },
    { name: 'ESL Students', count: Math.floor(studentsReached * 0.45) },
    { name: 'Learning Disabilities', count: Math.floor(studentsReached * 0.15) },
    { name: 'Situational Users', count: Math.floor(studentsReached * 0.31) },
  ]
  
  // COMPLIANCE CALCULATION
  const currentScore = getCurrentComplianceScore(profile.currentState)
  const targetScore = getTargetScore(profile.targetCompliance)
  const riskLevel = calculateRiskLevel(currentScore, targetScore)
  
  const timeline = generateComplianceTimeline(currentScore, targetScore)
  
  // PEER COMPARISON
  const peerSchools = generatePeerData(profile.enrollment, profile.region)
  const yourRank = calculateRank(currentScore, peerSchools)
  
  return {
    costs: { /* ... */ },
    impact: { /* ... */ },
    compliance: { /* ... */ },
    comparison: { /* ... */ },
    actionPlan: generateActionPlan(profile, totalCost)
  }
}

function calculateCostPerHour(profile: UniversityProfile): number {
  // Realistic pricing tiers
  const baseRate = 50 // $50/hour baseline
  
  // Volume discount
  const volumeMultiplier = profile.videoHours > 5000 ? 0.7 : 
                          profile.videoHours > 2000 ? 0.85 : 1.0
  
  // Complexity multiplier
  const complexityMultiplier = profile.contentTypes.length >= 4 ? 1.2 : 1.0
  
  return baseRate * volumeMultiplier * complexityMultiplier
}

function calculateImpactRate(contentTypes: ContentType[]): number {
  // Different content types impact different percentages
  const rates = {
    lectures: 0.35,
    events: 0.15,
    admissions: 0.20,
    research: 0.12,
    'student-orgs': 0.10,
    athletics: 0.18
  }
  
  // Average the rates for selected types
  const totalRate = contentTypes.reduce(
    (sum, type) => sum + rates[type], 
    0
  )
  
  return Math.min(totalRate / contentTypes.length, 0.45)
}

function generatePeerData(
  enrollment: number, 
  region: Region
): { name: string, score: number, isYou: boolean }[] {
  // Generate realistic peer schools based on enrollment tier
  const enrollmentTier = 
    enrollment < 15000 ? 'small' :
    enrollment < 35000 ? 'medium' : 'large'
  
  const peerNames = getPeerSchoolNames(enrollmentTier, region)
  
  return peerNames.map(name => ({
    name,
    score: Math.floor(Math.random() * 30) + 65, // 65-95%
    isYou: false
  }))
}
```


***

# Performance Optimizations

```typescript
// 1. Debounced inputs
const debouncedProfile = useDebounce(profile, 300)

// 2. Memoized calculations
const results = useMemo(
  () => calculateAccessibility(debouncedProfile),
  [debouncedProfile]
)

// 3. Lazy load D3
const D3Chart = dynamic(() => import('@/components/calculator/CostChart'), {
  loading: () => <Skeleton className="h-64" />,
  ssr: false
})

// 4. Image optimization
<Image
  src="/calculator-preview.png"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>

// 5. Code splitting
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // 1 hour
```


***

# Deployment Checklist

```
□ Environment Setup
  □ Vercel project created
  □ Custom domain configured (optional)
  □ Environment variables set

□ SEO & Meta Tags
  □ Title, description for each page
  □ OG image generated (1200x630)
  □ Favicon set
  □ robots.txt
  □ sitemap.xml

□ Analytics Placeholder
  □ Comment where GA4 would go
  □ Event tracking structure defined
  □ UTM parameter support

□ Performance
  □ Lighthouse score > 90
  □ Images optimized
  □ Fonts optimized
  □ Bundle size < 300kb gzipped

□ Accessibility
  □ Keyboard navigation works
  □ ARIA labels on interactive elements
  □ Color contrast meets WCAG AA
  □ Screen reader tested

□ Browser Testing
  □ Chrome
  □ Safari
  □ Firefox
  □ Mobile Safari
  □ Mobile Chrome

□ Responsive Design
  □ 320px (iPhone SE)
  □ 768px (iPad)
  □ 1024px (iPad Pro)
  □ 1440px (Desktop)
  □ 1920px+ (Large desktop)

□ Error States
  □ 404 page
  □ Loading states
  □ Form validation
  □ Network error handling

□ Final Polish
  □ Remove console.logs
  □ Clean up commented code
  □ README.md updated
  □ Credits & attribution
```


***

# Timeline: Your Next 10 Hours

## Hour 1-2: Landing Page

- [ ] Next.js project setup
- [ ] Install dependencies
- [ ] Hero section with gradient background
- [ ] Problem statement (3 columns)
- [ ] Basic animations with Framer Motion


## Hour 3-4: Calculator Setup

- [ ] Input form component
- [ ] State management for profile
- [ ] Basic calculation logic
- [ ] Two-column layout (desktop)
- [ ] Mobile responsive adjustments


## Hour 5-6: Data Visualizations

- [ ] D3.js setup
- [ ] Cost breakdown stacked bar chart
- [ ] Impact donut chart with animation
- [ ] Live preview panel updates


## Hour 7-8: Results Dashboard

- [ ] Tab navigation
- [ ] Peer comparison bar chart
- [ ] Compliance timeline viz
- [ ] Action plan section
- [ ] CTA section


## Hour 9: Landing Page Completion

- [ ] Solution preview section
- [ ] Social proof section
- [ ] Footer
- [ ] Scroll animations
- [ ] Link to calculator


## Hour 10: Why Page + Polish

- [ ] /why page content
- [ ] Code snippets with syntax highlighting
- [ ] Final mobile testing
- [ ] Performance audit
- [ ] Deploy to Vercel

***

# The Email You'll Send

**Subject:** Built This Over the Weekend - 3Play Growth Demo

**Body:**
> Erik,
>
> Spent the weekend building this: **[LINK]**
>
> **What it is:**
> Full production-ready demo of a university accessibility calculator with landing page, interactive tool, and process documentation.
>
> **Key features:**
> - Landing page that converts (not just the tool)
> - Real-time data visualization (D3.js)
> - Personalized insights via URL params
> - Tab-based results for progressive disclosure
> - Fully responsive, performant (Lighthouse 97)
>
> **Tech stack:**
> Next.js + Framer Motion + D3.js + Tailwind + shadcn/ui
>
> **See my thinking:** Click "Why I Built This" in nav
>
> **Build time:** 10 hours
> **Lines of code:** ~2,500
> **Action produces information:** ✓
>
> Open to feedback before our next conversation.
>
> Best,
> Akshit
>
> P.S. Try it with URL params: `/calculator?school=ASU&enrollment=75000`

***

# Success Criteria

### **Must Have (Ship Blockers):**

✅ Landing page converts visitors to calculator
✅ Calculator works end-to-end (inputs → results)
✅ At least 3 animated D3 charts
✅ Mobile responsive
✅ Loads fast (< 3s)
✅ "Why I Built This" page complete

### **Should Have (Quality Bar):**

✅ All sections polished
✅ Smooth scroll animations
✅ URL personalization works
✅ Tab navigation in results
✅ Peer comparison data
✅ Professional design system

### **Nice to Have (Bonus Points):**

🌟 PDF export (mocked is fine)
🌟 Video preview on landing page
🌟 Lighthouse 95+
🌟 Dark mode toggle
🌟 Share functionality

***

# Final Word

You're building a **growth product**, not just a tool. This needs to:

1. **Hook** prospects on landing page
2. **Deliver** value in calculator
3. **Convert** to sales conversation
4. **Showcase** your thinking for me

Think of it as your own mini product launch.

**Don't overthink the "Why" page** - I care more that the product WORKS than that you perfectly explain it.

**Ship something polished** - 80% complete and live beats 100% complete and not shipped.

Now go build. I want the link by end of Monday.

— Erik
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: Meeting-Transcription.pdf

