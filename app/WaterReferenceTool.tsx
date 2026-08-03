"use client";

import { useMemo, useState } from "react";

type WaterType = "general" | "lake";
type IndicatorKey = "ph" | "do" | "ammonia" | "tp" | "codmn";

type Indicator = {
  key: IndicatorKey;
  label: string;
  unit: string;
  placeholder: string;
};

type Finding = {
  title: string;
  possibleFactors: string;
  possibleEffect: string;
  nextStep: string;
};

const indicators: Indicator[] = [
  { key: "ph", label: "pH", unit: "无量纲", placeholder: "例如 7.2" },
  { key: "do", label: "溶解氧（DO）", unit: "mg/L", placeholder: "例如 5.8" },
  { key: "ammonia", label: "氨氮（NH₃-N）", unit: "mg/L", placeholder: "例如 0.65" },
  { key: "tp", label: "总磷（TP）", unit: "mg/L", placeholder: "例如 0.12" },
  { key: "codmn", label: "高锰酸盐指数（CODMn）", unit: "mg/L", placeholder: "例如 4.6" },
];

const emptyValues: Record<IndicatorKey, string> = {
  ph: "",
  do: "",
  ammonia: "",
  tp: "",
  codmn: "",
};

function referenceText(key: IndicatorKey, waterType: WaterType) {
  if (key === "ph") return "6—9";
  if (key === "do") return "≥ 5 mg/L";
  if (key === "ammonia") return "≤ 1.0 mg/L";
  if (key === "tp") return waterType === "lake" ? "≤ 0.05 mg/L" : "≤ 0.20 mg/L";
  return "≤ 6 mg/L";
}

function withinReference(key: IndicatorKey, value: number, waterType: WaterType) {
  if (key === "ph") return value >= 6 && value <= 9;
  if (key === "do") return value >= 5;
  if (key === "ammonia") return value <= 1;
  if (key === "tp") return value <= (waterType === "lake" ? 0.05 : 0.2);
  return value <= 6;
}

function buildFinding(key: IndicatorKey, value: number): Finding {
  if (key === "ph") {
    const direction = value < 6 ? "偏酸" : "偏碱";
    return {
      title: `pH${direction}，酸碱度需要关注`,
      possibleFactors: "可能与天然地质背景、藻类活动或酸碱性排水输入有关。",
      possibleEffect: "酸碱度明显偏离适宜范围时，水生生物和部分水处理过程可能受到影响。",
      nextStep: "在不同时段复测，并同步查看藻类、电导率、碱度和附近排水口。",
    };
  }

  if (key === "do") {
    return {
      title: "溶解氧不足，水体可能存在缺氧压力",
      possibleFactors: "可能与水流缓慢、水温较高、有机物分解、藻类夜间呼吸或污水径流输入有关。",
      possibleEffect: "鱼类和底栖生物可能受压，严重时可能出现异味、浮头等现象。",
      nextStep: "清晨与午后分别复测，同时记录水温、流速、藻类和有机物输入。",
    };
  }

  if (key === "ammonia") {
    return {
      title: "氨氮偏高，含氮污染压力较明显",
      possibleFactors: "可能与生活污水、养殖排放、肥料径流、有机物分解或硝化不足有关。",
      possibleEffect: "水体耗氧和水生生物受损风险可能增加，也提示需要关注污水或养殖输入。",
      nextStep: "排查排水口、养殖投喂和雨后径流，并复测总氮、亚硝酸盐氮和溶解氧。",
    };
  }

  if (key === "tp") {
    return {
      title: "总磷偏高，富营养化风险上升",
      possibleFactors: "可能与生活污水、肥料和雨水径流、养殖饵料或底泥释放有关。",
      possibleEffect: "藻类增殖、水体透明度下降和溶解氧波动的可能性会增大。",
      nextStep: "复测总氮、叶绿素a和透明度，并查看岸边施肥、排水口及底泥扰动。",
    };
  }

  return {
    title: "高锰酸盐指数偏高，有机污染压力需要关注",
    possibleFactors: "可能与生活污水、地表径流、腐败植物残体等可氧化有机物输入有关。",
    possibleEffect: "有机物分解会消耗氧气，水体出现浑浊、异味或缺氧的风险可能增加。",
    nextStep: "复测COD、BOD₅和溶解氧，重点排查污水及其他有机物输入。",
  };
}

export default function WaterReferenceTool() {
  const [waterType, setWaterType] = useState<WaterType>("general");
  const [values, setValues] = useState(emptyValues);

  const results = useMemo(
    () =>
      indicators.map((indicator) => {
        const raw = values[indicator.key].trim();
        const numeric = raw === "" ? null : Number(raw);
        const valid = numeric !== null && Number.isFinite(numeric) && numeric >= 0;

        return {
          ...indicator,
          raw,
          numeric,
          valid,
          passes: valid ? withinReference(indicator.key, numeric, waterType) : null,
          reference: referenceText(indicator.key, waterType),
        };
      }),
    [values, waterType],
  );

  const enteredCount = results.filter((result) => result.valid).length;
  const complete = enteredCount === indicators.length;
  const failedResults = results.filter(
    (result): result is typeof result & { numeric: number; passes: false } =>
      result.valid && result.numeric !== null && result.passes === false,
  );
  const findingCount = failedResults.length;

  const assessment = useMemo(() => {
    if (!complete) {
      return {
        tone: "pending",
        title: "填满5项后，生成水体综合解读",
        summary: "系统会综合判断异常指标、可能相关因素、生态影响和建议复查方向。",
      };
    }

    if (findingCount === 0) {
      return {
        tone: "good",
        title: "五项均在Ⅲ类参考线内",
        summary: "这组数据在五项基本指标上表现较好，可作为地表水初步筛查结果。",
      };
    }

    if (findingCount === 1) {
      return {
        tone: "watch",
        title: "1项指标需要重点关注",
        summary: "水体可能存在单一突出压力，建议先复测异常项，再结合现场排查可能输入。",
      };
    }

    if (findingCount <= 3) {
      return {
        tone: "watch",
        title: `${findingCount}项指标异常，提示复合水环境压力`,
        summary: "多项指标共同异常时，应把污染输入、水体交换和季节影响放在一起排查。",
      };
    }

    return {
      tone: "alert",
      title: `${findingCount}项指标异常，建议尽快复测并排查`,
      summary: "这组数据提示水体状态可能较差，宜通过规范采样和更完整检测进一步确认。",
    };
  }, [complete, findingCount]);

  return (
    <div className="reference-tool">
      <div className="reference-tool-head">
        <div>
          <p className="tool-label">GB 3838—2002 · Ⅲ类指标参考</p>
          <h3>输入5项数据，生成水体初步判断</h3>
        </div>
        <fieldset className="water-type-switch">
          <legend>选择总磷参考类型</legend>
          <label>
            <input
              type="radio"
              name="water-type"
              value="general"
              checked={waterType === "general"}
              onChange={() => setWaterType("general")}
            />
            河流 / 一般地表水
          </label>
          <label>
            <input
              type="radio"
              name="water-type"
              value="lake"
              checked={waterType === "lake"}
              onChange={() => setWaterType("lake")}
            />
            湖泊 / 水库
          </label>
        </fieldset>
      </div>

      <div className="indicator-inputs">
        {indicators.map((indicator) => (
          <label className="indicator-field" key={indicator.key}>
            <span>{indicator.label}</span>
            <span className="input-wrap">
              <input
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                value={values[indicator.key]}
                placeholder={indicator.placeholder}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    [indicator.key]: event.target.value,
                  }))
                }
              />
              <small>{indicator.unit}</small>
            </span>
          </label>
        ))}
      </div>

      <div className="reference-results" aria-live="polite">
        <div className="results-summary">
          <strong>{enteredCount}/5</strong>
          <span>个指标已输入</span>
          <button type="button" onClick={() => setValues(emptyValues)}>
            清空
          </button>
        </div>
        <div className="result-list">
          {results.map((result) => (
            <div className="result-row" key={result.key}>
              <div>
                <strong>{result.label}</strong>
                <span>Ⅲ类参考：{result.reference}</span>
              </div>
              {!result.raw ? (
                <span className="result-badge result-empty">等待输入</span>
              ) : !result.valid ? (
                <span className="result-badge result-alert">请输入非负数字</span>
              ) : result.passes ? (
                <span className="result-badge result-pass">单项在参考线内</span>
              ) : (
                <span className="result-badge result-alert">单项超出参考线</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className={`water-assessment assessment-${assessment.tone}`} aria-live="polite">
        <div className="assessment-heading">
          <p>综合初步解读</p>
          <h4>{assessment.title}</h4>
          <span>{assessment.summary}</span>
        </div>

        {complete && (
          <div className="assessment-body">
            <div className="assessment-findings">
              <div className="assessment-subhead">
                <strong>这组数据说明什么</strong>
                <span>{findingCount === 0 ? "5项均通过" : `${findingCount}项需关注`}</span>
              </div>
              {findingCount === 0 ? (
                <div className="assessment-good-note">
                  <strong>基本指标表现较好</strong>
                  <p>
                    当前没有发现超出Ⅲ类参考线的单项。若要确定完整水质类别，还应结合当地特征指标和规范采样检测。
                  </p>
                </div>
              ) : (
                failedResults.map((result) => {
                  const finding = buildFinding(result.key, result.numeric);
                  return (
                    <article className="assessment-finding" key={result.key}>
                      <h5>{finding.title}</h5>
                      <dl>
                        <div>
                          <dt>可能相关因素</dt>
                          <dd>{finding.possibleFactors}</dd>
                        </div>
                        <div>
                          <dt>可能影响</dt>
                          <dd>{finding.possibleEffect}</dd>
                        </div>
                        <div>
                          <dt>建议复查</dt>
                          <dd>{finding.nextStep}</dd>
                        </div>
                      </dl>
                    </article>
                  );
                })
              )}
            </div>

            <aside className="drinking-verdict">
              <p>饮用判断</p>
              <strong>不能据此判断可直接饮用</strong>
              <span>
                这5项用于地表水初步筛查，不等同于生活饮用水全项目。河湖水不应直接饮用；经供水处理后的水还须符合GB 5749—2022。
              </span>
              <a
                href="https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=99E9C17E3547A3C0CE2FD1FFD9F2F7BE"
                target="_blank"
                rel="noreferrer"
              >
                查看生活饮用水标准 <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
