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
    title: "水也连接城市记忆",
    text: "从湿地浅水到串场河夜色，我们看到水既是生态要素，也承载盐城的历史与日常生活。",
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
    type: "汇报",
    title: "PPT文案与演讲稿",
    detail: "面向新生讲清实践目标、现场行动、方法边界和个人成长。",
    status: "持续完善",
  },
  {
    type: "影像",
    title: "总结视频与分镜",
    detail: "以两日路线为叙事轴，串联博物馆、城市文化、麋鹿生境和采样。",
    status: "素材齐备",
  },
  {
    type: "展示",
    title: "实践成果网页",
    detail: "将分散的文字和照片整合为一份可浏览、可分享的数字成果册。",
    status: "本页呈现",
  },
  {
    type: "方法",
    title: "一条可核验的证据链",
    detail: "区分现场观察、公开资料和实验数据，不用未经检测的水样制造结论。",
    status: "核心收获",
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
            <small>盐城湿地实践成果展</small>
          </span>
        </a>
        <nav aria-label="页面导航">
          <a href="#journey">实践路线</a>
          <a href="#evidence">样本记录</a>
          <a href="#outcomes">成果清单</a>
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
              从一片湿地出发，
              <span>读懂水、生命与城市</span>
            </h1>
            <p className="hero-lead">
              我们没有给两份未经检测的水样写下结论，而是留下了一条可核验的实践链：参观、采访、观察、采样、整理与传播。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#journey">
                查看实践路线
              </a>
              <a className="button button-ghost" href="#gallery">
                浏览影像档案
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <span>江苏盐城</span>
            <span>2026.07.26—27</span>
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
              数字很小，过程完整。
              <br />
              这是一份属于大二学生的真实实践记录。
            </p>
          </div>
        </section>

        <section className="manifesto section-shell" aria-labelledby="manifesto-title">
          <div>
            <p className="section-kicker">OUR APPROACH</p>
            <h2 id="manifesto-title">我们把“到过”变成“做过”</h2>
          </div>
          <p>
            两天并不足以完成一项科研课题，却足以走完一条基本的学习链：先在展陈中建立知识框架，再到现场观察真实生境，通过采访补充公众传播视角，以采样认识方法边界，最后把材料整理成可阅读、可复核的成果。
          </p>
        </section>

        <section id="journey" className="journey-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">FIELD JOURNEY</p>
                <h2>两天，四个行动节点</h2>
              </div>
              <p>从湿地课堂到麋鹿生境，再回到证据本身。</p>
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
                两份样品均未送实验室检测，因此网页不展示虚构的pH、溶解氧或水质等级。现场照片只证明采样动作和周边环境，公开资料只提供背景，两者都不能替代实验数据。
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
                    <dd>形成对比观察问题</dd>
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

        <section id="outcomes" className="outcomes-section section-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">OUTPUTS</p>
              <h2>我们的成果，不只是一份报告</h2>
            </div>
            <p>将短行程转化为可阅读、可展示、可继续完善的成果链。</p>
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
            <h2 id="team-title">四个人，一次完整的协作</h2>
            <p>
              吴子恒、薛润泽、燕先喆、薄玙彤。我们共同完成路线协调、现场记录、采访拍摄、水样采集和材料整理，也共同承担“不夸大结果”的责任。
            </p>
            <p className="team-school">
              江苏海洋大学 · 马卡洛夫海洋工程学院
            </p>
          </div>
        </section>

        <section className="closing">
          <div className="section-shell closing-inner">
            <p>实践的终点，不是合影。</p>
            <h2>是把一次真实经历，讲成一个经得起追问的故事。</h2>
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
            <p>江苏典型生态环境对比与水生态保护实践</p>
          </div>
          <p>盐城 · 2026</p>
        </div>
      </footer>
    </>
  );
}
