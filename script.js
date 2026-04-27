const chips = document.querySelectorAll(".chip");
const courses = document.querySelectorAll(".course");
const navLinks = document.querySelectorAll(".bottom-nav a");
const gate = document.querySelector(".language-gate");
const app = document.querySelector(".app");
const languageButtons = document.querySelectorAll(".language-button");

const courseData = {
  ko: [
    ["수락산", "도봉산역 ~ 당고개공원 갈림길", "상급"],
    ["덕릉고개", "당고개공원 갈림길 ~ 상계동 나들이철쭉동산", "상급"],
    ["불암산", "상계동 나들이철쭉동산 ~ 화랑대역", "중급"],
    ["망우·용마산", "화랑대역 ~ 깔딱고개 쉼터", "초급"],
    ["아차산", "깔딱고개 쉼터 ~ 광나루역", "중급"],
    ["고덕산", "광나루역 ~ 명일근린공원", "초급"],
    ["일자산", "명일근린공원 ~ 오금1교", "초급"],
    ["장지·탄천", "오금1교 ~ 수서역", "초급"],
    ["대모·구룡산", "수서역 ~ 매헌시민의숲", "상급"],
    ["우면산", "매헌시민의숲 ~ 사당역", "중급"],
    ["관악산", "사당역 ~ 관악산역", "중급"],
    ["호암산", "관악산역 ~ 석수역", "중급"],
    ["안양천 상류", "석수역 ~ 구일역", "초급"],
    ["안양천 하류", "구일역 ~ 가양역", "초급"],
    ["노을·하늘공원", "가양대교 남단 ~ 증산역", "초급"],
    ["봉산·앵봉산", "증산역 ~ 구파발역", "상급"],
    ["북한산 은평", "구파발역 ~ 북한산생태공원", "중급"],
    ["북한산 종로", "북한산생태공원 ~ 형제봉 입구", "중급"],
    ["북한산 성북", "형제봉 입구 ~ 화계사 입구", "중급"],
    ["북한산 강북", "화계사 입구 ~ 북한산우이역", "중급"],
    ["북한산 도봉", "북한산우이역 ~ 도봉산역", "중급"]
  ],
  en: [
    ["Suraksan", "Dobongsan Station ~ Danggogae Park junction", "Advanced"],
    ["Deongneung Pass", "Danggogae Park junction ~ Sanggye-dong Azalea Hill", "Advanced"],
    ["Buramsan", "Sanggye-dong Azalea Hill ~ Hwarangdae Station", "Intermediate"],
    ["Mangu·Yongmasan", "Hwarangdae Station ~ Kkaldak Pass shelter", "Beginner"],
    ["Achasan", "Kkaldak Pass shelter ~ Gwangnaru Station", "Intermediate"],
    ["Godeoksan", "Gwangnaru Station ~ Myeongil Neighborhood Park", "Beginner"],
    ["Iljasan", "Myeongil Neighborhood Park ~ Ogeum 1 Bridge", "Beginner"],
    ["Jangji·Tancheon", "Ogeum 1 Bridge ~ Suseo Station", "Beginner"],
    ["Daemo·Guryongsan", "Suseo Station ~ Maeheon Citizens' Forest", "Advanced"],
    ["Umyeonsan", "Maeheon Citizens' Forest ~ Sadang Station", "Intermediate"],
    ["Gwanaksan", "Sadang Station ~ Gwanaksan Station", "Intermediate"],
    ["Hoamsan", "Gwanaksan Station ~ Seoksu Station", "Intermediate"],
    ["Anyangcheon Upper Stream", "Seoksu Station ~ Guil Station", "Beginner"],
    ["Anyangcheon Lower Stream", "Guil Station ~ Gayang Station", "Beginner"],
    ["Noeul·Haneul Park", "Gayang Bridge south end ~ Jeungsan Station", "Beginner"],
    ["Bongsan·Aengbongsan", "Jeungsan Station ~ Gupabal Station", "Advanced"],
    ["Bukhansan Eunpyeong", "Gupabal Station ~ Bukhansan Ecological Park", "Intermediate"],
    ["Bukhansan Jongno", "Bukhansan Ecological Park ~ Hyeongjebong entrance", "Intermediate"],
    ["Bukhansan Seongbuk", "Hyeongjebong entrance ~ Hwagyesa entrance", "Intermediate"],
    ["Bukhansan Gangbuk", "Hwagyesa entrance ~ Bukhansan Ui Station", "Intermediate"],
    ["Bukhansan Dobong", "Bukhansan Ui Station ~ Dobongsan Station", "Intermediate"]
  ]
};

const copy = {
  ko: {
    title: "서울둘레길 모바일 안내",
    pill: "모바일 안내",
    eyebrow: "서울 외곽을 한 바퀴 걷는 도시 트레킹",
    headline: "서울<br>둘레길",
    lead: "산, 하천, 마을길을 이어 서울의 자연과 역사, 일상 풍경을 천천히 만나는 21개 코스 안내.",
    stats: ["개 코스", "km 총연장", "시간 권장"],
    heads: ["한눈에 보기", "순환 코스", "코스 목록", "완주 인증", "출발 전 체크"],
    hints: ["2024.04.30 개편 기준", "서울을 감싸는 큰 고리", "난이도별 필터", "스탬프를 모으는 방식", "현장에서 바로 확인"],
    summary: [
      ["접근", "지하철역과 가까운 기점이 많아 대중교통으로 시작하기 좋습니다."],
      ["길의 성격", "외곽산, 하천, 마을길을 연결한 순환형 도보길입니다."],
      ["난이도", "초급 7개, 중급 10개, 상급 4개 코스로 나뉩니다."],
      ["인증", "스탬프북 또는 모바일 앱으로 완주 인증에 도전할 수 있습니다."]
    ],
    mapTitle: "도봉산역에서 다시 도봉산역으로",
    mapBody: "북한산, 관악산, 안양천, 한강 변을 지나며 이어집니다.",
    markers: ["산", "강", "숲"],
    chips: ["전체", "초급", "중급", "상급"],
    steps: [
      ["코스 선택", "거리와 난이도를 확인하고 한 번에 무리하지 않는 코스로 시작합니다."],
      ["스탬프 인증", "스탬프북 또는 모바일 스탬프여권, 트랭글, 램블러 앱을 활용합니다."],
      ["완주 인증서", "21개 코스 완주 후 서울둘레길 안내센터에 신청할 수 있습니다."]
    ],
    checks: ["날씨와 일몰 시간 확인", "물, 간식, 외투 준비", "휴대폰 충전과 보조배터리", "코스 시작·종점 교통편 확인", "쓰레기 되가져가기"],
    buttons: ["공식 누리집 보기", "스마트서울맵 열기"],
    source: "정보 출처: 서울둘레길 공식 누리집의 소개, 전체 코스, 완주 인증서, 안전 길잡이 페이지를 기준으로 구성했습니다.",
    nav: ["요약", "코스", "인증", "준비"]
  },
  en: {
    title: "Seoul Trail Mobile Guide",
    pill: "Mobile guide",
    eyebrow: "A city trek around the edge of Seoul",
    headline: "Seoul<br>Trail",
    lead: "A 21-course guide to Seoul's nature, history, streams, mountains, and neighborhood paths.",
    stats: ["courses", "km total", "hours suggested"],
    heads: ["Overview", "Loop Route", "Courses", "Completion", "Before You Go"],
    hints: ["Updated Apr. 30, 2024", "A wide loop around Seoul", "Filter by difficulty", "Collect stamps as you walk", "Quick field check"],
    summary: [
      ["Access", "Many starting points are close to subway stations, making the trail easy to reach by transit."],
      ["Route Type", "A circular walking route connecting outer mountains, streams, and neighborhood paths."],
      ["Difficulty", "The trail includes 7 beginner, 10 intermediate, and 4 advanced courses."],
      ["Stamp", "Use a stamp book or mobile apps to work toward completion certification."]
    ],
    mapTitle: "From Dobongsan Station back to Dobongsan Station",
    mapBody: "The loop passes Bukhansan, Gwanaksan, Anyangcheon, and the Han River area.",
    markers: ["Mt", "River", "Park"],
    chips: ["All", "Beginner", "Intermediate", "Advanced"],
    steps: [
      ["Choose a Course", "Check distance and difficulty, then start with a route that fits your day."],
      ["Collect Stamps", "Use the stamp book, mobile stamp passport, Tranggle, or Ramblr app."],
      ["Get Certified", "After completing all 21 courses, apply through the Seoul Trail Information Center."]
    ],
    checks: ["Check weather and sunset time", "Pack water, snacks, and a light layer", "Charge your phone and bring a power bank", "Confirm transit to the start and finish", "Carry out your trash"],
    buttons: ["Official Website", "Open Smart Seoul Map"],
    source: "Source: organized from the official Seoul Trail pages for introduction, all courses, completion certification, and safety guidance.",
    nav: ["Summary", "Courses", "Stamp", "Ready"]
  }
};

const setTexts = (selector, values, callback) => {
  document.querySelectorAll(selector).forEach((node, index) => callback(node, values[index], index));
};

const setLanguage = (lang) => {
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.title = t.title;

  document.querySelector(".pill").textContent = t.pill;
  document.querySelector(".eyebrow").textContent = t.eyebrow;
  document.querySelector("h1").innerHTML = t.headline;
  document.querySelector(".lead").textContent = t.lead;

  setTexts(".stat span", t.stats, (node, value) => { node.textContent = value; });
  setTexts("main .section-head h2", t.heads, (node, value) => { node.textContent = value; });
  setTexts("main .section-head .hint", t.hints, (node, value) => { node.textContent = value; });
  setTexts(".summary-item", t.summary, (node, value) => {
    node.querySelector("b").textContent = value[0];
    node.querySelector("p").textContent = value[1];
  });

  document.querySelector(".map-label strong").textContent = t.mapTitle;
  document.querySelector(".map-label span").textContent = t.mapBody;
  setTexts(".marker", t.markers, (node, value) => { node.textContent = value; });
  setTexts(".chip", t.chips, (node, value) => { node.textContent = value; });

  setTexts(".course", courseData[lang], (node, value) => {
    node.querySelector("h3").textContent = value[0];
    node.querySelector("p").textContent = value[1];
    node.querySelector(".level").textContent = value[2];
  });

  setTexts(".step", t.steps, (node, value) => {
    node.querySelector("strong").textContent = value[0];
    node.querySelector("span").textContent = value[1];
  });

  setTexts(".check", t.checks, (node, value) => {
    node.lastChild.textContent = ` ${value}`;
  });

  setTexts(".cta .button", t.buttons, (node, value) => { node.textContent = value; });
  document.querySelector(".source").textContent = t.source;
  setTexts(".bottom-nav a", t.nav, (node, value) => { node.textContent = value; });
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    gate.classList.add("is-loading");
    setLanguage(lang);
    window.scrollTo({ top: 0, behavior: "auto" });

    setTimeout(() => {
      gate.classList.add("is-hidden");
      app.classList.remove("is-loading");
      document.body.classList.remove("is-locked");
      activateNav();
    }, 850);
  });
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;

    chips.forEach((item) => {
      item.classList.toggle("active", item === chip);
      item.setAttribute("aria-selected", String(item === chip));
    });

    courses.forEach((course) => {
      const shouldHide = filter !== "all" && course.dataset.level !== filter;
      course.classList.toggle("hide", shouldHide);
    });
  });
});

const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activateNav = () => {
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top < 170 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("scroll", activateNav, { passive: true });
activateNav();

