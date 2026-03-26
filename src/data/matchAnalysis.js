const REPLAY = 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/917de7be4f9bad96b54f47a4de6f91c323a57a6a.mp4?accountingTag=VAL'

export const matchAnalysis = {
  1: {
    replayUrl: REPLAY,
    coachScoreDelta: +18,
    coachSummary: "Solid win with strong individual numbers — your economy discipline is clearly developing and that's what swung the close rounds in your favour. Your aim was above the lobby average this match. The gap right now isn't mechanical, it's decisional. Two moments in the mid-game where one bad call nearly handed them the momentum.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'up'      },
      { skill: 'Economy',     trend: 'up'      },
      { skill: 'Utility',     trend: 'down'    },
      { skill: 'Positioning', trend: 'down'    },
      { skill: 'Game Sense',  trend: 'neutral' },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '14:22', desc: 'Pushed mid solo without smoke — forced a 1v2 you had no business taking at that point in the round', mapCoordinates: { x: 50, y: 50 }, round: 8 },
        { time: '04:15', desc: 'Failed to trade teammate at A-Main. You were too deep in site while your entry was engaging. Stick closer to your duelist.', mapCoordinates: { x: 28, y: 35 }, round: 3 }
      ],
      positioning: [
        { time: '08:05', desc: 'Held A-Main passively instead of contesting — surrendered site entry to a 3-man execute without a fight', mapCoordinates: { x: 25, y: 30 }, round: 5 },
        { time: '12:30', desc: 'Played too close to the smoke on B-site. Opponent jump-peeked and cleared you easily. Use deeper angles.', mapCoordinates: { x: 70, y: 75 }, round: 7 }
      ],
      utility: [
        { time: '02:10', desc: 'Wasted smoke on a fake. Opponents clearly committed to the other site based on utility count. Save it for the real hit.', mapCoordinates: { x: 55, y: 50 }, round: 2 },
        { time: '15:50', desc: 'Used ultimate in a 4v1. Total resource waste. Discipline your ultimate usage for clutch moments.', mapCoordinates: { x: 30, y: 40 }, round: 9 }
      ],
    },
    actionableAdvice: [
      {
        title: 'Use Updraft before the peek, not during it',
        detail: 'You peeked B-main at ground level twice and traded badly both times. Jett\'s Updraft isn\'t just mobility — it fundamentally changes the angles opponents pre-aim. When you go high before committing, enemies who pre-aim standard head height miss. Get airborne, land, then peek. It turns a 50/50 duel into a favourable one.',
        difficulty: 'Easy',
      },
      {
        title: 'Establish mid before every A push',
        detail: 'Twice this match you rotated to A without clearing mid catwalk first, and both times you absorbed a flank. On Ascent, mid catwalk is the nerve of every A-side play — opponents who hold it can third-party any A push in under 3 seconds. One smoke or a quick contest before committing turns a coin flip into a controlled execute.',
        difficulty: 'Habit',
      },
      {
        title: 'Reserve Bladestorm for man-disadvantage scenarios',
        detail: 'You used Bladestorm twice in even-number duels where your gun was the better tool. Its real value is in 1v2 and 1v3 scenarios — the movement speed, dual-wield option, and replenish-on-kill mechanic make you almost untradeable. In a clean 1v1, just shoot. Save the ult for when the round is already on the edge.',
        difficulty: 'Advanced',
      },
    ],
  },

  2: {
    replayUrl: REPLAY,
    coachScoreDelta: -8,
    coachSummary: "You played this match reactively from round 3 onwards and never recovered the initiative. The loss isn't about individual gunfights — you were competitive in most of them. It's about pattern recognition: you repeated the same B-Short entry four times against opponents who had already figured you out by round two. Great players adjust mid-game. That's the skill to build.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'neutral' },
      { skill: 'Economy',     trend: 'down'    },
      { skill: 'Utility',     trend: 'down'    },
      { skill: 'Positioning', trend: 'down'    },
      { skill: 'Game Sense',  trend: 'down'    },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '2:14', desc: 'Forced entry on B-Short without any utility — opponents had already set up a double-cross and you walked straight into it', mapCoordinates: { x: 75, y: 65 }, round: 3 },
        { time: '9:51', desc: 'Team called a B push and you didn\'t rotate via TP — arrived 4 seconds late to a 3v2 that became a 2v2', mapCoordinates: { x: 70, y: 60 }, round: 12 },
      ],
      positioning: [
        { time: '6:22', desc: 'Held B-Short from the exact same static angle for the 4th consecutive round — opponents were pre-aiming your pixel before you peeked', mapCoordinates: { x: 72, y: 62 }, round: 8 },
        { time: '11:40', desc: 'Retreated too early from A-Short — gave up map control and info before you were even pressured', mapCoordinates: { x: 30, y: 40 }, round: 15 },
      ],
      utility: [
        { time: '4:33', desc: 'Boom Bot was sent into open, already-cleared space — zero information gained, ability wasted at a critical economy moment', mapCoordinates: { x: 50, y: 55 }, round: 6 },
      ],
    },
    actionableAdvice: [
      {
        title: 'Change your B-Short angle every two rounds, minimum',
        detail: 'Opponents in ranked are actively cataloguing where you hold from. By round 4 they had you mapped and pre-aimed before you moved. The fix is mechanical discipline: if you held an angle last round, choose a different one this round. Higher, lower, closer, wider — any variation breaks the read. Being unpredictable is a skill, not a personality trait.',
        difficulty: 'Habit',
      },
      {
        title: 'Use the Teleporter as an offensive tool, not just a retake option',
        detail: 'You used the B TP exclusively on retakes this match. When your team commits to a B push, you should be coordinating the TP arrival as a simultaneous second angle — it turns a default 5v5 into an asymmetric entry with opponents caught between two threats. The window is tight, roughly 2 seconds after the initial commitment, but the pressure it creates is massive.',
        difficulty: 'Advanced',
      },
      {
        title: 'Boom Bot belongs in corners and off-angles, not open space',
        detail: 'The ability scans for enemies it cannot see clearly. Sending it down open hallways where nothing is hiding wastes it. The correct use is into corners, behind boxes, and along walls where off-angle players hide. Think of it as a remote flashbang: it forces enemies to move or reveal, giving you the read you need to safely commit.',
        difficulty: 'Easy',
      },
    ],
  },

  3: {
    replayUrl: REPLAY,
    coachScoreDelta: +14,
    coachSummary: "Good win and your utility coordination is improving — the smoke reads on A-site were noticeably better than last session. The one thing holding your ceiling back is flash timing. You're throwing flashes correctly but a half-second too early, which telegraphs your peek and gives opponents time to reposition. Fix that and your conversion rate on flash-assisted duels jumps significantly.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'up'      },
      { skill: 'Economy',     trend: 'up'      },
      { skill: 'Utility',     trend: 'down'    },
      { skill: 'Positioning', trend: 'up'      },
      { skill: 'Game Sense',  trend: 'neutral' },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '5:18', desc: 'Rotated all the way to C without confirming A was actually clear — A-site was empty and you gave up a free plant opportunity', mapCoordinates: { x: 75, y: 35 }, round: 6 },
      ],
      positioning: [],
      utility: [
        { time: '12:04', desc: 'Flash was thrown 0.8 seconds before your peek — opponent saw it coming, turned away, and pre-aimed your exit angle', mapCoordinates: { x: 45, y: 55 }, round: 14 },
        { time: '17:30', desc: 'Smoke covered the entrance to C but left the top-right platform completely open — opponents used it for the entire retake', mapCoordinates: { x: 78, y: 30 }, round: 19 },
      ],
    },
    actionableAdvice: [
      {
        title: 'Confirm A via sound before rotating to C',
        detail: 'Haven is wide enough that a full rotation from A to C costs 6-7 seconds. Before committing, listen: no footsteps on A means no one is there. If your team just traded on A and you hear the spike not picked up, it\'s a plant round. Rotating C during this window isn\'t a read — it\'s abandoning a free win. Let audio inform your rotation, not instinct.',
        difficulty: 'Habit',
      },
      {
        title: 'Shrink the gap between flash throw and your peek to under 0.3 seconds',
        detail: 'Your flashes are well-aimed — the problem is the delay between throw and peek. At 0.8 seconds, opponents hear the flash, turn away, and are back on angle before you arrive. The peek needs to happen almost simultaneously with the flash hitting. Practice the timing in customs: throw, instantly jiggle, commit. When done right, opponents are still recovering when you\'re already on their head.',
        difficulty: 'Easy',
      },
      {
        title: 'Smoke C-site to the top-right platform, not just the entrance',
        detail: 'The entrance smoke is table stakes — everyone does it. The platform at the top right of C-site is where defenders set up retake crossfires, and if it\'s unsmoked they can work the angle freely. There\'s a lineup from outside C-Long that covers both simultaneously. It requires practice but once learned it transforms your site takes on Haven C from 50/50 to controlled.',
        difficulty: 'Advanced',
      },
    ],
  },

  4: {
    replayUrl: REPLAY,
    coachScoreDelta: -15,
    coachSummary: "This was your worst session in the last five matches and most of it was self-inflicted. You went into 1v3s when the correct play was to save. You broke team economy twice. You abandoned vent control on a map where vent literally decides the round. The individual skill is there — your aim looked fine in the duels you actually won. Decision-making at this frequency is a performance anchor that no amount of mechanical training compensates for.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'neutral' },
      { skill: 'Economy',     trend: 'down'    },
      { skill: 'Utility',     trend: 'down'    },
      { skill: 'Positioning', trend: 'down'    },
      { skill: 'Game Sense',  trend: 'down'    },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '1:55', desc: 'Force-bought round 3 alone after calling save — broke team bank and they were stuck on pistols into a full buy for two rounds', mapCoordinates: { x: 50, y: 50 }, round: 3 },
        { time: '7:20', desc: 'Pushed mid in a 1v3 scenario when saving was clearly worth more than an unlikely trade', mapCoordinates: { x: 50, y: 35 }, round: 9 },
        { time: '13:45', desc: 'Gave up vent control after a single lost duel — opponents took mid for free and controlled the entire second half from there', mapCoordinates: { x: 52, y: 45 }, round: 16 },
      ],
      positioning: [
        { time: '4:10',  desc: 'Crossed A-Ramps completely exposed with no cover — there are two boxes you walked past without using either of them', mapCoordinates: { x: 25, y: 30 }, round: 6 },
        { time: '10:30', desc: 'Peeked mid without checking the shadow under the catwalk — a known off-angle that cost you three rounds this match alone', mapCoordinates: { x: 50, y: 42 }, round: 13 },
      ],
      utility: [
        { time: '6:50', desc: 'Used Seize on a round you\'d already won 4v1 — that\'s a full ability charge wasted when you needed it in the next two rounds', mapCoordinates: { x: 60, y: 50 }, round: 8 },
      ],
    },
    actionableAdvice: [
      {
        title: 'Align your buy with the team every single round',
        detail: 'Two economy breaks this match cascaded into four consecutive lost rounds — not because of gunfights, but because your teammates were outgunned before the round even started. Before buying, check your team\'s credits in the scoreboard. If three or more players are below 3,000, save. Your individual full-buy is worth zero if your teammates are holding pistols against rifles. Economy is a team resource, not a personal one.',
        difficulty: 'Habit',
      },
      {
        title: 'Contest vent control within the first 30 seconds or concede mid entirely',
        detail: 'On Split, mid vent is the most contested zone on the map for a reason: whoever holds it can rotate to either site in under 4 seconds and can contest both A-ramps and B-main simultaneously. You conceded it after one lost duel and opponents used that control for the entire remainder of the match. Either contest hard at the start of the round or smoke it shut — there is no passive option on Split mid.',
        difficulty: 'Advanced',
      },
      {
        title: 'Use the boxes on A-Ramps — they exist for a reason',
        detail: 'There are two cover positions on A-Ramps that you walked past on each death. Moving from cover to cover is the fundamental difference between surviving entry and getting picked before the site even opens up. Never cross an open gap without knowing what\'s on the other side, and always move to the next piece of cover before repositioning.',
        difficulty: 'Easy',
      },
    ],
  },

  5: {
    replayUrl: REPLAY,
    coachScoreDelta: +10,
    coachSummary: "Solid win on a notoriously difficult map for your agent. Your clutch performance in the final three rounds showed good composure under pressure — that's a mental skill that doesn't show up in stats but absolutely wins matches. Two things to flag: you kept getting caught in B-Tube without checking Yellow first, and your positioning on B-site is getting too isolated from your support players.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'up'      },
      { skill: 'Economy',     trend: 'up'      },
      { skill: 'Utility',     trend: 'up'      },
      { skill: 'Positioning', trend: 'neutral' },
      { skill: 'Game Sense',  trend: 'neutral' },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '3:30', desc: 'Committed to B-Tube without clearing Yellow — walked into a crossfire that two opponents had been sitting in for 8 seconds' },
      ],
      positioning: [
        { time: '9:14', desc: 'Played 15 metres ahead of your nearest teammate on B-site — got isolated, traded 1-for-1 when a 2v2 was available' },
      ],
      utility: [],
    },
    actionableAdvice: [
      {
        title: 'Check Yellow every single time before entering B-Tube',
        detail: 'Yellow is the one off-angle in B-Tube that opponents consistently abuse because most players forget it exists. It cost you two lives this match alone. Before stepping into the tube, either send a Boom Bot into Yellow or jiggle-peek the corner. Three seconds of patience before entering turns a 50/50 tube fight into a controlled entry with the angle already cleared.',
        difficulty: 'Easy',
      },
      {
        title: 'Stay within 10 metres of your closest teammate on B-site',
        detail: 'Icebox B-site is designed to punish isolated players — there are angles on Tube, Snowman, and Rafters that can only be managed by multiple players working together. When you push ahead of your support, you\'re playing into the map\'s design, not around it. Close the gap. If you get into a duel, your teammate converts the second target before opponents can reset.',
        difficulty: 'Habit',
      },
      {
        title: 'Combine Updraft with zip lines for unexpected angles',
        detail: 'You used Updraft exclusively for vertical movement this match — always going straight up. The underused option is combining a sideways Updraft with zip line momentum to reach angles opponents haven\'t pre-aimed. The pipes above B-site are accessible in ways most players never use. Spend 15 minutes in a custom server just exploring movement possibilities — the angles you find will pay dividends in ranked.',
        difficulty: 'Advanced',
      },
    ],
  },

  6: {
    replayUrl: REPLAY,
    coachScoreDelta: +22,
    coachSummary: "Best individual performance in the last ten matches. Your entry fragging was near-perfect — you created space on almost every round you opened and your teammates capitalised. The 25/7 scoreline speaks for itself. One flag though: dominant matches are where bad habits form unnoticed. The Cave overextension in round 14 didn't cost you here, but in a closer game that's a round handed over.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'up' },
      { skill: 'Economy',     trend: 'up' },
      { skill: 'Utility',     trend: 'up' },
      { skill: 'Positioning', trend: 'neutral' },
      { skill: 'Game Sense',  trend: 'up'      },
    ],
    criticalFeedback: {
      tacticalErrors: [],
      positioning: [
        { time: '15:55', desc: 'Pushed deep into A-Cave alone without any teammate within rotation range — got isolated and traded in what was already a won round' },
      ],
      utility: [],
    },
    actionableAdvice: [
      {
        title: 'Never solo-push Cave regardless of how the round is going',
        detail: 'The temptation when you\'re winning dominantly is to play looser — and that\'s exactly when habits break. Cave on Breeze has three separate angles that can be covered simultaneously by two defenders, making a solo push a statistical coin flip at best. The overextension in round 14 didn\'t cost you the match this time, but in a closer game that\'s a round handed over. Two-man entry into Cave, always.',
        difficulty: 'Habit',
      },
      {
        title: 'Your Bladestorm usage was close to optimal — maintain the discipline',
        detail: 'You activated Bladestorm in four multi-player scenarios this match and converted in three of them. That\'s the correct application. The one miss was a 1v1 at mid-pillar where your gun would have been faster. Keep applying this filter: Bladestorm when the odds are against you, rifle when the fight is even. The discipline you showed here is what separates consistent fraggers from inconsistent ones.',
        difficulty: 'Easy',
      },
      {
        title: 'Explore elevated mid-pillar angles via Updraft',
        detail: 'Mid on Breeze is typically a ground-level contest, which means everyone peeks expecting head-height targets. Updraft gives you access to positions on and around the pillar that opponents simply haven\'t pre-aimed. There are two elevated spots reachable from the B-side that give a sight line across mid that ground-level players cannot contest without repositioning. Add these to your mid-control toolkit.',
        difficulty: 'Advanced',
      },
    ],
  },

  7: {
    replayUrl: REPLAY,
    coachScoreDelta: -6,
    coachSummary: "Close loss, and the margin was two avoidable rounds. You had the better of the individual matchups for most of the game but your macro reading was off — specifically, you played one too many man-down scenarios aggressively when patience would have swung those rounds. The B-Main predictability is becoming a pattern across multiple sessions now. Opponents in this rank bracket track these habits.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'neutral' },
      { skill: 'Economy',     trend: 'up'      },
      { skill: 'Utility',     trend: 'down'    },
      { skill: 'Positioning', trend: 'down'    },
      { skill: 'Game Sense',  trend: 'down'    },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '4:40',  desc: 'Pushed B-Main on a 4v5 when holding a passive angle and forcing a 5v5 plant was the correct call — the trade gave them the round' },
        { time: '11:10', desc: 'Stayed committed at Market in a 2v4 instead of pulling back to hold the spike — gave them a free round without even planting' },
      ],
      positioning: [
        { time: '7:25', desc: 'Same B-Main angle as rounds 3, 5, and 6 — by this point opponents were pre-aiming it from spawn' },
      ],
      utility: [
        { time: '9:00', desc: 'Used Fault Line in a post-plant scenario where Aftershock was the correct ability — Fault Line doesn\'t deal enough damage in that context' },
      ],
    },
    actionableAdvice: [
      {
        title: 'In man-deficit scenarios, play for information — not kills',
        detail: 'In a 4v5, your job changes. You\'re not looking for entry kills anymore — you\'re looking to buy your team time, trade efficiently if an opportunity is obvious, or stall until reinforcements arrive. The value of surviving a man-deficit round and forcing a 5v5 plant situation far exceeds the value of an aggressive push that trades you for one opponent. When you\'re down a player, patience is the aggressive play.',
        difficulty: 'Habit',
      },
      {
        title: 'Rotate your B-Main peek angle every two rounds',
        detail: 'Your B-Main angle has been logged across three separate sessions now. By round 7 in this match, opponents were pre-aimed before you even moved. The solution isn\'t to stop peeking B — it\'s to vary where you peek from. Take the box. Peek from closer to market. Use a jiggle before committing. Any variation resets their read and forces them to react to you rather than anticipate you.',
        difficulty: 'Easy',
      },
      {
        title: 'Learn the Aftershock timing for defended post-plant scenarios',
        detail: 'Fault Line is a displacement tool — it moves enemies and stuns them, which is valuable during a push. But on a defended plant, the opponent\'s only goal is to reach the spike. Aftershock deals 80 damage in a tight radius directly over the spike, forcing them to choose between dying or letting it detonate. There are three lineups for Ascent B-site that cover all the common defuse positions. Learn them and you eliminate the guesswork entirely.',
        difficulty: 'Advanced',
      },
    ],
  },

  8: {
    replayUrl: REPLAY,
    coachScoreDelta: +16,
    coachSummary: "Good controlled win. Lotus rewards teams that play the door controls and rotations intelligently, and you did that better than your opponents for most of the match. Two things to sharpen: your A-side pushes are leaving the flank unguarded, which on a three-site map is a round-ending vulnerability. And your smoke line-ups on C-Link need the geometry fixed — you're consistently leaving a gap disciplined players will exploit.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'up'      },
      { skill: 'Economy',     trend: 'up'      },
      { skill: 'Utility',     trend: 'neutral' },
      { skill: 'Positioning', trend: 'neutral' },
      { skill: 'Game Sense',  trend: 'up'      },
    ],
    criticalFeedback: {
      tacticalErrors: [],
      positioning: [
        { time: '6:11', desc: 'Committed all five players to A-side with no flank watcher on C-Link — opponents rotated through it and picked two players from behind' },
      ],
      utility: [
        { time: '13:20', desc: 'C-Link smoke landed short by about 2 metres, leaving the top arch completely exposed — opponents used that gap to win the duel' },
      ],
    },
    actionableAdvice: [
      {
        title: 'Assign a dedicated flank watcher before every A-side commit',
        detail: 'Lotus\'s three-site design means that a full 5v5 push to A leaves C-Link completely open. Opponents who read your commitment can rotate through C and take your players from behind in under 5 seconds. Before every A execute, one player stays back at the C-Link junction — not passive, but watching. If opponents rotate, they call it. That single piece of information has changed the outcome of rounds in this session twice.',
        difficulty: 'Habit',
      },
      {
        title: 'Fix the C-Link smoke geometry — extend it 2 metres further',
        detail: 'The smoke you\'re throwing covers the ground-level approach but falls short of the elevated arch at the top. Opponents who know this hold the arch and can peek over the smoke freely. The fix is a jump-throw from the standard position — the extra momentum carries the grenade to the correct depth. Practice it ten times in a custom server: you\'ll nail the feel within a session, and your C-Link success rate will immediately improve.',
        difficulty: 'Easy',
      },
      {
        title: 'Use Lotus door controls as offensive timing tools',
        detail: 'Most players use the door buttons reactively — shutting a door when someone\'s coming through it. The offensive use is to open a door at the exact moment your team commits to the adjacent site, forcing defenders to choose between the door angle and the main push. The timing window is tight but when executed correctly it splits the defender\'s attention and creates an opening that wouldn\'t exist otherwise.',
        difficulty: 'Advanced',
      },
    ],
  },

  9: {
    replayUrl: REPLAY,
    coachScoreDelta: -19,
    coachSummary: "This is your worst result of the month and every major reason for the loss was avoidable. The economy breaks, the solo C-Long challenges, the isolation — these aren't skill issues, they're discipline issues. The most concerning pattern is staying alone on B with the spike in a lost-position scenario. At this rank, knowing when to disengage and regroup is as important as winning duels.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'down' },
      { skill: 'Economy',     trend: 'down' },
      { skill: 'Utility',     trend: 'down' },
      { skill: 'Positioning', trend: 'down' },
      { skill: 'Game Sense',  trend: 'down' },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '2:05',  desc: 'Ignored the eco round entirely and force-bought pistol against rifles — broke two players\' round-5 full buy' },
        { time: '8:22',  desc: 'Took a 1v2 challenge on C-Long with no utility whatsoever — died in under 2 seconds and gave them a free rotation' },
        { time: '14:33', desc: 'Stayed alone on B-site with the spike in a 1v4 scenario instead of falling back and forcing them to hunt the spike' },
      ],
      positioning: [
        { time: '5:40',  desc: 'Set up a crossfire at C-Long from a position audible from spawn — opponents knew exactly where you were before rounding the corner' },
        { time: '10:15', desc: 'Pushed 20 metres further than any teammate, got cut off, and traded at zero value in a round your team had the numbers advantage' },
        { time: '16:00', desc: 'Fell back to a dead-end position with one angle in and no exit — opponents simply walked you down' },
      ],
      utility: [
        { time: '3:50',  desc: 'Sent Wingman to plant while your whole team had already rotated away — spike was planted with zero backup and opponents defused unopposed' },
        { time: '12:41', desc: 'Thrash bounced off the corner wall and cleared empty space — all three charges missed their intended targets' },
      ],
    },
    actionableAdvice: [
      {
        title: 'Never challenge C-Long alone without utility to back it up',
        detail: 'C-Long on Haven is one of the most punishing angles on the entire map. Two opponents can hold it from separate positions simultaneously, meaning a solo challenge at full speed is almost always a double-trade at best. If you need to contest C-Long, either smoke the long angle before peeking or use Wingman to scout the far corner. The utility exists specifically for this scenario — use it before you commit, not after you\'re already dead.',
        difficulty: 'Easy',
      },
      {
        title: 'In a lost position, create uncertainty — don\'t hold still',
        detail: 'When you\'re alone with the spike in a 1v4, your goal isn\'t to win the gunfight. It\'s to make the opponent uncertain about where you are and where the spike is. Leave the spike in a position that forces them to search while you set up from an unexpected angle. Moving, repositioning, and making them react to you extends the round and creates the one unlikely opportunity that wins it. Sitting in a dead-end and waiting is simply giving up.',
        difficulty: 'Habit',
      },
      {
        title: 'Coordinate Wingman plant timing with your team\'s position',
        detail: 'Wingman planting without backup is actively harmful — it exposes spike location and gives opponents a free defuse if your team can\'t contest. Before sending Wingman, check where your teammates are on the minimap. If they\'re mid-rotation or split, hold the spike and plant manually once the team is in position. The two seconds Wingman saves on plant are worth nothing if the spike is immediately defused with no one nearby to stop it.',
        difficulty: 'Advanced',
      },
    ],
  },

  10: {
    replayUrl: REPLAY,
    coachScoreDelta: +12,
    coachSummary: "Strong finish to the session — you looked composed and your crosshair placement was consistently better than the lobby average, which showed in the clean KDA. The win was well-deserved. Two areas to tighten: your Hookah approach needs a cleaner backup plan if the entry gets denied, and you're still holding B-Short from ground level when the box gives you a fundamentally better angle.",
    skillSnapshot: [
      { skill: 'Aim',         trend: 'up'      },
      { skill: 'Economy',     trend: 'up'      },
      { skill: 'Utility',     trend: 'up'      },
      { skill: 'Positioning', trend: 'neutral' },
      { skill: 'Game Sense',  trend: 'neutral' },
    ],
    criticalFeedback: {
      tacticalErrors: [
        { time: '7:15', desc: 'Committed fully into Hookah without a TP rotation plan — when the entry was denied you had no fallback and the round stalled into a 4v5 retake' },
      ],
      positioning: [
        { time: '3:44', desc: 'Held B-Short at ground level when the box to your left gives a head-height angle advantage that ground-level opponents cannot counter cleanly' },
      ],
      utility: [],
    },
    actionableAdvice: [
      {
        title: 'Use Hookah smokes to slow opponents down, not to rush through blind',
        detail: 'Hookah is the most common death trap on Bind for exactly this reason: players smoke it, assume it\'s clear, and rush through into a double-cross. The correct approach is to smoke Hookah and wait 2-3 seconds for opponents to reposition before entering. That pause forces them off their pre-aim and makes them react to you rather than anticipate. You don\'t need to be first through — you need to be alive when you get there.',
        difficulty: 'Easy',
      },
      {
        title: 'Take the B-Short box — it changes the angle geometry entirely',
        detail: 'From ground level, a B-Short duel is a 50/50 head-height contest. From the box, your head is at a height opponents can\'t pre-aim from spawn, and you have a wider view of the lane. Getting on the box takes 0.4 seconds and it changes every duel in your favour. This is a mechanical habit, not a complex strategic decision — get on the box at the start of rounds where you\'re holding B-Short, every time.',
        difficulty: 'Habit',
      },
      {
        title: 'Coordinate your Hookah timing with the B teleporter',
        detail: 'The most effective Bind B-site execute uses the TP and Hookah simultaneously — opponents on B-site have to choose between two angles arriving at the same time, and they can\'t cover both. If you\'re going Hookah, have a teammate hit the B TP within 1 second of your entry. The timing requires communication but the conversion rate on B executes with this coordination is dramatically higher than a single-angle entry.',
        difficulty: 'Advanced',
      },
    ],
  },
}
