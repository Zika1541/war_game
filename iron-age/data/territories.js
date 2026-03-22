const TERRITORIES = [

  // ── 독일 영역 ──────────────────────────────────
  { id: 'berlin',       name: '베를린',     owner: 'germany', x: 420, y: 195, w: 85, h: 50, population: 45, factories: 8,  resource: '철강',   adjacent: ['hamburg','dresden','breslau','prague'] },
  { id: 'hamburg',      name: '함부르크',   owner: 'germany', x: 380, y: 150, w: 85, h: 50, population: 18, factories: 5,  resource: '항구',   adjacent: ['berlin','ruhr','denmark'] },
  { id: 'ruhr',         name: '루르',       owner: 'germany', x: 310, y: 195, w: 85, h: 50, population: 30, factories: 12, resource: '석탄',   adjacent: ['hamburg','berlin','cologne','brussels'] },
  { id: 'cologne',      name: '쾰른',       owner: 'germany', x: 300, y: 245, w: 85, h: 50, population: 20, factories: 6,  resource: '공업',   adjacent: ['ruhr','brussels','paris_north','munich'] },
  { id: 'munich',       name: '뮌헨',       owner: 'germany', x: 390, y: 270, w: 85, h: 50, population: 22, factories: 7,  resource: '공업',   adjacent: ['cologne','dresden','vienna','milan'] },
  { id: 'dresden',      name: '드레스덴',   owner: 'germany', x: 435, y: 235, w: 85, h: 50, population: 16, factories: 5,  resource: '화학',   adjacent: ['berlin','munich','breslau','prague'] },
  { id: 'breslau',      name: '브레슬라우', owner: 'germany', x: 480, y: 210, w: 85, h: 50, population: 14, factories: 4,  resource: '철강',   adjacent: ['berlin','dresden','warsaw','krakow'] },
  { id: 'konigsberg',   name: '쾨니히스베르크', owner: 'germany', x: 510, y: 155, w: 95, h: 50, population: 10, factories: 3, resource: '항구', adjacent: ['berlin','memel','riga'] },

  // ── 프랑스 영역 ────────────────────────────────
  { id: 'paris',        name: '파리',       owner: 'france',  x: 248, y: 268, w: 85, h: 50, population: 50, factories: 9,  resource: '공업',   adjacent: ['paris_north','lyon','brussels','cologne'] },
  { id: 'paris_north',  name: '북프랑스',   owner: 'france',  x: 248, y: 218, w: 85, h: 50, population: 20, factories: 5,  resource: '농업',   adjacent: ['paris','brussels','cologne'] },
  { id: 'lyon',         name: '리옹',       owner: 'france',  x: 265, y: 318, w: 85, h: 50, population: 25, factories: 6,  resource: '공업',   adjacent: ['paris','marseille','milan','bern'] },
  { id: 'marseille',    name: '마르세유',   owner: 'france',  x: 275, y: 368, w: 85, h: 50, population: 18, factories: 4,  resource: '항구',   adjacent: ['lyon','barcelona','genoa'] },

  // ── 영국 영역 ──────────────────────────────────
  { id: 'london',       name: '런던',       owner: 'uk',      x: 195, y: 165, w: 85, h: 50, population: 80, factories: 10, resource: '항구',   adjacent: ['birmingham','paris_north'] },
  { id: 'birmingham',   name: '버밍엄',     owner: 'uk',      x: 180, y: 120, w: 85, h: 50, population: 30, factories: 7,  resource: '석탄',   adjacent: ['london','edinburgh'] },
  { id: 'edinburgh',    name: '에딘버러',   owner: 'uk',      x: 168, y: 75,  w: 85, h: 50, population: 15, factories: 3,  resource: '석탄',   adjacent: ['birmingham'] },

  // ── 소련 영역 ──────────────────────────────────
  { id: 'moscow',       name: '모스크바',   owner: 'ussr',    x: 620, y: 155, w: 85, h: 50, population: 70, factories: 12, resource: '공업',   adjacent: ['leningrad','minsk','stalingrad','kiev'] },
  { id: 'leningrad',    name: '레닌그라드', owner: 'ussr',    x: 590, y: 105, w: 90, h: 50, population: 40, factories: 8,  resource: '항구',   adjacent: ['moscow','tallinn','helsinki'] },
  { id: 'minsk',        name: '민스크',     owner: 'ussr',    x: 555, y: 185, w: 85, h: 50, population: 20, factories: 4,  resource: '농업',   adjacent: ['moscow','kiev','warsaw','riga'] },
  { id: 'kiev',         name: '키예프',     owner: 'ussr',    x: 570, y: 250, w: 85, h: 50, population: 35, factories: 6,  resource: '농업',   adjacent: ['moscow','minsk','odessa','bucharest'] },
  { id: 'stalingrad',   name: '스탈린그라드', owner: 'ussr',  x: 650, y: 250, w: 90, h: 50, population: 25, factories: 7, resource: '석유',   adjacent: ['moscow','kiev','baku'] },
  { id: 'baku',         name: '바쿠',       owner: 'ussr',    x: 690, y: 330, w: 75, h: 50, population: 15, factories: 3,  resource: '석유',   adjacent: ['stalingrad'] },
  { id: 'odessa',       name: '오데사',     owner: 'ussr',    x: 570, y: 305, w: 85, h: 50, population: 18, factories: 3,  resource: '항구',   adjacent: ['kiev','bucharest'] },

  // ── 폴란드 영역 ────────────────────────────────
  { id: 'warsaw',       name: '바르샤바',   owner: 'poland',  x: 498, y: 190, w: 85, h: 50, population: 30, factories: 4,  resource: '농업',   adjacent: ['breslau','konigsberg','minsk','krakow'] },
  { id: 'krakow',       name: '크라쿠프',   owner: 'poland',  x: 480, y: 250, w: 85, h: 50, population: 18, factories: 3,  resource: '석탄',   adjacent: ['warsaw','breslau','budapest','lviv'] },
  { id: 'lviv',         name: '르비프',     owner: 'poland',  x: 535, y: 255, w: 75, h: 50, population: 12, factories: 2,  resource: '농업',   adjacent: ['krakow','minsk','bucharest'] },

  // ── 이탈리아 영역 ──────────────────────────────
  { id: 'milan',        name: '밀라노',     owner: 'italy',   x: 340, y: 308, w: 75, h: 50, population: 28, factories: 7,  resource: '공업',   adjacent: ['munich','lyon','genoa','rome'] },
  { id: 'genoa',        name: '제노바',     owner: 'italy',   x: 318, y: 358, w: 75, h: 50, population: 15, factories: 4,  resource: '항구',   adjacent: ['milan','marseille','rome'] },
  { id: 'rome',         name: '로마',       owner: 'italy',   x: 370, y: 385, w: 75, h: 50, population: 35, factories: 5,  resource: '공업',   adjacent: ['milan','genoa','naples'] },
  { id: 'naples',       name: '나폴리',     owner: 'italy',   x: 390, y: 435, w: 75, h: 50, population: 20, factories: 3,  resource: '항구',   adjacent: ['rome'] },

  // ── 오스트리아/체코 (독일 병합) ───────────────
  { id: 'vienna',       name: '빈',         owner: 'germany', x: 438, y: 295, w: 75, h: 50, population: 25, factories: 5,  resource: '공업',   adjacent: ['munich','dresden','budapest','milan'] },
  { id: 'prague',       name: '프라하',     owner: 'germany', x: 418, y: 255, w: 75, h: 50, population: 20, factories: 6,  resource: '공업',   adjacent: ['berlin','dresden','munich','vienna'] },

  // ── 헝가리/루마니아/발칸 ───────────────────────
  { id: 'budapest',     name: '부다페스트', owner: 'hungary', x: 468, y: 305, w: 85, h: 50, population: 22, factories: 4,  resource: '농업',   adjacent: ['vienna','krakow','bucharest','belgrade'] },
  { id: 'bucharest',    name: '부쿠레슈티', owner: 'romania', x: 535, y: 325, w: 85, h: 50, population: 20, factories: 3,  resource: '석유',   adjacent: ['budapest','odessa','lviv','sofia'] },
  { id: 'belgrade',     name: '베오그라드', owner: 'yugoslavia', x: 468, y: 360, w: 85, h: 50, population: 16, factories: 2, resource: '농업', adjacent: ['budapest','sofia','athens','rome'] },
  { id: 'sofia',        name: '소피아',     owner: 'bulgaria', x: 515, y: 385, w: 75, h: 50, population: 12, factories: 2, resource: '농업',  adjacent: ['bucharest','belgrade','athens'] },
  { id: 'athens',       name: '아테네',     owner: 'greece',  x: 498, y: 445, w: 75, h: 50, population: 14, factories: 2,  resource: '항구',   adjacent: ['sofia','belgrade'] },

  // ── 스페인/포르투갈 ────────────────────────────
  { id: 'madrid',       name: '마드리드',   owner: 'spain',   x: 155, y: 350, w: 80, h: 50, population: 28, factories: 4,  resource: '농업',   adjacent: ['barcelona','lisbon','marseille'] },
  { id: 'barcelona',    name: '바르셀로나', owner: 'spain',   x: 222, y: 368, w: 80, h: 50, population: 18, factories: 4,  resource: '항구',   adjacent: ['madrid','marseille'] },
  { id: 'lisbon',       name: '리스본',     owner: 'portugal', x: 108, y: 368, w: 75, h: 50, population: 12, factories: 2, resource: '항구',  adjacent: ['madrid'] },

  // ── 베네룩스/스칸디나비아 ──────────────────────
  { id: 'brussels',     name: '브뤼셀',     owner: 'belgium', x: 285, y: 178, w: 80, h: 50, population: 16, factories: 5,  resource: '공업',   adjacent: ['paris','paris_north','ruhr','cologne','amsterdam'] },
  { id: 'amsterdam',    name: '암스테르담', owner: 'netherlands', x: 298, y: 130, w: 85, h: 50, population: 14, factories: 5, resource: '항구', adjacent: ['brussels','hamburg'] },
  { id: 'copenhagen',   name: '코펜하겐',   owner: 'denmark', x: 368, y: 102, w: 85, h: 50, population: 12, factories: 3,  resource: '항구',   adjacent: ['hamburg','oslo','stockholm'] },
  { id: 'oslo',         name: '오슬로',     owner: 'norway',  x: 338, y: 58,  w: 75, h: 50, population: 10, factories: 2,  resource: '항구',   adjacent: ['copenhagen','stockholm'] },
  { id: 'stockholm',    name: '스톡홀름',   owner: 'sweden',  x: 418, y: 58,  w: 85, h: 50, population: 16, factories: 4,  resource: '철강',   adjacent: ['oslo','copenhagen','helsinki'] },
  { id: 'helsinki',     name: '헬싱키',     owner: 'finland', x: 510, y: 68,  w: 80, h: 50, population: 8,  factories: 2,  resource: '목재',   adjacent: ['stockholm','leningrad','tallinn'] },

  // ── 발트 3국 ───────────────────────────────────
  { id: 'tallinn',      name: '탈린',       owner: 'estonia', x: 548, y: 108, w: 75, h: 50, population: 5,  factories: 1,  resource: '항구',   adjacent: ['helsinki','leningrad','riga'] },
  { id: 'riga',         name: '리가',       owner: 'latvia',  x: 548, y: 148, w: 75, h: 50, population: 6,  factories: 1,  resource: '항구',   adjacent: ['tallinn','minsk','konigsberg','vilnius'] },
  { id: 'vilnius',      name: '빌뉴스',     owner: 'lithuania', x: 525, y: 185, w: 75, h: 50, population: 5, factories: 1, resource: '농업',  adjacent: ['riga','minsk','warsaw'] },
  { id: 'memel',        name: '메멜',       owner: 'germany', x: 520, y: 140, w: 65, h: 45, population: 3,  factories: 1,  resource: '항구',   adjacent: ['konigsberg','riga'] },

  // ── 중동/북아프리카 (선택 영토) ───────────────
  { id: 'tunis',        name: '튀니스',     owner: 'france',  x: 340, y: 478, w: 75, h: 45, population: 8,  factories: 1,  resource: '항구',   adjacent: ['naples','tripoli'] },
  { id: 'tripoli',      name: '트리폴리',   owner: 'italy',   x: 388, y: 490, w: 75, h: 45, population: 5,  factories: 1,  resource: '석유',   adjacent: ['tunis','naples'] },
];