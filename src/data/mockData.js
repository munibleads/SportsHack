import { agents, maps, rankTiers } from './assets'

export const player = {
  name: 'ProGamer_SA',
  avatar: 'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png',
  rank: 'DIAMOND 1',
  rankIcon: rankTiers[5].icon,
  peakRank: 'DIAMOND 2',
  level: 142,
  aiScore: 847,
  aiScoreMax: 1000,
  region: 'MENA',
  scoutPercentile: 12,
}

export const topAgent = {
  ...agents[6], // Clove
  playTime: '312H',
  winRate: 58.4,
  kda: 1.87,
  hsPercent: 24.3,
  damage: 187.4,
  aiInsight: 'Excelling at entry fragging — work on pistol round consistency',
}

export const recentMatches = [
  { id: 1, map: maps[3], score: '13 : 7',  won: true,  kda: '22/8/4',   agent: agents[7], rank: rankTiers[5], aiComment: 'Great economy management' },
  { id: 2, map: maps[1], score: '11 : 13', won: false, kda: '15/14/6',  agent: agents[1], rank: rankTiers[5], aiComment: 'Poor rotation timing' },
  { id: 3, map: maps[2], score: '13 : 9',  won: true,  kda: '19/10/7',  agent: agents[0], rank: rankTiers[5], aiComment: 'Excellent utility usage' },
  { id: 4, map: maps[3], score: '8 : 13',  won: false, kda: '12/16/3',  agent: agents[2], rank: rankTiers[4], aiComment: 'Focus on crosshair placement' },
]

export const improvementPlan = [
  { id: 1, title: 'Lock Crosshair At Head Height', desc: 'Play 3 deathmatch sessions focusing on head-level aim', coachNote: "You're bleeding kills because of this. Fix it first.", difficulty: 'Medium', time: '45 min', xp: 250, progress: 67, bg: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png' },
  { id: 2, title: 'Win The Pistol Round',           desc: 'Practice eco rounds in custom lobbies with optimal buys', coachNote: 'Pistol rounds are free rounds. Stop gifting them.', difficulty: 'Hard',   time: '30 min', xp: 400, progress: 23, bg: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png' },
  { id: 3, title: 'Time Your Utility Right',        desc: 'Review 2 pro VODs focused on flash and smoke setups', coachNote: 'Late smokes are losing you site takes every game.', difficulty: 'Easy',   time: '20 min', xp: 150, progress: 45, bg: 'https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png' },
  { id: 4, title: 'Control B-Site Off Angles',      desc: 'Establish early control in Haven B-site off angles',  coachNote: 'Opponents are reading you. Vary your entry timing.', difficulty: 'Medium', time: '60 min', xp: 300, progress: 10, bg: 'https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png' },
]

export const topMaps = [
  { ...maps[0], winRate: 71, games: 42 },
  { ...maps[2], winRate: 65, games: 28 },
  { ...maps[4], winRate: 58, games: 35 },
]

export const scoutMetrics = [
  { label: 'Regional Rank',    value: 'Top 12%',    sub: 'MENA Region',      emoji: '🌍', progress: 88 },
  { label: 'AI Coach Score',   value: '847 / 1000', sub: '+23 this week',    emoji: '⚡', progress: 84.7 },
  { label: 'Consistency',      value: '78%',        sub: '5-match streak',   emoji: '📈', progress: 78 },
]

export const aiSkillRadar = [
  { skill: 'Aim',          value: 78, fullMark: 100 },
  { skill: 'Game Sense',   value: 82, fullMark: 100 },
  { skill: 'Utility',      value: 65, fullMark: 100 },
  { skill: 'Economy',      value: 71, fullMark: 100 },
  { skill: 'Positioning',  value: 69, fullMark: 100 },
  { skill: 'Clutch',       value: 74, fullMark: 100 },
]

export const performanceTrend = [
  { match: 1,  score: 720 }, { match: 2,  score: 735 }, { match: 3,  score: 728 },
  { match: 4,  score: 752 }, { match: 5,  score: 761 }, { match: 6,  score: 748 },
  { match: 7,  score: 775 }, { match: 8,  score: 790 }, { match: 9,  score: 782 },
  { match: 10, score: 810 }, { match: 11, score: 825 }, { match: 12, score: 815 },
  { match: 13, score: 831 }, { match: 14, score: 847 },
]

export const mapPerformance = [
  { map: 'Ascent', winRate: 71, kda: 2.1 },
  { map: 'Haven',  winRate: 65, kda: 1.9 },
  { map: 'Icebox', winRate: 58, kda: 1.7 },
  { map: 'Bind',   winRate: 43, kda: 1.4 },
  { map: 'Split',  winRate: 38, kda: 1.2 },
]

export const allMatches = [
  { id: 1,  map: maps[3], score: '13 : 7',  won: true,  kda: '22/8/4',   agent: agents[7], rank: rankTiers[5], aiComment: 'Great economy management',       date: '2026-03-24' },
  { id: 2,  map: maps[1], score: '11 : 13', won: false, kda: '15/14/6',  agent: agents[1], rank: rankTiers[5], aiComment: 'Poor rotation timing',            date: '2026-03-24' },
  { id: 3,  map: maps[2], score: '13 : 9',  won: true,  kda: '19/10/7',  agent: agents[0], rank: rankTiers[5], aiComment: 'Excellent utility usage',         date: '2026-03-23' },
  { id: 4,  map: maps[3], score: '8 : 13',  won: false, kda: '12/16/3',  agent: agents[2], rank: rankTiers[4], aiComment: 'Focus on crosshair placement',    date: '2026-03-23' },
  { id: 5,  map: maps[4], score: '13 : 11', won: true,  kda: '20/12/5',  agent: agents[0], rank: rankTiers[5], aiComment: 'Strong clutch performance',       date: '2026-03-22' },
  { id: 6,  map: maps[5], score: '13 : 5',  won: true,  kda: '25/7/8',   agent: agents[1], rank: rankTiers[4], aiComment: 'Dominant entry fragging',         date: '2026-03-22' },
  { id: 7,  map: maps[0], score: '10 : 13', won: false, kda: '14/15/4',  agent: agents[3], rank: rankTiers[5], aiComment: 'Struggled with utility timing',   date: '2026-03-21' },
  { id: 8,  map: maps[6], score: '13 : 8',  won: true,  kda: '18/9/6',   agent: agents[0], rank: rankTiers[6], aiComment: 'Good positioning all round',      date: '2026-03-21' },
  { id: 9,  map: maps[2], score: '6 : 13',  won: false, kda: '10/17/2',  agent: agents[4], rank: rankTiers[5], aiComment: 'Economy mismanagement cost rounds', date: '2026-03-20' },
  { id: 10, map: maps[1], score: '13 : 10', won: true,  kda: '21/11/9',  agent: agents[0], rank: rankTiers[5], aiComment: 'Consistent crosshair placement',  date: '2026-03-20' },
]

export const leaderboard = [
  { rank: 1,  name: 'AlphaStrike_SA', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alpha',   rankTier: rankTiers[7], aiScore: 961, winRate: 68, region: 'Riyadh' },
  { rank: 2,  name: 'DesertFox_KSA',  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Desert',  rankTier: rankTiers[7], aiScore: 948, winRate: 65, region: 'Jeddah' },
  { rank: 3,  name: 'NeonBlade_SA',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neon',    rankTier: rankTiers[6], aiScore: 932, winRate: 63, region: 'MENA'   },
  { rank: 4,  name: 'StormWarden',    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Storm',   rankTier: rankTiers[6], aiScore: 918, winRate: 61, region: 'UAE'    },
  { rank: 5,  name: 'PhantomAce_SA',  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phantom', rankTier: rankTiers[6], aiScore: 905, winRate: 60, region: 'Riyadh' },
  { rank: 6,  name: 'CyberWolf_ME',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cyber',   rankTier: rankTiers[5], aiScore: 891, winRate: 58, region: 'Kuwait' },
  { rank: 7,  name: 'ShadowViper',    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shadow',  rankTier: rankTiers[5], aiScore: 876, winRate: 57, region: 'MENA'   },
  { rank: 8,  name: 'ProGamer_SA',    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProGamer', rankTier: rankTiers[5], aiScore: 847, winRate: 58, region: 'Riyadh' },
  { rank: 9,  name: 'BladeRunner_KW', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blade',   rankTier: rankTiers[5], aiScore: 831, winRate: 55, region: 'Kuwait' },
  { rank: 10, name: 'IronFist_UAE',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Iron',    rankTier: rankTiers[4], aiScore: 814, winRate: 53, region: 'UAE'    },
]

export const risingTalent = [
  { name: 'QuickScope_SA', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quick',  rankTier: rankTiers[4], aiScore: 798, improvement: '+47 this week', region: 'Riyadh' },
  { name: 'FlashPoint_ME', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Flash',  rankTier: rankTiers[3], aiScore: 765, improvement: '+61 this week', region: 'MENA'   },
  { name: 'ArcAngel_KSA',  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arc',    rankTier: rankTiers[4], aiScore: 742, improvement: '+38 this week', region: 'Jeddah' },
]

export const agentBreakdown = [
  { agent: agents[0], mapSplash: maps[0].splash, games: 42, winRate: 71, kda: 2.1, hsPercent: 26, role: 'Duelist',   isMain: true  },
  { agent: agents[7], mapSplash: maps[3].splash, games: 28, winRate: 57, kda: 1.9, hsPercent: 23, role: 'Duelist',   isMain: false },
  { agent: agents[1], mapSplash: maps[5].splash, games: 18, winRate: 56, kda: 1.8, hsPercent: 22, role: 'Duelist',   isMain: false },
  { agent: agents[3], mapSplash: maps[2].splash, games: 8,  winRate: 50, kda: 1.4, hsPercent: 19, role: 'Initiator', isMain: false },
]

export const roundTypeStats = [
  { type: 'Full Buy',  winRate: 68, color: '#4ade80' },
  { type: 'Force Buy', winRate: 45, color: '#fbbf24' },
  { type: 'Pistol',    winRate: 38, color: '#ff4655' },
  { type: 'Eco',       winRate: 22, color: '#ff4655' },
]

export const clutchStats = [
  { scenario: '1v1', attempts: 28, won: 18, rate: 64 },
  { scenario: '1v2', attempts: 14, won: 5,  rate: 36 },
  { scenario: '1v3', attempts: 6,  won: 1,  rate: 17 },
]

export const entryStats = {
  firstBloodRate: 34,
  entryDuelWinRate: 58,
  openDuelWon: 23,
  openDuelTotal: 38,
}

export const sessionDecay = [
  { game: 'G1', aiScore: 856, hsPercent: 27 },
  { game: 'G2', aiScore: 842, hsPercent: 25 },
  { game: 'G3', aiScore: 821, hsPercent: 22 },
  { game: 'G4', aiScore: 803, hsPercent: 19 },
  { game: 'G5+', aiScore: 779, hsPercent: 16 },
]

export const progressTracker = [
  { area: 'Pistol Round Win Rate', before: 31, current: 38, target: 50, unit: '%',    delta: +7, priority: 'High',   tip: 'Buy Ghost on pistol rounds and aim for headshots on common angles.' },
  { area: 'Headshot Percentage',   before: 20, current: 24, target: 30, unit: '%',    delta: +4, priority: 'Medium', tip: 'Your crosshair still drops to chest level on rotations. Fix the habit.' },
  { area: 'Utility Coordination',  before: 65, current: 65, target: 80, unit: '/100', delta:  0, priority: 'Medium', tip: 'Zero progress this week. Watch 2 pro VODs focused on flash timing.' },
]

export const rankComparison = [
  { metric: 'HS %',       player: 24.3, avg: 18.2, unit: '%' },
  { metric: 'K/D Ratio',  player: 1.87, avg: 1.45, unit: ''  },
  { metric: 'Win Rate',   player: 58.4, avg: 50.0, unit: '%' },
  { metric: 'Avg Damage', player: 187,  avg: 162,  unit: ''  },
  { metric: 'Clutch %',   player: 41,   avg: 28,   unit: '%' },
]

export const achievements = [
  { title: 'First Blood Specialist', desc: '45 first kills this season',       emoji: '🩸', unlocked: true  },
  { title: 'Clutch Master',          desc: '12 clutch wins (1v2+)',             emoji: '👑', unlocked: true  },
  { title: 'Consistency Champion',   desc: '10-match improvement streak',       emoji: '🔥', unlocked: true  },
  { title: 'Rising Star',            desc: 'Top 15% in MENA region',           emoji: '⭐', unlocked: true  },
  { title: 'Sharpshooter',           desc: '24.3% headshot rate',              emoji: '🎯', unlocked: true  },
  { title: 'Economy Expert',         desc: 'Win a pistol round without buying', emoji: '💎', unlocked: false },
]
