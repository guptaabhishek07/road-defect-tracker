export function computeAnalytics(defects) {
    const countByType = {};
    defects.forEach(d => {
      countByType[d.type] = (countByType[d.type] || 0) + 1;
    });
    return countByType;
  }
  