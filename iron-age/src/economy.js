// 턴마다 실행되는 경제 계산 엔진

const UNIT_COST = {
  infantry:  { supplies: 8,  manpower: 2 },
  armor:     { supplies: 28, manpower: 1 },
  artillery: { supplies: 18, manpower: 1 },
  airforce:  { supplies: 22, manpower: 1 },
  navy:      { supplies: 30, manpower: 1 },
};

function calcEconomy(countries, territories) {
  Object.values(countries).forEach(c => {

    // 1. 지배 영토에서 공장 보너스 계산
    const ownedTerritories = territories.filter(t => t.owner === c.id);
    const bonusFactories = Math.floor(ownedTerritories.length / 5);

    // 2. 민수품 생산
    const totalCivFac = c.civFactories + bonusFactories;
    const consumerNeed = Math.ceil((c.civFactories + c.milFactories) / 2);
    c.consumer += totalCivFac * 5;

    // 3. 소비재 부족 시 안정도 하락
    if (c.consumer < consumerNeed) {
      c.stability = Math.max(0, c.stability - 3);
    } else {
      c.consumer -= consumerNeed;
      c.stability = Math.min(100, c.stability + 1); // 안정도 서서히 회복
    }

    // 4. 군수품 생산 (안정도에 비례)
    const stabilityMod = c.stability / 100;
    c.supplies += Math.floor(c.milFactories * 8 * stabilityMod);

    // 5. 징집 (턴마다 자동으로 소량 회복)
    c.manpower = Math.min(c.manpower + 5, getMaxManpower(c.id));
  });
}

function getMaxManpower(countryId) {
  const maxMap = {
    germany: 800, ussr: 1200, uk: 500, france: 400, italy: 350,
    poland: 150, hungary: 80, romania: 100,
  };
  return maxMap[countryId] || 50;
}

// 유닛 생산 가능 여부 체크
function canBuildUnit(country, unitType) {
  const cost = UNIT_COST[unitType];
  if (!cost) return false;
  return country.supplies >= cost.supplies && country.manpower >= cost.manpower;
}

// 유닛 생산 실행
function buildUnit(country, unitType) {
  if (!canBuildUnit(country, unitType)) return false;
  const cost = UNIT_COST[unitType];
  country.supplies  -= cost.supplies;
  country.manpower  -= cost.manpower;
  country.units[unitType] = (country.units[unitType] || 0) + 1;
  return true;
}