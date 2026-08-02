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

  return (
    <div className="reference-tool">
      <div className="reference-tool-head">
        <div>
          <p className="tool-label">GB 3838—2002 · Ⅲ类指标参考</p>
          <h3>输入数值，看看它与参考线的关系</h3>
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
    </div>
  );
}
