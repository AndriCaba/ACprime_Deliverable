const chatbotConfig = {
  // Greeting message on chat open
  greetMessage: `Welcome to AC Prime! Protect what matters most with our tailored insurance solutions. Let’s secure your future—explore our plans today! Thank you for choosing us for your needs.`,
  introduction: `Hi! My name is Liora if you need any question feel free to ask. here are some guide questions below.`,
  optionmessage: `if you wish to go back type <b>Menu</b> to go back to the list`,

  // Options displayed after the greeting
  options: `
 <b> Please choose an option (1-8) </b><br><br>
    1. About the Company. <br>
    2. What products do you offer?.<br>
    3. What makes AC Prime different from other insurance brokers?.<br>
    4. I'm looking for insurance.<br>
    5. How can I request a quote?<br>
    6. How to contact a broker?<br>
    7. Where can I find your office or contact details?<br>
    8. Report a problem?<br>
    `,

  // Predefined responses as an array
  responses: [
    {
      key: '4',
      prompt: `What type of insurance do you want?<br>
      <b> Please choose an option (1-3) </b><br>
      <br>
        1. Life<br>
        2. Non-Life<br>
        3. Employee Benefits<br>
        <br>
        (Type <b>Menu</b> to go back.)<br>`,
      options: {
        1: {
          prompt: `Here are the following Life Insurance Policies available:<br>
         <b> Type the insurance you need (e.g., 'Term', 'Whole', or the full name)</b>:<br><br>
            1. Term Insurance ('Term')<br>
            2. Whole Life Insurance ('Whole')<br>
            3. Variable Universal Life (VUL) Insurance<br>
            4. Critical Illness Insurance (Critical)<br>
            <br>Click <a href="/life" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
        },
        2: {
          prompt: `Here are the following Non-Life Insurance Policies available:<br>
    <b>Type the insurance you need (e.g., 'Aviation', 'continuity', or the full name):</b><br><br>
    1. Aviation Insurance ('Aviation')<br>
    2. Business Continuity ('continuity')<br>
    3. Cyber Insurance ('Cyber')<br>
    4. Engineering Insurance ('Engineering')<br>
    5. Fire/Home Insurance ('Fire')<br>
    6. Liability Insurance ('Liability')<br>
    7. Livestock Insurance(Livestock)<br>
    8. Marine Insurance('Marine')<br>
    <br>Click <a href="/non-life" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b>  to go back.)`,
        },
        3: {
          prompt: `Here are the following Business Insurance Policies available:<br>
        <b>  Type the insurance you need (e.g., 'group', 'Buisness', or the full name):</b>
        <br><br>
            1. Business Insurance ('Buisness')<br>
            2. Group Business-Solutions Insurance('group')<br>
            3. Key Person Insurance('manager')<br>
            4. Employee Retirement Plan('Retirement')<br>
            5. Consulting and Advisory Services('consulting')<br>
            <br>Click <a href="/business-solutions" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b>  to go back.)`,
        },
      },
    },
    {
      key: '1',
      prompt: `<b>AC Prime</b> is a rising insurance brokerage in the Philippines, committed to innovative, accessible, and reliable insurance solutions.<br><br>Click <a href="/about" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b>  to go back.)`,
    },
    {
      key: '5',
      prompt: `You can request a quote by clicking <a href="/contact-us" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a>.<br>(Type <b>Menu</b>  to go back.)`,
    },
    {
      key: '3',
      prompt: `<b>AC Prime</b> stands out through exceptional customer service and tailored insurance solutions.<br>(Type <b>Menu</b>  to go back.)`,
    },
    {
      key: '7',
      prompt: `Our office is located 1204 Antel 2000 121 Valero St, Salcedo Village,Makati City.<br>
        📞 +63 917 710 7391<br>
        📧 support@acprimeinsurance.com<br>
        🕗 7:00 am - 4:00 pm<br>(Type <b>Menu</b>  to go back.)`,
    },
    {
      key: '2',
      prompt: `We offer a wide range of insurance products:<br><br>
        <b>Life Insurance: </b> helps secure your family’s future with options like Term, Whole Life, VUL, and Critical Illness coverage.<br><br> 
       
        <b>Non-Life:</b> helps secure your family’s future with options like Term, Whole Life, VUL, and Critical Illness coverage.<br><br>
        
        <b>Business:</b> support your company with Group Life, Retirement plans, Key Person coverage, and expert insurance consulting <br><br>
        Click <a href="/products" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> for the full list.<br>(Type "<b>Menu</b>  to go back.)`,
    },
    {
      key: '8',
      prompt: `If you are experiencing any problem please reach out to us.<br>
       Click <a href="/contact-us" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to proceed.<br>(Type <b>Menu</b>  to go back.) `,
    },
    {
      key: '6',
      prompt: `If you wish to contact a broker Contact us or Leave as an Email <br>
        Click <a href="/contact-us" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to proceed. <br>(Type <b>Menu</b>  to go back.) `,
    },
  ],

  // Keyword matching with synonyms
  keywordMap: {
    insurances: {
      response: `What type of insurance do you need?<br>
        Life<br>
       Non-Life<br>
        Business<br>
        (Type <b>Menu</b>  to go back.)`,
      synonyms: ['policy', 'coverage', 'assurance'],
    },

    file: {
      response: `Here are the available documents for download:<br>
        📄 <a href="/docs/Digital Policies/PDF_A.pdf" target="_blank" download>PDF_A</a><br>
        📄 <a href="/docs/Digital Policies/PDF_B.pdf" target="_blank" download>PDF B</a><br>
        📄 <a href="/docs/Digital Policies/ACprime DefaultFile.pdf" target="_blank" download>Template</a><br>`,
      synonyms: ['pdf', 'document', 'brochure', 'manual', 'policy', 'file'],
    },
    life: {
      response: `Here are the following Life Insurance Policies available:<br>
          Type the insurance you need (e.g., 'Term', 'Whole', or the full name):<br><br>
            1. Term Insurance ('Term')<br>
            2. Whole Life Insurance ('Whole')<br>
            3. Variable Universal Life (VUL) Insurance<br>
            4. Critical Illness Insurance (Critical)<br>
            <br>Click <a href="/life" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['health', 'personal'],
    },
    nonlife: {
      response: `Here are the following Non-Life Insurance Policies available:<br>
    Type the insurance you need (e.g., 'Aviation', 'continuity', or the full name):<br>
    1. Aviation Insurance ('Aviation')<br>
    2. Business Continuity ('continuity')<br>
    3. Cyber Insurance ('Cyber')<br>
    4. Engineering Insurance ('Engineering')<br>
    5. Fire/Home Insurance ('Fire')<br>
    6. Liability Insurance ('Liability')<br>
    7. Livestock Insurance(Livestock)<br>
    8. Marine Insurance('Marine')<br>
    <br>Click <a href="/non-life" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['non/life'],
    },
    Employee_Benefit: {
      response: `Here are the following Business Insurance Policies available:<br>
          Type the insurance you need (e.g., 'group', 'Buisness', or the full name):<br>
            1. Business Insurance ('Buisness')<br>
            2. Group Business-Solutions Insurance('group')<br>
            3. Key Person Insurance('manager')<br>
            4. Employee Retirement Plan('Retirement')<br>
            5. Consulting and Advisory Services('consulting')<br>
            <br>Click <a href="/business-solutions" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['employee benefit', 'business solution', 'employee'],
    },
    term: {
      response: `<b>Term Insurance:</b> is an Life Insurance policy that provides a death benefit to the beneficiaries if the insured passes away during the term or period.<br><br>
        Click <a href="/life/term-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>
        Type <b>Menu</b> to go back.`,
      synonyms: ['temporary', 'short-term', 'basic'],
    },
    whole: {
      response: `<b>Whole Life Insurance</b> is an A permanent Life Insurance policy that accumulates cash value over time, while providing coverage.<br>
        Click <a href="/life/whole-life" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['permanent', 'lifelong', 'forever'],
    },
    vul: {
      response: `<b>VUL Insurance</b> A Life Insurance policy with an investment component, while providing flexible coverage options.<br>
        Click <a href="/life/vul-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['investment', 'flexible premium', 'variable'],
    },
    critical: {
      response: `<b>Critical Illness Insurance</b> is an A Health Insurance policy that provides a cash benefit if the insured is diagnosed with a serious illness.

<br>
        Click <a href="/life/critical-illness" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: [
        'illness',
        'health crisis',
        'serious illness',
        'cancer',
        'heart attack',
      ],
    },
    aviation: {
      response: `<b>Aviation Insurance</b>, Provides coverage for physical loss or damage to an aircraft, including its engines and accessories. It may also cover liability for passenger injury or death, and damage to cargo, mail, or baggage on board.<br>
        Click <a href="/non-life/aviation-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['flight', 'airplane', 'aircraft'],
    },
    business_continuity: {
      response: `<b>Business Continuity Insurance</b>, Provides coverage to help businesses recover from unexpected events that disrupt operations. This insurance ensures that a business can continue its essential functions and maintain financial stability after a disaster, such as a fire, flood, or other significant event that causes a temporary shutdown.

  <br>
        Click <a href="/non-life/business-continuity" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['business recovery', 'operation protection', 'continuity'],
    },
    cyber: {
      response: `<b>Cyber Insurance</b>: Coverage is provided for losses or damages and liabilities resulting from unauthorized use of or access to electronic data or software within your network or business. This policy covers both first-party and third-party losses.

<br>
        Click <a href="/non-life/cybersecurity" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['hacking', 'data breach', 'security', 'online attack'],
    },
    engineering: {
      response: `<b>Engineering Insurance</b>Provides coverage for legal liabilities to third parties for injury, death, or property damage. Here are the different types of engineering insurance:

<br>
        Click <a href="/non-life/engineering-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['construction', 'project risk', 'machinery'],
    },
    fire_home: {
      response: `<b>Fire/Home Insurance</b>We offer a comprehensive range of home protection designed to shield individuals and families against financial losses arising from damages to your home.

<br>
        Click <a href="/non-life/fire-home-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['fire', 'house', 'property damage', 'disaster'],
    },
    liability: {
      response: `I see you are looking for <b>Liability Insurance</b><br>
        Click <a href="/non-life/liability-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['legal', 'responsibility', 'claim', 'compensation'],
    },
    livestock: {
      response: `I see you are looking for <b>Livestock Insurance</b><br>
        Click <a href="/non-life/livestock-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['cattle', 'farm', 'animal'],
    },
    marine: {
      response: `I see you are looking for <b>Marine Insurance</b><br>
        Click <a href="/non-life/marine-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['ship', 'cargo', 'ocean', 'sea'],
    },
    motor: {
      response: `I see you are looking for <b>Motor Car Insurance</b><br>
        Click <a href="/non-life/motor-car-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['car', 'vehicle', 'auto', 'automobile'],
    },
    pet: {
      response: `I see you are looking for <b>Pet Insurance</b><br>
        Click <a href="/non-life/pet-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['dog', 'cat', 'animal care'],
    },
    property: {
      response: `I see you are looking for <b>Property Insurance</b><br>
        Click <a href="/non-life/property-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['real estate', 'building', 'house', 'property damage'],
    },
    surety: {
      response: `I see you are looking for <b>Surety Bonds</b><br>
        Click <a href="/surety" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['bond', 'guarantee', 'contract'],
    },
    other: {
      response: `I see you are looking for <b>Other Insurance</b><br>
        Click <a href="/other" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['miscellaneous', 'various', 'extra coverage'],
    },
    trade_credit: {
      response: `I see you are looking for <b>Trade Credit Insurance</b><br>
        Click <a href="/non-life/trade-credit-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['trade', 'credit', 'business deal', 'payment protection'],
    },
    travel: {
      response: `I see you are looking for <b>Travel Insurance</b><br>
        Click <a href="/travel" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['trip', 'vacation', 'tour', 'holiday'],
    },
    art: {
      response: `I see you are looking for <b>Works of Art Insurance</b><br>
        Click <a href="/art" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['painting', 'sculpture', 'museum', 'fine art'],
    },
    consulting: {
      response: `I see you are looking for <b>Consulting and Advisory Services</b><br>
        Click <a href="/business-solutions/consulting-and-advisory" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['advice', 'business strategy', 'expert guidance'],
    },
    retirement: {
      response: `I see you are looking for <b>Employee Retirement Plans</b><br>
        Click <a href="/business-solutions/employee-retirement-plan" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['pension', '401k', 'future security', 'employee benefit'],
    },
    group_life: {
      response: `I see you are looking for <b>Group Life Insurance</b><br>
        Click <a href="/business-solutions/group-life-insurance" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: [
        'group',
        'company plan',
        'team insurance',
        'employee protection',
      ],
    },
    company: {
      response: `AC Prime is a rising insurance brokerage in the Philippines, committed to innovative, accessible, and reliable insurance solutions.<br><br>Click <a href="/about" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['acprime', 'Company'],
    },
    keyperson: {
      response: `I see you are looking for <b>Key Person Insurance</b><br>
        Click <a href="/key-person" target="_blank"><span style="color: #ED4A00"><b>here</b></span></a> to learn more.<br>(Type <b>Menu</b> to go back.)`,
      synonyms: ['executive', 'manager', 'important employee'],
    },
    default: {
      response: `I'm not sure how to respond to that. Can you try a different question?<br>(Type <b>Menu</b> to go back.)`,
    },
  },
};

export default chatbotConfig;
// Here are all the `href` values extracted from the data:

// ### **Life Insurance**
// - `/life`
// - `/life/term-insurance`
// - `/life/whole-life`
// - `/life/vul-insurance`
// - `/life/critical-illness`

// ### **Non Life Insurance**
// - `/non-life`
// - `/non-life/aviation-insurance`
// - `/non-life/business-continuity`
// - `/non-life/cybersecurity`
// - `/non-life/engineering-insurance`
// - `/non-life/fire-home-insurance`
// - `/non-life/liability-insurance`
// - `/non-life/livestock-insurance`
// - `/non-life/marine-insurance`
// - `/non-life/motor-car-insurance`
// - `/non-life/pet-insurance`
// - `/non-life/property-insurance`
// - `/non-life/surety-bonds`
// - `/non-life/trade-credit-insurance`
// - `/non-life/travel-insurance`
// - `/non-life/works-of-art`

// ### **Business Solutions**
// - `/business-solutions`
// - `/business-solutions/consulting-and-advisory`
// - `/business-solutions/employee-retirement-plan`
// - `/business-solutions/group-life-insurance`
// - `/business-solutions/key-person-insurance`
