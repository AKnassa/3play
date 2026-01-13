import type {
  UniversityProfile,
  CalculationResult,
  ContentType,
  AccessibilityState,
  ComplianceLevel,
  Region,
} from '@/types'

// Cost per hour based on profile
function calculateCostPerHour(profile: UniversityProfile): number {
  const baseRate = 50

  // Volume discount
  const volumeMultiplier =
    profile.videoHours > 5000
      ? 0.7
      : profile.videoHours > 2000
        ? 0.85
        : 1.0

  // Complexity multiplier
  const complexityMultiplier = profile.contentTypes.length >= 4 ? 1.2 : 1.0

  return baseRate * volumeMultiplier * complexityMultiplier
}

// Additional services cost
function calculateAdditionalServices(profile: UniversityProfile): number {
  let additional = 0

  if (profile.contentTypes.includes('events')) {
    additional += profile.videoHours * 0.15 * 80 // live events premium
  }
  if (profile.contentTypes.includes('athletics')) {
    additional += profile.videoHours * 0.1 * 60
  }

  return additional
}

// Impact rate based on content types
function calculateImpactRate(contentTypes: ContentType[]): number {
  const rates: Record<ContentType, number> = {
    lectures: 0.35,
    events: 0.15,
    admissions: 0.2,
    research: 0.12,
    'student-orgs': 0.1,
    athletics: 0.18,
  }

  if (contentTypes.length === 0) return 0.2

  const totalRate = contentTypes.reduce((sum, type) => sum + rates[type], 0)
  return Math.min(totalRate / contentTypes.length + 0.1, 0.45)
}

// Current compliance score
function getCurrentComplianceScore(state: AccessibilityState): number {
  const scores: Record<AccessibilityState, number> = {
    none: 5,
    auto: 25,
    partial: 55,
    comprehensive: 85,
  }
  return scores[state]
}

// Target compliance score
function getTargetScore(level: ComplianceLevel): number {
  const scores: Record<ComplianceLevel, number> = {
    basic: 60,
    title2: 85,
    'gold-standard': 100,
  }
  return scores[level]
}

// Risk level calculation
function calculateRiskLevel(
  current: number,
  target: number
): 'high' | 'medium' | 'low' {
  const gap = target - current
  if (gap > 50) return 'high'
  if (gap > 25) return 'medium'
  return 'low'
}

// Generate compliance timeline
function generateComplianceTimeline(
  currentScore: number,
  targetScore: number
): { phase: string; duration: string; milestone: string; score: number }[] {
  const gap = targetScore - currentScore
  const phases = []

  phases.push({
    phase: 'Now',
    duration: 'Current',
    milestone: 'Baseline assessment',
    score: currentScore,
  })

  if (gap > 0) {
    phases.push({
      phase: 'Q2',
      duration: 'Month 1-3',
      milestone: 'Priority content captioned',
      score: Math.min(currentScore + gap * 0.4, targetScore),
    })
  }

  if (gap > 20) {
    phases.push({
      phase: 'Q3',
      duration: 'Month 4-6',
      milestone: 'Live events coverage',
      score: Math.min(currentScore + gap * 0.75, targetScore),
    })
  }

  phases.push({
    phase: 'Q4',
    duration: 'Month 7-12',
    milestone: 'Full compliance achieved',
    score: targetScore,
  })

  return phases
}

// Peer school names by tier and region
function getPeerSchoolNames(
  tier: 'small' | 'medium' | 'large',
  region: Region
): string[] {
  const schools: Record<string, Record<Region, string[]>> = {
    large: {
      northeast: ['Boston University', 'Penn State', 'UMass', 'Rutgers', 'UConn'],
      southeast: ['UF', 'Georgia Tech', 'UNC', 'Virginia Tech', 'FSU'],
      midwest: ['Ohio State', 'U Michigan', 'Wisconsin', 'Illinois', 'Purdue'],
      southwest: ['UT Austin', 'Texas A&M', 'Arizona', 'ASU', 'Oklahoma'],
      west: ['UCLA', 'USC', 'UC Berkeley', 'U Washington', 'Oregon'],
    },
    medium: {
      northeast: ['Syracuse', 'Temple', 'Northeastern', 'Drexel', 'UNH'],
      southeast: ['UCF', 'USF', 'Clemson', 'Auburn', 'Tennessee'],
      midwest: ['Iowa', 'Minnesota', 'Indiana', 'Michigan State', 'Nebraska'],
      southwest: ['Houston', 'TCU', 'Baylor', 'New Mexico', 'UTSA'],
      west: ['San Diego State', 'UC Davis', 'Colorado', 'Utah', 'ASU'],
    },
    small: {
      northeast: ['Providence', 'Holy Cross', 'Fairfield', 'Marist', 'Iona'],
      southeast: ['Elon', 'Furman', 'Samford', 'Stetson', 'JMU'],
      midwest: ['Butler', 'Xavier', 'Creighton', 'Drake', 'Loyola Chicago'],
      southwest: ['Trinity', 'SMU', 'Rice', 'Tulsa', 'TCU'],
      west: ['Santa Clara', 'Gonzaga', 'Pepperdine', 'USD', 'LMU'],
    },
  }

  return schools[tier][region] || schools[tier].midwest
}

// Generate peer comparison data
function generatePeerData(
  enrollment: number,
  region: Region,
  yourScore: number
): { name: string; score: number; isYou: boolean }[] {
  const tier: 'small' | 'medium' | 'large' =
    enrollment < 15000 ? 'small' : enrollment < 35000 ? 'medium' : 'large'

  const peerNames = getPeerSchoolNames(tier, region)

  // Generate scores around 65-95 range
  const peers = peerNames.map((name) => ({
    name,
    score: Math.floor(Math.random() * 30) + 65,
    isYou: false,
  }))

  // Sort by score descending
  peers.sort((a, b) => b.score - a.score)

  return peers
}

// Generate action plan
function generateActionPlan(
  profile: UniversityProfile,
  totalCost: number
): {
  priority: number
  title: string
  description: string
  timeline: string
  cost: number
  status: 'pending' | 'in-progress' | 'complete'
}[] {
  const actions = []

  actions.push({
    priority: 1,
    title: 'Audit current content',
    description: 'Review existing video library and identify priority content',
    timeline: 'Week 1-2',
    cost: 0,
    status: 'pending' as const,
  })

  actions.push({
    priority: 2,
    title: 'Caption high-traffic courses',
    description: 'Professional captioning for top 20% viewed content',
    timeline: 'Month 1-3',
    cost: Math.round(totalCost * 0.5),
    status: 'pending' as const,
  })

  if (profile.contentTypes.includes('events')) {
    actions.push({
      priority: 3,
      title: 'Implement live captioning',
      description: 'Real-time captioning for campus events and lectures',
      timeline: 'Month 3-6',
      cost: Math.round(totalCost * 0.3),
      status: 'pending' as const,
    })
  }

  actions.push({
    priority: actions.length + 1,
    title: 'Ongoing compliance monitoring',
    description: 'Quarterly audits and new content captioning workflow',
    timeline: 'Ongoing',
    cost: Math.round(totalCost * 0.2),
    status: 'pending' as const,
  })

  return actions
}

// Main calculation function
export function calculateAccessibility(
  profile: UniversityProfile
): CalculationResult {
  // COST CALCULATION
  const baseCostPerHour = calculateCostPerHour(profile)
  const baseCost = profile.videoHours * baseCostPerHour

  const additionalCost = calculateAdditionalServices(profile)
  const premiumCost =
    profile.targetCompliance === 'gold-standard' ? baseCost * 0.25 : 0

  const totalCost = baseCost + additionalCost + premiumCost
  const perStudentCost = totalCost / profile.enrollment
  const perHourCost = totalCost / profile.videoHours

  // IMPACT CALCULATION
  const impactRate = calculateImpactRate(profile.contentTypes)
  const studentsReached = Math.floor(profile.enrollment * impactRate)

  const categoryBreakdown = [
    {
      name: 'Deaf/Hard of Hearing',
      count: Math.floor(studentsReached * 0.09),
      percentage: 9,
    },
    {
      name: 'ESL Students',
      count: Math.floor(studentsReached * 0.45),
      percentage: 45,
    },
    {
      name: 'Learning Disabilities',
      count: Math.floor(studentsReached * 0.15),
      percentage: 15,
    },
    {
      name: 'Situational Users',
      count: Math.floor(studentsReached * 0.31),
      percentage: 31,
    },
  ]

  // COMPLIANCE CALCULATION
  const currentScore = getCurrentComplianceScore(profile.currentState)
  const targetScore = getTargetScore(profile.targetCompliance)
  const gap = targetScore - currentScore
  const riskLevel = calculateRiskLevel(currentScore, targetScore)

  const timeline = generateComplianceTimeline(currentScore, targetScore)

  // Calculate projected score (after implementation)
  const projectedScore = targetScore
  const scoreIncrease = projectedScore - currentScore

  // PEER COMPARISON
  const peerSchools = generatePeerData(
    profile.enrollment,
    profile.region,
    currentScore
  )
  
  // Insert user's school
  const yourSchool = { name: profile.name || 'Your University', score: currentScore, isYou: true }
  const allSchools = [...peerSchools, yourSchool].sort((a, b) => b.score - a.score)
  const yourRank = allSchools.findIndex((s) => s.isYou) + 1

  const regionalAverage = Math.round(
    peerSchools.reduce((sum, s) => sum + s.score, 0) / peerSchools.length
  )

  return {
    costs: {
      base: Math.round(baseCost),
      additional: Math.round(additionalCost),
      premium: Math.round(premiumCost),
      total: Math.round(totalCost),
      perStudent: Math.round(perStudentCost * 100) / 100,
      perHour: Math.round(perHourCost * 100) / 100,
      breakdown: [
        {
          category: 'Base Captioning',
          amount: Math.round(baseCost),
          description: 'Professional captioning for recorded content',
        },
        {
          category: 'Live Events',
          amount: Math.round(additionalCost),
          description: 'Real-time captioning for live content',
        },
        {
          category: 'Premium Services',
          amount: Math.round(premiumCost),
          description: 'Gold standard compliance extras',
        },
      ],
    },
    impact: {
      studentsReached,
      percentageReached: Math.round(impactRate * 100),
      byCategory: categoryBreakdown,
      accessibilityScore: {
        current: currentScore,
        projected: projectedScore,
        increase: scoreIncrease,
      },
    },
    compliance: {
      currentScore,
      targetScore,
      gap,
      riskLevel,
      timeline,
      penalties: {
        potential: 55000 * Math.ceil(gap / 20),
        avoided: 55000 * Math.ceil(gap / 20),
      },
    },
    comparison: {
      yourRank,
      totalPeers: allSchools.length,
      peerSchools: allSchools,
      regionalAverage,
      nationalAverage: 78,
    },
    actionPlan: generateActionPlan(profile, totalCost),
  }
}
