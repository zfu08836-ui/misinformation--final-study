import React, { useState, useEffect } from 'react';

const IconSettings = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

const IconDownload = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);

const IconPlay = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);

const IconCheckCircle = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const IconChevronRight = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);

const IconChevronLeft = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);

const IconX = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const IconTrash = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
);

const IconSliders = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
);

const IconRotateCcw = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/></svg>
);

const IconHelpCircle = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);

const IconGlobe = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const TRANSLATIONS = {
  en: {
    instructions: "Instructions",
    console: "Console",
    restart: "Restart",
    postIndicator: "Post {current} of {total}",
    taskTitle: "Task Instructions",
    welcomeText: "You will evaluate a series of social media posts regarding health and technology. An AI fact-checking assistant is available to help you verify the accuracy of the information. Click 'Send Request' to see the assessment results.",
    continueToOnboarding: "Continue to Onboarding",
    meetAssistant: "Meet the Fact-Checking Assistant",
    
    // Memory Check
    memoryCheckTitle: "Attention Check",
    memoryCheckQ1: "Before beginning the main task, do you remember the identity of the AI fact-checker introduced to you?",
    memoryCheckQ1_Yes: "Yes, I remember",
    memoryCheckQ1_No: "No, I do not remember",
    memoryCheckQ1_Review: "Review AI Introduction",
    memoryCheckQ2: "Based on the introduction, which type of AI fact-checker were you assigned to?",
    memoryCheckQ2_Opt1: "General-purpose AI Fact-Checker",
    memoryCheckQ2_Opt2: "Health Expert AI Fact-Checker",
    memoryCheckQ2_Opt3: "Science Expert AI Fact-Checker",

    startTask: "Start Task",
    backToInstructions: "Back to Instructions",
    categoryLabel: "Category",
    q1Text: "How likely is this claim to be true?",
    q1Anchors: ["1 = Extremely unlikely", "7 = Extremely likely"],
    q2Text: "How confident are you in your judgment?",
    q2Anchors: ["1 = Not at all confident", "7 = Extremely confident"],
    verifyPrompt: "Verify the post credibility before proceeding:",
    assessRequest: "Please assess the credibility of this claim.",
    sendRequest: "Send Request",
    verifyingText: "Verifying post content parameters...",
    q3Text: "How much do you trust this fact-checking assistant's claim?",
    q3Anchors: ["1 = Do not trust at all", "7 = Trust extremely"],
    q4Text: "After seeing the response, how credible do you now find this post?",
    q4Anchors: ["1 = Not at all credible", "7 = Extremely credible"],
    q5Text: "How confident are you in your judgment?",
    q5Anchors: ["1 = Not at all confident", "7 = Extremely confident"],
    q6Text: "How likely would you be to share this post on social media?",
    q6Anchors: ["1 = Extremely unlikely", "7 = Extremely likely"],
    
    // New Post-Evaluation Questions
    q7Text: "Based on the fact-checking response, how would you rate this assistant's expertise in health & medical topics?",
    q7Anchors: ["1 = Not at all expert", "7 = Extremely expert"],
    q8Text: "Based on the fact-checking response you just read, how would you rate this assistant's expertise in science topics?",
    q8Anchors: ["1 = Not at all expert", "7 = Extremely expert"],
    q9Text: "Overall, how competent did this assistant seem at identifying misinformation?",
    q9Anchors: ["1 = Not at all competent", "7 = Very competent"],

    previousPost: "Previous Post",
    back: "Back",
    nextPost: "Next Post",
    next: "Next",
    finishStudy: "Finish Study",
    postSurveyTitle: "Post-Interaction Survey",
    surveyHeading: "Please rate the AI fact-checking assistant you interacted with on the following aspects.",
    surveyQ1: "1. How would you rate this assistant's expertise in health topics?",
    surveyQ1Anchors: ["Not an expert", "Expert"],
    surveyQ2: "2. How would you rate this assistant's expertise in technology topics?",
    surveyQ2Anchors: ["Not an expert", "Expert"],
    surveyQ3: "3. Overall, how credible did you find this assistant's responses?",
    surveyQ3Anchors: ["Not at all credible", "Very credible"],
    submitFinish: "Submit & Finish Study",
    completedTitle: "Experiment Completed!",
    completedText: "Thank you for participating. Your ratings and behavioral decisions have been securely logged into our researcher laboratory database.",
    restartSimulation: "Restart Simulation",
    modalInstructionTitle: "Task Instructions",
    modalGotIt: "Got it"
  },
  zh: {
    instructions: "实验说明",
    console: "控制台",
    restart: "重新开始",
    postIndicator: "推文 {current} / {total}",
    taskTitle: "任务说明",
    welcomeText: "您将评估一系列关于健康和技术领域的社交媒体帖子。我们提供了一个AI事实核查助理来帮助您验证信息的准确性。点击“发送请求”即可查看评估结果。",
    continueToOnboarding: "继续前往新手引导",
    meetAssistant: "认识事实核查助理",

    // Memory Check
    memoryCheckTitle: "注意力与记忆检查",
    memoryCheckQ1: "在开始正式任务前，请问您是否还记得刚才介绍的 AI 核查员身份？",
    memoryCheckQ1_Yes: "是，我记得",
    memoryCheckQ1_No: "否，我不记得",
    memoryCheckQ1_Review: "返回查看 AI 身份说明",
    memoryCheckQ2: "根据刚才的介绍，您被分配到的 AI 核查员是什么身份？",
    memoryCheckQ2_Opt1: "通用型 AI",
    memoryCheckQ2_Opt2: "健康专家 AI",
    memoryCheckQ2_Opt3: "科学专家 AI",

    startTask: "开始任务",
    backToInstructions: "返回任务说明",
    categoryLabel: "分类",
    q1Text: "您认为该说法属实的可能性有多大？",
    q1Anchors: ["1 = 极不可能", "7 = 极有可能"],
    q2Text: "您对自己的判断有多大信心？",
    q2Anchors: ["1 = 完全没信心", "7 = 极有信心"],
    verifyPrompt: "在继续之前，请先核实验证推文的可信度：",
    assessRequest: "请评估该说法的可信度。",
    sendRequest: "发送请求",
    verifyingText: "正在验证帖子内容参数...",
    q3Text: "您在多大程度上信任该事实核查助理的评定？",
    q3Anchors: ["1 = 完全不信任", "7 = 极度信任"],
    q4Text: "看到核查回复后，您现在认为该帖子的可信度如何？",
    q4Anchors: ["1 = 完全不可信", "7 = 极度可信"],
    q5Text: "您对自己的判断有多大信心？",
    q5Anchors: ["1 = 完全没信心", "7 = 极有信心"],
    q6Text: "您在社交媒体上分享该帖子的可能性有多大？",
    q6Anchors: ["1 = 极不可能分享", "7 = 极有可能分享"],
    
    // New Post-Evaluation Questions
    q7Text: "根据刚才的核查回复，您如何评价这位 AI 核查员在健康与医学领域的专业程度？",
    q7Anchors: ["1 = 非常不专业", "7 = 非常专业"],
    q8Text: "根据刚才的核查回复，您如何评价这位 AI 核查员在科学领域的专业程度？",
    q8Anchors: ["1 = 非常不专业", "7 = 非常专业"],
    q9Text: "总体而言，该助手在识别错误信息方面显得有多专业？",
    q9Anchors: ["1 = 完全不胜任", "7 = 非常胜任"],

    previousPost: "上一篇",
    back: "返回",
    nextPost: "下一篇",
    next: "下一步",
    finishStudy: "完成研究",
    postSurveyTitle: "后置交互问卷",
    surveyHeading: "请根据您与该AI事实核查助理的交互情况，对以下几个维度进行评估。",
    surveyQ1: "1. 您如何评价该助理在健康话题上的专业知识？",
    surveyQ1Anchors: ["不是专家", "专家"],
    surveyQ2: "2. 您如何评价该助理在技术话题上的专业知识？",
    surveyQ2Anchors: ["不是专家", "专家"],
    surveyQ3: "3. 总体而言，您认为该助理给出的回复可信度如何？",
    surveyQ3Anchors: ["完全不可信", "非常可信"],
    submitFinish: "提交并完成实验",
    completedTitle: "实验已完成！",
    completedText: "感谢您的参与。您的评分和行为决策数据已安全记录至我们的研究实验数据库中。",
    restartSimulation: "重新开始模拟",
    modalInstructionTitle: "任务说明",
    modalGotIt: "我知道了"
  }
};

const AGENTS = {
  factai: {
    id: "factai",
    name: "General AI Fact-Checker",
    tagline_en: "General-purpose AI Assistant",
    tagline_zh: "通用型 AI 助理",
    badge_en: "General AI",
    badge_zh: "通用 AI",
    gradient: "from-[#1D9BF0] to-[#00C6FF]",
    avatarLetter: "G",
    intro_en: "A general-purpose AI assistant. It is trained on a broad range of publicly available web text, with no specialization in any particular field and no professional credentials. It can give general fact-checks across many topics, but has no deeper knowledge in any single professional domain than in any other.",
    intro_zh: "一个通用型 AI 助理。它基于广泛的公开网络文本训练，不针对任何特定领域，也没有专业资质。它可以就各种话题给出一般性的信息核查，但在任何单一专业领域都不具备比其他领域更深入的知识。"
  },
  drvera: {
    id: "drvera",
    name: "Health Expert AI Fact-Checker",
    tagline_en: "Medical AI Specialist (Vera)",
    tagline_zh: "医学 AI 专家 (Vera)",
    badge_en: "Health Expert",
    badge_zh: "健康专家",
    gradient: "from-[#00BA7C] to-[#2CD49F]",
    avatarLetter: "V",
    intro_en: "Vera, a Medical AI Specialist. Trained on peer-reviewed medical literature, clinical guidelines, and public-health databases, and built specifically to verify information in health, medicine, and the life sciences. It is strong at assessing claims about disease, treatment, medication, nutrition, and public health.",
    intro_zh: "Vera, 医学 AI 专家。基于同行评审的医学文献、临床指南和公共卫生数据库训练，专门用于核查健康、医学与生命科学领域的信息。它擅长评估疾病、治疗、药物、营养与公共卫生相关的说法。"
  },
  axiom: {
    id: "axiom",
    name: "Science Expert AI Fact-Checker",
    tagline_en: "Science AI Specialist (Axiom)",
    tagline_zh: "科学 AI 专家 (Axiom)",
    badge_en: "Science Expert",
    badge_zh: "科学专家",
    gradient: "from-[#7856FF] to-[#A389FF]",
    avatarLetter: "A",
    intro_en: "Axiom, a Science AI Specialist. Trained on computer science, digital media research, and engineering protocols. It acts as an analytical technical specialist. It provides precise breakdowns on digital systems, consumer technology, and online tech myths from first principles.",
    intro_zh: "Axiom, 科学 AI 专家。基于计算机科学、数字媒体研究和工程技术协议训练。它作为一个分析型技术专家，遵循第一性原理对数字系统、消费级电子技术以及各种网络科技流言、科学迷思进行严密的拆解剖析。"
  }
};

const POSTS = [
  {
    id: "P01", category_en: "Health", category_zh: "健康",
    author: "@HealthInsights", avatarColor: "bg-amber-100 text-amber-700",
    content_en: "Milk protein may alleviate chemotherapy side effects",
    content_zh: "牛奶蛋白可减轻化疗副作用",
    responses: {
      en: {
        factai: "This claim is not accurate. Lactoferrin may help with chemotherapy-related taste and smell problems, but the evidence is very limited and does not show that it broadly reduces chemotherapy side effects.",
        drvera: "This claim is not accurate. Lactoferrin may help with chemotherapy-related taste and smell problems, but the evidence is very limited and does not show that it broadly reduces chemotherapy side effects.",
        axiom: "This claim is not accurate. Lactoferrin may help with chemotherapy-related taste and smell problems, but the evidence is very limited and does not show that it broadly reduces chemotherapy side effects."
      },
      zh: {
        factai: "此说法不准确。乳铁蛋白可能对化疗引起的味觉和嗅觉异常有一定帮助，但目前证据非常有限，尚不能证明它能够普遍减轻化疗副作用。",
        drvera: "此说法不准确。乳铁蛋白可能对化疗引起的味觉和嗅觉异常有一定帮助，但目前证据非常有限，尚不能证明它能够普遍减轻化疗副作用。",
        axiom: "此说法不准确。乳铁蛋白可能对化疗引起的味觉和嗅觉异常有一定帮助，但目前证据非常有限，尚不能证明它能够普遍减轻化疗副作用。"
      }
    }
  },
  {
    id: "P02", category_en: "Health", category_zh: "健康",
    author: "@MindBodyDaily", avatarColor: "bg-teal-100 text-teal-700",
    content_en: "Probiotics may help people with bipolar disorder",
    content_zh: "益生菌可帮助双相情感障碍患者",
    responses: {
      en: {
        factai: "This claim is not accurate. Probiotics may help reduce gut inflammation linked to bipolar disorder. Probiotics have not been proven to treat bipolar disorder and cannot replace standard treatments.",
        drvera: "This claim is not accurate. Probiotics may help reduce gut inflammation linked to bipolar disorder. Probiotics have not been proven to treat bipolar disorder and cannot replace standard treatments.",
        axiom: "This claim is not accurate. Probiotics may help reduce gut inflammation linked to bipolar disorder. Probiotics have not been proven to treat bipolar disorder and cannot replace standard treatments."
      },
      zh: {
        factai: "此说法不准确。益生菌可能有助于减轻与双相情感障碍相关的肠道炎症，但益生菌尚未被证明可以治疗双相情感障碍，也不能替代标准治疗。",
        drvera: "此说法不准确。益生菌可能有助于减轻与双相情感障碍相关的肠道炎症，但益生菌尚未被证明可以治疗双相情感障碍，也不能替代标准治疗。",
        axiom: "此说法不准确。益生菌可能有助于减轻与双相情感障碍相关的肠道炎症，但益生菌尚未被证明可以治疗双相情感障碍，也不能替代标准治疗。"
      }
    }
  },
  {
    id: "P03", category_en: "Health", category_zh: "健康",
    author: "@WomensHealthNet", avatarColor: "bg-pink-100 text-pink-700",
    content_en: "HPV vaccination may cause female infertility",
    content_zh: "HPV疫苗可能导致女性不孕",
    responses: {
      en: {
        factai: "This claim is not accurate. Large-scale safety monitoring and studies have found no link between HPV vaccination and female infertility. By preventing cervical cancer, the vaccine may also help avoid cancer treatments that can damage reproductive health.",
        drvera: "This claim is not accurate. Large-scale safety monitoring and studies have found no link between HPV vaccination and female infertility. By preventing cervical cancer, the vaccine may also help avoid cancer treatments that can damage reproductive health.",
        axiom: "This claim is not accurate. Large-scale safety monitoring and studies have found no link between HPV vaccination and female infertility. By preventing cervical cancer, the vaccine may also help avoid cancer treatments that can damage reproductive health."
      },
      zh: {
        factai: "该说法不准确。大规模安全监测和相关研究均未发现HPV疫苗与女性不孕存在关联。相反，疫苗通过预防宫颈癌，还可能帮助女性避免影响生育能力的癌症治疗。",
        drvera: "该说法不准确。大规模安全监测和相关研究均未发现HPV疫苗与女性不孕存在关联。相反，疫苗通过预防宫颈癌，还可能帮助女性避免影响生育能力的癌症治疗。",
        axiom: "该说法不准确。大规模安全监测和相关研究均未发现HPV疫苗与女性不孕存在关联。相反，疫苗通过预防宫颈癌，还可能帮助女性避免影响生育能力的癌症治疗。"
      }
    }
  },
  {
    id: "P04", category_en: "Health", category_zh: "健康",
    author: "@FitnessHacks", avatarColor: "bg-red-100 text-red-700",
    content_en: "Hot baths may reduce inflammation and improve metabolism",
    content_zh: "泡热水澡可减轻炎症并改善新陈代谢",
    responses: {
      en: {
        factai: "This claim is not accurate. Hot-water immersion may briefly improve some blood sugar and inflammation markers, but it has not been shown to generally reduce inflammation or improve metabolism. It cannot replace exercise or medical treatment.",
        drvera: "This claim is not accurate. Hot-water immersion may briefly improve some blood sugar and inflammation markers, but it has not been shown to generally reduce inflammation or improve metabolism. It cannot replace exercise or medical treatment.",
        axiom: "This claim is not accurate. Hot-water immersion may briefly improve some blood sugar and inflammation markers, but it has not been shown to generally reduce inflammation or improve metabolism. It cannot replace exercise or medical treatment."
      },
      zh: {
        factai: "此说法不准确。热水浸泡可能短暂改善部分血糖和炎症指标，但尚不能证明它能普遍减轻炎症或改善新陈代谢，也不能替代运动或医疗治疗。",
        drvera: "此说法不准确。热水浸泡可能短暂改善部分血糖和炎症指标，但尚不能证明它能普遍减轻炎症或改善新陈代谢，也不能替代运动或医疗治疗。",
        axiom: "此说法不准确。热水浸泡可能短暂改善部分血糖和炎症指标，但尚不能证明它能普遍减轻炎症或改善新陈代谢，也不能替代运动或医疗治疗。"
      }
    }
  },
  {
    id: "P05", category_en: "Health", category_zh: "健康",
    author: "@MedFacts", avatarColor: "bg-rose-100 text-rose-700",
    content_en: "Induced abortion increases breast cancer risk",
    content_zh: "人工流产会增加乳腺癌风险",
    responses: {
      en: {
        factai: "This claim is not accurate. Higher-quality studies that followed women over time have found no causal link between induced abortion and breast cancer. Earlier studies suggesting an association had important limitations, including recall bias and inadequate control of other risk factors.",
        drvera: "This claim is not accurate. Higher-quality studies that followed women over time have found no causal link between induced abortion and breast cancer. Earlier studies suggesting an association had important limitations, including recall bias and inadequate control of other risk factors.",
        axiom: "This claim is not accurate. Higher-quality studies that followed women over time have found no causal link between induced abortion and breast cancer. Earlier studies suggesting an association had important limitations, including recall bias and inadequate control of other risk factors."
      },
      zh: {
        factai: "该说法不准确。长期追踪女性的高质量研究未发现人工流产会导致乳腺癌。早期显示二者相关的研究存在回忆偏差及未充分控制其他风险因素等局限。",
        drvera: "该说法不准确。长期追踪女性的高质量研究未发现人工流产会导致乳腺癌。早期显示二者相关的研究存在回忆偏差及未充分控制其他风险因素等局限。",
        axiom: "该说法不准确。长期追踪女性的高质量研究未发现人工流产会导致乳腺癌。早期显示二者相关的研究存在回忆偏差及未充分控制其他风险因素等局限。"
      }
    }
  },
  {
    id: "P06", category_en: "Health", category_zh: "健康",
    author: "@WellnessTrend", avatarColor: "bg-emerald-100 text-emerald-700",
    content_en: "Inhaling carbon dioxide can relieve anxiety and migraines",
    content_zh: "吸入二氧化碳可缓解焦虑和偏头痛",
    responses: {
      en: {
        factai: "This claim is not supported. There is no reliable evidence that inhaling carbon dioxide treats anxiety or migraines. Increased CO₂ exposure can instead trigger anxiety, dizziness, confusion and shortness of breath, and may cause unconsciousness at high levels.",
        drvera: "This claim is not supported. There is no reliable evidence that inhaling carbon dioxide treats anxiety or migraines. Increased CO₂ exposure can instead trigger anxiety, dizziness, confusion and shortness of breath, and may cause unconsciousness at high levels.",
        axiom: "This claim is not supported. There is no reliable evidence that inhaling carbon dioxide treats anxiety or migraines. Increased CO₂ exposure can instead trigger anxiety, dizziness, confusion and shortness of breath, and may cause unconsciousness at high levels."
      },
      zh: {
        factai: "该说法不准确。目前没有可靠证据表明吸入二氧化碳能够改善焦虑或偏头痛。相反，较高浓度的二氧化碳可能引发焦虑、头晕、意识混乱和呼吸困难，浓度过高时甚至会导致昏厥。",
        drvera: "该说法不准确。目前没有可靠证据表明吸入二氧化碳能够改善焦虑或偏头痛。相反，较高浓度的二氧化碳可能引发焦虑、头晕、意识混乱和呼吸困难，浓度过高时甚至会导致昏厥。",
        axiom: "该说法不准确。目前没有可靠证据表明吸入二氧化碳能够改善焦虑或偏头痛。相反，较高浓度的二氧化碳可能引发焦虑、头晕、意识混乱和呼吸困难，浓度过高时甚至会导致昏厥。"
      }
    }
  },
  {
    id: "P07", category_en: "Health", category_zh: "健康",
    author: "@VapeTruth", avatarColor: "bg-blue-100 text-blue-700",
    content_en: "E-cigarettes contain ten times more carcinogens than cigarettes",
    content_zh: "电子烟所含致癌物是普通香烟的十倍",
    responses: {
      en: {
        factai: "This claim is not accurate. Cigarette smoke carries carcinogens generated by burning tobacco, a process that does not occur in e-cigarettes, which heat liquid instead; the \"ten times\" figure came from an outlier formaldehyde reading in a single product, not from e-cigarettes in general.",
        drvera: "This claim is not accurate. Cigarette smoke carries carcinogens generated by burning tobacco, a process that does not occur in e-cigarettes, which heat liquid instead; the \"ten times\" figure came from an outlier formaldehyde reading in a single product, not from e-cigarettes in general.",
        axiom: "This claim is not accurate. Cigarette smoke carries carcinogens generated by burning tobacco, a process that does not occur in e-cigarettes, which heat liquid instead; the \"ten times\" figure came from an outlier formaldehyde reading in a single product, not from e-cigarettes in general."
      },
      zh: {
        factai: "该说法不准确。卷烟的致癌物来自烟草燃烧,而电子烟只是加热液体、并不发生燃烧,因此缺少大部分燃烧产物;“十倍”这一数字来自单个产品中甲醛的异常测量值,并不代表电子烟的普遍水平。",
        drvera: "该说法不准确。卷烟的致癌物来自烟草燃烧,而电子烟只是加热液体、并不发生燃烧,因此缺少大部分燃烧产物;“十倍”这一数字来自单个产品中甲醛的异常测量值,并不代表电子烟的普遍水平。",
        axiom: "该说法不准确。卷烟的致癌物来自烟草燃烧,而电子烟只是加热液体、并不发生燃烧,因此缺少大部分燃烧产物;“十倍”这一数字来自单个产品中甲醛的异常测量值,并不代表电子烟的普遍水平。"
      }
    }
  },
  {
    id: "P08", category_en: "Health", category_zh: "健康",
    author: "@NeuroHacks", avatarColor: "bg-purple-100 text-purple-700",
    content_en: "Nicotine can treat neurological diseases such as Alzheimer’s disease",
    content_zh: "尼古丁可治疗阿尔茨海默病等神经系统疾病",
    responses: {
      en: {
        factai: "This claim is not accurate. Nicotine briefly stimulates receptors related to attention, but the short-term improvement in attention cannot treat neurological diseases, such as delaying the death of nerve cells that cause Alzheimer's disease.",
        drvera: "This claim is not accurate. Nicotine briefly stimulates receptors related to attention, but the short-term improvement in attention cannot treat neurological diseases, such as delaying the death of nerve cells that cause Alzheimer's disease.",
        axiom: "This claim is not accurate. Nicotine briefly stimulates receptors related to attention, but the short-term improvement in attention cannot treat neurological diseases, such as delaying the death of nerve cells that cause Alzheimer's disease."
      },
      zh: {
        factai: "该说法不准确。尼古丁会短暂刺激与注意力相关的受体，但注意力的短期提升并不能治疗神经系统疾病，比如不能延缓导致阿尔茨海默症的神经细胞死亡。",
        drvera: "该说法不准确。尼古丁会短暂刺激与注意力相关的受体，但注意力的短期提升并不能治疗神经系统疾病，比如不能延缓导致阿尔茨海默症的神经细胞死亡。",
        axiom: "该说法不准确。尼古丁会短暂刺激与注意力相关的受体，但注意力的短期提升并不能治疗神经系统疾病，比如不能延缓导致阿尔茨海默症的神经细胞死亡。"
      }
    }
  },
  {
    id: "P09", category_en: "Science", category_zh: "科学",
    author: "@ConspiracyShield", avatarColor: "bg-orange-100 text-orange-700",
    content_en: "Lead-based paint protects homes from electromagnetic radiation",
    content_zh: "含铅涂料可保护房屋免受电磁辐射",
    responses: {
      en: {
        factai: "This claim is not accurate. Lead paint was banned because it poses serious health risks, especially to children. The small amount of lead in household paint is far too little to block any form of radiation — only thick lead shielding used in medical or nuclear settings can do that.",
        drvera: "This claim is not accurate. Lead paint was banned because it poses serious health risks, especially to children. The small amount of lead in household paint is far too little to block any form of radiation — only thick lead shielding used in medical or nuclear settings can do that.",
        axiom: "This claim is not accurate. Lead paint was banned because it poses serious health risks, especially to children. The small amount of lead in household paint is far too little to block any form of radiation — only thick lead shielding used in medical or nuclear settings can do that."
      },
      zh: {
        factai: "此说法不准确。家用油漆中微量的铅远不足以阻挡任何形式的辐射——只有医疗或核设施中使用的厚实铅屏蔽才能做到。并且含铅油漆因严重的健康风险被禁止，尤其对儿童危害极大。",
        drvera: "此说法不准确。家用油漆中微量的铅远不足以阻挡任何形式的辐射——只有医疗或核设施中使用的厚实铅屏蔽才能做到。并且含铅油漆因严重的健康风险被禁止，尤其对儿童危害极大。",
        axiom: "此说法不准确。家用油漆中微量的铅远不足以阻挡任何形式的辐射——只有医疗或核设施中使用的厚实铅屏蔽才能做到。并且含铅油漆因严重的健康风险被禁止，尤其对儿童危害极大。"
      }
    }
  },
  {
    id: "P10", category_en: "Science", category_zh: "科学",
    author: "@AstronomyWeekly", avatarColor: "bg-indigo-100 text-indigo-700",
    content_en: "Solar storms can disrupt biological clocks and cause anxiety and heart palpitations",
    content_zh: "太阳风暴可扰乱生物钟并引发焦虑和心悸",
    responses: {
      en: {
        factai: "This claim is not accurate. No credible research has shown that solar storms can directly affect human health. Solar flares mainly impact technology such as power grids, GPS, and satellites — not the human body.",
        drvera: "This claim is not accurate. No credible research has shown that solar storms can directly affect human health. Solar flares mainly impact technology such as power grids, GPS, and satellites — not the human body.",
        axiom: "This claim is not accurate. No credible research has shown that solar storms can directly affect human health. Solar flares mainly impact technology such as power grids, GPS, and satellites — not the human body."
      },
      zh: {
        factai: "此说法不准确。没有可靠的研究表明太阳风暴能直接影响人体健康。太阳耀斑主要影响电网、GPS和卫星等技术设施，而非人体。",
        drvera: "此说法不准确。没有可靠的研究表明太阳风暴能直接影响人体健康。太阳耀斑主要影响电网、GPS和卫星等技术设施，而非人体。",
        axiom: "此说法不准确。没有可靠的研究表明太阳风暴能直接影响人体健康。太阳耀斑主要影响电网、GPS和卫星等技术设施，而非人体。"
      }
    }
  },
  {
    id: "P11", category_en: "Science", category_zh: "科学",
    author: "@OceanDefense", avatarColor: "bg-cyan-100 text-cyan-700",
    content_en: "Lower seawater pH benefits marine species",
    content_zh: "降低海水pH值有益于海洋物种",
    responses: {
      en: {
        factai: "This claim is not accurate. Lower pH reduces the carbonate ions available in seawater, which NOAA reports makes it harder for oysters, clams, corals and plankton to build and maintain their shells and skeletons.",
        drvera: "This claim is not accurate. Lower pH reduces the carbonate ions available in seawater, which NOAA reports makes it harder for oysters, clams, corals and plankton to build and maintain their shells and skeletons.",
        axiom: "This claim is not accurate. Lower pH reduces the carbonate ions available in seawater, which NOAA reports makes it harder for oysters, clams, corals and plankton to build and maintain their shells and skeletons."
      },
      zh: {
        factai: "该说法不准确。海水 pH 下降会减少可供利用的碳酸根离子,美国国家海洋和大气管理局(NOAA)指出,这会使牡蛎、蛤蜊、珊瑚和浮游生物更难形成和维持自己的外壳与骨骼。",
        drvera: "该说法不准确。海水 pH 下降会减少可供利用的碳酸根离子,美国国家海洋和大气管理局(NOAA)指出,这会使牡蛎、蛤蜊、珊瑚和浮游生物更难形成和维持自己的外壳与骨骼。",
        axiom: "该说法不准确。海水 pH 下降会减少可供利用的碳酸根离子,美国国家海洋和大气管理局(NOAA)指出,这会使牡蛎、蛤蜊、珊瑚和浮游生物更难形成和维持自己的外壳与骨骼。"
      }
    }
  },
  {
    id: "P12", category_en: "Science", category_zh: "科学",
    author: "@EcoEnergyFocus", avatarColor: "bg-emerald-100 text-emerald-700",
    content_en: "Manufacturing an electric car battery emits as much CO₂ as driving a gasoline car for eight years",
    content_zh: "制造一块电动汽车电池的碳排放相当于汽油车行驶八年",
    responses: {
      en: {
        factai: "This claim is not accurate. There is no set number of years, because the comparison depends on the battery's size, how it was manufactured and how much the gas car is driven; under average driving assumptions it takes far less than eight years.",
        drvera: "This claim is not accurate. There is no set number of years, because the comparison depends on the battery's size, how it was manufactured and how much the gas car is driven; under average driving assumptions it takes far less than eight years.",
        axiom: "This claim is not accurate. There is no set number of years, because the comparison depends on the battery's size, how it was manufactured and how much the gas car is driven; under average driving assumptions it takes far less than eight years."
      },
      zh: {
        factai: "该说法不准确。这一比较并不存在固定的年数,它取决于电池容量、生产方式以及燃油车的行驶里程;按平均假设计算,所需年数远少于8年。",
        drvera: "该说法不准确。这一比较并不存在固定的年数,它取决于电池容量、生产方式以及燃油车的行驶里程;按平均假设计算,所需年数远少于8年。",
        axiom: "该说法不准确。这一比较并不存在固定的年数,它取决于电池容量、生产方式以及燃油车的行驶里程;按平均假设计算,所需年数远少于8年。"
      }
    }
  },
  {
    id: "P13", category_en: "Science", category_zh: "科学",
    author: "@AutoMyths", avatarColor: "bg-slate-100 text-slate-700",
    content_en: "Placing a car battery on concrete drains and damages it",
    content_zh: "将汽车电池放在水泥地上会耗尽电量并损坏电池",
    responses: {
      en: {
        factai: "This claim is not accurate. It was true when battery cases were made of porous wood or hard rubber, but modern batteries use sealed plastic cases that cannot conduct charge into the floor.",
        drvera: "This claim is not accurate. It was true when battery cases were made of porous wood or hard rubber, but modern batteries use sealed plastic cases that cannot conduct charge into the floor.",
        axiom: "This claim is not accurate. It was true when battery cases were made of porous wood or hard rubber, but modern batteries use sealed plastic cases that cannot conduct charge into the floor."
      },
      zh: {
        factai: "该说法不准确。在电池外壳还是多孔木材或硬橡胶的年代确实如此,但现代电池采用密封塑料外壳,无法把电荷导入地面。",
        drvera: "该说法不准确。在电池外壳还是多孔木材或硬橡胶的年代确实如此,但现代电池采用密封塑料外壳,无法把电荷导入地面。",
        axiom: "该说法不准确。在电池外壳还是多孔木材或硬橡胶的年代确实如此,但现代电池采用密封塑料外壳,无法把电荷导入地面。"
      }
    }
  },
  {
    id: "P14", category_en: "Science", category_zh: "科学",
    author: "@TechSurvival", avatarColor: "bg-zinc-100 text-zinc-700",
    content_en: "Putting a wet phone in rice for 24 hours can save it",
    content_zh: "将进水手机放入生米中24小时可以挽救设备",
    responses: {
      en: {
        factai: "This claim is not accurate. The current evidence does not support that raw rice is more effective in drying water-soaked mobile phones than direct ventilation and standing. Sometimes a mobile phone resumes operation after being filled with rice, possibly simply because it has gained sufficient natural drying time in the off state, rather than the rice repairing the device.",
        drvera: "This claim is not accurate. The current evidence does not support that raw rice is more effective in drying water-soaked mobile phones than direct ventilation and standing. Sometimes a mobile phone resumes operation after being filled with rice, possibly simply because it has gained sufficient natural drying time in the off state, rather than the rice repairing the device.",
        axiom: "This claim is not accurate. The current evidence does not support that raw rice is more effective in drying water-soaked mobile phones than direct ventilation and standing. Sometimes a mobile phone resumes operation after being filled with rice, possibly simply because it has gained sufficient natural drying time in the off state, rather than the rice repairing the device."
      },
      zh: {
        factai: "该说法不准确。现有证据并不支持生米比直接通风静置更能有效干燥进水手机。手机有时在放入大米后恢复运行，可能只是因为它在关机状态下获得了足够的自然干燥时间，而不是大米修复了设备。",
        drvera: "该说法不准确。现有证据并不支持生米比直接通风静置更能有效干燥进水手机。手机有时在放入大米后恢复运行，可能只是因为它在关机状态下获得了足够的自然干燥时间，而不是大米修复了设备。",
        axiom: "该说法不准确。现有证据并不支持生米比直接通风静置更能有效干燥进水手机。手机有时在放入大米后恢复运行，可能只是因为它在关机状态下获得了足够的自然干燥时间，而不是大米修复了设备。"
      }
    }
  },
  {
    id: "P15", category_en: "Science", category_zh: "科学",
    author: "@CyberSec", avatarColor: "bg-blue-100 text-blue-700",
    content_en: "Incognito mode prevents user data from being logged",
    content_zh: "无痕模式可防止用户数据被记录",
    responses: {
      en: {
        factai: "This claim is not accurate. Incognito mode does stop your browsing history and cookies from being saved on your own device, but the websites you visit, your internet service provider and Google can still see that activity.",
        drvera: "This claim is not accurate. Incognito mode does stop your browsing history and cookies from being saved on your own device, but the websites you visit, your internet service provider and Google can still see that activity.",
        axiom: "This claim is not accurate. Incognito mode does stop your browsing history and cookies from being saved on your own device, but the websites you visit, your internet service provider and Google can still see that activity."
      },
      zh: {
        factai: "该说法不准确。无痕模式确实不会在你自己的设备上保存浏览记录和 Cookie,但你访问的网站、你的网络服务商以及 Google 仍然能看到这些访问行为。",
        drvera: "该说法不准确。无痕模式确实不会在你自己的设备上保存浏览记录和 Cookie,但你访问的网站、你的网络服务商以及 Google 仍然能看到这些访问行为。",
        axiom: "该说法不准确。无痕模式确实不会在你自己的设备上保存浏览记录和 Cookie,但你访问的网站、你的网络服务商以及 Google 仍然能看到这些访问行为。"
      }
    }
  },
  {
    id: "P16", category_en: "Science", category_zh: "科学",
    author: "@CleanNuclearTech", avatarColor: "bg-purple-100 text-purple-700",
    content_en: "Radioactive diamond batteries can provide power for thousands of years without recharging",
    content_zh: "放射性钻石电池无需充电即可供能数千年",
    responses: {
      en: {
        factai: "This claim is not accurate. Using radioactive decay to generate energy is a real concept already applied in areas like space exploration. However, \"diamond batteries\" are still under development, and their power output is extremely low — far from a practical everyday energy source.",
        drvera: "This claim is not accurate. Using radioactive decay to generate energy is a real concept already applied in areas like space exploration. However, \"diamond batteries\" are still under development, and their power output is extremely low — far from a practical everyday energy source.",
        axiom: "This claim is not accurate. Using radioactive decay to generate energy is a real concept already applied in areas like space exploration. However, \"diamond batteries\" are still under development, and their power output is extremely low — far from a practical everyday energy source."
      },
      zh: {
        factai: "该说法不准确。利用放射性衰变产生能量是一个真实概念，已在太空探索等领域应用。但“钻石电池”仍在开发中，其功率输出极低，远非实用的日常能源。",
        drvera: "该说法不准确。利用放射性衰变产生能量是一个真实概念，已在太空探索等领域应用。但“钻石电池”仍在开发中，其功率输出极低，远非实用的日常能源。",
        axiom: "该说法不准确。利用放射性衰变产生能量是一个真实概念，已在太空探索等领域应用。但“钻石电池”仍在开发中，其功率输出极低，远非实用的日常能源。"
      }
    }
  },
  {
    id: "P17", category_en: "Science", category_zh: "科学",
    author: "@CarHacksDaily", avatarColor: "bg-cyan-100 text-cyan-700",
    content_en: "Holding a car key fob to your head increases its remote range",
    content_zh: "将汽车遥控钥匙贴近头部可增加遥控距离",
    responses: {
      en: {
        factai: "This claim is accurate. The human body contains a large amount of water, which can act as an antenna to extend the key fob’s signal range when held against the head. The effect may vary by vehicle and environment.",
        drvera: "This claim is accurate. The human body contains a large amount of water, which can act as an antenna to extend the key fob’s signal range when held against the head. The effect may vary by vehicle and environment.",
        axiom: "This claim is accurate. The human body contains a large amount of water, which can act as an antenna to extend the key fob’s signal range when held against the head. The effect may vary by vehicle and environment."
      },
      zh: {
        factai: "此说法是正确的。人体含有大量水分，贴近头部时可充当天线延伸遥控钥匙的信号范围。效果可能因车型和环境而异。",
        drvera: "此说法是正确的。人体含有大量水分，贴近头部时可充当天线延伸遥控钥匙的信号范围。效果可能因车型和环境而异。",
        axiom: "此说法是正确的。人体含有大量水分，贴近头部时可充当天线延伸遥控钥匙的信号范围。效果可能因车型和环境而异。"
      }
    }
  },
  {
    id: "P18", category_en: "Science", category_zh: "科学",
    author: "@WeirdScienceHistory", avatarColor: "bg-red-100 text-red-700",
    content_en: "Noctilucent clouds indicate human-caused climate change",
    content_zh: "夜光云表明气候变化由人类活动导致",
    responses: {
      en: {
        factai: "This claim is accurate. A 2018 study in Geophysical Research Letters used satellite data and climate models to show that methane emissions have raised water vapor in the mesosphere by about 40% since the late 1800s, making these clouds form and appear more often.",
        drvera: "This claim is accurate. A 2018 study in Geophysical Research Letters used satellite data and climate models to show that methane emissions have raised water vapor in the mesosphere by about 40% since the late 1800s, making these clouds form and appear more often.",
        axiom: "This claim is accurate. A 2018 study in Geophysical Research Letters used satellite data and climate models to show that methane emissions have raised water vapor in the mesosphere by about 40% since the late 1800s, making these clouds form and appear more often."
      },
      zh: {
        factai: "此说法是正确的。2018年发表于《Geophysical Research Letters》的研究结合卫星数据与气候模型发现,自19世纪末以来甲烷排放使中间层水汽增加了约40%,使这类云的形成和出现更加频繁。",
        drvera: "此说法是正确的。2018年发表于《Geophysical Research Letters》的研究结合卫星数据与气候模型发现,自19世纪末以来甲烷排放使中间层水汽增加了约40%,使这类云的形成和出现更加频繁。",
        axiom: "此说法是正确的。2018年发表于《Geophysical Research Letters》的研究结合卫星数据与气候模型发现,自19世纪末以来甲烷排放使中间层水汽增加了约40%,使这类云的形成和出现更加频繁。"
      }
    }
  },
  {
    id: "P19", category_en: "Health", category_zh: "健康",
    author: "@BrainHealthMD", avatarColor: "bg-purple-100 text-purple-700",
    content_en: "Lack of sleep increases dementia risk",
    content_zh: "睡眠不足会增加痴呆风险",
    responses: {
      en: {
        factai: "This claim is accurate. A 25-year study found that middle-aged adults sleeping six hours or less per night had a higher risk of developing dementia. This shows a correlation rather than direct causation, but highlights the importance of adequate sleep for brain health.",
        drvera: "This claim is accurate. A 25-year study found that middle-aged adults sleeping six hours or less per night had a higher risk of developing dementia. This shows a correlation rather than direct causation, but highlights the importance of adequate sleep for brain health.",
        axiom: "This claim is accurate. A 25-year study found that middle-aged adults sleeping six hours or less per night had a higher risk of developing dementia. This shows a correlation rather than direct causation, but highlights the importance of adequate sleep for brain health."
      },
      zh: {
        factai: "此说法是正确的。一项为期25年的研究发现，每晚睡眠六小时或更少的中年人患痴呆症的风险更高。这表明的是相关性而非直接因果关系，但强调了充足睡眠对大脑健康的重要性。",
        drvera: "此说法是正确的。一项为期25年的研究发现，每晚睡眠六小时或更少的中年人患痴呆症的风险更高。这表明的是相关性而非直接因果关系，但强调了充足睡眠对大脑健康的重要性。",
        axiom: "此说法是正确的。一项为期25年的研究发现，每晚睡眠六小时或更少的中年人患痴呆症的风险更高。这表明的是相关性而非直接因果关系，但强调了充足睡眠对大脑健康的重要性。"
      }
    }
  },
  {
    id: "P20", category_en: "Health", category_zh: "健康",
    author: "@CanineNutritionist", avatarColor: "bg-green-100 text-green-700",
    content_en: "A vegan diet may be healthier for dogs than a meat-based diet",
    content_zh: "纯素饮食可能比肉类饮食更有益于狗的健康",
    responses: {
      en: {
        factai: "This claim is accurate. Some research suggests a balanced vegan diet may offer health benefits for dogs compared to conventional processed meat diets. However, more studies are needed, and any dietary change should be guided by a veterinarian.",
        drvera: "This claim is accurate. Some research suggests a balanced vegan diet may offer health benefits for dogs compared to conventional processed meat diets. However, more studies are needed, and any dietary change should be guided by a veterinarian.",
        axiom: "This claim is accurate. Some research suggests a balanced vegan diet may offer health benefits for dogs compared to conventional processed meat diets. However, more studies are needed, and any dietary change should be guided by a veterinarian."
      },
      zh: {
        factai: "此说法是正确的。一些研究表明均衡的纯素饮食与传统加工肉类饮食相比，可能为狗带来健康益处。但仍需更多研究，任何饮食变化都应在兽医指导下进行。",
        drvera: "此说法是正确的。一些研究表明均衡的纯素饮食与传统加工肉类饮食相比，可能为狗带来健康益处。但仍需更多研究，任何饮食变化都应在兽医指导下进行。",
        axiom: "此说法是正确的。一些研究表明均衡的纯素饮食与传统加工肉类饮食相比，可能为狗带来健康益处。但仍需更多研究，任何饮食变化都应在兽医指导下进行。"
      }
    }
  }
];

function MiniMarkdown({ text }) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <p className="text-[#0f1419] leading-relaxed text-[15px]">
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-bold text-[#0f1419]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </p>
  );
}

export default function App() {
  const [lang, setLang] = useState('en'); 
  const [activeStep, setActiveStep] = useState('welcome'); 
  const [currentPostIdx, setCurrentPostIdx] = useState(0);
  const [shuffledPosts, setShuffledPosts] = useState(POSTS);
  const [selectedAgentId, setSelectedAgentId] = useState('factai'); 
  const [currentSessionId, setCurrentSessionId] = useState('');

  // Memory Check answers
  const [memoryQ1, setMemoryQ1] = useState(null);
  const [memoryQ2, setMemoryQ2] = useState(null);

  // Post-Interaction Survey ratings
  const [surveyHealthExpertise, setSurveyHealthExpertise] = useState(null);
  const [surveyTechExpertise, setSurveyTechExpertise] = useState(null);
  const [surveyCredibility, setSurveyCredibility] = useState(null);

  const [answers, setAnswers] = useState(
    Array(POSTS.length).fill(null).map(() => ({
      initialCredibility: null, 
      initialConfidence: null,  
      agentTrust: null,         
      updatedCredibility: null, 
      updatedConfidence: null,  
      shareBinary: null,
      healthExpertise: null,
      scienceExpertise: null,
      competence: null,        
      stage: 0
    }))
  );

  const [stage, setStage] = useState(0);
  const [ratings, setRatings] = useState({
    initialCredibility: null,
    initialConfidence: null,
    agentTrust: null,
    updatedCredibility: null,
    updatedConfidence: null,
    shareBinary: null,
    healthExpertise: null,
    scienceExpertise: null,
    competence: null
  });

  const [showSettings, setShowSettings] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [chatInputValue, setChatInputValue] = useState('');
  const [analyzingProgress, setAnalyzingProgress] = useState(0);

  const [history, setHistory] = useState([]);

  const t = TRANSLATIONS[lang];
  const activePost = shuffledPosts[currentPostIdx];
  const assignedAgent = AGENTS[selectedAgentId];

  useEffect(() => {
    const saved = answers[currentPostIdx];
    if (saved) {
      setRatings({
        initialCredibility: saved.initialCredibility,
        initialConfidence: saved.initialConfidence,
        agentTrust: saved.agentTrust,
        updatedCredibility: saved.updatedCredibility,
        updatedConfidence: saved.updatedConfidence,
        shareBinary: saved.shareBinary,
        healthExpertise: saved.healthExpertise,
        scienceExpertise: saved.scienceExpertise,
        competence: saved.competence
      });
      setStage(saved.stage);
    }
  }, [currentPostIdx, shuffledPosts]);

  useEffect(() => {
    if (stage === 2) {
      setChatInputValue(`@${assignedAgent.name} Please assess the credibility of this claim.`);
    }
  }, [stage, selectedAgentId, assignedAgent]);

  useEffect(() => {
    let interval;
    if (stage === 3) {
      setAnalyzingProgress(0);
      interval = setInterval(() => {
        setAnalyzingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            const nextStage = 4;
            setStage(nextStage);
            saveCurrentPostState(ratings, nextStage);
            return 100;
          }
          return prev + 25;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [stage]);

  const saveCurrentPostState = (updatedRatings, targetStage) => {
    const updated = { ...ratings, ...updatedRatings };
    setRatings(updated);
    setAnswers(prev => {
      const copy = [...prev];
      copy[currentPostIdx] = {
        ...copy[currentPostIdx],
        ...updated,
        stage: targetStage
      };
      return copy;
    });
  };

  const handleStartExperiment = () => {
    setActiveStep('agent_intro');
  };

  const handleGoToMemoryCheck = () => {
    setMemoryQ1(null);
    setMemoryQ2(null);
    setActiveStep('agent_memory_check');
  };

  const handleStartEvaluation = () => {
    // We do NOT shuffle anymore. Keep the order fixed.
    setShuffledPosts(POSTS);
    setCurrentSessionId("SESS_" + Date.now());

    setSurveyHealthExpertise(null);
    setSurveyTechExpertise(null);
    setSurveyCredibility(null);

    setActiveStep('evaluation');
    setCurrentPostIdx(0);
    setAnswers(
      Array(POSTS.length).fill(null).map(() => ({
        initialCredibility: null,
        initialConfidence: null,
        agentTrust: null,
        updatedCredibility: null,
        updatedConfidence: null,
        shareBinary: null,
        healthExpertise: null,
        scienceExpertise: null,
        competence: null,
        stage: 0
      }))
    );
    setStage(0);
    setRatings({
      initialCredibility: null,
      initialConfidence: null,
      agentTrust: null,
      updatedCredibility: null,
      updatedConfidence: null,
      shareBinary: null,
      healthExpertise: null,
      scienceExpertise: null,
      competence: null
    });
  };

  const handleSendRequest = () => {
    const nextStage = 3;
    setStage(nextStage);
    saveCurrentPostState({}, nextStage);
  };

  const handleMovePrev = () => {
    if (stage === 0) {
      if (currentPostIdx > 0) {
        setCurrentPostIdx(prev => prev - 1);
      }
    } else if (stage === 1) { 
      const target = 0;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 2) { 
      const target = 1;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 4) { 
      const target = 2;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 5) { 
      const target = 4;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 6) { 
      const target = 5;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 7) { 
      const target = 6;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 8) { 
      const target = 7;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 9) { 
      const target = 8;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 10) { 
      const target = 9;
      setStage(target);
      saveCurrentPostState({}, target);
    }
  };

  const handleMoveNext = () => {
    if (stage === 0 && ratings.initialCredibility === null) return;
    if (stage === 1 && ratings.initialConfidence === null) return;
    if (stage === 2) return; 
    if (stage === 4 && ratings.agentTrust === null) return;
    if (stage === 5 && ratings.updatedCredibility === null) return;
    if (stage === 6 && ratings.updatedConfidence === null) return;
    if (stage === 7 && ratings.shareBinary === null) return;
    if (stage === 8 && ratings.healthExpertise === null) return;
    if (stage === 9 && ratings.scienceExpertise === null) return;
    if (stage === 10 && ratings.competence === null) return;

    if (stage === 0) {
      const target = 1;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 1) {
      const target = 2;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 4) {
      const target = 5;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 5) {
      const target = 6;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 6) {
      const target = 7;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 7) {
      const target = 8;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 8) {
      const target = 9;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 9) {
      const target = 10;
      setStage(target);
      saveCurrentPostState({}, target);
    } else if (stage === 10) {
      handleNextPost();
    }
  };

  const handleNextPost = () => {
    const currentAnswer = answers[currentPostIdx];
    if (!currentAnswer) return;

    const existingLogIdx = history.findIndex(
      item => item.postId === activePost.id && item.sessionId === currentSessionId
    );
    
    const logData = {
      id: Date.now() + Math.random(),
      sessionId: currentSessionId,
      postId: activePost.id,
      postCategory: activePost.category_en,
      agentId: selectedAgentId,
      memoryQ1: memoryQ1,
      memoryQ2: memoryQ2,
      initialCredibility: currentAnswer.initialCredibility,
      initialConfidence: currentAnswer.initialConfidence,
      agentTrust: currentAnswer.agentTrust,
      updatedCredibility: currentAnswer.updatedCredibility,
      updatedConfidence: currentAnswer.updatedConfidence,
      shareBinary: currentAnswer.shareBinary,
      healthExpertise: currentAnswer.healthExpertise,
      scienceExpertise: currentAnswer.scienceExpertise,
      competence: currentAnswer.competence,
      surveyHealth: null,
      surveyTech: null,
      surveyCred: null
    };

    if (existingLogIdx > -1) {
      setHistory(prev => {
        const copy = [...prev];
        copy[existingLogIdx] = logData;
        return copy;
      });
    } else {
      setHistory(prev => [...prev, logData]);
    }

    if (currentPostIdx < shuffledPosts.length - 1) {
      setCurrentPostIdx(prev => prev + 1);
    } else {
      setActiveStep('post_survey');
    }
  };

  const handleSubmitSurvey = () => {
    setHistory(prev => prev.map(item => {
      if (item.sessionId === currentSessionId) {
        return {
          ...item,
          surveyHealth: surveyHealthExpertise,
          surveyTech: surveyTechExpertise,
          surveyCred: surveyCredibility
        };
      }
      return item;
    }));
    setActiveStep('completed');
  };

  const handleAbandonAndGoHome = () => {
    setCurrentPostIdx(0);
    resetRatingsForPost();
    setSurveyHealthExpertise(null);
    setSurveyTechExpertise(null);
    setSurveyCredibility(null);
    setActiveStep('welcome');
  };

  const resetRatingsForPost = () => {
    setRatings({
      initialCredibility: null,
      initialConfidence: null,
      agentTrust: null,
      updatedCredibility: null,
      updatedConfidence: null,
      shareBinary: null,
      healthExpertise: null,
      scienceExpertise: null,
      competence: null
    });
    setStage(0);
  };

  const handleClearAllLogs = () => {
    setHistory([]);
    handleAbandonAndGoHome();
  };

  const isMoveUnlocked = () => {
    if (stage === 0) return ratings.initialCredibility !== null;
    if (stage === 1) return ratings.initialConfidence !== null;
    if (stage === 2) return false; 
    if (stage === 3) return false; 
    if (stage === 4) return ratings.agentTrust !== null;
    if (stage === 5) return ratings.updatedCredibility !== null;
    if (stage === 6) return ratings.updatedConfidence !== null;
    if (stage === 7) return ratings.shareBinary !== null;
    if (stage === 8) return ratings.healthExpertise !== null;
    if (stage === 9) return ratings.scienceExpertise !== null;
    if (stage === 10) return ratings.competence !== null;
    return false;
  };

  const totalEvaluated = history.length;
  const avgPreCredibility = totalEvaluated > 0 
    ? (history.reduce((sum, item) => sum + item.initialCredibility, 0) / totalEvaluated).toFixed(2) 
    : 0;
  const avgPostCredibility = totalEvaluated > 0 
    ? (history.reduce((sum, item) => sum + item.updatedCredibility, 0) / totalEvaluated).toFixed(2) 
    : 0;

  const getAgentStats = (agentId) => {
    const filtered = history.filter(item => item.agentId === agentId);
    if (filtered.length === 0) return { trust: 0, drop: 0 };
    const trust = (filtered.reduce((sum, item) => sum + item.agentTrust, 0) / filtered.length).toFixed(1);
    const preCred = (filtered.reduce((sum, item) => sum + item.initialCredibility, 0) / filtered.length).toFixed(1);
    const postCred = (filtered.reduce((sum, item) => sum + item.updatedCredibility, 0) / filtered.length).toFixed(1);
    const drop = (preCred - postCred).toFixed(1);
    return { trust, drop };
  };

  const downloadCSV = () => {
    let csvContent = "ID,Session ID,Post ID,Category,Agent,Memory Q1,Memory Q2,Initial Credibility (Q1),Initial Confidence (Q2),Agent Trust (Q3),Updated Credibility (Q4),Updated Confidence (Q5),Sharing Intention (Q6),Post Health Exp (Q7),Post Science Exp (Q8),Post Competence (Q9),Survey Health Expertise,Survey Tech Expertise,Survey Chatbot Credibility\r\n";
    history.forEach((row) => {
      csvContent += `${row.id},${row.sessionId || ''},${row.postId},${row.postCategory},${row.agentId},${row.memoryQ1 || ''},${row.memoryQ2 || ''},${row.initialCredibility},${row.initialConfidence || ''},${row.agentTrust},${row.updatedCredibility},${row.updatedConfidence || ''},${row.shareBinary},${row.healthExpertise || ''},${row.scienceExpertise || ''},${row.competence || ''},${row.surveyHealth || ''},${row.surveyTech || ''},${row.surveyCred || ''}\r\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `experiment_dataset_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F7F9F9] text-[#0F1419] flex flex-col justify-between font-sans selection:bg-[#1D9BF0]/20">
      
      {/* Dynamic Header */}
      <header className="bg-white border-b border-[#EFF3F4] px-6 py-4 flex justify-between items-center sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          {activeStep === 'evaluation' && (
            <button
              onClick={() => setShowInstructionsModal(true)}
              className="px-3.5 py-1.5 text-xs font-bold text-[#1D9BF0] bg-[#1D9BF0]/5 border border-[#1D9BF0]/10 hover:bg-[#1D9BF0]/10 rounded-full transition-all cursor-pointer flex items-center gap-1 animate-fade-in"
            >
              <IconHelpCircle className="w-3.5 h-3.5" />
              <span>{t.instructions}</span>
            </button>
          )}

          {/* Bilingual Switcher */}
          <button
            onClick={() => setLang(prev => prev === 'en' ? 'zh' : 'en')}
            className="px-3.5 py-1.5 text-xs font-bold text-[#536471] bg-[#F7F9F9] border border-[#EFF3F4] hover:bg-[#EFF3F4] rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            title="Switch Language / 切换语言"
          >
            <IconGlobe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? '中文' : 'English'}</span>
          </button>
        </div>
        
        <button
          onClick={() => setShowSettings(true)}
          className="p-2 text-[#536471] hover:text-[#0F1419] hover:bg-[#F7F9F9] rounded-full transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
          title="Researcher Control Panel"
        >
          <IconSliders className="w-4 h-4 text-[#536471]" />
          <span>{lang === 'en' ? 'Console' : '控制台'}</span>
        </button>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
        <div className="w-full bg-white rounded-2xl shadow-sm border border-[#EFF3F4] overflow-hidden flex flex-col min-h-[500px]">
          
          {/* Header Progress indicator */}
          {activeStep === 'evaluation' && (
            <div className="bg-white border-b border-[#EFF3F4] px-6 py-3.5 flex justify-between items-center shrink-0">
              <button
                onClick={handleAbandonAndGoHome}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#F4212E] bg-[#F4212E]/5 border border-[#F4212E]/10 hover:bg-[#F4212E]/10 transition-all cursor-pointer"
                title="Discard session and go to instructions screen"
              >
                <IconRotateCcw className="w-3.5 h-3.5" />
                {t.restart}
              </button>
              
              <span className="text-xs font-bold text-[#1D9BF0] bg-[#1D9BF0]/10 py-1 px-3 rounded-full">
                {t.postIndicator.replace('{current}', currentPostIdx + 1).replace('{total}', shuffledPosts.length)}
              </span>
            </div>
          )}

          {/* Step 1: Welcome Page */}
          {activeStep === 'welcome' && (
            <div className="p-8 md:p-12 space-y-6 flex-1 flex flex-col justify-center animate-fade-in text-center">
              <div className="max-w-xl mx-auto space-y-4">
                <h1 className="text-2.5xl font-black text-[#0F1419] tracking-tight" style={{ textWrap: 'balance' }}>
                  {t.taskTitle}
                </h1>
                
                <p className="text-[#536471] text-[15px] leading-relaxed" style={{ textWrap: 'pretty' }}>
                  {t.welcomeText}
                </p>
              </div>

              <div className="flex justify-center pt-2 animate-fade-in">
                <button
                  onClick={handleStartExperiment}
                  className="px-8 py-3.5 bg-[#0F1419] hover:bg-[#272C30] text-white font-bold rounded-full text-xs shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  {t.continueToOnboarding}
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Agent Profile Onboarding */}
          {activeStep === 'agent_intro' && (
            <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-center animate-fade-in">
              <div className="space-y-2 text-center max-w-xl mx-auto">
                <h2 className="text-2xl font-bold text-[#0F1419]">
                  {t.meetAssistant}
                </h2>
              </div>

              <div className="max-w-md w-full mx-auto border border-[#EFF3F4] rounded-2xl p-6 hover:border-[#1D9BF0]/40 transition-all bg-white shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${assignedAgent.gradient} flex items-center justify-center text-white font-black text-xl select-none shadow-sm`}>
                    {assignedAgent.avatarLetter}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F1419] text-base flex items-center gap-1.5">
                      {assignedAgent.name}
                      <span className="text-[10px] bg-[#F7F9F9] text-[#536471] font-bold px-2 py-0.5 rounded">
                        {lang === 'en' ? assignedAgent.badge_en : assignedAgent.badge_zh}
                      </span>
                    </h3>
                    <p className="text-[11px] text-[#1D9BF0] font-semibold italic mt-0.5">
                      {lang === 'en' ? assignedAgent.tagline_en : assignedAgent.tagline_zh}
                    </p>
                  </div>
                </div>
                
                <div className="text-[#536471] text-xs leading-relaxed" style={{ textWrap: 'pretty' }}>
                  <MiniMarkdown text={lang === 'en' ? assignedAgent.intro_en : assignedAgent.intro_zh} />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#EFF3F4]">
                <button
                  onClick={() => setActiveStep('welcome')}
                  className="px-4 py-2 text-[#536471] hover:text-[#0F1419] text-sm font-semibold transition-colors cursor-pointer"
                >
                  {t.backToInstructions}
                </button>
                <button
                  onClick={handleGoToMemoryCheck}
                  className="px-6 py-3 bg-[#1D9BF0] hover:bg-[#1A8CD8] text-white font-bold rounded-full shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {t.next} 
                  <IconChevronRight className="w-4 h-4 fill-white text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2.5: Attention & Memory Check */}
          {activeStep === 'agent_memory_check' && (
            <div className="p-6 md:p-8 space-y-8 flex-1 flex flex-col justify-center animate-fade-in">
              <div className="space-y-2 text-center max-w-xl mx-auto">
                <h2 className="text-2xl font-bold text-[#0F1419]">
                  {t.memoryCheckTitle}
                </h2>
              </div>

              <div className="max-w-xl w-full mx-auto space-y-8">
                {/* Check Q1 */}
                <div className="space-y-4 bg-[#F7F9F9] p-5 rounded-2xl border border-[#EFF3F4]">
                  <p className="font-bold text-sm text-[#0F1419]">{t.memoryCheckQ1}</p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setMemoryQ1('yes')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer text-center ${
                        memoryQ1 === 'yes'
                          ? 'bg-[#1D9BF0] text-white border-[#1D9BF0]'
                          : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0]'
                      }`}
                    >
                      {t.memoryCheckQ1_Yes}
                    </button>
                    <button
                      onClick={() => setMemoryQ1('no')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer text-center ${
                        memoryQ1 === 'no'
                          ? 'bg-[#F4212E] text-white border-[#F4212E]'
                          : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#F4212E]'
                      }`}
                    >
                      {t.memoryCheckQ1_No}
                    </button>
                  </div>
                </div>

                {/* If "No", prompt to go back */}
                {memoryQ1 === 'no' && (
                  <div className="flex justify-center animate-fade-in">
                    <button
                      onClick={() => setActiveStep('agent_intro')}
                      className="px-6 py-3 bg-[#0F1419] hover:bg-[#272C30] text-white font-bold rounded-full shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <IconRotateCcw className="w-4 h-4" />
                      {t.memoryCheckQ1_Review}
                    </button>
                  </div>
                )}

                {/* Check Q2 */}
                {memoryQ1 === 'yes' && (
                  <div className="space-y-4 bg-[#F7F9F9] p-5 rounded-2xl border border-[#EFF3F4] animate-fade-in">
                    <p className="font-bold text-sm text-[#0F1419]">{t.memoryCheckQ2}</p>
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => setMemoryQ2('factai')}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer text-center ${
                          memoryQ2 === 'factai'
                            ? 'bg-[#1D9BF0] text-white border-[#1D9BF0]'
                            : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0]'
                        }`}
                      >
                        {t.memoryCheckQ2_Opt1}
                      </button>
                      <button
                        onClick={() => setMemoryQ2('drvera')}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer text-center ${
                          memoryQ2 === 'drvera'
                            ? 'bg-[#1D9BF0] text-white border-[#1D9BF0]'
                            : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0]'
                        }`}
                      >
                        {t.memoryCheckQ2_Opt2}
                      </button>
                      <button
                        onClick={() => setMemoryQ2('axiom')}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer text-center ${
                          memoryQ2 === 'axiom'
                            ? 'bg-[#1D9BF0] text-white border-[#1D9BF0]'
                            : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0]'
                        }`}
                      >
                        {t.memoryCheckQ2_Opt3}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#EFF3F4]">
                <button
                  onClick={() => setActiveStep('agent_intro')}
                  className="px-4 py-2 text-[#536471] hover:text-[#0F1419] text-sm font-semibold transition-colors cursor-pointer"
                >
                  {t.back}
                </button>
                <button
                  onClick={handleStartEvaluation}
                  disabled={memoryQ1 !== 'yes' || memoryQ2 === null}
                  className="px-6 py-3 bg-[#1D9BF0] hover:bg-[#1A8CD8] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-full shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {t.startTask} 
                  <IconPlay className="w-4 h-4 fill-white text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Evaluation Iteration */}
          {activeStep === 'evaluation' && (
            <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="bg-white border border-[#EFF3F4] rounded-2xl p-5 md:p-6 space-y-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${activePost.avatarColor} flex items-center justify-center font-extrabold text-sm select-none`}>
                      {activePost.author.slice(1, 3).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0F1419] text-sm">{activePost.author}</span>
                      </div>
                      <span className="text-[11px] text-[#1D9BF0] bg-[#1D9BF0]/5 font-bold px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                        {t.categoryLabel}: {lang === 'en' ? activePost.category_en : activePost.category_zh}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[#0F1419] text-[15px] leading-relaxed font-normal whitespace-pre-line">
                  {lang === 'en' ? activePost.content_en : activePost.content_zh}
                </p>

                <div className="flex items-center justify-end pt-3 border-t border-[#EFF3F4] text-xs text-[#536471]">
                  <span className="text-[9px] bg-[#F7F9F9] border border-[#EFF3F4] px-2 py-0.5 rounded text-[#536471] font-mono">Post ID: {activePost.id}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center pt-2 min-h-[180px]">
                
                {/* Q1: Initial Credibility */}
                {stage === 0 && (
                  <div className="space-y-4 py-4 animate-fade-in">
                    <p className="text-center font-bold text-[#0F1419] text-base">
                      {t.q1Text}
                    </p>
                    <div className="space-y-3">
                      <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <button
                            key={num}
                            onClick={() => {
                              const nextStage = 1;
                              setStage(nextStage);
                              saveCurrentPostState({ initialCredibility: num }, nextStage);
                            }}
                            className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm active:scale-95 ${
                              ratings.initialCredibility === num
                                ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                        <span>{t.q1Anchors[0]}</span>
                        <span>{t.q1Anchors[1]}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Q2: Initial Confidence */}
                {stage === 1 && (
                  <div className="space-y-4 py-4 animate-fade-in">
                    <p className="text-center font-bold text-[#0F1419] text-base">
                      {t.q2Text}
                    </p>
                    <div className="space-y-3">
                      <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <button
                            key={num}
                            onClick={() => {
                              const nextStage = 2;
                              setStage(nextStage);
                              saveCurrentPostState({ initialConfidence: num }, nextStage);
                            }}
                            className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm active:scale-95 ${
                              ratings.initialConfidence === num
                                ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                        <span>{t.q2Anchors[0]}</span>
                        <span>{t.q2Anchors[1]}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Verification Trigger */}
                {stage === 2 && (
                  <div className="space-y-4 py-2 animate-fade-in">
                    <p className="text-center font-bold text-[#536471] text-xs uppercase tracking-wider">
                      {t.verifyPrompt}
                    </p>
                    
                    <div className="max-w-2xl w-full mx-auto bg-white border border-[#EFF3F4] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-[#1D9BF0]/40 transition-colors">
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <div className="flex">
                          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#1D9BF0] to-[#00C6FF] px-3.5 py-1 rounded-full select-none shadow-sm">
                            @{assignedAgent.name}
                          </span>
                        </div>
                        <span className="text-sm text-[#536471] font-medium leading-relaxed block" style={{ textWrap: 'pretty' }}>
                          {t.assessRequest}
                        </span>
                      </div>
                      
                      <button
                        onClick={handleSendRequest}
                        className="px-6 py-2.5 bg-[#1D9BF0] hover:bg-[#1A8CD8] text-white font-bold rounded-full transition-all cursor-pointer text-xs shrink-0 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {t.sendRequest}
                      </button>
                    </div>
                  </div>
                )}

                {/* AI verification loader */}
                {stage === 3 && (
                  <div className="max-w-md mx-auto py-8 text-center space-y-4 animate-pulse">
                    <div className="flex items-center justify-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${assignedAgent.gradient} flex items-center justify-center text-white font-black text-sm`}>
                        {assignedAgent.avatarLetter}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-[#0F1419]">@{assignedAgent.name}</p>
                        <p className="text-xs text-[#536471]">{t.verifyingText}</p>
                      </div>
                    </div>
                    
                    <div className="w-64 h-1.5 bg-[#EFF3F4] rounded-full overflow-hidden mx-auto">
                      <div 
                        className="h-full bg-[#1D9BF0] transition-all duration-150"
                        style={{ width: `${analyzingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* AI RESPONSE AND POST-VERIFICATION QUESTIONS */}
                {stage >= 4 && (
                  <div className="space-y-6 py-2 animate-fade-in">
                    
                    {/* Highly Prominent AI Identity Banner */}
                    <div className="max-w-2xl mx-auto shadow-sm rounded-2xl overflow-hidden border border-[#EFF3F4]">
                      <div className={`p-4 text-white bg-gradient-to-r ${assignedAgent.gradient} flex items-center gap-4`}>
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center font-black text-2xl border-2 border-white/30 shrink-0">
                          {assignedAgent.avatarLetter}
                        </div>
                        <div>
                          <span className="font-black text-lg block">{assignedAgent.name}</span>
                          <span className="text-xs font-bold opacity-90 block mt-0.5">
                            {lang === 'en' ? assignedAgent.tagline_en : assignedAgent.tagline_zh}
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#F7F9F9] p-5">
                        <div className="text-[#0f1419] text-sm">
                          <MiniMarkdown text={lang === 'en' ? activePost.responses.en[selectedAgentId] : activePost.responses.zh[selectedAgentId]} />
                        </div>
                      </div>
                    </div>

                    {/* Q3: Agent Trust */}
                    {stage === 4 && (
                      <div className="space-y-3 pt-2 animate-fade-in">
                        <p className="text-center font-bold text-[#0F1419] text-base">
                          {t.q3Text}
                        </p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 5;
                                  setStage(nextStage);
                                  saveCurrentPostState({ agentTrust: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.agentTrust === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q3Anchors[0]}</span>
                            <span>{t.q3Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Q4: Updated Credibility */}
                    {stage === 5 && (
                      <div className="space-y-3 pt-2 animate-fade-in">
                        <p className="text-center font-bold text-[#0F1419] text-base">
                          {t.q4Text}
                        </p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 6;
                                  setStage(nextStage);
                                  saveCurrentPostState({ updatedCredibility: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.updatedCredibility === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q4Anchors[0]}</span>
                            <span>{t.q4Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Q5: Updated Confidence */}
                    {stage === 6 && (
                      <div className="space-y-3 pt-2 animate-fade-in">
                        <p className="text-center font-bold text-[#0F1419] text-base">
                          {t.q5Text}
                        </p>
                        <div className="space-y-2">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 7;
                                  setStage(nextStage);
                                  saveCurrentPostState({ updatedConfidence: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.updatedConfidence === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q5Anchors[0]}</span>
                            <span>{t.q5Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Q6: Share Intent */}
                    {stage === 7 && (
                      <div className="space-y-4 py-2 animate-fade-in text-center">
                        <p className="font-bold text-[#0F1419] text-base">
                          {t.q6Text}
                        </p>
                        <div className="space-y-3">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 8;
                                  setStage(nextStage);
                                  saveCurrentPostState({ shareBinary: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.shareBinary === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q6Anchors[0]}</span>
                            <span>{t.q6Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Q7: Health Expertise */}
                    {stage === 8 && (
                      <div className="space-y-4 py-2 animate-fade-in text-center">
                        <p className="font-bold text-[#0F1419] text-base">
                          {t.q7Text}
                        </p>
                        <div className="space-y-3">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 9;
                                  setStage(nextStage);
                                  saveCurrentPostState({ healthExpertise: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.healthExpertise === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q7Anchors[0]}</span>
                            <span>{t.q7Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Q8: Science Expertise */}
                    {stage === 9 && (
                      <div className="space-y-4 py-2 animate-fade-in text-center">
                        <p className="font-bold text-[#0F1419] text-base">
                          {t.q8Text}
                        </p>
                        <div className="space-y-3">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 10;
                                  setStage(nextStage);
                                  saveCurrentPostState({ scienceExpertise: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.scienceExpertise === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q8Anchors[0]}</span>
                            <span>{t.q8Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Q9: Misinformation Competence */}
                    {stage === 10 && (
                      <div className="space-y-4 py-2 animate-fade-in text-center">
                        <p className="font-bold text-[#0F1419] text-base">
                          {t.q9Text}
                        </p>
                        <div className="space-y-3">
                          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <button
                                key={num}
                                onClick={() => {
                                  const nextStage = 10;
                                  setRatings(prev => ({ ...prev, competence: num }));
                                  saveCurrentPostState({ competence: num }, nextStage);
                                }}
                                className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                                  ratings.competence === num
                                    ? 'bg-[#0f1419] text-white border-[#0f1419]'
                                    : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between max-w-md mx-auto text-[11px] text-[#536471] px-2 font-semibold">
                            <span>{t.q9Anchors[0]}</span>
                            <span>{t.q9Anchors[1]}</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                )}

              </div>

              {/* Navigation row footer */}
              <div className="flex justify-between items-center pt-6 border-t border-[#EFF3F4] shrink-0">
                <button
                  onClick={handleMovePrev}
                  disabled={currentPostIdx === 0 && stage === 0}
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold border border-[#EFF3F4] text-[#536471] hover:text-[#0F1419] hover:bg-[#F7F9F9] transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  <IconChevronLeft className="w-4 h-4" />
                  {stage === 0 ? t.previousPost : t.back}
                </button>

                <button
                  onClick={handleMoveNext}
                  disabled={!isMoveUnlocked()}
                  className="flex items-center gap-1 px-5 py-2.5 rounded-full text-xs font-bold bg-[#1D9BF0] hover:bg-[#1A8CD8] text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                  title={!isMoveUnlocked() ? "Please select a response before proceeding" : ""}
                >
                  {stage === 10 && currentPostIdx === shuffledPosts.length - 1 ? t.finishStudy : stage === 10 ? t.nextPost : t.next}
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
              
            </div>
          )}

          {/* Step 4: Post-Interaction Survey */}
          {activeStep === 'post_survey' && (
            <div className="p-8 md:p-12 space-y-8 flex-1 flex flex-col justify-center animate-fade-in">
              <div className="max-w-2xl mx-auto text-center space-y-3">
                <h2 className="text-xl font-black text-[#0F1419]">{t.postSurveyTitle}</h2>
                <p className="text-xs text-[#536471] italic leading-relaxed" style={{ textWrap: 'pretty' }}>
                  {t.surveyHeading}
                </p>
              </div>

              <div className="max-w-xl w-full mx-auto space-y-6">
                
                {/* Survey Q1: Health Expertise */}
                <div className="space-y-3 bg-[#F7F9F9] p-5 rounded-2xl border border-[#EFF3F4]">
                  <p className="font-bold text-sm text-[#0F1419]">{t.surveyQ1}</p>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSurveyHealthExpertise(num)}
                        className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                          surveyHealthExpertise === num
                            ? 'bg-[#0f1419] text-white border-[#0f1419]'
                            : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-[11px] text-[#536471] font-semibold px-2">
                    <span>{t.surveyQ1Anchors[0]}</span>
                    <span>{t.surveyQ1Anchors[1]}</span>
                  </div>
                </div>

                {/* Survey Q2: Technology Expertise */}
                <div className="space-y-3 bg-[#F7F9F9] p-5 rounded-2xl border border-[#EFF3F4]">
                  <p className="font-bold text-sm text-[#0F1419]">{t.surveyQ2}</p>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSurveyTechExpertise(num)}
                        className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                          surveyTechExpertise === num
                            ? 'bg-[#0f1419] text-white border-[#0f1419]'
                            : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-[11px] text-[#536471] font-semibold px-2">
                    <span>{t.surveyQ2Anchors[0]}</span>
                    <span>{t.surveyQ2Anchors[1]}</span>
                  </div>
                </div>

                {/* Survey Q3: Assistant Credibility */}
                <div className="space-y-3 bg-[#F7F9F9] p-5 rounded-2xl border border-[#EFF3F4]">
                  <p className="font-bold text-sm text-[#0F1419]">{t.surveyQ3}</p>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSurveyCredibility(num)}
                        className={`h-11 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                          surveyCredibility === num
                            ? 'bg-[#0f1419] text-white border-[#0f1419]'
                            : 'bg-white text-[#0f1419] border-[#EFF3F4] hover:border-[#1D9BF0] hover:bg-[#1D9BF0]/5'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-[11px] text-[#536471] font-semibold px-2">
                    <span>{t.surveyQ3Anchors[0]}</span>
                    <span>{t.surveyQ3Anchors[1]}</span>
                  </div>
                </div>

              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmitSurvey}
                  disabled={surveyHealthExpertise === null || surveyTechExpertise === null || surveyCredibility === null}
                  className="px-8 py-3.5 bg-[#1D9BF0] hover:bg-[#1A8CD8] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-full text-xs shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  {t.submitFinish}
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Finished view segment */}
          {activeStep === 'completed' && (
            <div className="p-8 md:p-12 space-y-6 text-center max-w-md mx-auto flex-1 flex flex-col justify-center animate-fade-in">
              <div className="w-16 h-16 bg-[#00BA7C]/10 text-[#00BA7C] rounded-full flex items-center justify-center mx-auto border border-[#00BA7C]/20">
                <IconCheckCircle className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2.5xl font-extrabold text-[#0F1419] tracking-tight">
                  {t.completedTitle}
                </h2>
                <p className="text-[#536471] text-xs leading-relaxed">
                  {t.completedText}
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleClearAllLogs}
                  className="px-6 py-3 bg-[#0F1419] hover:bg-[#272C30] text-white font-bold rounded-full transition-colors cursor-pointer text-xs shadow animate-fade-in"
                >
                  {t.restartSimulation}
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Floating Instructions Modal */}
      {showInstructionsModal && (
        <div className="fixed inset-0 bg-[#0F1419]/40 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4">
          <div className="bg-white rounded-2xl border border-[#EFF3F4] max-w-md w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setShowInstructionsModal(false)}
              className="absolute top-4 right-4 p-1.5 text-[#536471] hover:bg-[#F7F9F9] rounded-full transition-colors cursor-pointer"
            >
              <IconX className="w-4.5 h-4.5" />
            </button>
            <h3 className="text-lg font-black text-[#0F1419]">{t.modalInstructionTitle}</h3>
            
            <p className="text-sm text-[#536471] leading-relaxed" style={{ textWrap: 'pretty' }}>
              {t.welcomeText}
            </p>
            
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowInstructionsModal(false)}
                className="px-5 py-2 bg-[#0F1419] text-white text-xs font-bold rounded-full hover:bg-[#272C30]"
              >
                {t.modalGotIt}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Researcher Settings Console */}
      {showSettings && (
        <div className="fixed inset-0 bg-[#0F1419]/40 backdrop-blur-sm flex justify-end z-50 animate-fade-in">
          <div className="w-full max-w-md bg-white border-l border-[#EFF3F4] h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              
              {/* Settings Header */}
              <div className="flex justify-between items-center pb-4 border-b border-[#EFF3F4]">
                <div className="flex items-center gap-2">
                  <IconSliders className="w-5 h-5 text-[#1D9BF0]" />
                  <h3 className="font-extrabold text-base text-[#0F1419]">{lang === 'en' ? 'Console' : '控制台'}</h3>
                </div>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-1.5 text-[#536471] hover:bg-[#F7F9F9] rounded-full transition-colors cursor-pointer"
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>

              {/* Independent Variable Settings */}
              <div className="space-y-3 bg-[#F7F9F9] p-4 rounded-2xl border border-[#EFF3F4]">
                <h4 className="text-xs font-bold text-[#1D9BF0] uppercase tracking-wider">
                  {lang === 'en' ? '1. Experimental Parameters' : '1. 实验参数设定'}
                </h4>
                
                <div className="space-y-2">
                  <label className="text-xs text-[#536471] font-semibold">{lang === 'en' ? 'Agent Assignment Mode' : '助理指派模式'}</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {Object.values(AGENTS).map(ag => (
                      <button
                        key={ag.id}
                        onClick={() => {
                          setSelectedAgentId(ag.id);
                          setShowSettings(false);
                          handleAbandonAndGoHome();
                        }}
                        className={`py-2 px-1 rounded-full text-[11px] font-bold border truncate transition-all ${
                          selectedAgentId === ag.id 
                            ? 'bg-[#1D9BF0] border-[#1D9BF0] text-white shadow-sm' 
                            : 'bg-white border-[#EFF3F4] text-[#536471] hover:bg-[#F7F9F9]'
                        }`}
                      >
                        @{ag.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-100 leading-relaxed mt-2" style={{ textWrap: 'pretty' }}>
                  <span className="font-bold">⚠️ {lang === 'en' ? 'Independent Variable Info:' : '自变量说明:'}</span>
                  {lang === 'en' 
                    ? 'The specified agent determines which single-agent model the participant interacts with during the onboarding flow and evaluation comments section.'
                    : '指定的助理将决定被试在新手引导和评估评论区域中进行交互的单一助理模型。'}
                </div>
              </div>

              {/* Research Dashboard & Metrics */}
              <div className="space-y-4 bg-[#F7F9F9] p-4 rounded-2xl border border-[#EFF3F4]">
                <h4 className="text-xs font-bold text-[#00BA7C] uppercase tracking-wider flex items-center justify-between">
                  <span>{lang === 'en' ? '2. Live Performance Metrics' : '2. 实时性能数据'}</span>
                  <span className="text-[9px] bg-[#00BA7C]/10 text-[#00BA7C] px-2 py-0.5 rounded-full animate-pulse font-bold">{lang === 'en' ? 'Active' : '活跃'}</span>
                </h4>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <div className="bg-white p-2.5 rounded-xl border border-[#EFF3F4]">
                    <span className="text-[#536471] block font-semibold text-[10px]">{lang === 'en' ? 'Total Logs' : '总记录数'}</span>
                    <span className="font-extrabold text-[#0F1419] font-mono mt-0.5 block">{totalEvaluated}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#EFF3F4]">
                    <span className="text-[#536471] block font-semibold text-[10px]">{lang === 'en' ? 'Pre-Credibility' : '前置可信度'}</span>
                    <span className="font-extrabold text-[#F4212E] font-mono mt-0.5 block">{avgPreCredibility}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#EFF3F4]">
                    <span className="text-[#536471] block font-semibold text-[10px]">{lang === 'en' ? 'Post-Credibility' : '后置可信度'}</span>
                    <span className="font-extrabold text-[#00BA7C] font-mono mt-0.5 block">{avgPostCredibility}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#EFF3F4] text-xs font-bold">
                  <span className="text-[#536471] block font-semibold">{lang === 'en' ? 'Intervention Analysis:' : '干预成效分析：'}</span>
                  
                  {/* FactAI Stats */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-[#536471]">
                      <span>FactAI</span>
                      <span>{lang === 'en' ? 'Trust' : '信任度'}: <strong className="text-[#0F1419] font-mono">{getAgentStats('factai').trust}</strong> | {lang === 'en' ? 'Drop' : '降幅'}: <strong className="text-[#F4212E] font-mono">{getAgentStats('factai').drop}</strong></span>
                    </div>
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#1D9BF0] rounded-full" style={{ width: `${(getAgentStats('factai').trust / 7) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* Dr. Vera Stats */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-[#536471]">
                      <span>Dr. Vera</span>
                      <span>{lang === 'en' ? 'Trust' : '信任度'}: <strong className="text-[#0F1419] font-mono">{getAgentStats('drvera').trust}</strong> | {lang === 'en' ? 'Drop' : '降幅'}: <strong className="text-[#F4212E] font-mono">{getAgentStats('drvera').drop}</strong></span>
                    </div>
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#00BA7C] rounded-full" style={{ width: `${(getAgentStats('drvera').trust / 7) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* Axiom Stats */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-[#536471]">
                      <span>Axiom</span>
                      <span>{lang === 'en' ? 'Trust' : '信任度'}: <strong className="text-[#0F1419] font-mono">{getAgentStats('axiom').trust}</strong> | {lang === 'en' ? 'Drop' : '降幅'}: <strong className="text-[#F4212E] font-mono">{getAgentStats('axiom').drop}</strong></span>
                    </div>
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#7856FF] rounded-full" style={{ width: `${(getAgentStats('axiom').trust / 7) * 100}%` }}></div>
                    </div>
                  </div>
                </div>

                {totalEvaluated > 0 && (
                  <button
                    onClick={downloadCSV}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-[#F7F9F9] text-[#0f1419] border border-[#EFF3F4] rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm animate-fade-in"
                  >
                    <IconDownload className="w-3.5 h-3.5 text-[#00BA7C]" />
                    {lang === 'en' ? 'Export Dataset (CSV)' : '导出数据集 (CSV)'}
                  </button>
                )}
              </div>

            </div>

            <div className="pt-4 border-t border-[#EFF3F4] flex justify-end items-center text-xs">
              <button 
                onClick={handleClearAllLogs}
                className="text-[#F4212E] hover:text-[#f4212e]/80 font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <IconTrash className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Clear All Records' : '清除所有数据记录'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}