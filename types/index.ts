// University Profile Types
export type ContentType =
  | 'lectures'
  | 'events'
  | 'admissions'
  | 'research'
  | 'student-orgs'
  | 'athletics'

export type AccessibilityState =
  | 'none'
  | 'auto'
  | 'partial'
  | 'comprehensive'

export type ComplianceLevel =
  | 'basic'
  | 'title2'
  | 'gold-standard'

export type Region =
  | 'northeast'
  | 'southeast'
  | 'midwest'
  | 'southwest'
  | 'west'

export interface UniversityProfile {
  name: string
  enrollment: number
  videoHours: number
  contentTypes: ContentType[]
  currentState: AccessibilityState
  targetCompliance: ComplianceLevel
  region: Region
}

// Calculation Result Types
export interface CostBreakdown {
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

export interface ImpactMetrics {
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

export interface ComplianceAnalysis {
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

export interface PeerComparison {
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

export interface ActionItem {
  priority: number
  title: string
  description: string
  timeline: string
  cost: number
  status: 'pending' | 'in-progress' | 'complete'
}

export interface CalculationResult {
  costs: CostBreakdown
  impact: ImpactMetrics
  compliance: ComplianceAnalysis
  comparison: PeerComparison
  actionPlan: ActionItem[]
}
