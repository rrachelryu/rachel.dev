// src/i18n/translations.ts
import { Translations } from '../types/types'

export const translations: Translations = {
  en: {
    navHome: 'Home',
    navServices: 'Services',
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    heroTitle: 'Hi, I’m <strong>Rachel Ryu</strong>',
    heroSubtitle:
      'A Full-Stack Developer passionate about building impactful digital solutions.',
    heroTitleAria:
      'Main heading introducing Rachel Ryu as a Full Stack Developer',
    ctaButton: 'Hire Me',
    ctaButtonAria: 'Contact Rachel Ryu for professional services',

    hireTitle: 'Let’s Work Together',
    hireSubtitle:
      'Open to freelance work, consulting, and exciting collaborations.',
    hireButton: 'Contact Me',
    hireButtonAria: 'Click to contact Rachel',

    servicesTitle: 'Services Offered',
    webDev: 'Web Development',
    webDevDesc: 'Custom websites and web apps built with modern technologies.',
    backendDev: 'Backend Development',
    backendDevDesc:
      'Scalable server-side solutions using Java, Spring, and databases.',
    cloudSolutions: 'Cloud & Microservices',
    cloudSolutionsDesc: 'Cloud-native architecture and microservices on AWS.',

    projectsTitle: 'Featured Projects',
    enterprise: 'Corporate Website',
    enterpriseDesc: 'Responsive homepage for enterprise clients.',
    ecommerce: 'E-Commerce Platform',
    ecommerceDesc: 'Online shopping system with integrated payment features.',
    portal: 'Hospital Management System',
    portalDesc: 'Reservation and patient management system for clinics.',

    aboutTitle: 'About Me',
    aboutDesc1: `As a full-stack developer with over 10 years of experience, I have primarily developed enterprise systems in the financial sector. I specialize in Java, Spring Boot, microservices architecture (MSA), and cloud-based solutions.`,
    aboutDesc2: `I also have hands-on experience with frontend projects using Vue.js and React.js. My professional background includes working with major financial institutions such as Samsung Card, Hyundai Card, NongHyup Bank, Woori Financial Capital, Shinhan Bank, and the Bank of Korea.`,
    experienceTitle: 'Career Timeline',
    experienceDesc:
      'Professional milestones in the financial technology domain.',

    experiences: [
      { year: '2018–2019', company: 'BNK Capital', project: 'Loan System' },
      {
        year: '2019–2020',
        company: 'NH Bank',
        project: 'Loan System, Samsung Card Maintenance',
      },
      {
        year: '2020–2021',
        company: 'Woori Financial Capital',
        project: 'VOC & Non-face-to-face Integration',
      },
      {
        year: '2021–2022',
        company: 'Woori Card, Kyobo Life, Shinhan Bank',
        project: 'WON Card App, Insurance & Finance Systems',
      },
      {
        year: '2022–2023',
        company: 'Lina Life, Hero Adjustment, DB Insurance',
        project: 'Insurance System Development',
      },
      {
        year: '2024–2025',
        company: 'Saemaul Geumgo, Bank of Korea',
        project: 'CBDC System Development',
      },
    ],

    techStackTitle: 'Technical Expertise',
    techStackDesc1:
      'Over 10 years of full-stack development focused on financial enterprise systems.',
    techStackDesc2:
      'Major clients include NH Bank, BNK Capital, Kyobo Life, Shinhan Bank, DB Insurance, and the Bank of Korea.',

    skillsTitle: 'Technical Skills',
    backendSkills: 'Backend: Java, Spring, Spring Boot, Struts, MSA',
    frontendSkills:
      'Frontend: JSP, Thymeleaf, JavaScript, Vue.js, React.js, WebSquare, Nuxt.js',
    databaseSkills: 'Databases: Oracle, PostgreSQL, MySQL, DB2, Tibero',
    cloudSkills: 'Cloud & DevOps: AWS, NCP, Kafka, Git, Argo CD, TFS',
    frameworksSkills: 'Frameworks: eGov, Spider, MI-Platform',
    toolsSkills:
      'Tools: IntelliJ, VSCode, Eclipse, STS, DataGrip, TOAD, OZ Report, Devon, HeidiSQL',

    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',

    siteTitle: 'Rachel Ryu | Full Stack Developer',
    siteDescription:
      'Experienced Full Stack Developer specializing in enterprise-level solutions.',
    siteKeywords:
      'java, spring, react, vue, full stack, developer, financial, enterprise',
  },

  ko: {
    navHome: '홈',
    navServices: '서비스',
    navProjects: '프로젝트',
    navAbout: '소개',
    navContact: '연락처',
    heroTitle: '안녕하세요, <br><strong>Rachel Ryu</strong>입니다',
    heroTitleAria: '풀스택 개발자 Rachel Ryu 소개',
    heroSubtitle: '임팩트 있는 디지털 솔루션을 만드는 <br>풀스택 개발자입니다.',
    ctaButton: '문의하기',
    ctaButtonAria: 'Rachel에게 연락하기',

    hireTitle: '함께 일해요',
    hireSubtitle: '프리랜서, 컨설팅, 협업 프로젝트를 환영합니다.',
    hireButton: '연락하기',
    hireButtonAria: 'Rachel에게 연락하기',

    servicesTitle: '제공 서비스',
    webDev: '웹 개발',
    webDevDesc: '최신 기술로 제작하는 맞춤형 웹사이트 및 애플리케이션',
    backendDev: '백엔드 개발',
    backendDevDesc: 'Java, Spring 기반의 안정적이고 확장 가능한 서버 개발',
    cloudSolutions: '클라우드 및 마이크로서비스',
    cloudSolutionsDesc: 'AWS 기반 클라우드 아키텍처 및 MSA 구축',

    projectsTitle: '대표 프로젝트',
    enterprise: '기업 홈페이지',
    enterpriseDesc: '기업 브랜드를 위한 반응형 웹사이트 구축',
    ecommerce: '쇼핑몰 플랫폼',
    ecommerceDesc: '결제 시스템이 포함된 온라인 쇼핑몰 구축',
    portal: '병원 시스템',
    portalDesc: '예약 및 환자 관리를 위한 의료 시스템',

    aboutTitle: '소개',
    aboutDesc1:
      '10년 이상의 경력을 가진 풀스택 개발자로서 금융권 엔터프라이즈 시스템을 주로 개발해왔습니다. Java, Spring Boot, 마이크로서비스 아키텍처(MSA), 클라우드 기반 솔루션에 특화되어 있습니다.',
    aboutDesc2:
      'Vue.js와 React.js를 활용한 프론트엔드 프로젝트 경험도 보유하고 있으며,  삼성카드, 현대카드, 농협은행, 우리금융캐피탈, 신한은행, 한국은행 등에서 근무했습니다.',
    experienceTitle: '경력 연도별 정리',
    experienceDesc: '금융 IT 분야에서의 주요 프로젝트 수행 이력',

    experiences: [
      { year: '2018~2019', company: 'BNK캐피탈', project: '대출 시스템' },
      {
        year: '2019~2020',
        company: 'NH농협',
        project: '대출 시스템, 삼성카드 유지보수',
      },
      {
        year: '2020~2021',
        company: '우리금융캐피탈',
        project: 'VOC 및 비대면 통합 개발',
      },
      {
        year: '2021~2022',
        company: '우리카드, 교보생명, 신한은행',
        project: 'WON카드 앱, 보험 및 금융 시스템 개발',
      },
      {
        year: '2022~2023',
        company: '라이나생명, 히어로손해사정, DB손해보험',
        project: '보험 시스템 구축',
      },
      {
        year: '2024~2025',
        company: '새마을금고, 한국은행',
        project: 'CBDC 시스템 개발',
      },
    ],

    techStackTitle: '기술 역량',
    techStackDesc1:
      '10년 이상 금융권 중심의 엔터프라이즈 시스템을 개발해왔습니다.',
    techStackDesc2:
      'NH농협, BNK캐피탈, 교보생명, 신한은행, DB손해보험, 한국은행 등 다양한 금융기관 프로젝트 경험이 있습니다.',

    skillsTitle: '보유 기술',
    backendSkills: '백엔드: Java, Spring, Spring Boot, Struts, MSA',
    frontendSkills:
      '프론트엔드: JSP, Thymeleaf, JavaScript, Vue.js, React.js, WebSquare, Nuxt.js',
    databaseSkills: '데이터베이스: Oracle, PostgreSQL, MySQL, DB2, Tibero',
    cloudSkills: '클라우드 및 DevOps: AWS, NCP, Kafka, Git, Argo CD, TFS',
    frameworksSkills: '프레임워크: 전자정부프레임워크, Spider, MI-Platform',
    toolsSkills:
      '도구: IntelliJ, VSCode, Eclipse, STS, DataGrip, TOAD, OZ Report, Devon, HeidiSQL',

    darkMode: '다크 모드',
    lightMode: '라이트 모드',

    siteTitle: '레이첼 류 | 풀스택 개발자',
    siteDescription: '엔터프라이즈 시스템 전문 풀스택 개발자',
    siteKeywords:
      '자바, 스프링, 리액트, 뷰, 풀스택, 개발자, 금융, 웹사이트 외주',
  },
}
