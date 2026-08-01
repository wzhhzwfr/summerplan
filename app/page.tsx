import WaterReferenceTool from "./WaterReferenceTool";

const stats = [
  { value: "2", label: "天实地实践" },
  { value: "4", label: "名团队成员" },
  { value: "2", label: "份水样记录" },
  { value: "1", label: "次讲解员采访" },
];

const journey = [
  {
    number: "01",
    date: "7月26日 · 上午至下午",
    title: "在博物馆建立观察坐标",
    place: "中国黄海湿地博物馆",
    description:
      "跟随讲解员了解潮间带、候鸟迁徙与湿地保护，并围绕展陈和公众科普完成简短采访。离馆后继续观察周边浅水水面、岸带植物与公共步道。",
    image: "/wetland-observation.jpg",
    alt: "队员在博物馆周边观察湿地植物",
    tags: ["展陈学习", "采访记录", "生境观察"],
  },
  {
    number: "02",
    date: "7月26日 · 傍晚",
    title: "从自然史走进城市生活史",
    place: "竹林大饭店 · 盐镇水街",
    description:
      "在竹林大饭店感受老盐城市井文化，随后沿串场河步行、观看水街夜景并复盘首日见闻。两处行程属于城市文化体验，不作为水质采样点。",
    image: "/water-street.jpg",
    alt: "盐镇水街串场河沿线夜景",
    tags: ["城市水文化", "团队复盘", "地方记忆"],
  },
  {
    number: "03",
    date: "7月27日 · 上午",
    title: "从“看麋鹿”转向“看生境”",
    place: "中华麋鹿园",
    description:
      "镜头不只追随麋鹿，也记录林地、草地、浅水和泥滩。我们由此认识到，物种保护必须与饮水、取食、隐蔽和繁殖所依赖的完整生境一起理解。",
    image: "/milu-habitat.jpg",
    alt: "中华麋鹿园内的麋鹿及其林草生境",
    tags: ["物种保护", "栖息地", "水生态"],
  },
  {
    number: "04",
    date: "7月27日 · 中午",
    title: "留下两份可追溯的水样记录",
    place: "麋鹿园公共游览区域",
    description:
      "在工作人员同意下，于景观湖和相邻排水沟各取一份水样，记录来源与过程。样品未送实验室，因此我们不判断水质等级，只保留观察与采样事实。",
    image: "/water-sampling.jpg",
    alt: "队员在景观湖边采集水样",
    tags: ["规范采样", "过程留痕", "证据边界"],
  },
];

const insights = [
  {
    index: "A",
    title: "湿地是一张关系网",
    text: "水体、植被、候鸟、麋鹿和人类活动彼此关联。保护某一种生命，最终要回到完整生境。",
  },
  {
    index: "B",
    title: "采样不等于得出结论",
    text: "没有规范检测，就不把颜色、气味和水面状态写成水质等级。克制也是实践能力的一部分。",
  },
  {
    index: "C",
    title: "观察可以继续长成方案",
    text: "实地问题意识与公开数据、技术指南相结合，可以形成一套可被讨论、后续可验证的本地治理构想。",
  },
];

const outcomes = [
  {
    type: "文字",
    title: "实践报告与新闻稿",
    detail: "将真实行程、采访和采样记录整理成可提交、可传播的完整叙事。",
    status: "已形成初稿",
  },
  {
    type: "记录",
    title: "阶段日志与影像档案",
    detail: "按时间、地点和用途归档照片、视频、采访及采样过程。",
    status: "已整理",
  },
  {
    type: "方案",
    title: "港城小微水体治理构想",
    detail: "基于公开资料，形成“草带—沟渠—前池—湿地—复氧—回用”的低动力协同路径。",
    status: "本页发布",
  },
  {
    type: "工具",
    title: "水质指标参考工具",
    detail: "用Ⅲ类水单项参考线帮助读懂pH、DO、氨氮、总磷和高锰酸盐指数。",
    status: "可交互",
  },
  {
    type: "汇报",
    title: "PPT文案与演讲稿",
    detail: "面向新生讲清实践目标、现场行动、方法边界和个人成长。",
    status: "持续完善",
  },
  {
    type: "方法",
    title: "一条可核验的证据链",
    detail: "区分现场观察、公开资料和实验数据，不用未经检测的水样制造结论。",
    status: "核心收获",
  },
];

const governanceFlow = [
  {
    title: "源头减量",
    text: "先查雨污混接、施肥与养殖投喂，能不进入水体的负荷先在源头减少。",
  },
  {
    title: "乡土草带",
    text: "沿岸留出连续缓冲带，减缓地表径流并截留泥沙和颗粒态磷。",
  },
  {
    title: "生态沟渠",
    text: "利用缓坡、植物和砾石增加接触时间，同时保留排涝通道。",
  },
  {
    title: "沉淀前池",
    text: "在湿地前先拦大颗粒悬浮物，设置便于清淤的独立单元。",
  },
  {
    title: "浅水旁路湿地",
    text: "让部分水流经浅水植物—基质—微生物系统，主河道不被强行阻断。",
  },
  {
    title: "复氧",
    text: "优先利用自然跌水；低溶氧风险时，再按需使用太阳能曝气。",
  },
  {
    title: "回用或排放",
    text: "优先回用于绿化或农灌；排放前仍需按适用要求监测确认。",
  },
];

const mechanisms = [
  {
    number: "01",
    title: "拦截与减速",
    text: "草带和缓坡先降低径流速度，把泥沙、枯落物与附着其上的污染物挡在水体之外。",
  },
  {
    number: "02",
    title: "沉淀与便捷维护",
    text: "前池承担“脏活”，集中沉积较大颗粒；可达、可清淤比造型复杂更重要。",
  },
  {
    number: "03",
    title: "植物—基质—微生物协同",
    text: "植物提供根区和生境，基质吸附与过滤，微生物参与有机物降解和氮转化。",
  },
  {
    number: "04",
    title: "复氧与水力调节",
    text: "跌水、浅滩和必要时曝气改善气水交换；旁路与溢流口兼顾停留时间和暴雨安全。",
  },
];

const scenarios = [
  {
    code: "URBAN POND",
    title: "城市池塘",
    problem: "水体交换慢、夏季低溶氧、岸边面源输入与底泥扰动。",
    route: "入水口前池 → 局部岸带草本缓冲 → 旁路浅水湿地 → 自然跌水 / 按需太阳能曝气。",
    focus: "优先记录DO、pH、水温、透明度、氨氮、TP和CODMn；给保洁与清淤留通道。",
  },
  {
    code: "FARM DITCH",
    title: "农村排水沟",
    problem: "降雨或灌溉后短时退水携带泥沙、氮磷，流量峰值变化大。",
    route: "减肥减药 → 田边草带 → 生态沟渠 → 沉淀塘 → 小型湿地 → 蓄水回灌。",
    focus: "不能以净化为由影响行洪排涝；按作物周期比较雨前、雨后与回用端水样。",
  },
  {
    code: "TIDAL / BRACKISH",
    title: "沿海或感潮半咸水",
    problem: "盐度与潮位变化会影响植物、材料和指标解释，咸淡水倒灌风险更高。",
    route: "控源 → 防倒灌与潮位调节 → 耐盐乡土植物带 → 可旁路湿地 → 安全出水。",
    focus: "增加盐度 / 电导率、潮位和潮相记录；不用淡水Ⅲ类参考线直接评价半咸水。",
  },
];

const publicData = [
  {
    year: "2025",
    value: "95.6%",
    title: "45个国省考断面年均优Ⅲ比例",
    note: "连云港市年度水环境总体评价为优；这是全市考核断面年均结果，不代表某一处小池塘，更不代表团队两份水样。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/gcyw/content/250e68c0-fc6f-4263-b2a6-7f4e304f8125.html",
    source: "连云港市政府 · 2025年度公报解读",
  },
  {
    year: "2024",
    value: "0.12 mg/L",
    title: "规划引用的监测断面TP均值",
    note: "数值来自《连云港市养殖水域滩涂规划（修编）》中的承载力计算背景，不宜当作所有小微水体的“本底值”。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/szfbgswj1/content/45709fb6-5cb8-4791-bdc8-0ec5dedb9371.shtml",
    source: "连云港市政府 · 养殖水域滩涂规划",
  },
  {
    year: "2026.06",
    value: "48.6%",
    title: "37个国省考断面当月优Ⅲ比例",
    note: "月度快照与年度均值明显不同，提醒我们关注季节、流量与时段波动，也不能拿公开比例替代现场检测。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/hjzl/content/6dd80c21-95fc-4ef4-b062-f7fbf09f4222.html",
    source: "连云港市生态环境局 · 月度水质",
  },
];

const localCases = [
  {
    place: "东海 / 赣榆 · 石梁河水库",
    title: "岸上截污、河口湿地与水中修复",
    text: "公开治理实践把污染源、入库通道和水体本身放在一张图上。对小微水体可提炼为“拦截—沉淀—净化—安全排放或回用”的连续链条。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/dxal/content/c1cfb741-ded3-4140-b057-3a960827dcb9.html",
  },
  {
    place: "东海县 · 山北头",
    title: "农田退水拦截后回灌",
    text: "当地公开案例以“拦截—生态净化—循环灌溉”服务周边1300亩农田。我们据此把“回用”作为方案终点之一，而不只考虑排放。",
    href: "https://hbj.lyg.gov.cn/lygshbj/snhbdt/content/09ea06c9-bf72-4cf7-a94c-fa6e915eebac.html",
  },
  {
    place: "赣榆区 · 养殖尾水",
    title: "“三池两坝一湿地”的多级净化",
    text: "沉淀池、过滤坝、曝气池、生物处理池和人工湿地分担不同任务，说明组合工艺应按污染特征拆分单元，而非寄希望于单一植物。",
    href: "https://www.ganyu.gov.cn/gyqhjbhj/zfwj/content/5adb9731-56a8-4ebf-8774-f13bf65fd14d.html",
  },
];

const preparationLists = [
  {
    title: "现场勘察",
    items: [
      "水体用途、进出水口、雨污口、潮汐或排涝要求",
      "岸坡、可用空间、暴雨溢流路径和运维通道",
      "便携式pH / DO / 水温 / 电导率仪，校准液与记录表",
      "采样瓶、标签、手套、冷藏箱、空白样与平行样计划",
    ],
  },
  {
    title: "实验室与记录",
    items: [
      "提前确认实验室可测氨氮、TP、TN、CODMn的标准方法",
      "统一采样时间、深度、容器、保存方式和送检时限",
      "建立样品编号、交接人、照片、坐标和天气记录",
      "设置质控样；不要把试纸或肉眼观察写成正式检测值",
    ],
  },
  {
    title: "小试材料",
    items: [
      "透明水槽或周转箱、量筒、定时器、软管和可调小泵",
      "砾石、粗砂、沉淀杯、乡土非入侵草本与固定网",
      "相同来源的模拟水或同一批原水，统一体积与初始值",
      "每组独立编号；若要比较，预留至少3个平行重复",
    ],
  },
];

const demoGroups = [
  {
    label: "A",
    title: "原水静置",
    text: "只观察自然沉降，作为原理展示的参照。",
  },
  {
    label: "B",
    title: "草带拦截",
    text: "水流先通过带根草皮或仿真草带，观察流速与悬浮物变化。",
  },
  {
    label: "C",
    title: "草带 + 沟渠 + 前池",
    text: "增加砾石沟和沉淀单元，展示分段承担任务的思路。",
  },
  {
    label: "D",
    title: "完整协同链",
    text: "在C组后增加浅水植物湿地与小跌水，展示组合流程。",
  },
];

const sources = [
  {
    title: "GB 3838—2002《地表水环境质量标准》",
    note: "指标参考线与类别应用依据",
    href: "https://www.mee.gov.cn/gkml/zj/wj/200910/t20091022_172098.htm",
  },
  {
    title: "HJ 91.2—2022《地表水环境质量监测技术规范》",
    note: "布点、采样、记录与质量控制",
    href: "https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202205/t20220506_977066.shtml",
  },
  {
    title: "《人工湿地水质净化技术指南》",
    note: "湿地选型、布置与运行维护",
    href: "https://www.mee.gov.cn/xxgk/hjyw/202106/t20210612_837524.shtml",
  },
  {
    title: "《河湖生态缓冲带保护修复技术指南》",
    note: "岸带调查、分区与修复原则",
    href: "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk06/202112/t20211215_964234.html",
  },
  {
    title: "国家地表水水质自动监测实时数据发布系统入口",
    note: "查询公开监测信息的官方入口",
    href: "https://www.mee.gov.cn/hjzl/",
  },
  {
    title: "2025年度连云港市生态环境状况公报解读",
    note: "年度断面优Ⅲ比例",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/gcyw/content/250e68c0-fc6f-4263-b2a6-7f4e304f8125.html",
  },
  {
    title: "2026年6月连云港市地表水质量状况",
    note: "月度类别与时段波动",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/hjzl/content/6dd80c21-95fc-4ef4-b062-f7fbf09f4222.html",
  },
  {
    title: "盐城滨海湿地景观格局与地表水质关联研究",
    note: "64个点位、TN / TP / 氨氮 / COD等指标的论文依据",
    href: "https://www.pjoes.com/Correlation-Analysis-of-Landscape-Patterns-nwith-Surface-Water-Quality-in-Yancheng%2C132790%2C0%2C2.html",
  },
  {
    title: "人工湿地氮磷去除效果系统综述",
    note: "汇总研究显示效果差异很大，不能把文献去除率写成团队实测值",
    href: "https://doi.org/10.1186/s13750-016-0060-0",
  },
  {
    title: "河岸缓冲带除磷效果Meta分析",
    note: "说明草带效果受土壤、坡度、宽度与来水条件共同影响",
    href: "https://doi.org/10.3389/frwa.2022.882560",
  },
  {
    title: "人工曝气湖泊修复案例研究",
    note: "提示提高DO不等于同步去除氮磷，曝气应按需使用",
    href: "https://doi.org/10.1007/s10661-016-5444-7",
  },
];

const gallery = [
  {
    src: "/museum-team.jpg",
    alt: "实践团在中国黄海湿地博物馆前合影",
    caption: "中国黄海湿地博物馆｜实践从这里出发",
    className: "gallery-wide",
  },
  {
    src: "/wetland-observation.jpg",
    alt: "队员观察岸带植物",
    caption: "博物馆周边｜把展陈知识放回真实景观",
    className: "",
  },
  {
    src: "/bamboo-restaurant.jpg",
    alt: "队员在竹林大饭店体验老盐城市井文化",
    caption: "竹林大饭店｜城市文化与团队交流",
    className: "",
  },
  {
    src: "/water-street.jpg",
    alt: "盐镇水街夜景",
    caption: "盐镇水街｜串场河沿线的城市水文化",
    className: "gallery-tall",
  },
  {
    src: "/milu-habitat.jpg",
    alt: "中华麋鹿园内的麋鹿",
    caption: "中华麋鹿园｜物种与生境一起进入镜头",
    className: "",
  },
  {
    src: "/water-sampling.jpg",
    alt: "队员采集景观湖水样",
    caption: "景观湖边｜经同意后完成采样记录",
    className: "",
  },
  {
    src: "/milu-team.jpg",
    alt: "实践团在中华麋鹿园前合影",
    caption: "中华麋鹿园｜两日实地实践收束",
    className: "gallery-wide",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回页面顶部">
          <span className="brand-mark">林海</span>
          <span className="brand-copy">
            <strong>林海相依</strong>
            <small>从湿地观察到治理构想</small>
          </span>
        </a>
        <nav aria-label="页面导航">
          <a href="#journey">真实实践</a>
          <a href="#governance">治理方案</a>
          <a href="#tool">指标工具</a>
          <a href="#data">公开证据</a>
          <a href="#gallery">影像档案</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/museum-team.jpg"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
          <div className="hero-scrim" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">水木相济，蔚蓝护航 · 盐城组</p>
            <h1 id="hero-title">
              从盐城湿地观察，
              <span>走向港城小微水体方案</span>
            </h1>
            <p className="hero-lead">
              两份水样没有送检，我们不虚构水质结论；但现场问题意识没有停在采样瓶里。团队进一步查阅公开数据与技术指南，形成一套面向连云港城市池塘、农村排水沟和感潮半咸水的低动力协同治理构想。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#governance">
                查看治理方案
              </a>
              <a className="button button-ghost" href="#journey">
                回看真实实践
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <span>盐城实地 · 连云港适配</span>
            <span>2026.07—08</span>
            <span>江苏海洋大学</span>
          </div>
        </section>

        <section className="stats-band" aria-label="实践数据概览">
          <div className="section-shell stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
            <p className="stats-note">
              现场事实不放大，
              <br />
              后续成果有来源。
            </p>
          </div>
        </section>

        <section className="manifesto section-shell" aria-labelledby="manifesto-title">
          <div>
            <p className="section-kicker">OUR APPROACH</p>
            <h2 id="manifesto-title">把“没有检测”变成一次方法升级</h2>
          </div>
          <p>
            两天不足以完成科研验证，却足以发现问题、学习边界，再把现场观察与公开证据连接起来。我们的新增成果不是一组杜撰的氮磷数据，而是一套明确标注“待现场勘察、待小试验证”的低动力治理参考方案，以及帮助理解指标的交互工具。
          </p>
        </section>

        <section id="journey" className="journey-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">FIELD JOURNEY</p>
                <h2>两天，四个真实行动节点</h2>
              </div>
              <p>先把发生过的事情讲清楚，再讨论它如何继续生长。</p>
            </div>

            <div className="journey-list">
              {journey.map((item) => (
                <article className="journey-card" key={item.number}>
                  <div className="journey-number">{item.number}</div>
                  <div className="journey-copy">
                    <p className="journey-date">{item.date}</p>
                    <h3>{item.title}</h3>
                    <p className="journey-place">{item.place}</p>
                    <p>{item.description}</p>
                    <ul className="tag-list" aria-label={`${item.title}关键词`}>
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <figure className="journey-image">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="insights section-shell" aria-labelledby="insights-title">
          <div className="section-heading insights-heading">
            <div>
              <p className="section-kicker">WHAT WE LEARNED</p>
              <h2 id="insights-title">比“打卡”更重要的三个答案</h2>
            </div>
          </div>
          <div className="insight-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.index}>
                <span>{insight.index}</span>
                <h3>{insight.title}</h3>
                <p>{insight.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="evidence" className="evidence-section">
          <div className="section-shell evidence-layout">
            <div className="evidence-copy">
              <p className="section-kicker light">EVIDENCE FIRST</p>
              <h2>无检测，不等于无成果</h2>
              <blockquote>“我们选择不把肉眼观察写成水质结论。”</blockquote>
              <p>
                两份样品均未送实验室检测，因此网页不展示虚构的pH、溶解氧、氮磷或水质等级。现场照片只证明采样动作与周边环境；后文公开数据只提供城市背景，两者都不能替代团队样本检测。
              </p>
            </div>
            <div className="sample-stack" aria-label="两份水样记录">
              <article className="sample-card">
                <div className="sample-topline">
                  <span>样本 01</span>
                  <span className="status status-pending">未检测</span>
                </div>
                <h3>景观湖水</h3>
                <dl>
                  <div>
                    <dt>来源</dt>
                    <dd>麋鹿园公共游览区域</dd>
                  </div>
                  <div>
                    <dt>用途</dt>
                    <dd>学习采样与过程记录</dd>
                  </div>
                  <div>
                    <dt>结论</dt>
                    <dd>不评价水质等级</dd>
                  </div>
                </dl>
              </article>
              <article className="sample-card sample-card-alt">
                <div className="sample-topline">
                  <span>样本 02</span>
                  <span className="status status-pending">未检测</span>
                </div>
                <h3>相邻排水沟水</h3>
                <dl>
                  <div>
                    <dt>来源</dt>
                    <dd>景观湖相邻水沟</dd>
                  </div>
                  <div>
                    <dt>用途</dt>
                    <dd>形成后续比较问题</dd>
                  </div>
                  <div>
                    <dt>结论</dt>
                    <dd>不以外观替代检测</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section id="governance" className="governance-section">
          <div className="section-shell">
            <div className="governance-heading">
              <div>
                <p className="section-kicker light">LOCAL GOVERNANCE CONCEPT</p>
                <h2>连云港小微水体低动力协同治理参考方案</h2>
              </div>
              <div className="concept-boundary">
                <strong>成果性质</strong>
                <p>公开资料支撑的概念方案。尚未完成场地勘察、工程设计或实测验证，不作为施工图与治理成效承诺。</p>
              </div>
            </div>

            <div className="flow-track" aria-label="低动力协同治理流程">
              {governanceFlow.map((step, index) => (
                <article className="flow-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="mechanism-intro">
              <p className="section-kicker light">HOW IT WORKS</p>
              <h3>不是“种点水草”，而是让每个单元承担一种任务</h3>
            </div>
            <div className="mechanism-grid">
              {mechanisms.map((item) => (
                <article className="mechanism-card" key={item.number}>
                  <span>{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="scenario-heading">
              <div>
                <p className="section-kicker light">THREE LOCAL SCENARIOS</p>
                <h3>同一条逻辑，三种不同适配</h3>
              </div>
              <p>先识别水体，再决定指标、植物、水力与运维方式。</p>
            </div>
            <div className="scenario-grid">
              {scenarios.map((scenario) => (
                <article className="scenario-card" key={scenario.code}>
                  <p className="scenario-code">{scenario.code}</p>
                  <h4>{scenario.title}</h4>
                  <dl>
                    <div>
                      <dt>主要问题</dt>
                      <dd>{scenario.problem}</dd>
                    </div>
                    <div>
                      <dt>建议路径</dt>
                      <dd>{scenario.route}</dd>
                    </div>
                    <div>
                      <dt>勘察重点</dt>
                      <dd>{scenario.focus}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tool" className="tool-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">INDICATOR REFERENCE</p>
                <h2>指标参考，不替你下结论</h2>
              </div>
              <p>可输入实验室报告或官方数据，理解单项数值与Ⅲ类参考线的关系。</p>
            </div>
            <WaterReferenceTool />
          </div>
        </section>

        <section id="data" className="data-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">PUBLIC EVIDENCE</p>
                <h2>三张公开数据卡，三个不同尺度</h2>
              </div>
              <p>年度、规划背景和单月快照不能互相替代，更不能代替团队样本。</p>
            </div>
            <div className="data-grid">
              {publicData.map((item) => (
                <article className="data-card" key={item.year}>
                  <div className="data-year">{item.year}</div>
                  <strong>{item.value}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.source} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="case-heading">
              <div>
                <p className="section-kicker">LOCAL PRECEDENTS</p>
                <h2>三处本地案例，提炼三种可迁移方法</h2>
              </div>
            </div>
            <div className="case-grid">
              {localCases.map((item) => (
                <article className="case-card" key={item.title}>
                  <p>{item.place}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    查看官方案例 <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="preparation" className="preparation-section">
          <div className="section-shell">
            <div className="section-heading prep-heading">
              <div>
                <p className="section-kicker light">NEXT VALIDATION</p>
                <h2>如果要把方案做成下一轮小试</h2>
              </div>
              <p>先统一方法与记录，再谈“净化效果”。</p>
            </div>
            <div className="prep-grid">
              {preparationLists.map((list) => (
                <article className="prep-card" key={list.title}>
                  <h3>{list.title}</h3>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="demo-heading">
              <div>
                <p className="section-kicker light">FOUR-GROUP DISPLAY</p>
                <h3>四组原理展示建议</h3>
              </div>
              <p>同一批水、同一体积、同一时间，逐级增加处理单元。</p>
            </div>
            <div className="demo-grid">
              {demoGroups.map((group) => (
                <article className="demo-card" key={group.label}>
                  <span>{group.label}</span>
                  <h4>{group.title}</h4>
                  <p>{group.text}</p>
                </article>
              ))}
            </div>
            <div className="replication-note">
              <strong>名称边界：</strong>
              <p>
                如果A—D每组只搭1套、没有独立平行重复，它只能叫“原理展示”或“课程小试”，不能写成“实验验证了净化效果”。若要做可比较实验，建议每组至少3个独立重复，并统一初始水质、体积、流量、停留时间与检测方法。
              </p>
            </div>
          </div>
        </section>

        <section id="outcomes" className="outcomes-section section-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">OUTPUTS</p>
              <h2>我们的成果，不只是一份报告</h2>
            </div>
            <p>将短行程转化为可阅读、可展示、可继续验证的成果链。</p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((outcome) => (
              <article className="outcome-card" key={outcome.title}>
                <div className="outcome-meta">
                  <span>{outcome.type}</span>
                  <span>{outcome.status}</span>
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sources-section">
          <div className="section-shell">
            <div className="section-heading sources-heading">
              <div>
                <p className="section-kicker light">SOURCES & STANDARDS</p>
                <h2>每个判断，都能回到出处</h2>
              </div>
              <p>链接指向标准、政府公开信息与论文原页。</p>
            </div>
            <div className="source-list">
              {sources.map((source, index) => (
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  key={source.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{source.title}</strong>
                  <small>{source.note}</small>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="section-shell">
            <div className="section-heading gallery-heading">
              <div>
                <p className="section-kicker light">FIELD ARCHIVE</p>
                <h2>七张照片，七个现场切片</h2>
              </div>
              <p>所有图片均来自团队实际行程。</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <figure className={item.className} key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section section-shell" aria-labelledby="team-title">
          <div className="team-image">
            <img
              src="/milu-team.jpg"
              alt="林海相依实践团四名成员在中华麋鹿园前合影"
              loading="lazy"
            />
          </div>
          <div className="team-copy">
            <p className="section-kicker">THE TEAM</p>
            <h2 id="team-title">四个人，让一次短实践继续生长</h2>
            <p>
              吴子恒、薛润泽、燕先喆、薄玙彤。我们共同完成路线协调、现场记录、采访拍摄、水样采集和材料整理，也共同承担“不夸大结果”的责任。
            </p>
            <p className="team-school">江苏海洋大学 · 马卡洛夫海洋工程学院</p>
          </div>
        </section>

        <section className="closing">
          <div className="section-shell closing-inner">
            <p>从一次观察，到一个可以被验证的下一步。</p>
            <h2>真正的成果，不是把故事说大，而是把证据链做完整。</h2>
            <a className="button button-light" href="#top">
              回到开头
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <div>
            <strong>“林海相依”实践团</strong>
            <p>盐城湿地实践记录 · 连云港小微水体治理构想</p>
          </div>
          <p>盐城 × 连云港 · 2026</p>
        </div>
      </footer>
    </>
  );
}
