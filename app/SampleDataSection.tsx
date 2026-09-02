const samples = [
  {
    id: "S1",
    place: "博物馆旁公园·点1",
    scene: "开阔水面，与湿地景观和水生植物相连",
    ph: 7.62,
    do: 6.8,
    tn: 0.72,
    ammonia: 0.31,
    tp: 0.12,
  },
  {
    id: "S2",
    place: "博物馆旁公园·点2",
    scene: "沟渠型水体，周边环境与水流条件不同",
    ph: 7.48,
    do: 5.9,
    tn: 0.96,
    ammonia: 0.47,
    tp: 0.18,
  },
  {
    id: "S3",
    place: "中华麋鹿园·点1",
    scene: "动物生境水体，周边分布林带和草地",
    ph: 7.81,
    do: 4.6,
    tn: 1.34,
    ammonia: 0.82,
    tp: 0.26,
  },
  {
    id: "S4",
    place: "中华麋鹿园·点2",
    scene: "沟渠型水体，周边可观察到较明显的动物活动",
    ph: 8.03,
    do: 3.7,
    tn: 1.68,
    ammonia: 1.21,
    tp: 0.34,
  },
  {
    id: "S5",
    place: "盐镇水街",
    scene: "城市景观河道，连接桥梁、建筑与休闲空间",
    ph: 7.35,
    do: 6.3,
    tn: 0.85,
    ammonia: 0.39,
    tp: 0.15,
  },
];

const findings = [
  {
    value: "7.35—8.03",
    label: "五个样点的 pH 范围",
    text: "五点数值较为集中，点位间变化小于其他四项指标。",
  },
  {
    value: "3.7—6.8 mg/L",
    label: "溶解氧记录范围",
    text: "S1、S5相对较高，S4为五个样点中的最低值。",
  },
  {
    value: "S4",
    label: "需要优先复测的点位",
    text: "该点溶解氧最低，总氮、氨氮和总磷均为五点最高。",
  },
  {
    value: "固定点位",
    label: "下一步记录方法",
    text: "补充天气、时段与水况，在相同位置重复记录，观察变化。",
  },
];

export default function SampleDataSection() {
  return (
    <section id="samples" className="sample-section">
      <div className="section-shell">
        <div className="section-heading sample-heading">
          <div>
            <p className="section-kicker">FIELD SAMPLE DATA</p>
            <h2>五个样点，把现场观察变成可比较的数据</h2>
          </div>
          <p>
            S1—S5分布于博物馆旁公园、中华麋鹿园和盐镇水街，统一记录pH、溶解氧、总氮、氨氮和总磷。
          </p>
        </div>

        <div className="sample-location-grid" aria-label="五个样点位置与现场特征">
          {samples.map((sample) => (
            <article className="sample-location-card" key={sample.id}>
              <span>{sample.id}</span>
              <h3>{sample.place}</h3>
              <p>{sample.scene}</p>
            </article>
          ))}
        </div>

        <div className="sample-data-panel">
          <div className="sample-data-intro">
            <div>
              <p className="section-kicker light">FIVE SITES · FIVE INDICATORS</p>
              <h3>样点数据总览</h3>
            </div>
            <p>pH无量纲，其余指标单位均为mg/L。</p>
          </div>

          <p className="sample-scroll-hint" aria-hidden="true">
            ← 左右滑动查看全部指标 →
          </p>
          <div
            className="sample-table-wrap"
            role="region"
            aria-label="S1至S5样点数据，可左右滑动查看全部指标"
            tabIndex={0}
          >
            <table className="sample-table">
              <caption>林海相依实践团S1至S5样点记录数据</caption>
              <thead>
                <tr>
                  <th scope="col">样点</th>
                  <th scope="col">位置</th>
                  <th scope="col">pH</th>
                  <th scope="col">溶解氧 DO</th>
                  <th scope="col">总氮 TN</th>
                  <th scope="col">氨氮 NH₃-N</th>
                  <th scope="col">总磷 TP</th>
                </tr>
              </thead>
              <tbody>
                {samples.map((sample) => (
                  <tr key={sample.id}>
                    <th scope="row">{sample.id}</th>
                    <td>{sample.place}</td>
                    <td>{sample.ph.toFixed(2)}</td>
                    <td>{sample.do.toFixed(1)}</td>
                    <td>{sample.tn.toFixed(2)}</td>
                    <td>{sample.ammonia.toFixed(2)}</td>
                    <td>{sample.tp.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sample-do-chart" aria-label="五个样点溶解氧数值对照">
            <div className="sample-chart-title">
              <strong>溶解氧横向对照</strong>
              <span>数值越大，色带越长</span>
            </div>
            {samples.map((sample) => (
              <div className="sample-bar-row" key={sample.id}>
                <span>{sample.id}</span>
                <div className="sample-bar-track" aria-hidden="true">
                  <i style={{ width: `${(sample.do / 7) * 100}%` }} />
                </div>
                <strong>{sample.do.toFixed(1)}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="sample-findings" aria-label="样点数据初步观察">
          {findings.map((finding) => (
            <article key={finding.label}>
              <strong>{finding.value}</strong>
              <h3>{finding.label}</h3>
              <p>{finding.text}</p>
            </article>
          ))}
        </div>

        <p className="sample-boundary">
          <strong>数据说明：</strong>
          本组记录用于五个样点之间的描述性比较，可帮助确定后续复测重点；不据此判定水质类别、饮用安全、统计显著性或污染成因。
        </p>
      </div>
    </section>
  );
}
