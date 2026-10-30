(() => {
      const root = document.getElementById('reelsbuddy-homepage-concept');
      const menuButton = document.getElementById('rb-menu-button');
      const mobileNav = document.getElementById('rb-mobile-nav');
      const downloadStatus = document.getElementById('rb-download-status');
      const siteConfig = window.REELSBUDDY_SITE_CONFIG || {};
      const downloads = siteConfig.downloads || {};
      let currentLanguage = 'en';
      let activeCase = 'drama';
      let activeWorkflowStep = 'direction';
      let isMenuOpen = false;
      let statusTimer = null;

      const translations = {
        en: {
          brandBy: 'by Playsout',
          primaryNavLabel: 'Primary navigation',
          mobileNavLabel: 'Mobile navigation',
          languageGroupLabel: 'Language',
          homeLabel: 'ReelsBuddy home',
          skipToContent: 'Skip to content',
          navFormats: 'Formats',
          navWorkflow: 'Workflow',
          navShowcase: 'Showcase',
          downloadApp: 'Download app',
          downloadShort: 'Download',
          heroEyebrow: 'The AI video studio for individuals',
          heroTitle: 'From an idea to a finished creation.',
          heroSub: 'ReelsBuddy turns your ideas, references, product links or data into a finished short video, from the first script to the last export.',
          heroDownload: 'Download app',
          heroDemo: 'See how it works',
          formatsKicker: 'Built for every kind of story',
          formatsTitle: 'Every format you want to create.',
          formatsSub: 'Start from a proven creative shape, then let the Agent adapt the script, visuals and edit to your idea.',
          formatsGroupLabel: 'Video formats',
          formatDrama: 'Short drama',
          formatBrand: 'Brand promo',
          formatProduct: 'Product demo',
          formatData: 'Data story',
          formatSocial: 'Social ad',
          formatScience: 'Science explainer',
          exampleBrief: 'Example idea',
          workflowGroupLabel: 'Workflow steps',
          stepDirection: '01 / DIRECTION',
          stepDirectionTitle: 'Start with intent',
          stepDirectionBody: 'Bring an idea, a page, a file or a dataset. ReelsBuddy asks the questions that bring it into focus.',
          stepScript: '02 / SCRIPT',
          stepScriptTitle: 'See the story first',
          stepScriptBody: 'Review the treatment, script and storyboard before a single generated frame is committed.',
          stepProduction: '03 / PRODUCTION',
          stepProductionTitle: 'Build every layer',
          stepProductionBody: 'Generate visuals, motion, voice and captions, then arrange the whole piece on a visual canvas.',
          stepDelivery: '04 / DELIVERY',
          stepDeliveryTitle: 'Finish the cut',
          stepDeliveryBody: 'Leave scene-level notes, protect the brand and export every format from the same source project.',
          editorKicker: 'Agentic by default. Editorial by design.',
          editorTitle: 'A studio you can actually direct.',
          editorSub: 'The Agent handles the assembly. You keep the judgment: the hook, the brand, the pacing, the final frame.',
          editorAssets: 'Assets',
          assetLibraryLabel: 'Asset library',
          canvasLabel: 'Canvas workspace',
          canvasIdea: 'Idea',
          canvasScript: 'Script',
          canvasRefs: 'References',
          canvasOutput: 'Output',
          agentConversationLabel: 'Agent conversation',
          editorAgent: 'Agent',
          editorStudio: 'Studio',
          showcaseKicker: 'Made to share',
          showcaseTitle: 'For your next story. And your next ad.',
          showcaseSub: 'Give every performance a frame and every selling point a spotlight. Explore finished work made with ReelsBuddy.',
          showcaseCard1Title: 'Solace / New ritual',
          showcaseCard1Meta: 'Brand promo / 16:9',
          showcaseCard2Title: 'Move / Summer drop',
          showcaseCard2Meta: 'Social ad / 9:16',
          showcaseCard3Title: 'The access gap',
          showcaseCard3Meta: 'Data story / 16:9',
          playCard1Label: 'Play Solace / New ritual',
          playCard2Label: 'Play Move / Summer drop',
          playCard3Label: 'Play The access gap',
          ctaTitle: 'Start with your next idea.',
          ctaBody: 'Bring the idea. ReelsBuddy will help shape the story, build the scenes and get it ready to publish.',
          downloadMac: 'Download Mac',
          downloadWindows: 'Download Windows',
          macVersionMenuLabel: 'Choose a Mac version',
          macAppleSilicon: 'Mac (M-series chip)',
          macAppleSiliconHint: 'M1-M5 · macOS 13+',
          macIntel: 'Mac (older Intel chip)',
          macIntelHint: 'Intel processor · macOS 13+',
          footerTagline: 'The desktop studio for short-form video, from the first spark to the final cut.',
          footerProduct: 'Product',
          footerFormats: 'Formats',
          footerCompany: 'Company',
          footerAbout: 'About Playsout',
          footerContact: 'Contact',
          footerPrivacy: 'Privacy',
          footerTerms: 'Terms',
          menuOpenLabel: 'Open menu',
          menuCloseLabel: 'Close menu',
          downloadUnavailableMacAppleSilicon: 'The Apple silicon version is being prepared. Please check back soon.',
          downloadUnavailableMacIntel: 'The Intel Mac version is being prepared. Please check back soon.',
          downloadUnavailableWindows: 'The Windows download is being prepared. Please check back soon.',
          showcaseUnavailable: 'The full showcase video is being prepared. Check back soon.',
          documentTitle: 'ReelsBuddy - AI video studio',
          metaDescription: 'An AI video studio for individuals. Turn ideas, references and data into finished short videos.',
          ogTitle: 'ReelsBuddy - From an idea to a finished creation.',
          ogDescription: 'Turn ideas and assets into finished short videos with one editable AI production canvas.',
          ogImageAlt: 'ReelsBuddy brand card: from an idea to a finished creation.'
        },
        zh: {
          brandBy: '由 Playsout 出品',
          primaryNavLabel: '主导航',
          mobileNavLabel: '移动导航',
          languageGroupLabel: '语言',
          homeLabel: 'ReelsBuddy 首页',
          skipToContent: '跳到主要内容',
          navFormats: '视频类型',
          navWorkflow: '工作流',
          navShowcase: '作品',
          downloadApp: '下载应用',
          downloadShort: '下载',
          heroEyebrow: '面向个人的 AI 视频工作室',
          heroTitle: '从一个创意，到一部创作。',
          heroSub: 'ReelsBuddy 把你的想法、参考资料、产品链接或数据转化为一支完整的短视频，从脚本、分镜一直完成到最终导出。',
          heroDownload: '下载应用',
          heroDemo: '查看工作方式',
          formatsKicker: '为每一种故事而设计',
          formatsTitle: '你想创作的每一种视频。',
          formatsSub: '从成熟的创作结构开始，让智能体围绕你的创意调整脚本、画面与剪辑。',
          formatsGroupLabel: '视频类型',
          formatDrama: '短剧',
          formatBrand: '品牌宣传',
          formatProduct: '产品讲解',
          formatData: '数据可视化',
          formatSocial: '社媒广告',
          formatScience: '科普讲解',
          exampleBrief: '创意示例',
          workflowGroupLabel: '制作流程',
          stepDirection: '01 / 方向',
          stepDirectionTitle: '从意图开始',
          stepDirectionBody: '带入一个创意、页面、文件或数据集。ReelsBuddy 会追问，帮助你把想法变得清晰。',
          stepScript: '02 / 脚本',
          stepScriptTitle: '先看到故事',
          stepScriptBody: '在正式生成任何画面前，先审核创意阐述、脚本和分镜。',
          stepProduction: '03 / 制作',
          stepProductionTitle: '构建每一层',
          stepProductionBody: '生成画面、动效、配音与字幕，再在可视化画布上完成整体编排。',
          stepDelivery: '04 / 交付',
          stepDeliveryTitle: '完成终剪',
          stepDeliveryBody: '添加逐镜头意见，保护品牌一致性，并从同一项目导出所有画幅。',
          editorKicker: '默认智能，专业可控。',
          editorTitle: '一个真正能指挥的创作工作室。',
          editorSub: '智能体负责组装，你负责判断：开场钩子、品牌调性、节奏和最后一帧。',
          editorAssets: '素材',
          assetLibraryLabel: '素材库',
          canvasLabel: '创作画布',
          canvasIdea: '创意',
          canvasScript: '脚本',
          canvasRefs: '参考素材',
          canvasOutput: '输出',
          agentConversationLabel: '智能体对话',
          editorAgent: '智能体',
          editorStudio: '工作室',
          showcaseKicker: '为分享而生',
          showcaseTitle: '为你的下一个故事，下一条广告而来。',
          showcaseSub: '让表演有画面，让卖点被看见。看看 ReelsBuddy 创作的真实作品。',
          showcaseCard1Title: 'Solace / 新仪式',
          showcaseCard1Meta: '品牌宣传 / 16:9',
          showcaseCard2Title: 'Move / 夏日系列',
          showcaseCard2Meta: '社媒广告 / 9:16',
          showcaseCard3Title: '差距在哪里',
          showcaseCard3Meta: '数据可视化 / 16:9',
          playCard1Label: '播放 Solace / 新仪式',
          playCard2Label: '播放 Move / 夏日系列',
          playCard3Label: '播放 差距在哪里',
          ctaTitle: '从下一个创意开始。',
          ctaBody: '带上想法。ReelsBuddy 会帮你梳理故事、构建场景，并完成发布前的准备。',
          downloadMac: '下载 Mac 版',
          downloadWindows: '下载 Windows 版',
          macVersionMenuLabel: '选择 Mac 版本',
          macAppleSilicon: 'Mac · Apple 芯片',
          macAppleSiliconHint: '适用于 M 系列芯片 · macOS 13+',
          macIntel: 'Mac · Intel 芯片',
          macIntelHint: '适用于 Intel 处理器 · macOS 13+',
          footerTagline: '面向短视频的桌面创作工作室，从第一个灵感到最终成片。',
          footerProduct: '产品',
          footerFormats: '视频类型',
          footerCompany: '公司',
          footerAbout: '关于 Playsout',
          footerContact: '联系我们',
          footerPrivacy: '隐私政策',
          footerTerms: '服务条款',
          menuOpenLabel: '打开菜单',
          menuCloseLabel: '关闭菜单',
          downloadUnavailableMacAppleSilicon: 'Apple 芯片版本正在准备中，请稍后回来查看。',
          downloadUnavailableMacIntel: 'Intel Mac 版本正在准备中，请稍后回来查看。',
          downloadUnavailableWindows: 'Windows 版本正在准备中，请稍后回来查看。',
          showcaseUnavailable: '作品完整视频正在准备中，请稍后回来查看。',
          documentTitle: 'ReelsBuddy - AI 视频工作室',
          metaDescription: '面向个人的 AI 视频工作室，把创意、参考资料和数据转化为完整短视频。',
          ogTitle: 'ReelsBuddy - 从一个创意，到一部创作。',
          ogDescription: '用一张可编辑的 AI 创作画布，把想法和素材变成完整短视频。',
          ogImageAlt: 'ReelsBuddy 品牌分享卡：从一个创意，到一部创作。'
        }
      };

      const cases = {
        drama: {
          thumb: 'rb-thumb--drama',
          frame: 'rb-usecase-frame--vertical',
          scene: 'rb-drama-window',
          copy: {
            en: {
              index: 'Format 01 / 06',
              title: 'Turn a premise into a serialized story.',
              description: 'Shape the cast, write the beats and build a shot-led story that keeps people moving to the next episode.',
              brief: 'A stranger returns to a coastal town with one letter and no name.',
              specs: ['9:16', '30-90s', 'Character lock'],
              titleCard: 'The Last Train Home',
              small: 'Episode 01 / Short drama'
            },
            zh: {
              index: '类型 01 / 06',
              title: '把一句设定，发展成可以连续追看的剧集。',
              description: '塑造角色、安排叙事节拍，用镜头驱动的故事让观众持续想看下一集。',
              brief: '一封没有署名的信，让陌生人回到海边小镇。',
              specs: ['9:16', '30-90 秒', '角色一致性'],
              titleCard: '最后一班回家的列车',
              small: '第 01 集 / 短剧'
            }
          }
        },
        brand: {
          thumb: 'rb-thumb--brand',
          frame: '',
          scene: 'rb-bottle',
          copy: {
            en: {
              index: 'Format 02 / 06',
              title: 'Build a campaign around one clear idea.',
              description: 'Turn a brand truth into a polished launch film, with the visual language, pacing and product moments working together.',
              brief: 'Launch a quiet luxury fragrance. Calm, cinematic, no voiceover.',
              specs: ['16:9', '15-60s', 'Brand kit'],
              titleCard: 'Solace / New ritual',
              small: 'Campaign film / Brand promo'
            },
            zh: {
              index: '类型 02 / 06',
              title: '围绕一个清晰的创意，构建完整宣传活动。',
              description: '把品牌洞察变成一支完整的发布短片，让视觉语言、节奏和产品时刻协同工作。',
              brief: '为一款低调奢华的香水做发布。氛围平静、电影感，无旁白。',
              specs: ['16:9', '15-60 秒', '品牌套件'],
              titleCard: 'Solace / 新仪式',
              small: '品牌短片 / 品牌宣传'
            }
          }
        },
        product: {
          thumb: 'rb-thumb--product',
          frame: '',
          scene: 'rb-product-screen',
          copy: {
            en: {
              index: 'Format 03 / 06',
              title: 'Explain the product without the drag.',
              description: 'Connect the interface, the benefit and the proof with screen motion, presenter shots and a voice track that lands.',
              brief: 'Explain our new analytics dashboard in 40 seconds. Keep it practical.',
              specs: ['16:9', '20-60s', 'UI motion'],
              titleCard: 'Flow OS 2.0',
              small: 'Feature launch / Product demo'
            },
            zh: {
              index: '类型 03 / 06',
              title: '把产品讲清楚，不必拖泥带水。',
              description: '通过界面动效、讲解镜头和有说服力的旁白，把产品界面、价值与证明串联起来。',
              brief: '用 40 秒讲解我们的全新数据分析面板，保持实用。',
              specs: ['16:9', '20-60 秒', '界面动效'],
              titleCard: 'Flow OS 2.0',
              small: '功能发布 / 产品讲解'
            }
          }
        },
        data: {
          thumb: 'rb-thumb--data',
          frame: '',
          scene: 'rb-data-plot',
          copy: {
            en: {
              index: 'Format 04 / 06',
              title: 'Make the number mean something.',
              description: 'Turn a dataset into a visual story with a clear setup, a reveal and a takeaway that people can remember.',
              brief: 'Turn these Q3 numbers into a 45-second explainer for LinkedIn.',
              specs: ['16:9', '30-60s', 'Data motion'],
              titleCard: 'The access gap',
              small: 'Quarterly report / Data story'
            },
            zh: {
              index: '类型 04 / 06',
              title: '让数字真正表达意义。',
              description: '把数据集转化为清晰的视觉故事，有铺垫、有揭示，也有观众记得住的结论。',
              brief: '把第三季度数据做成一支 45 秒的 LinkedIn 讲解视频。',
              specs: ['16:9', '30-60 秒', '数据动效'],
              titleCard: '差距在哪里',
              small: '季度报告 / 数据可视化'
            }
          }
        },
        social: {
          thumb: 'rb-thumb--social',
          frame: 'rb-usecase-frame--vertical',
          scene: 'rb-phone',
          copy: {
            en: {
              index: 'Format 05 / 06',
              title: 'One idea, every feed.',
              description: 'Create the hook, the cutdowns and the ratio changes in one project, then keep the strongest frame for every platform.',
              brief: 'Make three paid hooks for the summer sneaker drop.',
              specs: ['9:16', '6-30s', 'Multi-ratio'],
              titleCard: 'Move / Summer drop',
              small: 'Paid social / Social ad'
            },
            zh: {
              index: '类型 05 / 06',
              title: '一个创意，适配每个信息流。',
              description: '在同一个项目里完成开场钩子、剪辑版本和画幅调整，为每个平台保留最有冲击力的一帧。',
              brief: '为夏季球鞋上新制作三个付费广告开场。',
              specs: ['9:16', '6-30 秒', '多画幅'],
              titleCard: 'Move / 夏日系列',
              small: '付费社媒 / 社媒广告'
            }
          }
        },
        science: {
          thumb: 'rb-thumb--science',
          frame: '',
          scene: 'rb-orbit',
          copy: {
            en: {
              index: 'Format 06 / 06',
              title: 'Make a complex idea click.',
              description: 'Build a visual explanation with a patient pace, strong metaphors and source notes that stay attached to the story.',
              brief: 'Explain how mRNA vaccines work for a general audience.',
              specs: ['16:9', '60-180s', 'Source notes'],
              titleCard: 'Why the ocean bends light',
              small: 'Explainer / Science'
            },
            zh: {
              index: '类型 06 / 06',
              title: '让复杂概念真正被理解。',
              description: '以从容的节奏、清晰的比喻和随内容保留的来源注释，构建一支容易理解的视觉讲解。',
              brief: '面向大众解释 mRNA 疫苗是如何工作的。',
              specs: ['16:9', '60-180 秒', '来源注释'],
              titleCard: '海洋为什么会让光弯曲',
              small: '科普讲解 / 科学'
            }
          }
        }
      };

      const workflowStages = {
        direction: {
          en: {
            project: 'New skincare launch',
            scene: 'Direction 01 / 00:00',
            assetCount: '06',
            ideaBody: '30-second product film',
            scriptBody: 'Brief in progress',
            outputBody: 'Tone / Audience / Promise',
            headline: 'A QUIET RITUAL, MADE VISIBLE',
            caption: 'Calm, editorial, product-led.',
            userOne: 'Make a 30-second product film for our new skincare launch.',
            agentReply: '<strong>Direction captured.</strong><br>Who is this for, and what should they feel?',
            userTwo: 'Women 25-40. A quiet daily ritual, not a hard sell.',
            messagePlaceholder: 'Refine the direction with ReelsBuddy Agent...',
            noteOne: 'Set the audience, tone and creative promise before generation.',
            noteTwo: 'Keep the product language and brand references in one place.',
            noteThree: 'Decide what the film should make people feel.'
          },
          zh: {
            project: '新品护肤发布',
            scene: '方向 01 / 00:00',
            assetCount: '06',
            ideaBody: '30 秒产品短片',
            scriptBody: '正在梳理简报',
            outputBody: '调性 / 受众 / 承诺',
            headline: '让安静的仪式被看见',
            caption: '克制、杂志感、以产品为核心。',
            userOne: '为新品护肤发布制作一支 30 秒产品短片。',
            agentReply: '<strong>方向已记录。</strong><br>这支片子面向谁？你希望大家感受到什么？',
            userTwo: '25 至 40 岁女性。安静的日常仪式感，不要硬广。',
            messagePlaceholder: '和 ReelsBuddy 智能体继续梳理方向……',
            noteOne: '在生成之前，先确定受众、调性与创意承诺。',
            noteTwo: '把产品语言和品牌参考资料集中管理。',
            noteThree: '明确这支短片希望观众产生什么感受。'
          }
        },
        script: {
          en: {
            project: 'New skincare launch',
            scene: 'Script 02 / 00:09',
            assetCount: '12',
            ideaBody: 'Morning ritual / product hero',
            scriptBody: 'Hook / Proof / Ritual / CTA',
            outputBody: '30s storyboard',
            headline: 'THE FIRST FIVE SECONDS MATTER',
            caption: 'Hook: the ritual starts before the product appears.',
            userOne: 'Keep the opening restrained. Show the ritual before the product.',
            agentReply: '<strong>Script v2 is ready.</strong><br>I tightened the hook and moved the product reveal to 00:06.',
            userTwo: 'Make the proof point feel human, not clinical.',
            messagePlaceholder: 'Ask for a script or storyboard change...',
            noteOne: 'Approve the story before any frames are generated.',
            noteTwo: 'Keep claims and source notes attached to the script.',
            noteThree: 'Time the reveal, the proof point and the call to action.'
          },
          zh: {
            project: '新品护肤发布',
            scene: '脚本 02 / 00:09',
            assetCount: '12',
            ideaBody: '晨间仪式 / 产品主画面',
            scriptBody: '开场 / 证明 / 仪式 / 行动',
            outputBody: '30 秒分镜',
            headline: '前五秒决定观众是否留下',
            caption: '开场：先呈现仪式，再让产品出现。',
            userOne: '开场保持克制，先呈现日常仪式，再带出产品。',
            agentReply: '<strong>脚本第二版已完成。</strong><br>我收紧开场，并把产品揭示移到 00:06。',
            userTwo: '证明部分要有人感，不要像产品说明书。',
            messagePlaceholder: '要求调整脚本或分镜……',
            noteOne: '在生成任何画面前，先确认故事本身。',
            noteTwo: '把产品主张与来源说明附在脚本里。',
            noteThree: '明确揭示、证明与行动号召的时间点。'
          }
        },
        production: {
          en: {
            project: 'New skincare launch',
            scene: 'Production 03 / 00:22',
            assetCount: '24',
            ideaBody: 'Scene set / locked',
            scriptBody: 'Treatment approved',
            outputBody: 'Visual / Motion / Voice',
            headline: 'THE RITUAL, IN MOTION',
            caption: 'Scene 04 · product close-up · warm light',
            userOne: 'Build the close-up with slower motion and warmer light.',
            agentReply: '<strong>Scene 04 generated.</strong><br>Motion, voice and captions are assembled on the canvas.',
            userTwo: 'Keep the product texture soft and the grade warm.',
            messagePlaceholder: 'Direct the scene, motion or voice...',
            noteOne: 'Generate one editable layer at a time.',
            noteTwo: 'Keep characters, products and brand assets consistent.',
            noteThree: 'Review motion, voice and captions against the edit.'
          },
          zh: {
            project: '新品护肤发布',
            scene: '制作 03 / 00:22',
            assetCount: '24',
            ideaBody: '场景组已确定',
            scriptBody: '创意阐述已通过',
            outputBody: '画面 / 动效 / 配音',
            headline: '让日常仪式真正流动起来',
            caption: '场景 04 · 产品特写 · 暖光',
            userOne: '产品特写放慢动作，光线再暖一点。',
            agentReply: '<strong>场景 04 已生成。</strong><br>动效、配音与字幕已在画布上完成编排。',
            userTwo: '产品质感要柔和，整体调色保持温暖。',
            messagePlaceholder: '继续指导画面、动效或配音……',
            noteOne: '逐层生成，每一层都保持可编辑。',
            noteTwo: '保持角色、产品和品牌素材的一致性。',
            noteThree: '围绕剪辑节奏审核画面、声音与字幕。'
          }
        },
        delivery: {
          en: {
            project: 'New skincare launch',
            scene: 'Delivery 04 / 00:30',
            assetCount: '32',
            ideaBody: 'Campaign film',
            scriptBody: 'Final cut locked',
            outputBody: '16:9 / 9:16 / 1:1',
            headline: 'READY FOR EVERY CHANNEL',
            caption: 'Final cut · 00:30 · 4K master',
            userOne: 'Give me a clean master and the vertical cutdown.',
            agentReply: '<strong>Delivery pack ready.</strong><br>Three ratios, captions and the brand export preset are synced.',
            userTwo: 'Check the final frame and product name once more.',
            messagePlaceholder: 'Review the final cut with ReelsBuddy Agent...',
            noteOne: 'Approve the master before exporting channel versions.',
            noteTwo: 'Keep product names, claims and end cards consistent.',
            noteThree: 'Check the last frame, captions and every output ratio.'
          },
          zh: {
            project: '新品护肤发布',
            scene: '交付 04 / 00:30',
            assetCount: '32',
            ideaBody: '完整宣传片',
            scriptBody: '终剪已锁定',
            outputBody: '16:9 / 9:16 / 1:1',
            headline: '准备好进入每一个渠道',
            caption: '最终成片 · 00:30 · 4K 母版',
            userOne: '给我一版干净母版，以及竖版切条。',
            agentReply: '<strong>交付包已准备好。</strong><br>三种画幅、字幕与品牌导出预设已同步。',
            userTwo: '最后再检查一次尾帧和产品名称。',
            messagePlaceholder: '和 ReelsBuddy 智能体复核最终成片……',
            noteOne: '导出渠道版本之前，先确认母版。',
            noteTwo: '保持产品名称、主张与片尾信息一致。',
            noteThree: '检查尾帧、字幕和每一种输出画幅。'
          }
        }
      };

      const frame = document.getElementById('rb-usecase-frame');
      const thumb = document.getElementById('rb-usecase-thumb');
      const title = document.getElementById('rb-usecase-title');
      const description = document.getElementById('rb-usecase-description');
      const brief = document.getElementById('rb-usecase-brief');
      const index = document.getElementById('rb-usecase-index');
      const specs = document.getElementById('rb-usecase-specs');
      const videoTitle = root.querySelector('.rb-video-title');
      const panel = document.getElementById('rb-usecase-panel');
      const editorShell = document.getElementById('rb-workflow-preview');

      function renderScene(markup) {
        return `<span class="${markup}"></span>`;
      }

      function setUseCase(key) {
        activeCase = key;
        const caseData = cases[key];
        const item = caseData.copy[currentLanguage];
        const activeTab = root.querySelector(`.rb-usecase-tab[data-usecase="${key}"]`);
        root.querySelectorAll('.rb-usecase-tab').forEach((tab) => {
          const isActive = tab === activeTab;
          tab.setAttribute('aria-selected', String(isActive));
          tab.tabIndex = isActive ? 0 : -1;
        });
        panel.setAttribute('aria-labelledby', activeTab.id);
        panel.dataset.case = key;
        thumb.className = `rb-thumb ${caseData.thumb}`;
        thumb.innerHTML = renderScene(caseData.scene);
        frame.className = `rb-usecase-frame ${caseData.frame}`.trim();
        title.textContent = item.title;
        description.textContent = item.description;
        brief.innerHTML = `<span>${translations[currentLanguage].exampleBrief}</span>${item.brief}`;
        index.textContent = item.index;
        specs.innerHTML = item.specs.map((spec) => `<span class="rb-spec">${spec}</span>`).join('');
        videoTitle.innerHTML = `${item.titleCard}<small>${item.small}</small>`;
        panel.classList.remove('rb-fade');
        void panel.offsetWidth;
        panel.classList.add('rb-fade');
      }

      function setWorkflowStep(key, animate = true) {
        const content = workflowStages[key]?.[currentLanguage];
        if (!content) return;
        activeWorkflowStep = key;

        root.querySelectorAll('.rb-workflow-step').forEach((step) => {
          step.setAttribute('aria-pressed', String(step.dataset.workflowStep === key));
        });
        root.querySelectorAll('[data-workflow-field]').forEach((element) => {
          const value = content[element.dataset.workflowField];
          if (value === undefined) return;
          if (element.dataset.workflowField === 'agentReply') {
            element.innerHTML = value;
          } else {
            element.textContent = value;
          }
        });

        if (animate && editorShell) {
          editorShell.classList.remove('rb-fade');
          void editorShell.offsetWidth;
          editorShell.classList.add('rb-fade');
        }
      }

      const useCaseTabs = [...root.querySelectorAll('.rb-usecase-tab')];
      useCaseTabs.forEach((tab, tabIndex) => {
        tab.id = `rb-tab-${tab.dataset.usecase}`;
        tab.addEventListener('click', () => setUseCase(tab.dataset.usecase));
        tab.addEventListener('keydown', (event) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
          event.preventDefault();
          let nextIndex = tabIndex;
          if (event.key === 'ArrowLeft') nextIndex = (tabIndex - 1 + useCaseTabs.length) % useCaseTabs.length;
          if (event.key === 'ArrowRight') nextIndex = (tabIndex + 1) % useCaseTabs.length;
          if (event.key === 'Home') nextIndex = 0;
          if (event.key === 'End') nextIndex = useCaseTabs.length - 1;
          useCaseTabs[nextIndex].focus();
          setUseCase(useCaseTabs[nextIndex].dataset.usecase);
        });
      });

      root.querySelectorAll('.rb-workflow-step').forEach((step) => {
        step.addEventListener('click', () => {
          setWorkflowStep(step.dataset.workflowStep);
        });
      });

      function iconMarkup(name) {
        return `<svg class="rb-icon" aria-hidden="true" focusable="false"><use href="./assets/icons.svg#icon-${name}"></use></svg>`;
      }

      function updateMenuState() {
        menuButton.setAttribute('aria-expanded', String(isMenuOpen));
        menuButton.setAttribute('aria-label', translations[currentLanguage][isMenuOpen ? 'menuCloseLabel' : 'menuOpenLabel']);
        menuButton.innerHTML = iconMarkup(isMenuOpen ? 'x' : 'menu');
      }

      menuButton.addEventListener('click', () => {
        isMenuOpen = mobileNav.classList.toggle('is-open');
        updateMenuState();
      });

      mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          isMenuOpen = false;
          mobileNav.classList.remove('is-open');
          updateMenuState();
        });
      });

      function showStatus(message) {
        if (!downloadStatus) return;
        downloadStatus.textContent = message;
        downloadStatus.classList.add('is-visible');
        window.clearTimeout(statusTimer);
        statusTimer = window.setTimeout(() => {
          downloadStatus.classList.remove('is-visible');
        }, 4800);
      }

      const downloadMenuToggle = root.querySelector('[data-download-menu-toggle]');
      const downloadMenu = document.getElementById('rb-mac-download-menu');
      const downloadMessageKeys = {
        macAppleSilicon: 'downloadUnavailableMacAppleSilicon',
        macIntel: 'downloadUnavailableMacIntel',
        windows: 'downloadUnavailableWindows'
      };

      function setDownloadMenuOpen(open) {
        if (!downloadMenuToggle || !downloadMenu) return;
        downloadMenuToggle.setAttribute('aria-expanded', String(open));
        downloadMenu.hidden = !open;
      }

      function startDownload(variant) {
        const url = downloads[variant];
        if (url) {
          window.location.assign(url);
          return;
        }
        showStatus(translations[currentLanguage][downloadMessageKeys[variant]]);
      }

      downloadMenuToggle?.addEventListener('click', (event) => {
        event.stopPropagation();
        setDownloadMenuOpen(downloadMenuToggle.getAttribute('aria-expanded') !== 'true');
      });

      downloadMenu?.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      document.addEventListener('click', () => setDownloadMenuOpen(false));
      document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        if (downloadMenuToggle?.getAttribute('aria-expanded') !== 'true') return;
        setDownloadMenuOpen(false);
        downloadMenuToggle?.focus();
      });

      root.querySelectorAll('[data-download-variant]').forEach((button) => {
        button.addEventListener('click', () => {
          setDownloadMenuOpen(false);
          startDownload(button.dataset.downloadVariant);
        });
      });

      root.querySelectorAll('[data-download-platform]').forEach((button) => {
        button.addEventListener('click', () => {
          startDownload(button.dataset.downloadPlatform);
        });
      });

      root.querySelectorAll('[data-format-link]').forEach((link) => {
        link.addEventListener('click', () => setUseCase(link.dataset.formatLink));
      });

      root.querySelectorAll('.rb-play-chip').forEach((button) => {
        button.addEventListener('click', () => {
          showStatus(translations[currentLanguage].showcaseUnavailable);
        });
      });

      const navLinks = [...root.querySelectorAll('.rb-nav a[href^="#"]')];
      const observedSections = ['formats', 'studio', 'showcase']
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${visible.target.id}`) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }, {
        rootMargin: '-24% 0px -58% 0px',
        threshold: [0.05, 0.2, 0.5]
      });
      observedSections.forEach((section) => sectionObserver.observe(section));

      function applyLanguage(language, persist = true) {
        if (!translations[language]) return;
        currentLanguage = language;
        const dictionary = translations[language];

        document.querySelectorAll('[data-i18n]').forEach((element) => {
          const key = element.dataset.i18n;
          if (dictionary[key]) element.textContent = dictionary[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
          const key = element.dataset.i18nHtml;
          if (dictionary[key]) element.innerHTML = dictionary[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
          const key = element.dataset.i18nPlaceholder;
          if (dictionary[key]) element.setAttribute('placeholder', dictionary[key]);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
          const key = element.dataset.i18nAria;
          if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
        });
        root.querySelectorAll('[data-lang-button]').forEach((button) => {
          button.setAttribute('aria-pressed', String(button.dataset.langButton === language));
        });

        const documentLanguage = language === 'zh' ? 'zh-CN' : 'en';
        root.setAttribute('data-lang', language);
        root.setAttribute('lang', documentLanguage);
        document.documentElement.lang = documentLanguage;
        document.title = dictionary.documentTitle;
        const description = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (description) description.setAttribute('content', dictionary.metaDescription);
        if (ogTitle) ogTitle.setAttribute('content', dictionary.ogTitle);
        if (ogDescription) ogDescription.setAttribute('content', dictionary.ogDescription);
        if (ogImageAlt) ogImageAlt.setAttribute('content', dictionary.ogImageAlt);
        if (ogLocale) ogLocale.setAttribute('content', language === 'zh' ? 'zh_CN' : 'en_US');
        if (twitterTitle) twitterTitle.setAttribute('content', dictionary.ogTitle);
        if (twitterDescription) twitterDescription.setAttribute('content', dictionary.metaDescription);
        updateMenuState();
        setUseCase(activeCase);
        setWorkflowStep(activeWorkflowStep, false);

        if (persist) {
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
      }

      root.querySelectorAll('[data-lang-button]').forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.langButton));
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

      applyLanguage(initialLanguage, false);
    })();
