(() => {
  const page = document.documentElement.dataset.legalPage;
  const contentNode = document.getElementById('legal-content');
  const titleNode = document.getElementById('legal-title');
  const updatedNode = document.getElementById('legal-updated');
  const eyebrowNode = document.getElementById('legal-eyebrow');
  const backLink = document.getElementById('legal-back');
  const footerLink = document.getElementById('legal-footer-link');
  const brandBy = document.getElementById('legal-brand-by');
  const languageGroup = document.getElementById('legal-language');
  const languageButtons = [...document.querySelectorAll('[data-lang-button]')];

  const pages = {
    privacy: {
      en: {
        title: 'Privacy Policy',
        eyebrow: 'ReelsBuddy / Legal',
        updated: 'Last updated: October 30, 2026',
        body: `
          <p>This policy explains how the ReelsBuddy website handles information. ReelsBuddy is a desktop application published by Playsout.</p>
          <h2>Website information</h2>
          <p>The ReelsBuddy website does not require an account. We do not ask you to upload creative files through this website.</p>
          <h2>Language preference</h2>
          <p>The website may store your language choice in your browser so that the interface opens in the language you selected. You can remove this preference by clearing your browser storage.</p>
          <h2>Hosting and technical data</h2>
          <p>Our hosting provider may process standard technical information such as request logs, browser type and approximate region for security, reliability and performance. We do not use this website for advertising profiles.</p>
          <h2>Desktop application</h2>
          <p>When you use ReelsBuddy on your computer, account, project and cloud-processing data may be handled differently. Those practices are described inside the application and should be reviewed before you upload private material.</p>
          <h2>Third-party links</h2>
          <p>This website may link to Playsout or other services. Their own privacy policies apply when you visit them.</p>
          <h2>Changes</h2>
          <p>We may update this policy as the product changes. The date at the top of this page identifies the current published version.</p>
        `
      },
      zh: {
        title: '隐私政策',
        eyebrow: 'ReelsBuddy / 法律信息',
        updated: '最后更新：2026 年 10 月 30 日',
        body: `
          <p>本政策说明 ReelsBuddy 网站如何处理信息。ReelsBuddy 是由 Playsout 发布的桌面应用程序。</p>
          <h2>网站信息</h2>
          <p>ReelsBuddy 网站无需账户即可访问，我们不会要求你通过本网站上传创作文件。</p>
          <h2>语言偏好</h2>
          <p>网站可能在浏览器中保存你的语言选择，以便下次以相同语言打开。你可以通过清除浏览器存储来移除该偏好。</p>
          <h2>托管与技术数据</h2>
          <p>托管服务提供商可能出于安全、可靠性和性能目的处理常规技术信息，例如请求日志、浏览器类型和大致地区。本网站不用于建立广告画像。</p>
          <h2>桌面应用</h2>
          <p>在电脑上使用 ReelsBuddy 时，账户、项目和云端处理数据可能适用不同规则。相关信息以应用内说明为准；上传私密素材前请先阅读。</p>
          <h2>第三方链接</h2>
          <p>本网站可能链接至 Playsout 或其他服务。访问这些服务时，适用其各自的隐私政策。</p>
          <h2>政策更新</h2>
          <p>随着产品变化，我们可能更新本政策。页面顶部的日期代表当前发布版本。</p>
        `
      }
    },
    terms: {
      en: {
        title: 'Terms of Use',
        eyebrow: 'ReelsBuddy / Legal',
        updated: 'Last updated: October 30, 2026',
        body: `
          <p>These terms govern use of the ReelsBuddy informational website. Use of the desktop application may be subject to additional terms presented inside the product.</p>
          <h2>Website purpose</h2>
          <p>This website describes ReelsBuddy and provides product information and download entry points. Content may change as the product develops.</p>
          <h2>Intellectual property</h2>
          <p>ReelsBuddy, Playsout and associated names, marks, visual systems and website content are protected by applicable intellectual property laws. You may not copy or redistribute them for commercial use without permission.</p>
          <h2>Acceptable use</h2>
          <p>You agree not to interfere with the website, attempt unauthorized access, introduce malicious code or use the site in a way that violates applicable law.</p>
          <h2>Third-party services</h2>
          <p>The website may link to third-party sites or services. We are not responsible for their content, availability or terms.</p>
          <h2>Availability and disclaimers</h2>
          <p>The website is provided on an as-available basis. Product descriptions do not guarantee a particular result, output quality or uninterrupted availability.</p>
          <h2>Changes</h2>
          <p>We may revise these terms or the website at any time. Continued use after an update means you accept the revised terms.</p>
        `
      },
      zh: {
        title: '服务条款',
        eyebrow: 'ReelsBuddy / 法律信息',
        updated: '最后更新：2026 年 10 月 30 日',
        body: `
          <p>本条款适用于 ReelsBuddy 产品介绍网站。桌面应用的使用可能同时适用应用内展示的附加条款。</p>
          <h2>网站用途</h2>
          <p>本网站用于介绍 ReelsBuddy，并提供产品信息和下载入口。随着产品发展，网站内容可能发生变化。</p>
          <h2>知识产权</h2>
          <p>ReelsBuddy、Playsout 及相关名称、标识、视觉系统和网站内容受适用知识产权法律保护。未经许可，不得将其复制或再分发用于商业用途。</p>
          <h2>可接受使用</h2>
          <p>你同意不干扰网站运行、不尝试未经授权的访问、不引入恶意代码，也不以违反适用法律的方式使用本网站。</p>
          <h2>第三方服务</h2>
          <p>本网站可能链接至第三方网站或服务。我们不对其内容、可用性或条款负责。</p>
          <h2>可用性与免责声明</h2>
          <p>网站按现有可用状态提供。产品描述不保证特定结果、输出质量或服务始终不中断。</p>
          <h2>条款更新</h2>
          <p>我们可能随时修改本条款或网站。更新后继续使用网站，即表示你接受修订后的条款。</p>
        `
      }
    }
  };

  if (!page || !pages[page] || !contentNode) return;

  function render(language, persist = true) {
    const dictionary = pages[page][language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = `${dictionary.title} - ReelsBuddy`;
    titleNode.textContent = dictionary.title;
    eyebrowNode.textContent = dictionary.eyebrow;
    updatedNode.textContent = dictionary.updated;
    contentNode.innerHTML = dictionary.body;
    backLink.textContent = language === 'zh' ? '返回网站' : 'Back to site';
    backLink.href = language === 'zh' ? './?lang=zh' : './';
    if (brandBy) brandBy.textContent = language === 'zh' ? '由 Playsout 出品' : 'by Playsout';
    if (languageGroup) languageGroup.setAttribute('aria-label', language === 'zh' ? '语言' : 'Language');
    if (footerLink) {
      const isPrivacy = page === 'privacy';
      footerLink.textContent = isPrivacy
        ? (language === 'zh' ? '服务条款' : 'Terms of Use')
        : (language === 'zh' ? '隐私政策' : 'Privacy Policy');
      const destination = isPrivacy ? './terms.html' : './privacy.html';
      footerLink.href = language === 'zh' ? `${destination}?lang=zh` : destination;
    }
    languageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.langButton === language));
    });

    if (!persist) return;
    try {
      localStorage.setItem('reelsbuddy-concept-language', language);
    } catch {}
    try {
      const url = new URL(window.location.href);
      if (language === 'zh') {
        url.searchParams.set('lang', 'zh');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState(null, '', url);
    } catch {}
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => render(button.dataset.langButton));
  });

  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  const hasQueryLanguage = queryLanguage === 'zh' || queryLanguage === 'en';
  let initialLanguage = hasQueryLanguage ? queryLanguage : 'en';
  if (!hasQueryLanguage) {
    try {
      const storedLanguage = localStorage.getItem('reelsbuddy-concept-language');
      if (storedLanguage === 'zh' || storedLanguage === 'en') initialLanguage = storedLanguage;
    } catch {}
  }
  render(initialLanguage, false);
})();
