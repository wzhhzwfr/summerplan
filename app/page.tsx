import WaterReferenceTool from "./WaterReferenceTool";
import ScrollButton from "./ScrollButton";

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
      "在竹林大饭店感受老盐城市井文化，随后沿串场河步行、观看水街夜景，在城市生活中体会水系与地方文化的联系。",
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
      "在工作人员同意下，于景观湖和相邻排水沟各取一份水样，记录来源和采样过程。两处水体状态的差异，让队员开始关注水体交换、岸边环境和日常管理。",
    image: "/pond-sampling.jpg",
    alt: "队员在景观湖边采集水样",
    tags: ["水样采集", "过程记录", "问题观察"],
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
    title: "现场观察让问题更具体",
    text: "采访、照片、水样和生境记录，让书本上的水生态知识变成了可以看见、可以讨论的现场经验。",
  },
  {
    index: "C",
    title: "实践收获可以被分享",
    text: "我们把路线、影像、公开资料和护水设想做成网页，让更多人看见湿地保护与身边水体的联系。",
  },
];

const localObservations = [
  {
    index: "01",
    code: "COAST / PORT CITY",
    image: "/lyg-coast.jpg",
    alt: "隔水眺望连云港近岸海域、船舶与港城建筑",
    title: "近岸海域｜记录潮汐与盐度",
    observation:
      "连云港的近岸海域连接港口、城市与山海景观，是观察海陆交汇的重要窗口。",
    action:
      "关注潮位、盐度和入海河流，逐步形成持续的岸线观察记录。",
    className: "local-observation-card local-observation-wide",
  },
  {
    index: "02",
    code: "PUBLIC WATERSPACE",
    image: "/campus-dragon-boat.jpg",
    alt: "校园周边水域开展龙舟活动",
    title: "公共活动水域｜让亲水活动更整洁",
    observation:
      "龙舟活动让水面连接师生、社区与城市文化，水环境也是校园生活的一部分。",
    action:
      "活动前后巡查水面和岸线，结合龙舟活动开展减塑、清洁和护水宣传。",
    className: "local-observation-card",
  },
  {
    index: "03",
    code: "CAMPUS RIVER",
    image: "/campus-river.jpg",
    alt: "学校周边河流水面覆盖与漂浮现象记录",
    title: "校园周边河道｜从身边小河开始",
    observation:
      "河面覆盖物和漂浮物提醒我们，小微水体需要日常维护，也需要更多人的关注。",
    action:
      "从垃圾清理、排水口巡查、岸边绿化和固定点位记录做起。",
    className: "local-observation-card",
  },
];

const outcomes = [
  {
    type: "文字",
    title: "实践报告与新闻稿",
    detail: "整理真实行程、采访内容、采样过程和实践感受。",
    status: "已完成",
  },
  {
    type: "记录",
    title: "现场照片与采访视频",
    detail: "记录博物馆学习、湿地观察、麋鹿生境和水样采集。",
    status: "已整理",
  },
  {
    type: "方案",
    title: "港城小微水体护水建议",
    detail: "形成源头减量、岸带缓冲、生态净化、监测维护和公众参与五步构想。",
    status: "已展示",
  },
  {
    type: "工具",
    title: "水质指标互动展示",
    detail: "让pH、溶解氧、氨氮、总磷等指标更直观、更容易理解。",
    status: "可交互",
  },
  {
    type: "网页",
    title: "水环境宣传网页",
    detail: "集中展示实践路线、港城观察、护水构想、公开资料和现场影像。",
    status: "已上线",
  },
];

const governanceFlow = [
  {
    title: "源头减量",
    text: "先查雨污混接、施肥与养殖投喂，能不进入水体的负荷先在源头减少。",
  },
  {
    title: "岸带缓冲",
    text: "在河岸保留乡土植物带，减缓雨水冲刷并改善岸边环境。",
  },
  {
    title: "生态净化",
    text: "利用植物、砾石和浅水湿地，形成多层次的自然净化空间。",
  },
  {
    title: "监测维护",
    text: "定期查看水面、岸线和排水口，及时清理并记录水体变化。",
  },
  {
    title: "公众参与",
    text: "把护水宣传融入校园活动、志愿服务和社区日常。",
  },
];

const scenarios = [
  {
    code: "CAMPUS RIVER",
    title: "校园及城市小河",
    text: "做好排水口巡查和垃圾清理，在条件合适的岸段增加植物缓冲带与浅水净化区。",
  },
  {
    code: "PUBLIC WATERSPACE",
    title: "公共活动水域",
    text: "把岸线巡查、减塑提示、垃圾回收和活动后的水面清洁纳入校园亲水活动。",
  },
  {
    code: "TIDAL / BRACKISH",
    title: "沿海或感潮半咸水",
    text: "结合潮汐、盐度和入海河流开展岸线记录，选择适合滨海环境的乡土植物。",
  },
];

const publicData = [
  {
    year: "2025",
    value: "95.6%",
    title: "45个国省考断面年均优Ⅲ比例",
    note: "连云港市年度水环境总体评价为优，为认识港城水环境提供了整体背景。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/rdcl_lh2026/content/022099df-7170-4dcc-ad17-0e2a3cc98112.htm",
    source: "连云港市政府 · 2025年计划执行报告",
  },
  {
    year: "2024",
    value: "0.12 mg/L",
    title: "规划引用的监测断面TP均值",
    note: "数值来自《连云港市养殖水域滩涂规划（修编）》，帮助我们认识总磷这一常见水质指标。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/szfbgswj1/content/45709fb6-5cb8-4791-bdc8-0ec5dedb9371.shtml",
    source: "连云港市政府 · 养殖水域滩涂规划",
  },
  {
    year: "2026.06",
    value: "48.6%",
    title: "37个国省考断面当月优Ⅲ比例",
    note: "月度水质信息展现了水环境随季节、流量和时段变化的特点。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/hjzl/content/6dd80c21-95fc-4ef4-b062-f7fbf09f4222.html",
    source: "连云港市生态环境局 · 月度水质",
  },
];

const yanchengWaterMonitoringUrl =
  "https://www.yancheng.gov.cn/col/col23128/index.html?number=A00038A00005A00003";

const cityComparison = [
  {
    city: "盐城",
    year: "2025年度",
    value: "100%",
    title: "省考及以上断面优Ⅲ比例",
    note: "17个国考断面和51个省考及以上断面，优Ⅲ比例持续保持100%。",
    href: "https://wap.yancheng.gov.cn/art/2026/6/24/art_128_4433718.html",
  },
  {
    city: "连云港",
    year: "2025年度",
    value: "95.6%",
    title: "地表水达到或好于Ⅲ类比例",
    note: "年度水环境总体评价为优，公开比例达到95.6%。",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/rdcl_lh2026/content/022099df-7170-4dcc-ad17-0e2a3cc98112.htm",
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
    href: "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk06/202104/t20210430_831538.html",
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
    href: "https://www.lyg.gov.cn/zglygzfmhwz/rdcl_lh2026/content/022099df-7170-4dcc-ad17-0e2a3cc98112.htm",
  },
  {
    title: "2026年6月连云港市地表水质量状况",
    note: "月度类别与时段波动",
    href: "https://www.lyg.gov.cn/zglygzfmhwz/hjzl/content/6dd80c21-95fc-4ef4-b062-f7fbf09f4222.html",
  },
  {
    title: "2025年盐城市国民经济和社会发展统计公报",
    note: "盐城年度国考、省考及以上断面优Ⅲ比例",
    href: "https://wap.yancheng.gov.cn/art/2026/6/24/art_128_4433718.html",
  },
  {
    title: "盐城市水质监测栏目（含2025年6月情况）",
    note: "盐城市政府水质监测栏目；原文章直达地址可能因改版失效",
    href: yanchengWaterMonitoringUrl,
  },
  {
    title: "GB 5749—2022《生活饮用水卫生标准》",
    note: "饮用水安全判断与检验项目依据",
    href: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=99E9C17E3547A3C0CE2FD1FFD9F2F7BE",
  },
  {
    title: "国家地表水监测“5+X”评价模式",
    note: "五项基本指标与特征指标的组合评价思路",
    href: "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk15/202012/t20201228_815116.html",
  },
  {
    title: "盐城滨海湿地景观格局与地表水质关联研究",
    note: "64个点位、TN / TP / 氨氮 / COD等指标的论文依据",
    href: "https://www.pjoes.com/Correlation-Analysis-of-Landscape-Patterns-nwith-Surface-Water-Quality-in-Yancheng%2C132790%2C0%2C2.html",
  },
  {
    title: "人工湿地氮磷去除效果系统综述",
    note: "了解人工湿地中植物、基质和微生物的协同作用",
    href: "https://doi.org/10.1186/s13750-016-0060-0",
  },
  {
    title: "河岸缓冲带除磷效果Meta分析",
    note: "了解岸带植物对地表径流的缓冲作用",
    href: "https://doi.org/10.3389/frwa.2022.882560",
  },
  {
    title: "人工曝气湖泊修复案例研究",
    note: "了解复氧在水体生态修复中的应用",
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
    src: "/wetland-boardwalk.jpg",
    alt: "湿地水面、芦苇与观景步道",
    caption: "湿地步道｜观察水面、植物与公共空间",
    className: "gallery-wide",
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
    src: "/milu-water.jpg",
    alt: "麋鹿群在水中活动",
    caption: "麋鹿生境｜水体也是野生动物的生活空间",
    className: "gallery-wide",
  },
  {
    src: "/sampling-team.jpg",
    alt: "两名队员在湖边共同采集水样",
    caption: "湖边协作｜记录采样过程与水体状态",
    className: "",
  },
  {
    src: "/pond-sampling.jpg",
    alt: "队员在水生植物旁采集水样",
    caption: "水生植物旁｜在工作人员同意下完成采样",
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
        <ScrollButton className="brand" targetId="top" ariaLabel="返回页面顶部">
          <span className="brand-mark">林海</span>
          <span className="brand-copy">
            <strong>林海相依</strong>
            <small>从湿地观察到治理构想</small>
          </span>
        </ScrollButton>
        <nav aria-label="页面导航">
          <ScrollButton className="nav-scroll" targetId="journey">真实实践</ScrollButton>
          <ScrollButton className="nav-scroll" targetId="local">港城观察</ScrollButton>
          <ScrollButton className="nav-scroll" targetId="governance">治理方案</ScrollButton>
          <ScrollButton className="nav-scroll" targetId="tool">指标工具</ScrollButton>
          <ScrollButton className="nav-scroll" targetId="data">公开证据</ScrollButton>
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
              两天里，我们走进黄海湿地博物馆、盐镇水街和中华麋鹿园，完成讲解采访、生境观察、水样采集和影像记录；回到连云港后，又把这些收获整理成一座可以浏览、互动的水环境宣传网页。
            </p>
            <div className="hero-actions">
              <ScrollButton className="button button-primary" targetId="governance">
                查看治理方案
              </ScrollButton>
              <ScrollButton className="button button-ghost" targetId="journey">
                回看真实实践
              </ScrollButton>
            </div>
          </div>
          <div className="hero-meta">
            <span>盐城和连云港</span>
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
              从现场出发，
              <br />
              把收获做成成果。
            </p>
          </div>
        </section>

        <section className="manifesto section-shell" aria-labelledby="manifesto-title">
          <div>
            <p className="section-kicker">OUR APPROACH</p>
            <h2 id="manifesto-title">把实践收获做成一份数字成果</h2>
          </div>
          <p>
            团队将盐城路线、采访影像、水样记录、连云港本地照片和公开资料集中到网页中，形成实践回顾、港城观察、护水构想和指标互动四个板块，让两天的所见所闻变成可展示、可传播、可继续完善的实践成果。
          </p>
        </section>

        <section id="journey" className="journey-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">FIELD JOURNEY</p>
                <h2>两天，四个真实行动节点</h2>
              </div>
              <p>跟着路线，回看我们在盐城完成的学习、观察、采访与采样。</p>
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

        <section id="local" className="local-observation-section">
          <div className="section-shell">
            <div className="section-heading local-observation-heading">
              <div>
                <p className="section-kicker">LOCAL LENS</p>
                <h2>三张港城照片，三种身边水环境</h2>
              </div>
              <p>从校园河道、公共活动水域到近岸海域，把护水行动落到日常。</p>
            </div>
            <div className="local-observation-grid">
              {localObservations.map((item) => (
                <article className={item.className} key={item.index}>
                  <figure>
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <figcaption>
                      <span>{item.index}</span>
                      <small>{item.code}</small>
                    </figcaption>
                  </figure>
                  <div className="local-observation-copy">
                    <h3>{item.title}</h3>
                    <p>{item.observation}</p>
                    <div className="local-next-step">
                      <strong>下一步</strong>
                      <span>{item.action}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="governance" className="governance-section">
          <div className="section-shell">
            <div className="governance-heading">
              <div>
                <p className="section-kicker light">LOCAL GOVERNANCE CONCEPT</p>
                <h2>连云港小微水体护水构想</h2>
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

            <div className="scenario-heading">
              <div>
                <p className="section-kicker light">THREE LOCAL SCENARIOS</p>
                <h3>从身边场景出发，给出不同适配</h3>
              </div>
              <p>让护水建议更贴近校园、城市和滨海生活。</p>
            </div>
            <div className="scenario-grid">
              {scenarios.map((scenario) => (
                <article className="scenario-card" key={scenario.code}>
                  <p className="scenario-code">{scenario.code}</p>
                  <h4>{scenario.title}</h4>
                  <p>{scenario.text}</p>
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
                <h2>水质指标互动展示</h2>
              </div>
              <p>输入数据，直观看懂pH、溶解氧、氨氮、总磷和高锰酸盐指数。</p>
            </div>
            <WaterReferenceTool />
          </div>
        </section>

        <section id="data" className="data-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">PUBLIC EVIDENCE</p>
                <h2>盐城与连云港：公开数据对照</h2>
              </div>
              <p>把两座城市的政府公开信息放在同一页面，读懂年度进展与月度波动。</p>
            </div>

            <div className="city-comparison" aria-labelledby="city-comparison-title">
              <div className="comparison-intro">
                <div>
                  <p className="section-kicker">SAME YEAR · TWO CITIES</p>
                  <h3 id="city-comparison-title">同看2025年度，两座沿海城市的水环境成绩</h3>
                </div>
                <p>按两市各自政府公报发布的优Ⅲ比例对照。</p>
              </div>
              <div className="comparison-grid">
                {cityComparison.map((item) => (
                  <article className="comparison-city" key={item.city}>
                    <div className="comparison-city-meta">
                      <span>{item.city}</span>
                      <small>{item.year}</small>
                    </div>
                    <strong>{item.value}</strong>
                    <h4>{item.title}</h4>
                    <p>{item.note}</p>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      查看{item.city}官方数据 <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                ))}
                <div className="comparison-difference" aria-label="两市公开比例相差4.4个百分点">
                  <span>公开比例相差</span>
                  <strong>4.4</strong>
                  <small>个百分点</small>
                </div>
              </div>
              <div className="comparison-monthly">
                <strong>再看月度变化</strong>
                <p>
                  2025年6月单月，盐城51个省考及以上断面优Ⅲ比例为56.9%；1—6月累计比例为96.1%。年度值适合观察整体进展，单月值则能反映季节、流量和降雨带来的变化。
                </p>
                <a
                  href={yanchengWaterMonitoringUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  进入盐城水质监测栏目 <span aria-hidden="true">↗</span>
                </a>
              </div>
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

        <section id="outcomes" className="outcomes-section section-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">OUTPUTS</p>
              <h2>我们的成果，不只是一份报告</h2>
            </div>
            <p>把现场见闻转化为看得见、点得开、可以分享的实践成果。</p>
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
                <h2>延伸阅读与资料来源</h2>
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
                <h2>现场影像</h2>
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
            <h2 id="team-title">四个人，把两天的收获带回港城</h2>
            <p>
              吴子恒、薛润泽、燕先喆、薄玙彤共同完成路线协调、现场记录、采访拍摄、水样采集、材料整理和网页制作。
            </p>
            <p className="team-school">江苏海洋大学 · 马卡洛夫海洋工程学院</p>
          </div>
        </section>

        <section className="closing">
          <div className="section-shell closing-inner">
            <p>让一次暑期实践，成为持续关注水环境的开始。</p>
            <h2>从盐城湿地出发，我们期待让更多人看见身边的水、理解水、一起守护水。</h2>
            <ScrollButton className="button button-light" targetId="top">
              回到开头
            </ScrollButton>
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
