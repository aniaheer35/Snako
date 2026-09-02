/**
 * SNAKEY 3D - Skins & Seamless Biomes Edition
 * Features:
 * 1. Unlockable Snake Skins Wardrobe:
 *    - 🌿 Jungle Sprite (Default)
 *    - 🔥 Dragon Viper (Crimson scales & blazing horns - 150 pts)
 *    - ⚡ Cyber Tron (Synthwave & neon glowing visor - 300 pts)
 *    - ❄️ Frost Drake (Crystalline ice & frost diamond crest - 450 pts)
 *    - 👑 Golden Emperor (Metallic gold & royal diamond crown - 600 pts)
 * 2. Seamless Organic Biome Arena:
 *    - Removed rigid grid lines for a smooth, modern, and beautiful arena floor.
 * 3. Dynamic Power-Up Arsenal (Shield, Slow-Mo Clock, Fruit Magnet).
 * 4. 4 Dynamic Worlds (Jungle -> Volcano Forge -> Cyber Matrix -> Celestial Glacier).
 * 5. Universal 5-Second Fruit Timer & 3-Strike Bomb Hazard Engine.
 */

// =============================================================================
// 1. Skins & Biomes Configuration
// =============================================================================
const SKINS = [
  {
    id: 'jungle_sprite',
    name: 'Jungle Sprite',
    icon: '🌿',
    desc: 'Classic lime green cartoon snake',
    unlockScore: 0,
    unlockText: 'Default Unlocked',
    headColors: ['#a8f544', '#7cd328', '#4f9f12', '#2f6c09'],
    bodyColors: ['#a4f243', '#7cd328', '#4b9b10', '#2a6406'],
    underbelly: '#f7f7ee',
    irisColors: ['#7cd328', '#38880a', '#1b4b04'],
    cosmetic: 'none',
  },
  {
    id: 'dragon_viper',
    name: 'Dragon Viper',
    icon: '🔥',
    desc: 'Crimson scales with fiery blazing horns',
    unlockScore: 150,
    unlockText: 'Reach 150 Pts',
    headColors: ['#ff6b4a', '#e62200', '#aa1100', '#550500'],
    bodyColors: ['#ff5533', '#d91a00', '#990d00', '#440000'],
    underbelly: '#ffe066',
    irisColors: ['#ffcc00', '#ff6600', '#990000'],
    cosmetic: 'horns',
  },
  {
    id: 'cyber_tron',
    name: 'Cyber Tron',
    icon: '⚡',
    desc: 'Dark synthwave scales with neon cyan visor',
    unlockScore: 300,
    unlockText: 'Reach 300 Pts',
    headColors: ['#00f0ff', '#1a0b36', '#090417', '#000000'],
    bodyColors: ['#00f0ff', '#2d1266', '#140633', '#080117'],
    underbelly: '#ff007f',
    irisColors: ['#00f0ff', '#0284c7', '#0369a1'],
    cosmetic: 'visor',
  },
  {
    id: 'frost_drake',
    name: 'Frost Drake',
    icon: '❄️',
    desc: 'Crystalline ice scales with frost diamond crest',
    unlockScore: 450,
    unlockText: 'Reach 450 Pts',
    headColors: ['#ffffff', '#bae6fd', '#38bdf8', '#0284c7'],
    bodyColors: ['#e0f2fe', '#7dd3fc', '#0284c7', '#075985'],
    underbelly: '#f0fdf4',
    irisColors: ['#ffffff', '#38bdf8', '#0369a1'],
    cosmetic: 'crest',
  },
  {
    id: 'golden_emperor',
    name: 'Golden Emperor',
    icon: '👑',
    desc: 'Shimmering metallic gold with royal crown',
    unlockScore: 600,
    unlockText: 'Reach 600 Pts',
    headColors: ['#fff275', '#ffd700', '#d4af37', '#8c6d17'],
    bodyColors: ['#fffa9e', '#ffd700', '#b8860b', '#6b4e03'],
    underbelly: '#a855f7',
    irisColors: ['#a855f7', '#7e22ce', '#3b0764'],
    cosmetic: 'crown',
  },
];

const BIOMES = {
  JUNGLE: {
    id: 'jungle',
    name: 'JUNGLE',
    displayName: 'Lush Jungle',
    icon: '🌴',
    minScore: 0,
    bgGrad: ['#13331c', '#0d2414', '#06130a'],
    wallBorder: '#7cd328',
    wallShadow: '#7cd328',
    particleColors: ['#7cd328', '#00f0ff', '#ff007f', '#ffb800', '#ffffff'],
    particleType: 'firefly',
    decorationType: 'jungle',
  },
  VOLCANO: {
    id: 'volcano',
    name: 'VOLCANO',
    displayName: 'Volcano Forge',
    icon: '🌋',
    minScore: 150,
    bgGrad: ['#280c0c', '#1b0505', '#0f0202'],
    wallBorder: '#ff4500',
    wallShadow: '#ff2200',
    particleColors: ['#ff3300', '#ff7700', '#ffbb00', '#ff0044', '#ffdd88'],
    particleType: 'ember',
    decorationType: 'volcano',
  },
  CYBER: {
    id: 'cyber',
    name: 'CYBER',
    displayName: 'Cyber Matrix',
    icon: '🌌',
    minScore: 300,
    bgGrad: ['#140b30', '#0a041c', '#04010d'],
    wallBorder: '#00f0ff',
    wallShadow: '#ff007f',
    particleColors: ['#00f0ff', '#ff007f', '#a855f7', '#38bdf8', '#ffffff'],
    particleType: 'pixel',
    decorationType: 'cyber',
  },
  GLACIER: {
    id: 'glacier',
    name: 'GLACIER',
    displayName: 'Celestial Glacier',
    icon: '❄️',
    minScore: 500,
    bgGrad: ['#0f283c', '#071826', '#030c14'],
    wallBorder: '#38bdf8',
    wallShadow: '#93c5fd',
    particleColors: ['#a5f3fc', '#e0f2fe', '#bae6fd', '#ffffff', '#38bdf8'],
    particleType: 'snow',
    decorationType: 'glacier',
  },
};

const CONFIG = {
  COLS: 24,
  ROWS: 16,
  START_SPEED_MS: 175,       // Relaxed, beginner-friendly initial speed
  MIN_SPEED_MS: 85,          // Maximum top velocity after progressive ramp-up
  INITIAL_SNAKE_LEN: 3,
  FRUIT_LIFETIME: 5000,
  POWERUP_LIFETIME: 6500,
  BUFF_DURATION: 6000,
  FRENZY_DURATION: 8000,
  BOMB_LIFETIME: 9000,
  COMBO_TIMEOUT_MS: 4000,
  STORAGE_KEY_HS: 'snakey_widescreen_high_score',
  STORAGE_KEY_MUTE: 'snakey_deluxe_sound_muted',
  STORAGE_KEY_SKIN: 'snakey_active_skin',
  STORAGE_KEY_CAREER_SCORE: 'snakey_career_max_score',
  STORAGE_KEY_ACHIEVEMENTS: 'snakey_unlocked_achievements_v1',
};

const ACHIEVEMENTS = [
  { id: 'first_bite', name: 'First Taste', icon: '🍎', desc: 'Eat your first delicious fruit' },
  { id: 'speed_cruise', name: 'Cruiser Gear', icon: '⚡', desc: 'Accelerate snake speed past 1.3x' },
  { id: 'speed_demon', name: 'Speed Demon', icon: '🚀', desc: 'Accelerate snake speed past 1.7x' },
  { id: 'sonic_speed', name: 'Sonic Velocity', icon: '💨', desc: 'Reach 2.0x maximum overdrive speed' },
  { id: 'combo_master', name: 'Combo Master', icon: '🔥', desc: 'Achieve a 5x fruit combo streak' },
  { id: 'phantom_snake', name: 'Phantom Ghost', icon: '👻', desc: 'Activate Ghost Phase power-up' },
  { id: 'star_frenzy', name: 'Star Frenzy', icon: '⭐', desc: 'Collect the 2X Score Star' },
  { id: 'bomb_defuser', name: 'Bomb Defuser', icon: '💖', desc: 'Collect a Heart to defuse a bomb strike' },
  { id: 'jackpot_hunter', name: 'Jackpot Hunter', icon: '🎁', desc: 'Collect a 100pt Golden Mystery fruit' },
  { id: 'grandmaster', name: 'Grandmaster', icon: '👑', desc: 'Reach a single-run score of 500+ points' },
];

const DIRECTIONS = {
  UP:    { x: 0,  y: -1, angle: -Math.PI / 2 },
  DOWN:  { x: 0,  y: 1,  angle: Math.PI / 2 },
  LEFT:  { x: -1, y: 0,  angle: Math.PI },
  RIGHT: { x: 1,  y: 0,  angle: 0 },
};

const GAME_STATES = {
  READY: 'READY',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  GAMEOVER: 'GAMEOVER',
};

// =============================================================================
// 2. Sound Manager (MP3s + Synthesizer Sound FX)
// =============================================================================
const SoundManager = {
  isMuted: false,
  bgMusic: null,
  eatSound: null,
  gameOverSound: null,
  audioCtx: null,
  isInitialized: false,

  init() {
    if (this.isInitialized) return;
    try {
      this.bgMusic = new Audio('Background music.mp3');
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.35;

      this.eatSound = new Audio('Food eating (1).mp3');
      this.eatSound.volume = 0.85;

      this.gameOverSound = new Audio('game over.mp3');
      this.gameOverSound.volume = 0.9;

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.audioCtx = new AudioCtx();

      this.isInitialized = true;
    } catch (e) {
      console.warn('Audio notice:', e);
    }
  },

  playBg() {
    if (this.isMuted) return;
    this.init();
    if (this.bgMusic) {
      this.bgMusic.currentTime = 0;
      this.bgMusic.play().catch(() => {});
    }
  },

  resumeBg() {
    if (this.isMuted) return;
    this.init();
    if (this.bgMusic && this.bgMusic.paused) {
      this.bgMusic.play().catch(() => {});
    }
  },

  pauseBg() {
    if (this.bgMusic) this.bgMusic.pause();
  },

  playEat() {
    if (this.isMuted) return;
    this.init();
    if (this.eatSound) {
      try {
        this.eatSound.currentTime = 0;
        this.eatSound.play().catch(() => {});
      } catch (e) {}
    }
  },

  playExplosion() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    }
  },

  playShieldEquip() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);

        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    }
  },

  playShieldShatter() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.3);

        gain.gain.setValueAtTime(0.55, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      } catch (e) {}
    }
  },

  playFreezeAudio() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.linearRampToValueAtTime(350, now + 0.3);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      } catch (e) {}
    }
  },

  playMagnetAudio() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(600, now + 0.25);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    }
  },

  playGhostAudio() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.2);
        osc.frequency.exponentialRampToValueAtTime(250, now + 0.4);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } catch (e) {}
    }
  },

  playFrenzyAudio() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          const t = now + i * 0.06;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t);

          gain.gain.setValueAtTime(0.35, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(t);
          osc.stop(t + 0.2);
        });
      } catch (e) {}
    }
  },

  playHeartAudio() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.25);

        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } catch (e) {}
    }
  },

  playMysteryAudio() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const freqs = [440, 554.37, 659.25, 880];
        freqs.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          const t = now + i * 0.07;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t);

          gain.gain.setValueAtTime(0.4, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(t);
          osc.stop(t + 0.25);
        });
      } catch (e) {}
    }
  },

  playAchievementUnlock() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const notes = [349.23, 440.00, 523.25, 698.46, 880.00];
        notes.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          const t = now + i * 0.08;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t);

          gain.gain.setValueAtTime(0.45, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(t);
          osc.stop(t + 0.35);
        });
      } catch (e) {}
    }
  },

  playBiomeFanfare() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          const noteStart = now + i * 0.08;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, noteStart);

          gain.gain.setValueAtTime(0.4, noteStart);
          gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.3);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(noteStart);
          osc.stop(noteStart + 0.3);
        });
      } catch (e) {}
    }
  },

  playEquipChime() {
    if (this.isMuted) return;
    this.init();
    if (this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
      } catch (e) {}
    }
  },

  playGameOver() {
    this.pauseBg();
    if (this.isMuted) return;
    this.init();
    if (this.gameOverSound) {
      try {
        this.gameOverSound.currentTime = 0;
        this.gameOverSound.play().catch(() => {});
      } catch (e) {}
    }
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY_MUTE, this.isMuted ? '1' : '0');
    } catch (e) {}

    if (this.isMuted) {
      this.pauseBg();
    } else if (state.currentState === GAME_STATES.PLAYING) {
      this.resumeBg();
    }
    this.updateMuteIcon();
  },

  updateMuteIcon() {
    const icon = document.getElementById('sound-icon');
    if (icon) icon.textContent = this.isMuted ? '🔇' : '🔊';
  },
};

// =============================================================================
// 3. Global Game State
// =============================================================================
const state = {
  currentState: GAME_STATES.READY,
  score: 0,
  highScore: 0,
  careerMaxScore: 0,
  applesEaten: 0,
  bombStrikes: 0,
  comboCount: 0,
  maxCombo: 1,
  lastEatTime: 0,

  // Selected Skin & Biome
  activeSkin: SKINS[0],
  currentBiome: BIOMES.JUNGLE,

  // Dynamic Speed
  currentSpeedMs: CONFIG.START_SPEED_MS,
  speedMultiplier: 1.0,
  topSpeedReached: 1.0,

  // Snake
  snake: [],
  direction: DIRECTIONS.RIGHT,
  currentHeadAngle: 0,
  targetHeadAngle: 0,
  inputQueue: [],

  // 5s Fruit & Hazard Bombs
  activeFruit: null,
  bombs: [],
  nextBombSpawn: 0,

  // Power-Ups Engine
  activePowerUpItem: null,
  nextPowerUpSpawn: 0,
  hasShield: false,
  slowMoEndTime: 0,
  magnetEndTime: 0,
  ghostEndTime: 0,
  frenzyEndTime: 0,

  // Achievements Progress
  unlockedAchievements: new Set(),

  // Touch Swipe Coordinates
  touchStartX: 0,
  touchStartY: 0,

  // Visuals & Effects
  screenShake: 0,
  particles: [],
  floatingTexts: [],
  ambientParticles: [],
  biomeDecorations: [],
  blinkTimer: 0,
  isBlinking: false,

  // Timing
  lastFrameTime: 0,
  accumulator: 0,
  animationFrameId: null,
  bannerTimeoutId: null,
};

// =============================================================================
// 4. DOM Elements
// =============================================================================
const DOM = {
  canvas: document.getElementById('game-canvas'),
  ctx: document.getElementById('game-canvas').getContext('2d'),
  screenWrapper: document.getElementById('screen-wrapper'),
  currentScore: document.getElementById('current-score'),
  highScore: document.getElementById('high-score'),
  currentSpeed: document.getElementById('current-speed'),
  speedCard: document.getElementById('speed-card'),
  comboBadge: document.getElementById('combo-badge'),
  comboMultiplier: document.getElementById('combo-multiplier'),
  soundBtn: document.getElementById('sound-btn'),
  skinsBtn: document.getElementById('skins-btn'),
  modalSkinsBtn: document.getElementById('modal-skins-btn'),
  trophiesBtn: document.getElementById('trophies-btn'),
  modalTrophiesBtn: document.getElementById('modal-trophies-btn'),
  trophyBadge: document.getElementById('trophy-badge'),
  hudMascotBadge: document.getElementById('hud-mascot-badge'),
  skinsOverlay: document.getElementById('skins-overlay'),
  closeSkinsBtn: document.getElementById('close-skins-btn'),
  skinsGridContainer: document.getElementById('skins-grid-container'),
  trophiesOverlay: document.getElementById('trophies-overlay'),
  closeTrophiesBtn: document.getElementById('close-trophies-btn'),
  trophiesGridContainer: document.getElementById('trophies-grid-container'),
  trophiesSubtitle: document.getElementById('trophies-subtitle'),
  toastContainer: document.getElementById('achievement-toast-container'),
  biomeCard: document.getElementById('biome-card'),
  biomeIcon: document.getElementById('biome-icon'),
  biomeName: document.getElementById('biome-name'),
  biomeBanner: document.getElementById('biome-banner'),
  bannerIcon: document.getElementById('banner-icon'),
  bannerTitle: document.getElementById('banner-title'),
  buffShield: document.getElementById('buff-shield'),
  buffSlowMo: document.getElementById('buff-slowmo'),
  slowMoTimer: document.getElementById('slowmo-timer'),
  buffMagnet: document.getElementById('buff-magnet'),
  magnetTimer: document.getElementById('magnet-timer'),
  buffGhost: document.getElementById('buff-ghost'),
  ghostTimer: document.getElementById('ghost-timer'),
  buffFrenzy: document.getElementById('buff-frenzy'),
  frenzyTimer: document.getElementById('frenzy-timer'),
  pauseBtn: document.getElementById('pause-btn'),
  pauseIcon: document.getElementById('pause-icon'),
  strikes: [
    document.getElementById('strike-1'),
    document.getElementById('strike-2'),
    document.getElementById('strike-3'),
  ],
  overlay: document.getElementById('game-overlay'),
  overlayTitle: document.getElementById('overlay-title'),
  overlaySubtitle: document.getElementById('overlay-subtitle'),
  overlayGameOverStats: document.getElementById('overlay-gameover-stats'),
  endApples: document.getElementById('end-apples'),
  endSpeed: document.getElementById('end-speed'),
  endCombo: document.getElementById('end-combo'),
  endBiome: document.getElementById('end-biome'),
  startBtn: document.getElementById('start-btn'),
  dpadUp: document.getElementById('dpad-up'),
  dpadDown: document.getElementById('dpad-down'),
  dpadLeft: document.getElementById('dpad-left'),
  dpadRight: document.getElementById('dpad-right'),
};

function triggerHaptic(pattern = 15) {
  if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
    try {
      navigator.vibrate(pattern);
    } catch (e) {}
  }
}

// =============================================================================
// 5. Initialization & Storage
// =============================================================================
function init() {
  loadSavedSettings();
  setupCanvasResolution();
  setupEventListeners();
  initBiomeEnvironment(BIOMES.JUNGLE);
  renderSkinsModal();
  renderTrophiesModal();
  resetGame();
  render(performance.now());
}

function loadSavedSettings() {
  try {
    const savedHs = localStorage.getItem(CONFIG.STORAGE_KEY_HS);
    state.highScore = savedHs ? parseInt(savedHs, 10) || 0 : 0;
    DOM.highScore.textContent = state.highScore;

    const savedCareer = localStorage.getItem(CONFIG.STORAGE_KEY_CAREER_SCORE);
    state.careerMaxScore = savedCareer ? parseInt(savedCareer, 10) || state.highScore : state.highScore;

    const savedSkinId = localStorage.getItem(CONFIG.STORAGE_KEY_SKIN);
    const foundSkin = SKINS.find(s => s.id === savedSkinId);
    if (foundSkin && isSkinUnlocked(foundSkin)) {
      state.activeSkin = foundSkin;
    } else {
      state.activeSkin = SKINS[0];
    }

    const savedAchievements = localStorage.getItem(CONFIG.STORAGE_KEY_ACHIEVEMENTS);
    if (savedAchievements) {
      const parsed = JSON.parse(savedAchievements);
      if (Array.isArray(parsed)) {
        state.unlockedAchievements = new Set(parsed);
      }
    }
    updateTrophyCountBadge();

    const savedMute = localStorage.getItem(CONFIG.STORAGE_KEY_MUTE);
    SoundManager.isMuted = (savedMute === '1');
    SoundManager.updateMuteIcon();
  } catch (e) {
    state.highScore = 0;
    state.activeSkin = SKINS[0];
    state.unlockedAchievements = new Set();
  }
}

function updateTrophyCountBadge() {
  if (DOM.trophyBadge) {
    DOM.trophyBadge.textContent = `${state.unlockedAchievements.size}/${ACHIEVEMENTS.length}`;
  }
}

function renderTrophiesModal() {
  if (!DOM.trophiesGridContainer) return;
  DOM.trophiesGridContainer.innerHTML = '';
  const total = ACHIEVEMENTS.length;
  const unlockedCount = state.unlockedAchievements.size;
  if (DOM.trophiesSubtitle) {
    DOM.trophiesSubtitle.textContent = `Completed ${unlockedCount} of ${total} challenges (${Math.round((unlockedCount / total) * 100)}%)`;
  }

  ACHIEVEMENTS.forEach(ach => {
    const isUnlocked = state.unlockedAchievements.has(ach.id);
    const card = document.createElement('div');
    card.className = `trophy-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="trophy-icon-frame">${ach.icon}</div>
      <div class="trophy-title">${ach.name}</div>
      <div class="trophy-desc">${ach.desc}</div>
      <span class="trophy-badge-status ${isUnlocked ? 'completed' : 'locked'}">
        ${isUnlocked ? '✓ UNLOCKED' : '🔒 LOCKED'}
      </span>
    `;
    DOM.trophiesGridContainer.appendChild(card);
  });
}

function openTrophiesModal() {
  renderTrophiesModal();
  DOM.trophiesOverlay.classList.remove('hidden');
  if (state.currentState === GAME_STATES.PLAYING) {
    togglePause();
  }
}

function closeTrophiesModal() {
  DOM.trophiesOverlay.classList.add('hidden');
}

function checkAchievements() {
  if (state.applesEaten >= 1) unlockAchievement('first_bite');
  if (state.speedMultiplier >= 1.3) unlockAchievement('speed_cruise');
  if (state.speedMultiplier >= 1.7) unlockAchievement('speed_demon');
  if (state.speedMultiplier >= 2.0) unlockAchievement('sonic_speed');
  if (state.comboCount >= 5) unlockAchievement('combo_master');
  if (state.score >= 500) unlockAchievement('grandmaster');
}

function unlockAchievement(id) {
  if (state.unlockedAchievements.has(id)) return;
  const ach = ACHIEVEMENTS.find(a => a.id === id);
  if (!ach) return;

  state.unlockedAchievements.add(id);
  try {
    localStorage.setItem(CONFIG.STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(Array.from(state.unlockedAchievements)));
  } catch (e) {}

  updateTrophyCountBadge();
  renderTrophiesModal();
  showAchievementToast(ach);
  triggerHaptic([20, 30, 20, 30, 50]);
  SoundManager.playAchievementUnlock();
}

function showAchievementToast(ach) {
  if (!DOM.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = `
    <div class="toast-icon">${ach.icon}</div>
    <div class="toast-body">
      <span class="toast-tag">TROPHY UNLOCKED!</span>
      <strong class="toast-title">${ach.name}</strong>
      <span class="toast-desc">${ach.desc}</span>
    </div>
  `;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 4800);
}

function isSkinUnlocked(skin) {
  if (skin.unlockScore === 0) return true;
  return state.careerMaxScore >= skin.unlockScore || state.highScore >= skin.unlockScore;
}

function setupCanvasResolution() {
  const dpr = window.devicePixelRatio || 1;
  const rect = DOM.canvas.getBoundingClientRect();
  const width = Math.max(300, Math.floor(rect.width || 720));
  const height = Math.max(200, Math.floor(rect.height || 480));

  DOM.canvas.width = width * dpr;
  DOM.canvas.height = height * dpr;
  DOM.ctx.setTransform(1, 0, 0, 1, 0, 0);
  DOM.ctx.scale(dpr, dpr);
}

// =============================================================================
// 6. Skins Wardrobe Modal Management
// =============================================================================
function renderSkinsModal() {
  DOM.skinsGridContainer.innerHTML = '';

  SKINS.forEach(skin => {
    const unlocked = isSkinUnlocked(skin);
    const isEquipped = (state.activeSkin.id === skin.id);

    const card = document.createElement('div');
    card.className = `skin-card ${isEquipped ? 'active' : ''} ${unlocked ? '' : 'locked'}`;

    let buttonHtml = '';
    if (isEquipped) {
      buttonHtml = `<button class="skin-status-btn equipped">EQUIPPED</button>`;
    } else if (unlocked) {
      buttonHtml = `<button class="skin-status-btn equip" data-skin-id="${skin.id}">EQUIP</button>`;
    } else {
      buttonHtml = `<button class="skin-status-btn locked">${skin.unlockText}</button>`;
    }

    card.innerHTML = `
      <div class="skin-icon-frame">${skin.icon}</div>
      <div class="skin-title">${skin.name}</div>
      <div class="skin-desc">${skin.desc}</div>
      ${buttonHtml}
    `;

    const equipBtn = card.querySelector('.skin-status-btn.equip');
    if (equipBtn) {
      equipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        equipSkin(skin);
      });
    }

    DOM.skinsGridContainer.appendChild(card);
  });
}

function equipSkin(skin) {
  state.activeSkin = skin;
  try {
    localStorage.setItem(CONFIG.STORAGE_KEY_SKIN, skin.id);
  } catch (e) {}

  SoundManager.playEquipChime();
  renderSkinsModal();
  createFloatingText(`EQUIPPED ${skin.name.toUpperCase()}!`, 480, 200, skin.headColors[0]);
}

function openSkinsModal() {
  renderSkinsModal();
  DOM.skinsOverlay.classList.remove('hidden');
  if (state.currentState === GAME_STATES.PLAYING) {
    togglePause();
  }
}

function closeSkinsModal() {
  DOM.skinsOverlay.classList.add('hidden');
}

// =============================================================================
// 7. Dynamic Biome Engine & Particle Initialization
// =============================================================================
function initBiomeEnvironment(biome) {
  state.currentBiome = biome;
  initAmbientParticles(biome);
  initBiomeDecorations(biome);
  updateBiomeHUD(biome);
}

function initAmbientParticles(biome) {
  state.ambientParticles = [];
  const colors = biome.particleColors;
  for (let i = 0; i < 40; i++) {
    state.ambientParticles.push({
      x: Math.random() * 960,
      y: Math.random() * 640,
      vx: biome.particleType === 'ember' ? (Math.random() - 0.5) * 0.4 : (Math.random() - 0.5) * 0.35,
      vy: biome.particleType === 'ember' ? -(0.6 + Math.random() * 0.8) : biome.particleType === 'snow' ? (0.5 + Math.random() * 0.7) : (Math.random() - 0.5) * 0.35,
      size: biome.particleType === 'pixel' ? 3 + Math.random() * 3 : 1.5 + Math.random() * 3.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.25 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function initBiomeDecorations(biome) {
  state.biomeDecorations = [];
  for (let r = 0; r < CONFIG.ROWS; r++) {
    for (let c = 0; c < CONFIG.COLS; c++) {
      const hash = (r * 37 + c * 17) % 100;
      if (hash < 14) {
        state.biomeDecorations.push({
          x: c,
          y: r,
          type: biome.decorationType,
          variant: hash % 3,
          offsetX: 0.2 + ((hash * 7) % 60) * 0.01,
          offsetY: 0.2 + ((hash * 13) % 60) * 0.01,
          scale: 0.6 + ((hash * 3) % 40) * 0.01,
        });
      }
    }
  }
}

function checkBiomeProgress() {
  let targetBiome = BIOMES.JUNGLE;
  if (state.score >= BIOMES.GLACIER.minScore) {
    targetBiome = BIOMES.GLACIER;
  } else if (state.score >= BIOMES.CYBER.minScore) {
    targetBiome = BIOMES.CYBER;
  } else if (state.score >= BIOMES.VOLCANO.minScore) {
    targetBiome = BIOMES.VOLCANO;
  }

  if (targetBiome.id !== state.currentBiome.id) {
    triggerBiomeShift(targetBiome);
  }

  // Update Career Score
  if (state.score > state.careerMaxScore) {
    state.careerMaxScore = state.score;
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY_CAREER_SCORE, state.careerMaxScore.toString());
    } catch (e) {}
  }
}

function triggerBiomeShift(newBiome) {
  state.currentBiome = newBiome;
  initAmbientParticles(newBiome);
  initBiomeDecorations(newBiome);
  updateBiomeHUD(newBiome);

  SoundManager.playBiomeFanfare();
  state.screenShake = 10;

  DOM.bannerIcon.textContent = newBiome.icon;
  DOM.bannerTitle.textContent = newBiome.displayName.toUpperCase();
  DOM.biomeBanner.classList.remove('hidden');

  if (state.bannerTimeoutId) clearTimeout(state.bannerTimeoutId);
  state.bannerTimeoutId = setTimeout(() => {
    DOM.biomeBanner.classList.add('hidden');
  }, 2700);

  const rect = DOM.canvas.getBoundingClientRect();
  createFoodParticles((rect.width || 720) / 2, (rect.height || 480) / 2, newBiome.particleColors);
}

function updateBiomeHUD(biome) {
  DOM.biomeCard.className = `biome-card ${biome.id}`;
  DOM.biomeIcon.textContent = biome.icon;
  DOM.biomeName.textContent = biome.name;
  document.body.className = `biome-${biome.id}`;
}

// =============================================================================
// 8. Game Loop & Dynamic Speed Engine
// =============================================================================
function calculateCurrentSpeed(currentTime) {
  // Gradual progressive speed scaling: starts at START_SPEED_MS (175ms)
  // Slowly accelerates with each fruit eaten and score milestone down to MIN_SPEED_MS (85ms)
  const progressReduction = Math.min(
    CONFIG.START_SPEED_MS - CONFIG.MIN_SPEED_MS,
    state.applesEaten * 1.8 + (state.score / 20) * 0.9
  );
  const baseSpeed = CONFIG.START_SPEED_MS - progressReduction;

  const isSlowMo = currentTime < state.slowMoEndTime;
  const effectiveSpeed = isSlowMo ? Math.min(270, baseSpeed * 1.75) : baseSpeed;

  const multiplier = (CONFIG.START_SPEED_MS / baseSpeed);
  state.currentSpeedMs = effectiveSpeed;
  state.speedMultiplier = multiplier;
  if (multiplier > state.topSpeedReached) {
    state.topSpeedReached = multiplier;
  }

  updateSpeedometerHUD(multiplier, isSlowMo);
  checkAchievements();

  return effectiveSpeed;
}

function updateSpeedometerHUD(multiplier, isSlowMo) {
  if (!DOM.currentSpeed || !DOM.speedCard) return;

  const multText = multiplier.toFixed(1) + 'x';
  DOM.currentSpeed.textContent = isSlowMo ? `❄️${multText}` : multText;

  // Dynamic Speed Class
  DOM.speedCard.classList.remove('chill', 'cruise', 'turbo', 'sonic');
  if (multiplier < 1.25) {
    DOM.speedCard.classList.add('chill');
  } else if (multiplier < 1.55) {
    DOM.speedCard.classList.add('cruise');
  } else if (multiplier < 1.85) {
    DOM.speedCard.classList.add('turbo');
  } else {
    DOM.speedCard.classList.add('sonic');
  }
}

function gameLoop(currentTime) {
  if (state.currentState !== GAME_STATES.PLAYING) return;

  if (!state.lastFrameTime) state.lastFrameTime = currentTime;
  const deltaTime = currentTime - state.lastFrameTime;
  state.lastFrameTime = currentTime;
  state.accumulator += deltaTime;

  updateItemLifecycles(currentTime);
  updatePowerUpHUD(currentTime);

  if (state.comboCount > 0 && currentTime - state.lastEatTime > CONFIG.COMBO_TIMEOUT_MS) {
    state.comboCount = 0;
    DOM.comboBadge.classList.add('hidden');
  }

  const currentStepSpeed = calculateCurrentSpeed(currentTime);

  while (state.accumulator >= currentStepSpeed) {
    updateGameLogic(currentTime);
    state.accumulator -= currentStepSpeed;
    if (state.currentState !== GAME_STATES.PLAYING) break;
  }

  updateVisuals(deltaTime, currentTime);
  render(currentTime);

  if (state.currentState === GAME_STATES.PLAYING) {
    state.animationFrameId = requestAnimationFrame(gameLoop);
  }
}

function updateItemLifecycles(currentTime) {
  // Fruit Lifecycle (5s)
  if (state.activeFruit) {
    const elapsed = currentTime - state.activeFruit.spawnTime;
    if (elapsed >= state.activeFruit.duration) {
      createSmokePuff(state.activeFruit.x, state.activeFruit.y);
      spawnFruit(currentTime);
    }
  } else {
    spawnFruit(currentTime);
  }

  // Power-Up Pickup Lifetime (6.5s)
  if (state.activePowerUpItem) {
    const elapsed = currentTime - state.activePowerUpItem.spawnTime;
    if (elapsed >= state.activePowerUpItem.duration) {
      createSmokePuff(state.activePowerUpItem.x, state.activePowerUpItem.y);
      state.activePowerUpItem = null;
      state.nextPowerUpSpawn = currentTime + 10000 + Math.random() * 6000;
    }
  } else if (currentTime >= state.nextPowerUpSpawn) {
    spawnPowerUpItem(currentTime);
  }

  // Bomb Lifetimes
  for (let i = state.bombs.length - 1; i >= 0; i--) {
    const bomb = state.bombs[i];
    if (currentTime - bomb.spawnTime >= bomb.duration) {
      createSmokePuff(bomb.x, bomb.y);
      state.bombs.splice(i, 1);
    }
  }

  if (state.bombs.length < 2 && currentTime >= state.nextBombSpawn) {
    spawnBomb(currentTime);
  }
}

function updatePowerUpHUD(currentTime) {
  if (state.hasShield) DOM.buffShield.classList.remove('hidden');
  else DOM.buffShield.classList.add('hidden');

  if (currentTime < state.slowMoEndTime) {
    const rem = Math.max(0, (state.slowMoEndTime - currentTime) / 1000).toFixed(1);
    DOM.slowMoTimer.textContent = `${rem}s`;
    DOM.buffSlowMo.classList.remove('hidden');
  } else {
    DOM.buffSlowMo.classList.add('hidden');
  }

  if (currentTime < state.magnetEndTime) {
    const rem = Math.max(0, (state.magnetEndTime - currentTime) / 1000).toFixed(1);
    DOM.magnetTimer.textContent = `${rem}s`;
    DOM.buffMagnet.classList.remove('hidden');
  } else {
    DOM.buffMagnet.classList.add('hidden');
  }

  if (currentTime < state.ghostEndTime) {
    const rem = Math.max(0, (state.ghostEndTime - currentTime) / 1000).toFixed(1);
    if (DOM.ghostTimer) DOM.ghostTimer.textContent = `${rem}s`;
    if (DOM.buffGhost) DOM.buffGhost.classList.remove('hidden');
  } else if (DOM.buffGhost) {
    DOM.buffGhost.classList.add('hidden');
  }

  if (currentTime < state.frenzyEndTime) {
    const rem = Math.max(0, (state.frenzyEndTime - currentTime) / 1000).toFixed(1);
    if (DOM.frenzyTimer) DOM.frenzyTimer.textContent = `${rem}s`;
    if (DOM.buffFrenzy) DOM.buffFrenzy.classList.remove('hidden');
  } else if (DOM.buffFrenzy) {
    DOM.buffFrenzy.classList.add('hidden');
  }
}

function updateVisuals(deltaTime, currentTime) {
  if (state.screenShake > 0) {
    state.screenShake = Math.max(0, state.screenShake - deltaTime * 0.04);
  }

  let angleDiff = state.targetHeadAngle - state.currentHeadAngle;
  while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
  while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
  state.currentHeadAngle += angleDiff * Math.min(1, deltaTime * 0.024);

  state.blinkTimer += deltaTime;
  if (!state.isBlinking && state.blinkTimer > 3200 + Math.random() * 2000) {
    state.isBlinking = true;
    state.blinkTimer = 0;
  } else if (state.isBlinking && state.blinkTimer > 150) {
    state.isBlinking = false;
    state.blinkTimer = 0;
  }

  // Speed Wind Streaks if fast (> 1.35x)
  if (state.speedMultiplier > 1.35 && state.currentState === GAME_STATES.PLAYING && Math.random() < 0.35) {
    const head = state.snake[0];
    if (head) {
      const rect = DOM.canvas.getBoundingClientRect();
      const cellSize = (rect.width || 720) / CONFIG.COLS;
      const hx = head.x * cellSize + cellSize / 2;
      const hy = head.y * cellSize + cellSize / 2;
      state.particles.push({
        x: hx - state.direction.x * (cellSize * 0.5) + (Math.random() - 0.5) * 8,
        y: hy - state.direction.y * (cellSize * 0.5) + (Math.random() - 0.5) * 8,
        vx: -state.direction.x * (2 + Math.random() * 3),
        vy: -state.direction.y * (2 + Math.random() * 3),
        gravity: 0,
        scale: 0.8,
        alpha: 0.8,
        fade: 0.05,
        color: state.speedMultiplier > 1.8 ? '#ff007f' : '#00f0ff',
        isStar: false,
        size: 3 + Math.random() * 3,
      });
    }
  }

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.alpha -= p.fade;
    p.scale = Math.max(0, p.scale - 0.018);
    if (p.alpha <= 0 || p.scale <= 0) state.particles.splice(i, 1);
  }

  for (let i = state.floatingTexts.length - 1; i >= 0; i--) {
    const ft = state.floatingTexts[i];
    ft.y += ft.vy;
    ft.alpha -= ft.fade;
    ft.scale += 0.008;
    if (ft.alpha <= 0) state.floatingTexts.splice(i, 1);
  }

  const rect = DOM.canvas.getBoundingClientRect();
  const width = rect.width || 720;
  const height = rect.height || 480;
  state.ambientParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
  });
}

// =============================================================================
// 9. Movement, Collisions & Power-Up Effects
// =============================================================================
function updateGameLogic(currentTime) {
  if (state.inputQueue.length > 0) {
    const nextDir = state.inputQueue.shift();
    const isOpposite = (nextDir.x + state.direction.x === 0) && (nextDir.y + state.direction.y === 0);
    if (!isOpposite) {
      state.direction = nextDir;
      state.targetHeadAngle = nextDir.angle;
    }
  }

  const currentHead = state.snake[0];
  let newHeadPos = {
    x: currentHead.x + state.direction.x,
    y: currentHead.y + state.direction.y,
  };

  const isGhostActive = currentTime < state.ghostEndTime;

  // 1. Boundary Wall Collision / Ghost Wraparound
  if (
    newHeadPos.x < 0 || newHeadPos.x >= CONFIG.COLS ||
    newHeadPos.y < 0 || newHeadPos.y >= CONFIG.ROWS
  ) {
    if (isGhostActive) {
      // Ethereal Wraparound!
      newHeadPos.x = (newHeadPos.x + CONFIG.COLS) % CONFIG.COLS;
      newHeadPos.y = (newHeadPos.y + CONFIG.ROWS) % CONFIG.ROWS;
      createGhostPuff(newHeadPos.x, newHeadPos.y);
    } else {
      triggerGameOver(`HIT THE ${state.currentBiome.name} WALL`);
      return;
    }
  }

  // 2. Self Collision Check
  if (!isGhostActive) {
    for (let i = 0; i < state.snake.length - 1; i++) {
      if (state.snake[i].x === newHeadPos.x && state.snake[i].y === newHeadPos.y) {
        triggerGameOver('BIT YOUR OWN TAIL');
        return;
      }
    }
  } else {
    // Check if phasing through own body
    const hitSelf = state.snake.some(s => s.x === newHeadPos.x && s.y === newHeadPos.y);
    if (hitSelf) {
      createGhostPuff(newHeadPos.x, newHeadPos.y);
    }
  }

  // 3. Fruit Magnet Attraction
  if (currentTime < state.magnetEndTime && state.activeFruit) {
    const dx = newHeadPos.x - state.activeFruit.x;
    const dy = newHeadPos.y - state.activeFruit.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 0.5 && dist <= 5.5) {
      if (Math.abs(dx) >= Math.abs(dy)) {
        state.activeFruit.x += Math.sign(dx);
      } else {
        state.activeFruit.y += Math.sign(dy);
      }
    }
  }

  const oldPositions = state.snake.map(s => ({ x: s.x, y: s.y }));

  state.snake[0] = {
    x: newHeadPos.x,
    y: newHeadPos.y,
    prevX: oldPositions[0].x,
    prevY: oldPositions[0].y,
  };

  for (let i = 1; i < state.snake.length; i++) {
    state.snake[i] = {
      x: oldPositions[i - 1].x,
      y: oldPositions[i - 1].y,
      prevX: oldPositions[i].x,
      prevY: oldPositions[i].y,
    };
  }

  // 4. Power-Up Pickup Collision
  if (state.activePowerUpItem && state.activePowerUpItem.x === newHeadPos.x && state.activePowerUpItem.y === newHeadPos.y) {
    handlePowerUpPickup(currentTime);
  }

  // 5. Bomb Hazard Collision
  for (let i = 0; i < state.bombs.length; i++) {
    if (state.bombs[i].x === newHeadPos.x && state.bombs[i].y === newHeadPos.y) {
      handleBombHit(i);
      return;
    }
  }

  // 6. Fruit Collision
  if (state.activeFruit && state.activeFruit.x === newHeadPos.x && state.activeFruit.y === newHeadPos.y) {
    handleFruitEaten(oldPositions);
  }
}

function handlePowerUpPickup(currentTime) {
  const item = state.activePowerUpItem;
  state.activePowerUpItem = null;
  state.nextPowerUpSpawn = currentTime + 10000 + Math.random() * 5000;

  const rect = DOM.canvas.getBoundingClientRect();
  const cellSize = (rect.width || 720) / CONFIG.COLS;
  const px = item.x * cellSize + cellSize / 2;
  const py = item.y * cellSize + cellSize / 2;
  triggerHaptic(22);

  if (item.type === 'shield') {
    state.hasShield = true;
    SoundManager.playShieldEquip();
    createFoodParticles(px, py, ['#00f0ff', '#ffffff', '#38bdf8']);
    createFloatingText('🛡️ SHIELD ACTIVE!', px, py - 14, '#00f0ff');
  } else if (item.type === 'freeze') {
    state.slowMoEndTime = currentTime + CONFIG.BUFF_DURATION;
    SoundManager.playFreezeAudio();
    createFoodParticles(px, py, ['#38bdf8', '#bae6fd', '#ffffff']);
    createFloatingText('❄️ SLOW-MO 6s!', px, py - 14, '#38bdf8');
  } else if (item.type === 'magnet') {
    state.magnetEndTime = currentTime + CONFIG.BUFF_DURATION;
    SoundManager.playMagnetAudio();
    createFoodParticles(px, py, ['#ff007f', '#ffb800', '#00f0ff']);
    createFloatingText('🧲 FRUIT MAGNET 6s!', px, py - 14, '#ff007f');
  } else if (item.type === 'ghost') {
    state.ghostEndTime = currentTime + CONFIG.BUFF_DURATION;
    SoundManager.playGhostAudio();
    unlockAchievement('phantom_snake');
    createFoodParticles(px, py, ['#a855f7', '#d8b4fe', '#ffffff', '#00f0ff']);
    createFloatingText('👻 GHOST PHASE 6s!', px, py - 14, '#a855f7');
  } else if (item.type === 'frenzy') {
    state.frenzyEndTime = currentTime + CONFIG.FRENZY_DURATION;
    SoundManager.playFrenzyAudio();
    unlockAchievement('star_frenzy');
    createFoodParticles(px, py, ['#ffd700', '#ff007f', '#00f0ff', '#ffffff']);
    createFloatingText('⭐ 2X SCORE FRENZY 8s!', px, py - 14, '#ffd700');
  } else if (item.type === 'heart') {
    SoundManager.playHeartAudio();
    createFoodParticles(px, py, ['#ff3377', '#ff66aa', '#ffffff']);
    if (state.bombStrikes > 0) {
      state.bombStrikes = Math.max(0, state.bombStrikes - 1);
      updateBombHUD();
      unlockAchievement('bomb_defuser');
      createFloatingText('💖 BOMB DEFUSED! (-1 Strike)', px, py - 14, '#ff3377');
    } else {
      state.score += 50;
      DOM.currentScore.textContent = state.score;
      createFloatingText('💖 MAX HEALTH BONUS +50!', px, py - 14, '#ff3377');
    }
  }
}

function handleFruitEaten(oldPositions) {
  const fruit = state.activeFruit;
  state.activeFruit = null;
  state.applesEaten++;
  triggerHaptic(14);

  const now = performance.now();
  if (now - state.lastEatTime < CONFIG.COMBO_TIMEOUT_MS) state.comboCount++;
  else state.comboCount = 1;
  state.lastEatTime = now;

  if (state.comboCount > state.maxCombo) state.maxCombo = state.comboCount;

  let multiplier = Math.min(state.comboCount, 5);
  const isFrenzyActive = now < state.frenzyEndTime;
  if (isFrenzyActive) {
    multiplier *= 2;
  }

  let basePoints = 10;
  let growthCount = 1;
  let fruitName = '🍎 APPLE!';
  let fruitColor = '#ff3344';

  if (fruit.type === 'banana') {
    basePoints = 30;
    growthCount = 1;
    fruitName = '🍌 BANANA!';
    fruitColor = '#ffe600';
  } else if (fruit.type === 'mango') {
    basePoints = 50;
    growthCount = 2;
    fruitName = '🥭 MANGO!';
    fruitColor = '#ff7700';
  } else if (fruit.type === 'mystery') {
    basePoints = 100;
    growthCount = 3;
    fruitName = '🎁 MYSTERY JACKPOT!';
    fruitColor = '#ffd700';
    SoundManager.playMysteryAudio();
    unlockAchievement('jackpot_hunter');
  }

  const earned = basePoints * multiplier;
  state.score += earned;
  DOM.currentScore.textContent = state.score;

  checkBiomeProgress();
  checkAchievements();

  const lastOld = oldPositions[oldPositions.length - 1];
  for (let g = 0; g < growthCount; g++) {
    state.snake.push({ x: lastOld.x, y: lastOld.y, prevX: lastOld.x, prevY: lastOld.y });
  }

  if (state.comboCount > 1 || isFrenzyActive) {
    DOM.comboMultiplier.textContent = `${multiplier}x`;
    DOM.comboBadge.classList.remove('hidden');
  }

  if (state.score > state.highScore) {
    state.highScore = state.score;
    DOM.highScore.textContent = state.highScore;
    saveHighScore(state.highScore);
  }

  if (fruit.type !== 'mystery') {
    SoundManager.playEat();
  }

  const rect = DOM.canvas.getBoundingClientRect();
  const cellSize = (rect.width || 720) / CONFIG.COLS;
  const px = fruit.x * cellSize + cellSize / 2;
  const py = fruit.y * cellSize + cellSize / 2;

  createFoodParticles(px, py, [fruitColor, '#ffffff', state.activeSkin.headColors[0]]);
  createFloatingText(
    multiplier > 1 ? `+${earned} ${fruitName} (${multiplier}x)` : `+${earned} ${fruitName}`,
    px,
    py - 12,
    fruitColor
  );

  spawnFruit(performance.now());
}

function handleBombHit(bombIndex) {
  const bomb = state.bombs[bombIndex];
  state.bombs.splice(bombIndex, 1);

  const rect = DOM.canvas.getBoundingClientRect();
  const cellSize = (rect.width || 720) / CONFIG.COLS;
  const px = bomb.x * cellSize + cellSize / 2;
  const py = bomb.y * cellSize + cellSize / 2;

  if (state.hasShield) {
    state.hasShield = false;
    SoundManager.playShieldShatter();
    state.screenShake = 8;
    triggerHaptic(30);
    createFoodParticles(px, py, ['#00f0ff', '#ffffff', '#38bdf8']);
    createFloatingText('🛡️ SHIELD BLOCKED BOMB!', px, py - 14, '#00f0ff');
    return;
  }

  state.bombStrikes++;
  updateBombHUD();
  triggerHaptic([50, 40, 70]);

  state.score = Math.max(0, state.score - 20);
  DOM.currentScore.textContent = state.score;

  if (state.snake.length > 2) {
    state.snake.pop();
  }

  state.screenShake = 14;
  SoundManager.playExplosion();

  createExplosionParticles(px, py);
  createFloatingText(`-20 BOMB HIT! (${state.bombStrikes}/3)`, px, py - 12, '#ff1133');

  if (state.bombStrikes >= 3) {
    triggerGameOver('BOMB DETONATION! (3 Strikes Reached)');
  }
}

function updateBombHUD() {
  DOM.strikes.forEach((slot, index) => {
    if (index < state.bombStrikes) slot.classList.add('active');
    else slot.classList.remove('active');
  });
}

// =============================================================================
// 10. Spawning Helpers & VFX
// =============================================================================
function getFreeRandomTile() {
  let valid = false;
  let pos = { x: 0, y: 0 };
  let attempts = 0;

  while (!valid && attempts < 100) {
    attempts++;
    pos = {
      x: Math.floor(Math.random() * CONFIG.COLS),
      y: Math.floor(Math.random() * CONFIG.ROWS),
    };

    const hitsSnake = state.snake.some(s => s.x === pos.x && s.y === pos.y);
    const hitsFruit = (state.activeFruit && state.activeFruit.x === pos.x && state.activeFruit.y === pos.y);
    const hitsPowerUp = (state.activePowerUpItem && state.activePowerUpItem.x === pos.x && state.activePowerUpItem.y === pos.y);
    const hitsBomb = state.bombs.some(b => b.x === pos.x && b.y === pos.y);

    if (!hitsSnake && !hitsFruit && !hitsPowerUp && !hitsBomb) {
      valid = true;
    }
  }
  return pos;
}

function spawnFruit(currentTime) {
  const pos = getFreeRandomTile();
  const roll = Math.random();
  let type = 'apple';
  if (roll > 0.94) type = 'mystery';
  else if (roll > 0.76) type = 'mango';
  else if (roll > 0.50) type = 'banana';
  else type = 'apple';

  state.activeFruit = {
    type: type,
    x: pos.x,
    y: pos.y,
    spawnTime: currentTime,
    duration: type === 'mystery' ? 6000 : CONFIG.FRUIT_LIFETIME,
  };
}

function spawnPowerUpItem(currentTime) {
  const pos = getFreeRandomTile();
  const roll = Math.random();
  let type = 'shield';
  if (roll > 0.82) type = 'frenzy';
  else if (roll > 0.65) type = 'ghost';
  else if (roll > 0.48) type = 'heart';
  else if (roll > 0.32) type = 'magnet';
  else if (roll > 0.16) type = 'freeze';
  else type = 'shield';

  state.activePowerUpItem = {
    type: type,
    x: pos.x,
    y: pos.y,
    spawnTime: currentTime,
    duration: CONFIG.POWERUP_LIFETIME,
  };
}

function spawnBomb(currentTime) {
  const pos = getFreeRandomTile();
  state.bombs.push({
    x: pos.x,
    y: pos.y,
    spawnTime: currentTime,
    duration: CONFIG.BOMB_LIFETIME,
  });
  state.nextBombSpawn = currentTime + 6000 + Math.random() * 5000;
}

function createGhostPuff(tileX, tileY) {
  const rect = DOM.canvas.getBoundingClientRect();
  const cellSize = (rect.width || 720) / CONFIG.COLS;
  const x = tileX * cellSize + cellSize / 2;
  const y = tileY * cellSize + cellSize / 2;

  for (let i = 0; i < 10; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.2 + Math.random() * 2.5;
    state.particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      gravity: 0,
      scale: 1,
      alpha: 0.8,
      fade: 0.04,
      color: Math.random() > 0.5 ? '#a855f7' : '#00f0ff',
      isStar: true,
      size: 4 + Math.random() * 4,
    });
  }
}

function createFoodParticles(x, y, colors) {
  for (let i = 0; i < 22; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.5 + Math.random() * 5;
    state.particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1,
      gravity: 0.16,
      scale: 1,
      alpha: 1,
      fade: 0.018 + Math.random() * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      isStar: Math.random() > 0.4,
      size: 4 + Math.random() * 5,
    });
  }
}

function createExplosionParticles(x, y) {
  const colors = ['#ff1133', '#ff7700', '#ffe600', '#333333', '#ffffff'];
  for (let i = 0; i < 35; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 7;
    state.particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      gravity: 0.2,
      scale: 1.2,
      alpha: 1,
      fade: 0.025 + Math.random() * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      isStar: false,
      size: 5 + Math.random() * 6,
    });
  }
}

function createSmokePuff(tileX, tileY) {
  const rect = DOM.canvas.getBoundingClientRect();
  const cellSize = (rect.width || 720) / CONFIG.COLS;
  const x = tileX * cellSize + cellSize / 2;
  const y = tileY * cellSize + cellSize / 2;

  for (let i = 0; i < 14; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 2.5;
    state.particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.5,
      gravity: 0.04,
      scale: 1,
      alpha: 0.75,
      fade: 0.03,
      color: 'rgba(210, 230, 220, 0.7)',
      isStar: false,
      size: 4 + Math.random() * 5,
    });
  }
}

function createFloatingText(text, x, y, color = '#7cd328') {
  state.floatingTexts.push({
    text: text,
    x: x,
    y: y,
    vy: -1.2,
    alpha: 1,
    fade: 0.016,
    scale: 1,
    color: color,
  });
}

function triggerGameOver(reason) {
  state.currentState = GAME_STATES.GAMEOVER;
  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }

  SoundManager.playGameOver();

  DOM.comboBadge.classList.add('hidden');
  DOM.endApples.textContent = state.applesEaten;
  if (DOM.endSpeed) DOM.endSpeed.textContent = `${state.topSpeedReached.toFixed(1)}x`;
  DOM.endCombo.textContent = `${state.maxCombo}x`;
  DOM.endBiome.textContent = `${state.currentBiome.icon} ${state.currentBiome.name}`;
  DOM.overlayGameOverStats.classList.remove('hidden');

  showOverlay('GAME OVER!', `${reason} • Score: ${state.score}`, 'PLAY AGAIN');
}

function resetGame() {
  state.score = 0;
  state.applesEaten = 0;
  state.bombStrikes = 0;
  state.comboCount = 0;
  state.maxCombo = 1;
  state.screenShake = 0;
  state.topSpeedReached = 1.0;
  state.ghostEndTime = 0;
  state.frenzyEndTime = 0;
  DOM.currentScore.textContent = '0';
  DOM.comboBadge.classList.add('hidden');
  DOM.overlayGameOverStats.classList.add('hidden');
  DOM.biomeBanner.classList.add('hidden');
  updateBombHUD();

  state.hasShield = false;
  state.slowMoEndTime = 0;
  state.magnetEndTime = 0;
  state.activePowerUpItem = null;
  updatePowerUpHUD(performance.now());
  calculateCurrentSpeed(performance.now());

  initBiomeEnvironment(BIOMES.JUNGLE);

  state.direction = DIRECTIONS.RIGHT;
  state.currentHeadAngle = DIRECTIONS.RIGHT.angle;
  state.targetHeadAngle = DIRECTIONS.RIGHT.angle;
  state.inputQueue = [];
  state.particles = [];
  state.floatingTexts = [];
  state.bombs = [];
  state.activeFruit = null;
  state.accumulator = 0;
  state.lastFrameTime = 0;
  state.nextBombSpawn = performance.now() + 7000;
  state.nextPowerUpSpawn = performance.now() + 9000;

  const startX = Math.floor(CONFIG.COLS / 4);
  const startY = Math.floor(CONFIG.ROWS / 2);
  state.snake = [];
  for (let i = 0; i < CONFIG.INITIAL_SNAKE_LEN; i++) {
    state.snake.push({
      x: startX - i,
      y: startY,
      prevX: startX - i,
      prevY: startY,
    });
  }

  spawnFruit(performance.now());
}

function startGame() {
  SoundManager.init();
  closeSkinsModal();
  closeTrophiesModal();
  resetGame();
  state.currentState = GAME_STATES.PLAYING;
  if (DOM.pauseIcon) DOM.pauseIcon.textContent = '⏸️';
  hideOverlay();
  triggerHaptic(25);
  SoundManager.playBg();
  state.lastFrameTime = performance.now();
  state.animationFrameId = requestAnimationFrame(gameLoop);
}

function togglePause() {
  if (state.currentState === GAME_STATES.PLAYING) {
    state.currentState = GAME_STATES.PAUSED;
    if (state.animationFrameId) cancelAnimationFrame(state.animationFrameId);
    if (DOM.pauseIcon) DOM.pauseIcon.textContent = '▶️';
    triggerHaptic(15);
    SoundManager.pauseBg();
    showOverlay('GAME PAUSED', 'Press P, Space, or Tap ▶️ to resume!', 'RESUME');
  } else if (state.currentState === GAME_STATES.PAUSED) {
    state.currentState = GAME_STATES.PLAYING;
    if (DOM.pauseIcon) DOM.pauseIcon.textContent = '⏸️';
    triggerHaptic(15);
    hideOverlay();
    SoundManager.resumeBg();
    state.lastFrameTime = performance.now();
    state.animationFrameId = requestAnimationFrame(gameLoop);
  }
}

// =============================================================================
// 11. Seamless Procedural Graphics Pipeline (No Grid Lines)
// =============================================================================
function render(currentTime) {
  const rect = DOM.canvas.getBoundingClientRect();
  const width = rect.width || 720;
  const height = rect.height || 480;
  const cellSize = width / CONFIG.COLS;
  const currentStepSpeed = state.currentSpeedMs || CONFIG.START_SPEED_MS;
  const interpolation = Math.min(1, state.accumulator / currentStepSpeed);

  DOM.ctx.save();
  if (state.screenShake > 0) {
    const dx = (Math.random() - 0.5) * state.screenShake;
    const dy = (Math.random() - 0.5) * state.screenShake;
    DOM.ctx.translate(dx, dy);
  }

  // 1. Seamless Organic Biome Field (No Rigid Grids)
  drawSeamlessBiomeGround(width, height);

  // 2. Procedural Biome Tile Elements & Flora
  drawBiomeDecorations(cellSize);

  // 3. Biome Ambient Particles
  drawAmbientParticles(currentTime);

  // 4. Power-Up Pickup Item on Field
  if (state.activePowerUpItem) {
    const elapsed = currentTime - state.activePowerUpItem.spawnTime;
    const progress = Math.max(0, 1 - elapsed / state.activePowerUpItem.duration);
    if (state.activePowerUpItem.type === 'shield') {
      draw3DShieldItem(state.activePowerUpItem.x, state.activePowerUpItem.y, cellSize, currentTime, progress);
    } else if (state.activePowerUpItem.type === 'freeze') {
      draw3DFreezeItem(state.activePowerUpItem.x, state.activePowerUpItem.y, cellSize, currentTime, progress);
    } else if (state.activePowerUpItem.type === 'magnet') {
      draw3DMagnetItem(state.activePowerUpItem.x, state.activePowerUpItem.y, cellSize, currentTime, progress);
    } else if (state.activePowerUpItem.type === 'ghost') {
      draw3DGhostItem(state.activePowerUpItem.x, state.activePowerUpItem.y, cellSize, currentTime, progress);
    } else if (state.activePowerUpItem.type === 'frenzy') {
      draw3DStarItem(state.activePowerUpItem.x, state.activePowerUpItem.y, cellSize, currentTime, progress);
    } else if (state.activePowerUpItem.type === 'heart') {
      draw3DHeartItem(state.activePowerUpItem.x, state.activePowerUpItem.y, cellSize, currentTime, progress);
    }
  }

  // 5. Universal 5-Second Fruit with Circular Countdown Gauge
  if (state.activeFruit) {
    const elapsed = currentTime - state.activeFruit.spawnTime;
    const progress = Math.max(0, 1 - elapsed / state.activeFruit.duration);

    if (state.activeFruit.type === 'apple') {
      draw3DApple(state.activeFruit.x, state.activeFruit.y, cellSize, currentTime, progress);
    } else if (state.activeFruit.type === 'mango') {
      draw3DMango(state.activeFruit.x, state.activeFruit.y, cellSize, currentTime, progress);
    } else if (state.activeFruit.type === 'banana') {
      draw3DBanana(state.activeFruit.x, state.activeFruit.y, cellSize, currentTime, progress);
    } else if (state.activeFruit.type === 'mystery') {
      draw3DMysteryFruit(state.activeFruit.x, state.activeFruit.y, cellSize, currentTime, progress);
    }
  }

  // 6. Active Hazard Bombs
  state.bombs.forEach(bomb => {
    draw3DBomb(bomb.x, bomb.y, cellSize, currentTime);
  });

  // 7. Snake Body & Expressive 3D Head with Selected Skin
  drawSmoothSnakeBody(cellSize, interpolation, width, height, currentTime);
  drawSmoothSnakeHead(cellSize, interpolation, width, height, currentTime);

  // 8. Visual FX Popups
  drawParticles();
  drawFloatingTexts();

  DOM.ctx.restore();
}

function drawSeamlessBiomeGround(width, height) {
  const biome = state.currentBiome;

  // 1. Rich Deep Surface Base
  const bgGrad = DOM.ctx.createRadialGradient(
    width / 2, height / 2, width * 0.1,
    width / 2, height / 2, width * 0.7
  );
  bgGrad.addColorStop(0, biome.bgGrad[0]);
  bgGrad.addColorStop(0.65, biome.bgGrad[1]);
  bgGrad.addColorStop(1, biome.bgGrad[2]);

  DOM.ctx.fillStyle = bgGrad;
  DOM.ctx.fillRect(0, 0, width, height);

  // 2. Soft Ambient Lighting / Vignette
  DOM.ctx.save();
  if (biome.id === 'jungle') {
    const meadowGrad = DOM.ctx.createRadialGradient(width * 0.3, height * 0.3, 10, width * 0.3, height * 0.3, 280);
    meadowGrad.addColorStop(0, 'rgba(124, 211, 40, 0.08)');
    meadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    DOM.ctx.fillStyle = meadowGrad;
    DOM.ctx.fillRect(0, 0, width, height);
  } else if (biome.id === 'volcano') {
    const lavaGrad = DOM.ctx.createRadialGradient(width * 0.5, height * 0.6, 20, width * 0.5, height * 0.6, 320);
    lavaGrad.addColorStop(0, 'rgba(255, 69, 0, 0.15)');
    lavaGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    DOM.ctx.fillStyle = lavaGrad;
    DOM.ctx.fillRect(0, 0, width, height);
  } else if (biome.id === 'cyber') {
    const matrixGrad = DOM.ctx.createLinearGradient(0, height, 0, 0);
    matrixGrad.addColorStop(0, 'rgba(0, 240, 255, 0.12)');
    matrixGrad.addColorStop(0.6, 'rgba(255, 0, 127, 0.06)');
    matrixGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    DOM.ctx.fillStyle = matrixGrad;
    DOM.ctx.fillRect(0, 0, width, height);
  } else if (biome.id === 'glacier') {
    const frostGrad = DOM.ctx.createRadialGradient(width * 0.5, height * 0.5, 40, width * 0.5, height * 0.5, 300);
    frostGrad.addColorStop(0, 'rgba(165, 243, 252, 0.12)');
    frostGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    DOM.ctx.fillStyle = frostGrad;
    DOM.ctx.fillRect(0, 0, width, height);
  }
  DOM.ctx.restore();

  // 3. Glowing Outer Boundary Wall
  DOM.ctx.save();
  DOM.ctx.strokeStyle = biome.wallBorder;
  DOM.ctx.lineWidth = 3;
  DOM.ctx.shadowColor = biome.wallShadow;
  DOM.ctx.shadowBlur = 14;
  DOM.ctx.strokeRect(1.5, 1.5, width - 3, height - 3);
  DOM.ctx.restore();
}

function drawBiomeDecorations(cellSize) {
  const biome = state.currentBiome;

  state.biomeDecorations.forEach(item => {
    const px = item.x * cellSize + item.offsetX * cellSize;
    const py = item.y * cellSize + item.offsetY * cellSize;
    const s = cellSize * 0.14 * item.scale;

    DOM.ctx.save();

    if (biome.decorationType === 'jungle') {
      if (item.variant === 0) {
        DOM.ctx.fillStyle = 'rgba(255, 110, 160, 0.75)';
        DOM.ctx.beginPath();
        DOM.ctx.arc(px - s, py, s * 0.8, 0, Math.PI * 2);
        DOM.ctx.arc(px + s, py, s * 0.8, 0, Math.PI * 2);
        DOM.ctx.arc(px, py - s, s * 0.8, 0, Math.PI * 2);
        DOM.ctx.arc(px, py + s, s * 0.8, 0, Math.PI * 2);
        DOM.ctx.fill();
        DOM.ctx.fillStyle = '#ffe600';
        DOM.ctx.beginPath();
        DOM.ctx.arc(px, py, s * 0.6, 0, Math.PI * 2);
        DOM.ctx.fill();
      } else {
        DOM.ctx.strokeStyle = 'rgba(124, 211, 40, 0.45)';
        DOM.ctx.lineWidth = 1.8;
        DOM.ctx.beginPath();
        DOM.ctx.moveTo(px, py + s);
        DOM.ctx.lineTo(px - s * 0.8, py - s);
        DOM.ctx.moveTo(px, py + s);
        DOM.ctx.lineTo(px + s * 0.8, py - s);
        DOM.ctx.stroke();
      }
    } else if (biome.decorationType === 'volcano') {
      DOM.ctx.strokeStyle = item.variant === 0 ? 'rgba(255, 69, 0, 0.75)' : 'rgba(255, 170, 0, 0.65)';
      DOM.ctx.lineWidth = 2;
      DOM.ctx.shadowColor = '#ff3300';
      DOM.ctx.shadowBlur = 8;
      DOM.ctx.beginPath();
      DOM.ctx.moveTo(px - s * 1.5, py - s * 0.5);
      DOM.ctx.lineTo(px, py + s);
      DOM.ctx.lineTo(px + s * 1.5, py - s);
      DOM.ctx.stroke();
    } else if (biome.decorationType === 'cyber') {
      DOM.ctx.strokeStyle = item.variant === 0 ? 'rgba(0, 240, 255, 0.65)' : 'rgba(255, 0, 127, 0.55)';
      DOM.ctx.lineWidth = 1.6;
      DOM.ctx.shadowColor = '#00f0ff';
      DOM.ctx.shadowBlur = 6;
      DOM.ctx.beginPath();
      DOM.ctx.moveTo(px - s, py);
      DOM.ctx.lineTo(px + s, py);
      DOM.ctx.moveTo(px, py - s);
      DOM.ctx.lineTo(px, py + s);
      DOM.ctx.stroke();
    } else {
      DOM.ctx.fillStyle = 'rgba(165, 243, 252, 0.75)';
      DOM.ctx.shadowColor = '#bae6fd';
      DOM.ctx.shadowBlur = 8;
      DOM.ctx.beginPath();
      DOM.ctx.moveTo(px, py - s * 1.3);
      DOM.ctx.lineTo(px + s * 0.8, py);
      DOM.ctx.lineTo(px, py + s * 1.3);
      DOM.ctx.lineTo(px - s * 0.8, py);
      DOM.ctx.closePath();
      DOM.ctx.fill();
    }

    DOM.ctx.restore();
  });
}

function drawAmbientParticles(currentTime) {
  state.ambientParticles.forEach(p => {
    const pulse = Math.sin(currentTime * 0.003 + p.phase);
    const alpha = Math.max(0.12, p.alpha + pulse * 0.25);

    DOM.ctx.save();
    DOM.ctx.fillStyle = p.color ;
    DOM.ctx.globalAlpha = alpha ;
    DOM.ctx.shadowColor = p.color ;
    DOM.ctx.shadowBlur = 8 ;

    if (state.currentBiome.particleType === 'pixel') {
      DOM.ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    } else {
      DOM.ctx.beginPath() ;
      DOM.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2) ;
      DOM.ctx.fill() ;
    }
    DOM.ctx.restore();
  });
}

// --- POWER-UP ITEMS DRAWING HELPERS ---

function draw3DShieldItem(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;
  const bob = Math.sin(currentTime * 0.007) * (cellSize * 0.06);

  DOM.ctx.save();
  drawTimerRing(cx, cy + bob, radius * 1.35, progress, '#00f0ff', currentTime);

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, cy + bob, radius, 0, Math.PI * 2);
  const orbGrad = DOM.ctx.createRadialGradient(cx - radius * 0.3, cy + bob - radius * 0.3, radius * 0.1, cx, cy + bob, radius);
  orbGrad.addColorStop(0, '#ffffff');
  orbGrad.addColorStop(0.4, '#00f0ff');
  orbGrad.addColorStop(1, '#005588');
  DOM.ctx.fillStyle = orbGrad;
  DOM.ctx.shadowColor = '#00f0ff';
  DOM.ctx.shadowBlur = 14;
  DOM.ctx.fill();

  DOM.ctx.fillStyle = '#ffffff';
  DOM.ctx.beginPath();
  DOM.ctx.moveTo(cx, cy + bob - radius * 0.5);
  DOM.ctx.lineTo(cx + radius * 0.45, cy + bob - radius * 0.2);
  DOM.ctx.lineTo(cx + radius * 0.35, cy + bob + radius * 0.4);
  DOM.ctx.lineTo(cx, cy + bob + radius * 0.6);
  DOM.ctx.lineTo(cx - radius * 0.35, cy + bob + radius * 0.4);
  DOM.ctx.lineTo(cx - radius * 0.45, cy + bob - radius * 0.2);
  DOM.ctx.closePath();
  DOM.ctx.fill();

  DOM.ctx.restore();
}

function draw3DFreezeItem(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;
  const bob = Math.sin(currentTime * 0.007 + 1) * (cellSize * 0.06);

  DOM.ctx.save();
  drawTimerRing(cx, cy + bob, radius * 1.35, progress, '#38bdf8', currentTime);

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, cy + bob, radius, 0, Math.PI * 2);
  const clockGrad = DOM.ctx.createRadialGradient(cx - radius * 0.3, cy + bob - radius * 0.3, radius * 0.1, cx, cy + bob, radius);
  clockGrad.addColorStop(0, '#e0f2fe');
  clockGrad.addColorStop(0.5, '#38bdf8');
  clockGrad.addColorStop(1, '#0369a1');
  DOM.ctx.fillStyle = clockGrad;
  DOM.ctx.shadowColor = '#38bdf8';
  DOM.ctx.shadowBlur = 12;
  DOM.ctx.fill();

  DOM.ctx.strokeStyle = '#ffffff';
  DOM.ctx.lineWidth = 2.5;
  DOM.ctx.lineCap = 'round';
  DOM.ctx.beginPath();
  DOM.ctx.moveTo(cx, cy + bob);
  DOM.ctx.lineTo(cx, cy + bob - radius * 0.55);
  DOM.ctx.moveTo(cx, cy + bob);
  DOM.ctx.lineTo(cx + radius * 0.4, cy + bob);
  DOM.ctx.stroke();

  DOM.ctx.restore();
}

function draw3DMagnetItem(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;
  const bob = Math.sin(currentTime * 0.007 + 2) * (cellSize * 0.06);

  DOM.ctx.save();
  drawTimerRing(cx, cy + bob, radius * 1.35, progress, '#ff007f', currentTime);

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, cy + bob - radius * 0.1, radius * 0.75, Math.PI, 0);
  DOM.ctx.lineWidth = radius * 0.5;
  DOM.ctx.strokeStyle = '#ff0055';
  DOM.ctx.shadowColor = '#ff007f';
  DOM.ctx.shadowBlur = 12;
  DOM.ctx.stroke();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, cy + bob - radius * 0.1, radius * 0.75, 0, Math.PI * 0.3);
  DOM.ctx.lineWidth = radius * 0.52;
  DOM.ctx.strokeStyle = '#00f0ff';
  DOM.ctx.stroke();

  DOM.ctx.restore();
}

function draw3DGhostItem(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;
  const bob = Math.sin(currentTime * 0.008 + 3) * (cellSize * 0.06);
  const gy = cy + bob;

  DOM.ctx.save();
  drawTimerRing(cx, gy, radius * 1.35, progress, '#a855f7', currentTime);

  // Ethereal Ghost Body
  DOM.ctx.save();
  DOM.ctx.shadowColor = '#a855f7';
  DOM.ctx.shadowBlur = 16;
  const ghostGrad = DOM.ctx.createRadialGradient(cx, gy - radius * 0.2, radius * 0.1, cx, gy, radius);
  ghostGrad.addColorStop(0, '#ffffff');
  ghostGrad.addColorStop(0.5, '#d8b4fe');
  ghostGrad.addColorStop(1, '#9333ea');
  DOM.ctx.fillStyle = ghostGrad;

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, gy - radius * 0.15, radius * 0.75, Math.PI, 0, false);
  DOM.ctx.lineTo(cx + radius * 0.75, gy + radius * 0.65);
  // Wavy bottom skirt
  DOM.ctx.quadraticCurveTo(cx + radius * 0.45, gy + radius * 0.35, cx + radius * 0.25, gy + radius * 0.65);
  DOM.ctx.quadraticCurveTo(cx, gy + radius * 0.35, cx - radius * 0.25, gy + radius * 0.65);
  DOM.ctx.quadraticCurveTo(cx - radius * 0.45, gy + radius * 0.35, cx - radius * 0.75, gy + radius * 0.65);
  DOM.ctx.closePath();
  DOM.ctx.fill();

  // Ghost Eyes
  DOM.ctx.fillStyle = '#1e1035';
  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx - radius * 0.3, gy - radius * 0.15, radius * 0.16, radius * 0.24, 0, 0, Math.PI * 2);
  DOM.ctx.ellipse(cx + radius * 0.3, gy - radius * 0.15, radius * 0.16, radius * 0.24, 0, 0, Math.PI * 2);
  DOM.ctx.fill();

  // Eye shines
  DOM.ctx.fillStyle = '#00f0ff';
  DOM.ctx.beginPath();
  DOM.ctx.arc(cx - radius * 0.3 + 1.5, gy - radius * 0.2, radius * 0.08, 0, Math.PI * 2);
  DOM.ctx.arc(cx + radius * 0.3 + 1.5, gy - radius * 0.2, radius * 0.08, 0, Math.PI * 2);
  DOM.ctx.fill();
  DOM.ctx.restore();

  DOM.ctx.restore();
}

function draw3DStarItem(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.42;
  const bob = Math.sin(currentTime * 0.007 + 4) * (cellSize * 0.06);
  const sy = cy + bob;

  DOM.ctx.save();
  drawTimerRing(cx, sy, radius * 1.35, progress, '#ffd700', currentTime);

  DOM.ctx.save();
  DOM.ctx.translate(cx, sy);
  DOM.ctx.rotate(currentTime * 0.002);

  DOM.ctx.beginPath();
  const spikes = 5;
  const outer = radius * 0.85;
  const inner = radius * 0.42;
  let rot = Math.PI / 2 * 3;
  let x = 0;
  let y = 0;
  const step = Math.PI / spikes;

  DOM.ctx.moveTo(0, -outer);
  for (let i = 0; i < spikes; i++) {
    x = Math.cos(rot) * outer;
    y = Math.sin(rot) * outer;
    DOM.ctx.lineTo(x, y);
    rot += step;

    x = Math.cos(rot) * inner;
    y = Math.sin(rot) * inner;
    DOM.ctx.lineTo(x, y);
    rot += step;
  }
  DOM.ctx.lineTo(0, -outer);
  DOM.ctx.closePath();

  const starGrad = DOM.ctx.createRadialGradient(0, 0, inner * 0.2, 0, 0, outer);
  starGrad.addColorStop(0, '#ffffff');
  starGrad.addColorStop(0.35, '#fff275');
  starGrad.addColorStop(0.75, '#ffd700');
  starGrad.addColorStop(1, '#f59e0b');

  DOM.ctx.fillStyle = starGrad;
  DOM.ctx.shadowColor = '#ffd700';
  DOM.ctx.shadowBlur = 18;
  DOM.ctx.fill();
  DOM.ctx.strokeStyle = '#d97706';
  DOM.ctx.lineWidth = 1.5;
  DOM.ctx.stroke();

  DOM.ctx.restore();
  DOM.ctx.restore();
}

function draw3DHeartItem(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;
  const pulse = 1 + Math.sin(currentTime * 0.012) * 0.08;
  const bob = Math.sin(currentTime * 0.007 + 5) * (cellSize * 0.06);
  const hy = cy + bob;

  DOM.ctx.save();
  drawTimerRing(cx, hy, radius * 1.35, progress, '#ff3377', currentTime);

  DOM.ctx.save();
  DOM.ctx.translate(cx, hy - radius * 0.1);
  DOM.ctx.scale(pulse, pulse);

  DOM.ctx.beginPath();
  const d = radius * 0.75;
  DOM.ctx.moveTo(0, d * 0.6);
  DOM.ctx.bezierCurveTo(-d * 1.2, -d * 0.4, -d * 0.8, -d * 1.1, 0, -d * 0.45);
  DOM.ctx.bezierCurveTo(d * 0.8, -d * 1.1, d * 1.2, -d * 0.4, 0, d * 0.6);
  DOM.ctx.closePath();

  const heartGrad = DOM.ctx.createRadialGradient(-d * 0.2, -d * 0.3, d * 0.1, 0, 0, d * 1.1);
  heartGrad.addColorStop(0, '#ff99bb');
  heartGrad.addColorStop(0.35, '#ff3377');
  heartGrad.addColorStop(0.8, '#e6004c');
  heartGrad.addColorStop(1, '#990033');

  DOM.ctx.fillStyle = heartGrad;
  DOM.ctx.shadowColor = '#ff3377';
  DOM.ctx.shadowBlur = 16;
  DOM.ctx.fill();

  // Heart Shine
  DOM.ctx.beginPath();
  DOM.ctx.arc(-d * 0.35, -d * 0.4, d * 0.18, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  DOM.ctx.fill();

  DOM.ctx.restore();
  DOM.ctx.restore();
}

function draw3DMysteryFruit(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.42;
  const bob = Math.sin(currentTime * 0.007) * (cellSize * 0.06);
  const my = cy + bob;

  DOM.ctx.save();
  drawTimerRing(cx, my, radius * 1.35, progress, '#ffd700', currentTime);

  // Shadow
  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx, cy + cellSize * 0.35, radius * 0.9, radius * 0.35, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  DOM.ctx.fill();

  // Gift Box Body
  DOM.ctx.save();
  const boxGrad = DOM.ctx.createLinearGradient(cx - radius * 0.6, my - radius * 0.6, cx + radius * 0.6, my + radius * 0.6);
  boxGrad.addColorStop(0, '#fff275');
  boxGrad.addColorStop(0.4, '#ffd700');
  boxGrad.addColorStop(0.8, '#f59e0b');
  boxGrad.addColorStop(1, '#b45309');

  DOM.ctx.fillStyle = boxGrad;
  DOM.ctx.shadowColor = '#ffd700';
  DOM.ctx.shadowBlur = 18;
  DOM.ctx.beginPath();
  DOM.ctx.roundRect(cx - radius * 0.6, my - radius * 0.5, radius * 1.2, radius * 1.1, 6);
  DOM.ctx.fill();

  // Ribbon Cross
  DOM.ctx.fillStyle = '#ff007f';
  DOM.ctx.shadowColor = '#ff007f';
  DOM.ctx.shadowBlur = 8;
  DOM.ctx.fillRect(cx - radius * 0.15, my - radius * 0.5, radius * 0.3, radius * 1.1);
  DOM.ctx.fillRect(cx - radius * 0.6, my - radius * 0.05, radius * 1.2, radius * 0.25);

  // Ribbon Bow
  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx - radius * 0.25, my - radius * 0.65, radius * 0.25, radius * 0.15, -Math.PI / 6, 0, Math.PI * 2);
  DOM.ctx.ellipse(cx + radius * 0.25, my - radius * 0.65, radius * 0.25, radius * 0.15, Math.PI / 6, 0, Math.PI * 2);
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, my - radius * 0.65, radius * 0.12, 0, Math.PI * 2);
  DOM.ctx.fillStyle = '#ffe066';
  DOM.ctx.fill();

  DOM.ctx.restore();
  DOM.ctx.restore();
}

// --- FRUIT & BOMB DRAWING HELPERS ---

function draw3DApple(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;
  const bobOffset = Math.sin(currentTime * 0.005) * (cellSize * 0.06);
  const appleY = cy + bobOffset;

  DOM.ctx.save();
  drawTimerRing(cx, appleY, radius * 1.35, progress, '#ff3344', currentTime);

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx, cy + cellSize * 0.35, radius * 0.9, radius * 0.35, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  DOM.ctx.fill();

  const appleGrad = DOM.ctx.createRadialGradient(
    cx - radius * 0.35, appleY - radius * 0.35, radius * 0.1,
    cx, appleY, radius * 1.15
  );
  appleGrad.addColorStop(0, '#ff6b7d');
  appleGrad.addColorStop(0.3, '#ff2e43');
  appleGrad.addColorStop(0.85, '#cc0e24');
  appleGrad.addColorStop(1, '#7a0512');

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx - radius * 0.28, appleY, radius * 0.78, 0, Math.PI * 2);
  DOM.ctx.arc(cx + radius * 0.28, appleY, radius * 0.78, 0, Math.PI * 2);
  DOM.ctx.fillStyle = appleGrad;
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.strokeStyle = '#5a3512';
  DOM.ctx.lineWidth = Math.max(2, cellSize * 0.08);
  DOM.ctx.lineCap = 'round';
  DOM.ctx.moveTo(cx, appleY - radius * 0.5);
  DOM.ctx.quadraticCurveTo(cx + radius * 0.2, appleY - radius * 0.9, cx + radius * 0.35, appleY - radius * 1.1);
  DOM.ctx.stroke();

  DOM.ctx.beginPath();
  DOM.ctx.fillStyle = '#7cd328';
  DOM.ctx.ellipse(cx + radius * 0.45, appleY - radius * 0.85, radius * 0.38, radius * 0.18, -Math.PI / 4, 0, Math.PI * 2);
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx - radius * 0.35, appleY - radius * 0.35, radius * 0.2, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  DOM.ctx.fill();
  DOM.ctx.restore();
}

function draw3DMango(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.42;
  const bobOffset = Math.sin(currentTime * 0.006) * (cellSize * 0.06);
  const my = cy + bobOffset;

  DOM.ctx.save();
  drawTimerRing(cx, my, radius * 1.35, progress, '#ff7700', currentTime);

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx, cy + cellSize * 0.35, radius * 0.9, radius * 0.35, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  DOM.ctx.fill();

  const mangoGrad = DOM.ctx.createRadialGradient(
    cx - radius * 0.3, my - radius * 0.3, radius * 0.1,
    cx, my, radius * 1.1
  );
  mangoGrad.addColorStop(0, '#ffe600');
  mangoGrad.addColorStop(0.45, '#ff8800');
  mangoGrad.addColorStop(0.85, '#e62e00');
  mangoGrad.addColorStop(1, '#991100');

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx, my, radius * 0.75, radius * 0.95, Math.PI / 8, 0, Math.PI * 2);
  DOM.ctx.fillStyle = mangoGrad;
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.fillStyle = '#44aa08';
  DOM.ctx.ellipse(cx - radius * 0.2, my - radius * 0.9, radius * 0.4, radius * 0.18, -Math.PI / 3, 0, Math.PI * 2);
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx - radius * 0.3, my - radius * 0.35, radius * 0.22, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  DOM.ctx.fill();
  DOM.ctx.restore();
}

function draw3DBanana(tileX, tileY, cellSize, currentTime, progress) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.42;
  const bobOffset = Math.sin(currentTime * 0.006 + 1) * (cellSize * 0.06);
  const by = cy + bobOffset;

  DOM.ctx.save();
  drawTimerRing(cx, by, radius * 1.35, progress, '#ffe600', currentTime);

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx, cy + cellSize * 0.35, radius * 0.9, radius * 0.35, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx - radius * 0.4, by - radius * 0.2, radius * 0.95, -Math.PI * 0.25, Math.PI * 0.45);
  DOM.ctx.arc(cx - radius * 0.1, by - radius * 0.1, radius * 0.82, Math.PI * 0.45, -Math.PI * 0.25, true);
  DOM.ctx.closePath();

  const bananaGrad = DOM.ctx.createLinearGradient(cx - radius, by - radius, cx + radius, by + radius);
  bananaGrad.addColorStop(0, '#7cd328');
  bananaGrad.addColorStop(0.3, '#ffe600');
  bananaGrad.addColorStop(0.8, '#ffcc00');
  bananaGrad.addColorStop(1, '#885500');

  DOM.ctx.fillStyle = bananaGrad;
  DOM.ctx.fill();
  DOM.ctx.strokeStyle = '#664400';
  DOM.ctx.lineWidth = 1.2;
  DOM.ctx.stroke();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx + radius * 0.15, by + radius * 0.1, radius * 0.15, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  DOM.ctx.fill();
  DOM.ctx.restore();
}

function draw3DBomb(tileX, tileY, cellSize, currentTime) {
  const cx = tileX * cellSize + cellSize / 2;
  const cy = tileY * cellSize + cellSize / 2;
  const radius = cellSize * 0.38;

  DOM.ctx.save();
  DOM.ctx.beginPath();
  DOM.ctx.ellipse(cx, cy + cellSize * 0.35, radius * 0.9, radius * 0.35, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  DOM.ctx.fill();

  const bombGrad = DOM.ctx.createRadialGradient(
    cx - radius * 0.35, cy - radius * 0.35, radius * 0.1,
    cx, cy, radius * 1.15
  );
  bombGrad.addColorStop(0, '#555e66');
  bombGrad.addColorStop(0.4, '#242a2e');
  bombGrad.addColorStop(0.85, '#121517');
  bombGrad.addColorStop(1, '#050708');

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  DOM.ctx.fillStyle = bombGrad;
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.rect(cx - radius * 0.3, cy - radius * 1.1, radius * 0.6, radius * 0.25);
  DOM.ctx.fillStyle = '#6b7280';
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.strokeStyle = '#d97706';
  DOM.ctx.lineWidth = 2.5;
  DOM.ctx.lineCap = 'round';
  DOM.ctx.moveTo(cx, cy - radius * 1.1);
  DOM.ctx.quadraticCurveTo(cx + radius * 0.4, cy - radius * 1.4, cx + radius * 0.6, cy - radius * 1.6);
  DOM.ctx.stroke();

  const sparkGlow = Math.sin(currentTime * 0.02) > 0 ? '#ff1133' : '#ffe600';
  DOM.ctx.beginPath();
  DOM.ctx.arc(cx + radius * 0.6, cy - radius * 1.6, 4, 0, Math.PI * 2);
  DOM.ctx.fillStyle = sparkGlow;
  DOM.ctx.shadowColor = '#ff5500';
  DOM.ctx.shadowBlur = 12;
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.arc(cx, cy - 1, radius * 0.28, 0, Math.PI * 2);
  DOM.ctx.fillStyle = 'rgba(255, 17, 51, 0.85)';
  DOM.ctx.fill();
  DOM.ctx.restore();
}

function drawTimerRing(x, y, radius, progress, color, currentTime) {
  DOM.ctx.save();
  let ringColor = color;
  if (progress < 0.3) {
    const isFlashing = Math.sin(currentTime * 0.03) > 0;
    ringColor = isFlashing ? '#ff1133' : '#ffffff';
  }

  DOM.ctx.beginPath();
  DOM.ctx.arc(x, y, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
  DOM.ctx.strokeStyle = ringColor;
  DOM.ctx.lineWidth = 3;
  DOM.ctx.shadowColor = ringColor;
  DOM.ctx.shadowBlur = 8;
  DOM.ctx.stroke();
  DOM.ctx.restore();
}

// --- SNAKE RENDERING WITH UNLOCKED SKINS & ACCESSORIES ---

function getInterpolatedSegmentPos(segment, cellSize, t, segmentIndex, width, height, currentTime) {
  const startX = segment.prevX * cellSize + cellSize / 2;
  const startY = segment.prevY * cellSize + cellSize / 2;
  const endX = segment.x * cellSize + cellSize / 2;
  const endY = segment.y * cellSize + cellSize / 2;

  let renderX = startX + (endX - startX) * t;
  let renderY = startY + (endY - startY) * t;

  if (state.currentState === GAME_STATES.PLAYING) {
    const wave = Math.sin(currentTime * 0.012 + segmentIndex * 0.7) * (cellSize * 0.04);
    if (state.direction.x !== 0) renderY += wave;
    else renderX += wave;
  }

  renderX = Math.max(cellSize * 0.45, Math.min(width - cellSize * 0.45, renderX));
  renderY = Math.max(cellSize * 0.45, Math.min(height - cellSize * 0.45, renderY));

  return { x: renderX, y: renderY };
}

function drawSmoothSnakeBody(cellSize, t, width, height, currentTime) {
  const len = state.snake.length;
  if (len <= 1) return;

  const skin = state.activeSkin;
  const isGhostActive = currentTime < state.ghostEndTime;
  const isFrenzyActive = currentTime < state.frenzyEndTime;
  const positions = state.snake.map((seg, idx) =>
    getInterpolatedSegmentPos(seg, cellSize, t, idx, width, height, currentTime)
  );

  for (let i = len - 1; i >= 1; i--) {
    const pos = positions[i];
    const prevPos = positions[i - 1];
    const isTail = (i === len - 1);
    const taperProgress = i / len;
    const baseRadius = (cellSize * 0.42) * (1 - taperProgress * 0.28);

    DOM.ctx.save();

    if (isGhostActive) {
      DOM.ctx.globalAlpha = 0.55 + Math.sin(currentTime * 0.01 + i * 0.3) * 0.2;
      DOM.ctx.shadowColor = '#a855f7';
      DOM.ctx.shadowBlur = 14;
    } else if (isFrenzyActive) {
      DOM.ctx.shadowColor = '#ffd700';
      DOM.ctx.shadowBlur = 12;
    }

    DOM.ctx.beginPath();
    DOM.ctx.arc(pos.x + 2, pos.y + 4, baseRadius, 0, Math.PI * 2);
    DOM.ctx.fillStyle = isGhostActive ? 'rgba(168, 85, 247, 0.25)' : 'rgba(0, 0, 0, 0.38)';
    DOM.ctx.fill();

    DOM.ctx.beginPath();
    DOM.ctx.strokeStyle = isGhostActive ? '#d8b4fe' : skin.bodyColors[2];
    DOM.ctx.lineWidth = baseRadius * 1.88;
    DOM.ctx.lineCap = 'round';
    DOM.ctx.moveTo(pos.x, pos.y);
    DOM.ctx.lineTo(prevPos.x, prevPos.y);
    DOM.ctx.stroke();

    const bodyGrad = DOM.ctx.createRadialGradient(
      pos.x - baseRadius * 0.3, pos.y - baseRadius * 0.3, baseRadius * 0.1,
      pos.x, pos.y, baseRadius * 1.15
    );
    if (isGhostActive) {
      bodyGrad.addColorStop(0, '#ffffff');
      bodyGrad.addColorStop(0.35, '#d8b4fe');
      bodyGrad.addColorStop(0.75, '#a855f7');
      bodyGrad.addColorStop(1, '#6b21a8');
    } else {
      bodyGrad.addColorStop(0, skin.bodyColors[0]);
      bodyGrad.addColorStop(0.35, skin.bodyColors[1]);
      bodyGrad.addColorStop(0.75, skin.bodyColors[2]);
      bodyGrad.addColorStop(1, skin.bodyColors[3]);
    }

    DOM.ctx.beginPath();
    DOM.ctx.arc(pos.x, pos.y, baseRadius, 0, Math.PI * 2);
    DOM.ctx.fillStyle = bodyGrad;
    DOM.ctx.fill();

    DOM.ctx.beginPath();
    DOM.ctx.arc(pos.x + baseRadius * 0.2, pos.y + baseRadius * 0.2, baseRadius * 0.55, 0, Math.PI * 2);
    DOM.ctx.fillStyle = isGhostActive ? 'rgba(0, 240, 255, 0.35)' : 'rgba(255, 255, 255, 0.2)';
    DOM.ctx.fill();

    if (isTail) {
      DOM.ctx.beginPath();
      DOM.ctx.arc(pos.x, pos.y, baseRadius * 0.65, 0, Math.PI * 2);
      DOM.ctx.fillStyle = isGhostActive ? '#c084fc' : skin.bodyColors[1];
      DOM.ctx.fill();
    }

    DOM.ctx.restore();
  }
}

function drawSmoothSnakeHead(cellSize, t, width, height, currentTime) {
  const head = state.snake[0];
  const skin = state.activeSkin;
  const isGhostActive = currentTime < state.ghostEndTime;
  const isFrenzyActive = currentTime < state.frenzyEndTime;

  const startX = head.prevX * cellSize + cellSize / 2;
  const startY = head.prevY * cellSize + cellSize / 2;
  const endX = head.x * cellSize + cellSize / 2;
  const endY = head.y * cellSize + cellSize / 2;

  let cx = startX + (endX - startX) * t;
  let cy = startY + (endY - startY) * t;

  cx = Math.max(cellSize * 0.48, Math.min(width - cellSize * 0.48, cx));
  cy = Math.max(cellSize * 0.48, Math.min(height - cellSize * 0.48, cy));
  const radius = cellSize * 0.52;

  DOM.ctx.save();

  if (isGhostActive) {
    DOM.ctx.globalAlpha = 0.7 + Math.sin(currentTime * 0.01) * 0.2;
  }

  DOM.ctx.translate(cx, cy);
  DOM.ctx.rotate(state.currentHeadAngle);

  // 1. Forcefield Energy Shield Aura
  if (state.hasShield) {
    DOM.ctx.save();
    const shieldPulse = Math.sin(currentTime * 0.008) * 3;
    DOM.ctx.beginPath();
    DOM.ctx.arc(0, 0, radius * 1.5 + shieldPulse, 0, Math.PI * 2);
    DOM.ctx.strokeStyle = 'rgba(0, 240, 255, 0.85)';
    DOM.ctx.lineWidth = 3;
    DOM.ctx.shadowColor = '#00f0ff';
    DOM.ctx.shadowBlur = 18;
    DOM.ctx.stroke();
    DOM.ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
    DOM.ctx.fill();
    DOM.ctx.restore();
  }

  // 2. Ghost Phase Aura
  if (isGhostActive) {
    DOM.ctx.save();
    const ghostPulse = Math.sin(currentTime * 0.01) * 4;
    DOM.ctx.beginPath();
    DOM.ctx.arc(0, 0, radius * 1.4 + ghostPulse, 0, Math.PI * 2);
    DOM.ctx.strokeStyle = 'rgba(168, 85, 247, 0.85)';
    DOM.ctx.lineWidth = 2.5;
    DOM.ctx.shadowColor = '#a855f7';
    DOM.ctx.shadowBlur = 20;
    DOM.ctx.stroke();
    DOM.ctx.fillStyle = 'rgba(168, 85, 247, 0.15)';
    DOM.ctx.fill();
    DOM.ctx.restore();
  }

  // 3. Star Frenzy Sparkle Aura
  if (isFrenzyActive) {
    DOM.ctx.save();
    const frenzyPulse = Math.sin(currentTime * 0.015) * 3;
    DOM.ctx.beginPath();
    DOM.ctx.arc(0, 0, radius * 1.35 + frenzyPulse, 0, Math.PI * 2);
    DOM.ctx.strokeStyle = 'rgba(255, 215, 0, 0.9)';
    DOM.ctx.lineWidth = 2;
    DOM.ctx.shadowColor = '#ffd700';
    DOM.ctx.shadowBlur = 16;
    DOM.ctx.stroke();
    DOM.ctx.restore();
  }

  // 4. Fruit Magnet Waves
  if (currentTime < state.magnetEndTime) {
    DOM.ctx.save();
    const magWave = (currentTime * 0.005) % 1;
    DOM.ctx.beginPath();
    DOM.ctx.arc(radius * 0.8, 0, radius * 0.8 + magWave * radius * 0.9, -Math.PI * 0.35, Math.PI * 0.35);
    DOM.ctx.strokeStyle = `rgba(255, 0, 127, ${1 - magWave})`;
    DOM.ctx.lineWidth = 2.5;
    DOM.ctx.shadowColor = '#ff007f';
    DOM.ctx.shadowBlur = 10;
    DOM.ctx.stroke();
    DOM.ctx.restore();
  }

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(0, 4, radius * 0.95, radius * 0.85, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = isGhostActive ? 'rgba(168, 85, 247, 0.3)' : 'rgba(0, 0, 0, 0.42)';
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(radius * 0.1, radius * 0.15, radius * 0.75, radius * 0.6, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = isGhostActive ? '#e9d5ff' : skin.underbelly;
  DOM.ctx.fill();

  const headGrad = DOM.ctx.createRadialGradient(
    -radius * 0.2, -radius * 0.3, radius * 0.1,
    0, 0, radius * 1.1
  );
  if (isGhostActive) {
    headGrad.addColorStop(0, '#ffffff');
    headGrad.addColorStop(0.35, '#d8b4fe');
    headGrad.addColorStop(0.8, '#a855f7');
    headGrad.addColorStop(1, '#581c87');
  } else {
    headGrad.addColorStop(0, skin.headColors[0]);
    headGrad.addColorStop(0.35, skin.headColors[1]);
    headGrad.addColorStop(0.8, skin.headColors[2]);
    headGrad.addColorStop(1, skin.headColors[3]);
  }

  DOM.ctx.beginPath();
  DOM.ctx.moveTo(radius * 0.75, 0);
  DOM.ctx.bezierCurveTo(radius * 0.75, radius * 0.65, radius * 0.2, radius * 0.85, -radius * 0.55, radius * 0.6);
  DOM.ctx.bezierCurveTo(-radius * 0.85, 0, -radius * 0.85, 0, -radius * 0.55, -radius * 0.6);
  DOM.ctx.bezierCurveTo(radius * 0.2, -radius * 0.85, radius * 0.75, -radius * 0.65, radius * 0.75, 0);
  DOM.ctx.fillStyle = headGrad;
  DOM.ctx.fill();
  DOM.ctx.strokeStyle = isGhostActive ? '#c084fc' : skin.headColors[3];
  DOM.ctx.lineWidth = 1.5;
  DOM.ctx.stroke();

  // Draw Mouth & Smile
  DOM.ctx.beginPath();
  DOM.ctx.ellipse(radius * 0.2, 0, radius * 0.45, radius * 0.28, 0, -Math.PI / 2, Math.PI / 2);
  DOM.ctx.fillStyle = '#420b16';
  DOM.ctx.fill();

  DOM.ctx.beginPath();
  DOM.ctx.ellipse(radius * 0.32, 0, radius * 0.25, radius * 0.14, 0, 0, Math.PI * 2);
  DOM.ctx.fillStyle = '#ff6f89';
  DOM.ctx.fill();

  // Cosmetic Accessories (Horns, Crown, Visor, Crest)
  drawSkinCosmetic(skin, radius);

  drawCartoonEyes(skin, radius);
  DOM.ctx.restore();
}

function drawSkinCosmetic(skin, radius) {
  if (skin.cosmetic === 'horns') {
    DOM.ctx.save();
    DOM.ctx.fillStyle = '#ffe600';
    DOM.ctx.shadowColor = '#ff3300';
    DOM.ctx.shadowBlur = 8;
    // Top Horn
    DOM.ctx.beginPath();
    DOM.ctx.moveTo(-radius * 0.4, -radius * 0.5);
    DOM.ctx.lineTo(-radius * 0.9, -radius * 0.85);
    DOM.ctx.lineTo(-radius * 0.2, -radius * 0.65);
    DOM.ctx.fill();
    // Bottom Horn
    DOM.ctx.beginPath();
    DOM.ctx.moveTo(-radius * 0.4, radius * 0.5);
    DOM.ctx.lineTo(-radius * 0.9, radius * 0.85);
    DOM.ctx.lineTo(-radius * 0.2, radius * 0.65);
    DOM.ctx.fill();
    DOM.ctx.restore();
  } else if (skin.cosmetic === 'crown') {
    DOM.ctx.save();
    DOM.ctx.fillStyle = '#ffd700';
    DOM.ctx.shadowColor = '#ffd700';
    DOM.ctx.shadowBlur = 10;
    DOM.ctx.beginPath();
    DOM.ctx.moveTo(-radius * 0.6, -radius * 0.45);
    DOM.ctx.lineTo(-radius * 0.95, -radius * 0.65);
    DOM.ctx.lineTo(-radius * 0.7, 0);
    DOM.ctx.lineTo(-radius * 0.95, radius * 0.65);
    DOM.ctx.lineTo(-radius * 0.6, radius * 0.45);
    DOM.ctx.closePath();
    DOM.ctx.fill();
    DOM.ctx.fillStyle = '#a855f7';
    DOM.ctx.beginPath();
    DOM.ctx.arc(-radius * 0.65, 0, radius * 0.12, 0, Math.PI * 2);
    DOM.ctx.fill();
    DOM.ctx.restore();
  } else if (skin.cosmetic === 'visor') {
    DOM.ctx.save();
    DOM.ctx.fillStyle = '#00f0ff';
    DOM.ctx.shadowColor = '#00f0ff';
    DOM.ctx.shadowBlur = 12;
    DOM.ctx.fillRect(-radius * 0.1, -radius * 0.5, radius * 0.4, radius * 1.0);
    DOM.ctx.restore();
  } else if (skin.cosmetic === 'crest') {
    DOM.ctx.save();
    DOM.ctx.fillStyle = '#ffffff';
    DOM.ctx.shadowColor = '#38bdf8';
    DOM.ctx.shadowBlur = 10;
    DOM.ctx.beginPath();
    DOM.ctx.moveTo(-radius * 0.7, 0);
    DOM.ctx.lineTo(-radius * 0.3, -radius * 0.35);
    DOM.ctx.lineTo(radius * 0.1, 0);
    DOM.ctx.lineTo(-radius * 0.3, radius * 0.35);
    DOM.ctx.closePath();
    DOM.ctx.fill();
    DOM.ctx.restore();
  }
}

function drawCartoonEyes(skin, radius) {
  if (skin.cosmetic === 'visor') return; // Visor covers eyes with cyber glow

  const eyeRadius = radius * 0.38;
  const eyeOffsetX = -radius * 0.05;
  const eyeOffsetY = radius * 0.48;

  const eyes = [
    { x: eyeOffsetX, y: -eyeOffsetY },
    { x: eyeOffsetX, y: eyeOffsetY },
  ];

  eyes.forEach(eye => {
    DOM.ctx.save();

    if (state.isBlinking) {
      DOM.ctx.strokeStyle = skin.headColors[3];
      DOM.ctx.lineWidth = 3;
      DOM.ctx.lineCap = 'round';
      DOM.ctx.beginPath();
      DOM.ctx.arc(eye.x, eye.y, eyeRadius * 0.8, -Math.PI * 0.3, Math.PI * 0.3);
      DOM.ctx.stroke();
      DOM.ctx.restore();
      return;
    }

    DOM.ctx.beginPath();
    DOM.ctx.arc(eye.x, eye.y, eyeRadius * 1.15, 0, Math.PI * 2);
    DOM.ctx.fillStyle = skin.headColors[2];
    DOM.ctx.fill();

    DOM.ctx.beginPath();
    DOM.ctx.arc(eye.x, eye.y, eyeRadius, 0, Math.PI * 2);
    DOM.ctx.fillStyle = '#ffffff';
    DOM.ctx.fill();

    const pupilShiftX = eyeRadius * 0.25;
    const irisRadius = eyeRadius * 0.72;
    DOM.ctx.beginPath();
    DOM.ctx.arc(eye.x + pupilShiftX, eye.y, irisRadius, 0, Math.PI * 2);
    const irisGrad = DOM.ctx.createRadialGradient(
      eye.x + pupilShiftX, eye.y, irisRadius * 0.2,
      eye.x + pupilShiftX, eye.y, irisRadius
    );
    irisGrad.addColorStop(0, skin.irisColors[0]);
    irisGrad.addColorStop(0.7, skin.irisColors[1]);
    irisGrad.addColorStop(1, skin.irisColors[2]);
    DOM.ctx.fillStyle = irisGrad;
    DOM.ctx.fill();

    const pupilRadius = irisRadius * 0.65;
    DOM.ctx.beginPath();
    DOM.ctx.arc(eye.x + pupilShiftX, eye.y, pupilRadius, 0, Math.PI * 2);
    DOM.ctx.fillStyle = '#080d06';
    DOM.ctx.fill();

    DOM.ctx.beginPath();
    DOM.ctx.arc(eye.x + pupilShiftX - pupilRadius * 0.35, eye.y - pupilRadius * 0.35, pupilRadius * 0.42, 0, Math.PI * 2);
    DOM.ctx.fillStyle = '#ffffff';
    DOM.ctx.fill();

    DOM.ctx.beginPath();
    DOM.ctx.arc(eye.x + pupilShiftX + pupilRadius * 0.35, eye.y + pupilRadius * 0.35, pupilRadius * 0.2, 0, Math.PI * 2);
    DOM.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    DOM.ctx.fill();

    DOM.ctx.restore();
  });
}

function drawParticles() {
  state.particles.forEach(p => {
    DOM.ctx.save();
    DOM.ctx.globalAlpha = p.alpha;
    DOM.ctx.fillStyle = p.color;

    if (p.isStar) {
      DOM.ctx.beginPath();
      const s = p.size * p.scale;
      DOM.ctx.moveTo(p.x, p.y - s);
      DOM.ctx.quadraticCurveTo(p.x, p.y, p.x + s, p.y);
      DOM.ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + s);
      DOM.ctx.quadraticCurveTo(p.x, p.y, p.x - s, p.y);
      DOM.ctx.quadraticCurveTo(p.x, p.y, p.x, p.y - s);
      DOM.ctx.fill();
    } else {
      DOM.ctx.beginPath();
      DOM.ctx.arc(p.x, p.y, (p.size / 2) * p.scale, 0, Math.PI * 2);
      DOM.ctx.fill();
    }
    DOM.ctx.restore();
  });
}

function drawFloatingTexts() {
  state.floatingTexts.forEach(ft => {
    DOM.ctx.save();
    DOM.ctx.globalAlpha = ft.alpha;
    DOM.ctx.font = `bold ${Math.round(18 * ft.scale)}px "Fredoka", sans-serif`;
    DOM.ctx.fillStyle = ft.color;
    DOM.ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    DOM.ctx.shadowBlur = 6;
    DOM.ctx.textAlign = 'center';
    DOM.ctx.fillText(ft.text, ft.x, ft.y);
    DOM.ctx.restore();
  });
}

function showOverlay(title, subtitle, btnText) {
  DOM.overlayTitle.textContent = title;
  DOM.overlaySubtitle.textContent = subtitle;
  DOM.startBtn.querySelector('.btn-text').textContent = btnText;
  DOM.overlay.classList.remove('hidden');
}

function hideOverlay() {
  DOM.overlay.classList.add('hidden');
}

function queueDirection(dir) {
  if (state.currentState !== GAME_STATES.PLAYING) return;
  if (state.inputQueue.length < 2) {
    state.inputQueue.push(dir);
    triggerHaptic(10);
  }
}

function handleTouchStart(e) {
  SoundManager.init();
  if (e.touches && e.touches.length > 0) {
    state.touchStartX = e.touches[0].clientX;
    state.touchStartY = e.touches[0].clientY;
  }
}

function handleTouchMove(e) {
  if (state.currentState === GAME_STATES.PLAYING && e.cancelable) {
    e.preventDefault();
  }
}

function handleTouchEnd(e) {
  if (state.currentState !== GAME_STATES.PLAYING) return;
  if (!e.changedTouches || e.changedTouches.length === 0) return;

  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const dx = endX - state.touchStartX;
  const dy = endY - state.touchStartY;

  const minSwipeDist = 18;
  if (Math.abs(dx) < minSwipeDist && Math.abs(dy) < minSwipeDist) return;

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0) queueDirection(DIRECTIONS.RIGHT);
    else queueDirection(DIRECTIONS.LEFT);
  } else {
    if (dy > 0) queueDirection(DIRECTIONS.DOWN);
    else queueDirection(DIRECTIONS.UP);
  }
}

function setupEventListeners() {
  DOM.startBtn.addEventListener('click', () => {
    if (state.currentState === GAME_STATES.READY || state.currentState === GAME_STATES.GAMEOVER) {
      startGame();
    } else if (state.currentState === GAME_STATES.PAUSED) {
      togglePause();
    }
  });

  DOM.soundBtn.addEventListener('click', () => {
    SoundManager.init();
    SoundManager.toggleMute();
  });

  DOM.skinsBtn.addEventListener('click', openSkinsModal);
  DOM.modalSkinsBtn.addEventListener('click', openSkinsModal);
  DOM.hudMascotBadge.addEventListener('click', openSkinsModal);
  DOM.closeSkinsBtn.addEventListener('click', closeSkinsModal);

  if (DOM.trophiesBtn) DOM.trophiesBtn.addEventListener('click', openTrophiesModal);
  if (DOM.modalTrophiesBtn) DOM.modalTrophiesBtn.addEventListener('click', openTrophiesModal);
  if (DOM.closeTrophiesBtn) DOM.closeTrophiesBtn.addEventListener('click', closeTrophiesModal);

  // On-Screen Mobile Pause Button
  if (DOM.pauseBtn) {
    DOM.pauseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      SoundManager.init();
      togglePause();
    });
  }

  // Mobile Full-Screen Touch Swipe Navigation
  if (DOM.screenWrapper) {
    DOM.screenWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    DOM.screenWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    DOM.screenWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
  }

  // Global touch listener for first-gesture WebAudio unlock
  window.addEventListener('touchstart', () => {
    SoundManager.init();
  }, { once: true, passive: true });

  // Virtual Touch D-Pad Buttons
  if (DOM.dpadUp) DOM.dpadUp.addEventListener('click', (e) => { e.preventDefault(); queueDirection(DIRECTIONS.UP); });
  if (DOM.dpadDown) DOM.dpadDown.addEventListener('click', (e) => { e.preventDefault(); queueDirection(DIRECTIONS.DOWN); });
  if (DOM.dpadLeft) DOM.dpadLeft.addEventListener('click', (e) => { e.preventDefault(); queueDirection(DIRECTIONS.LEFT); });
  if (DOM.dpadRight) DOM.dpadRight.addEventListener('click', (e) => { e.preventDefault(); queueDirection(DIRECTIONS.RIGHT); });

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', () => {
    setupCanvasResolution();
    render(performance.now());
  });
}

function handleKeyDown(event) {
  const key = event.key.toLowerCase();

  if (key === 'k') {
    event.preventDefault();
    if (DOM.skinsOverlay.classList.contains('hidden')) openSkinsModal();
    else closeSkinsModal();
    return;
  }

  if (key === 't') {
    event.preventDefault();
    if (DOM.trophiesOverlay && DOM.trophiesOverlay.classList.contains('hidden')) openTrophiesModal();
    else if (DOM.trophiesOverlay) closeTrophiesModal();
    return;
  }

  if (key === 'escape') {
    if (!DOM.skinsOverlay.classList.contains('hidden')) {
      closeSkinsModal();
      return;
    }
    if (DOM.trophiesOverlay && !DOM.trophiesOverlay.classList.contains('hidden')) {
      closeTrophiesModal();
      return;
    }
  }

  if (key === ' ' || key === 'spacebar') {
    event.preventDefault();
    if (!DOM.skinsOverlay.classList.contains('hidden')) {
      closeSkinsModal();
      return;
    }
    if (DOM.trophiesOverlay && !DOM.trophiesOverlay.classList.contains('hidden')) {
      closeTrophiesModal();
      return;
    }
    if (state.currentState === GAME_STATES.READY || state.currentState === GAME_STATES.GAMEOVER) {
      startGame();
    } else {
      togglePause();
    }
    return;
  }

  if (key === 'p') {
    event.preventDefault();
    if (state.currentState === GAME_STATES.PLAYING || state.currentState === GAME_STATES.PAUSED) {
      togglePause();
    }
    return;
  }

  if (key === 'm') {
    event.preventDefault();
    SoundManager.init();
    SoundManager.toggleMute();
    return;
  }

  if (state.currentState !== GAME_STATES.PLAYING) return;

  let requestedDir = null;
  switch (key) {
    case 'arrowup': case 'w': requestedDir = DIRECTIONS.UP; break;
    case 'arrowdown': case 's': requestedDir = DIRECTIONS.DOWN; break;
    case 'arrowleft': case 'a': requestedDir = DIRECTIONS.LEFT; break;
    case 'arrowright': case 'd': requestedDir = DIRECTIONS.RIGHT; break;
  }

  if (requestedDir) {
    event.preventDefault();
    queueDirection(requestedDir);
  }
}

function saveHighScore(score) {
  try {
    localStorage.setItem(CONFIG.STORAGE_KEY_HS, score.toString());
  } catch (e) {}
}

window.addEventListener('DOMContentLoaded', init);
