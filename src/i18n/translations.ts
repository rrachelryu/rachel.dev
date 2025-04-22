// src/i18n/translations.ts
import { Translations } from '../types/types'

export const translations: Translations = {
  en: {
    // 기존 번역 키 유지
    navHome: 'Home',
    navServices: 'Services',
    navProjects: 'Projects',
    navAbout: 'About',
    navContact: 'Contact',
    heroTitle: "Hi, I'm a Full Stack Developer",
    heroSubtitle:
      'I build enterprise-grade applications tailored to your business needs.',
    ctaButton: 'Hire Me',
    servicesTitle: 'My Services',
    webDev: 'Website Development',
    webDevDesc:
      'Custom-built websites and web applications with modern frameworks',
    backendDev: 'Backend Development',
    backendDevDesc:
      'Robust server-side solutions with Java, Spring, and various databases',
    cloudSolutions: 'Cloud Solutions',
    cloudSolutionsDesc:
      'Scalable cloud architecture and microservices implementation on AWS',
    projectsTitle: 'Featured Projects',
    enterprise: 'Enterprise Website',
    enterpriseDesc:
      'Corporate homepage built with enterprise-grade technology stack',
    ecommerce: 'E-commerce Platform',
    ecommerceDesc: 'Online shopping mall system with payment integration',
    portal: 'Hospital System',
    portalDesc:
      'Patient management and reservation system for clinics and hospitals',
    aboutTitle: 'About Me',
    aboutDesc:
      "With over a decade of experience as a Full Stack Developer, I've contributed to major financial projects. I specialize in Java, Spring Boot, MSA architecture, cloud-native development, and high-performance enterprise solutions. I've handled frontend development with frameworks like Vue.js and React, and backend with Oracle, MySQL, DB2, and PostgreSQL. I've worked on financial systems for NH Bank, BNK Capital, Kyobo Life, Shinhan Bank, DB Insurance, and Bank of Korea.",
    experienceTitle: 'Experience',
    experienceDesc: 'My professional journey in the financial sector',
    skillsTitle: 'Technical Skills',
    backendSkills: 'Backend: Java, Spring, Spring Boot, Struts, MSA',
    frontendSkills:
      'Frontend: JSP, Thymeleaf, JavaScript, Vue.js, React.js, WebSquare, Nuxt.js',
    databaseSkills: 'Database: Oracle, PostgreSQL, MySQL, DB2, Tibero',
    cloudSkills: 'Cloud & DevOps: AWS, NCP, Kafka, Git, Argo CD, TFS',
    frameworksSkills:
      'Frameworks: eGov Framework, Spider Framework, MI-Platform',
    toolsSkills:
      'Tools: Eclipse, STS, IntelliJ, VSCode, DataGrip, TOAD, OZ Report, Devon, Heidisql',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    // SEO 관련 키 추가
    siteTitle: 'Rachel Ryu | Full Stack Developer',
    siteDescription:
      'Full Stack Developer specializing in enterprise solutions',
    siteKeywords: 'java, spring, react, vue, full stack, developer, financial',
    heroTitleAria:
      'Main heading introducing Rachel Ryu as a Full Stack Developer',
    ctaButtonAria: 'Contact Rachel Ryu for professional services',
    // 영어 버전의 경험 추가
    experiences: [
      { year: '2018-2019', company: 'BNK Capital', project: 'Loan System' },
      {
        year: '2019-2020',
        company: 'NH Bank',
        project: 'Loan System, Samsung Card Maintenance',
      },
      {
        year: '2020-2021',
        company: 'Woori Financial Capital',
        project: 'VOC and Non-face-to-face Integration Development',
      },
      {
        year: '2021-2022',
        company: 'Woori Card, Kyobo Life, Shinhan Bank',
        project: 'WON Card App, Insurance and Financial Systems',
      },
      {
        year: '2022-2023',
        company: 'Lina Life, Hero Loss Adjustment, DB Insurance',
        project: 'Insurance-related Systems',
      },
      {
        year: '2024-2025',
        company: 'Saemaul Geumgo, Bank of Korea',
        project: 'CBDC System Development',
      },
    ],
    techStackTitle: 'Technical Expertise',
    techStackDesc1:
      'With over 10 years of experience as a full stack developer, I have focused on financial sector projects.',
    techStackDesc2:
      'Major clients include NH Bank, BNK Capital, Kyobo Life, Shinhan Bank, DB Insurance, and the Bank of Korea.',
  },
  ko: {
    navHome: '홈',
    navServices: '서비스',
    navProjects: '프로젝트',
    navAbout: '소개',
    navContact: '연락처',
    heroTitle: '안녕하세요<br/> 풀스택 개발자입니다',
    heroSubtitle:
      '비즈니스 요구에 맞는 <br/>엔터프라이즈급 애플리케이션을 구축합니다.',
    ctaButton: '채용하기',
    servicesTitle: '내 서비스',
    webDev: '웹사이트 개발',
    webDevDesc: '현대적인 프레임워크로 맞춤형 웹사이트 및 웹 애플리케이션 구축',
    backendDev: '백엔드 개발',
    backendDevDesc:
      'Java, Spring 및 다양한 데이터베이스로 견고한 서버 측 솔루션 제공',
    cloudSolutions: '클라우드 솔루션',
    cloudSolutionsDesc:
      'AWS에서 확장 가능한 클라우드 아키텍처 및 마이크로서비스 구현',
    projectsTitle: '주요 프로젝트',
    enterprise: '기업 홈페이지',
    enterpriseDesc: '기업의 브랜딩을 위한 반응형 홈페이지 구축',
    ecommerce: '쇼핑몰 플랫폼',
    ecommerceDesc: '결제 기능이 포함된 온라인 쇼핑몰 시스템',
    portal: '병원 시스템',
    portalDesc: '환자 관리 및 예약을 위한 클리닉 전용 시스템',
    aboutTitle: '내 소개',
    aboutDesc:
      '10년 이상의 경력을 가진 풀스택 개발자로서, 금융권 프로젝트에 집중해왔습니다. Java, Spring Boot 기반의 마이크로서비스 아키텍처(MSA)와 클라우드 네이티브 개발에 특화되어 있으며, Vue.js, React.js 등 최신 프론트엔드 기술도 경험하였습니다. 주요 고객으로는 농협, BNK캐피탈, 교보생명, 신한은행, DB손해보험, 한국은행 등이 있습니다.',
    experienceTitle: '경력 연도별 정리',
    experienceDesc: '금융 분야에서의 전문적인 여정',
    skillsTitle: '기술 역량',
    backendSkills: '백엔드: Java, Spring, Spring Boot, Struts, MSA',
    frontendSkills:
      '프론트엔드: JSP, Thymeleaf, JavaScript, Vue.js, React.js, WebSquare, Nuxt.js',
    databaseSkills: '데이터베이스: Oracle, PostgreSQL, MySQL, DB2, Tibero',
    cloudSkills: '클라우드 및 DevOps: AWS, NCP, Kafka, Git, Argo CD, TFS',
    frameworksSkills: '프레임워크: 전자정부프레임워크, Spider, MI-Platform',
    toolsSkills:
      '도구: Eclipse, STS, IntelliJ, VSCode, DataGrip, TOAD, OZ Report, Devon, Heidisql',
    darkMode: '다크 모드',
    lightMode: '라이트 모드',
    // SEO 관련 키 추가
    siteTitle: '레이첼 류 | 풀스택 개발자',
    siteDescription: '엔터프라이즈 솔루션 전문 풀스택 개발자',
    siteKeywords: '자바, 스프링, 리액트, 뷰, 풀스택, 개발자, 금융',
    heroTitleAria: '레이첼 류를 풀스택 개발자로 소개하는 메인 제목',
    ctaButtonAria: '레이첼 류에게 전문 서비스 문의하기',
    // 한국어 버전의 경험
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
        project: 'VOC 및 비대면 연계 개발',
      },
      {
        year: '2021~2022',
        company: '우리카드, 교보생명, 신한은행',
        project: 'WON카드 앱, 보험, 금융 시스템 개발',
      },
      {
        year: '2022~2023',
        company: '라이나생명, 히어로손해사정법인, DB손해보험',
        project: '보험 관련 시스템 구축',
      },
      {
        year: '2024~2025',
        company: '새마을금고, 한국은행',
        project: 'CBDC 시스템 구축',
      },
    ],
    techStackTitle: '기술 역량',
    techStackDesc1:
      '10년 이상의 경력을 가진 풀스택 개발자로서, 금융권 프로젝트에 집중해왔습니다.',
    techStackDesc2:
      '주요 고객으로는 농협, BNK캐피탈, 교보생명, 신한은행, DB손해보험, 한국은행 등이 있습니다.',
  },
}
