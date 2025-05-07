import Image from 'next/image';
import Link from 'next/link';
const articles = [
  {
    id: '1',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk'],
    img: '/images/articles/article-1.png',
    img2: '/images/articles/article_img2-1.png',
    title: 'Understanding the Different Types of Life Insurance Policies',
    subtitle:
      'A comprehensive guide to term life, whole life, and universal life insurance, including the pros and cons of each type.',
    description:
      "Life insurance can feel like a complex topic, but it doesn't have to be. When it comes to choosing a policy, understanding the three main types - term life, whole life, and universal life - is key. Each offers distinct advantages and disadvantages, making it crucial to find the one that aligns with your needs and goals.",
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          Life insurance can feel like a complex topic, but it doesn&#39;t have
          to be. When it comes to choosing a policy, understanding the three
          main types - term life, whole life, and universal life - is key. Each
          offers distinct advantages and disadvantages, making it crucial to
          find the one that aligns with your needs and goals.
        </p>
        <p className="mb-8">
          1. <span className="font-bold">Term Life Insurance: </span>
          <span className="font-bold text-primary">
            Pure Protection, Focused Coverage
          </span>
        </p>
        <p className="mb-6">
          This is a type of insurance that provides temporary coverage at a
          relatively low cost. You pay a premium for a set period (e.g., 10, 20,
          or 30 years). If you pass away during this time, your beneficiaries
          receive a death benefit.
        </p>
        <p className="mb-6">
          Let&#39;s say you and your partner have a young family. You have a
          mortgage, childcare expenses, and dreams of your children&#39;s
          college education. Term life insurance can be a powerful tool in case
          of the unexpected and can provide a financial safety net for the
          future of your children until they become adults.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Benefit:</span> Term life is the most
          affordable option and you can choose how many years and how much you
          want be covered for.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Drawback:</span> Term life has no cash
          value. Once the term ends, the policy expires unless you renew it, and
          premiums can increase significantly upon renewal.
        </p>
        <p>
          <span className="font-bold">Who Should Consider Term Life?</span>
        </p>
        <ul className="mb-8 ml-4 list-disc">
          <li>
            Young families needing financial protection while raising children.
          </li>
          <li>
            Individuals with temporary financial obligations like a mortgage.
          </li>
          <li>
            Those seeking affordable coverage without a long-term commitment.
          </li>
        </ul>
        <p className="mb-8">
          2. <span className="font-bold">Whole Life Insurance: </span>
          <span className="font-bold text-primary">
            Coverage for Life, Cash Value Growth
          </span>
        </p>
        <p className="mb-6">
          Whole life insurance is a type of permanent life insurance that
          provides coverage for the entire lifetime of the policyholder, as long
          as premiums are paid. Unlike term life insurance, which offers
          protection for a specific period, whole life insurance combines a
          death benefit with a savings component, known as the policy&#39;s cash
          value.
        </p>
        <p className="mb-6 text-center font-bold">
          Key Features of Whole Life Insurance
        </p>
        <ul className="mb-8 ml-4 list-disc">
          <li className="mb-6">
            <span className="font-semibold">Lifetime Coverage:</span> Unlike
            term life, whole life stays active as long a you pay premiums,
            providing peace of mind for lifelong protection.
          </li>
          <li className="mb-6">
            <span className="font-semibold">Protection & Growth:</span> Your
            premiums ensure a death benefit payout, while a portion grows as
            cash value over time. Policyholders can borrow against this cash
            value or withdraw it, though doing so may affect the death benefit.
          </li>
          <li className="mb-6">
            <span className="font-semibold">Predictable Costs:</span> Premiums
            typically stay level throughout the policy making it easier for
            policyholders to budget over the long term
          </li>
        </ul>
        <p className="font-semibold">Who Should Consider Whole Life?</p>
        <ul className="mb-8 ml-4 list-disc">
          <li>
            Individuals seeking lifetime coverage and a cash value benefit.
          </li>
          <li>Those who want a way to accumulate long-term savings. </li>
          <li>
            People who may need to access cash in the future for emergencies or
            opportunities.
          </li>
        </ul>
        <p className="mb-8">
          3.
          <span className="font-bold">Variable Universal Life Insurance: </span>
          <span className="font-bold text-primary">
            Flexible Coverage, Investment Potential
          </span>
        </p>
        <p className="mb-6">
          Universal Life Insurance or known as Variable-Unit Linked Insurance is
          a type of life insurance that combines the benefits of life coverage
          with investment opportunities. This product allows policyholders to
          invest a portion of their premiums in various investment funds, such
          as stocks, bonds, or mutual funds, in addition to their death benefit.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Benefit:</span> Universal life offers
          flexible premiums for your life coverage. You can adjust your coverage
          amount and premium payments within limits. You also have the option to
          attach additional benefits to your insurance policies through add-on
          riders.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Drawback:</span> Universal life
          policies can be complex and come with fees. The investment value is
          not guaranteed and depends on market performance.
        </p>
        <p className="font-semibold">Who Should Consider Term Life?</p>
        <ul className="mb-8 ml-4 list-disc">
          <li>Individuals seeking flexibility in coverage and premiums.</li>
          <li>
            Those comfortable with some investment risk for potentially higher
            investment growth.
          </li>
          <li>People who may need to adjust their coverage needs over time.</li>
        </ul>
        <p className="font-semibold">Choosing the Right Policy</p>
        <p className="mb-10">
          The best life insurance type depends on your specific circumstances.
          Consider your age, financial goals, budget, and desired level of
          coverage. Consulting with an insurance professional can help you
          navigate your options and find the policy that best suits your needs.
        </p>
        <p className="mb-8 text-center">
          Talk to one of our trusted advisors and have peace of mind about the
          future
        </p>
      </div>
    ),
    date: 'July 27, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '2',
    type: 'Articles',
    tags: ['Insurance and Risk', 'Wealth Creation'],
    img: '/images/articles/article-2.png',
    img2: '/images/articles/article_img2-2.png',
    title: 'Tips in choosing Non-Life Insurance that suits you',
    subtitle:
      'Choosing the right non-life insurance policy involves several key considerations to ensure it meets your specific needs effectively.',
    description:
      'A non-life insurance, also known as general insurance, provides financial protection against losses and damages other than those covered by life insurance. It includes a wide range of policies that cover various aspects of life, excluding the risk of death. Non-life insurance policies are typically short-term and need to be renewed periodically.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          A non-life insurance, also known as general insurance, provides
          financial protection against losses and damages other than those
          covered by life insurance. It includes a wide range of policies that
          cover various aspects of life, excluding the risk of death. Non-life
          insurance policies are typically short-term and need to be renewed
          periodically.
        </p>
        <p className="mb-6">
          <span className="font-semibold text-primary">What do you need?:</span>{' '}
          Begin by clearly defining why you need insurance—is it for protecting
          your vehicle, ensuring a worry-free trip, or providing a safety net
          for your business? Understanding your primary objectives helps narrow
          down the type of coverage you require.
        </p>
        <p className="mb-6">
          <span className="font-semibold text-primary">
            Check the coverage:
          </span>{' '}
          Ensure it includes all the specific protections you need, whether
          it&#39;s refunding canceled flights, covering lost luggage, or
          safeguarding your business assets. If the standard packages don&#39;t
          fully meet your requirements, inquire about additional coverage
          options available.
        </p>
        <p className="mb-6">
          <span className="font-semibold text-primary">Consider the cost:</span>{' '}
          Cost is another crucial factor. Evaluate the insurance premiums
          against the benefits offered. Look for a policy that strikes the right
          balance between affordability and comprehensive coverage. Don&#39;t
          solely focus on the lowest cost; instead, consider how well the policy
          protects you against potential risks and losses.
        </p>
        <p className="mb-6">
          <span className="font-semibold text-primary">
            Insurance Provider:
          </span>{' '}
          Equally important is the reputation and reliability of the insurance
          provider. Research their track record in handling claims and customer
          service. Choosing a reputable provider ensures you receive timely
          assistance and support when needed.
        </p>
        <p className="mb-6">
          Given the complexity of insurance options, consider seeking assistance
          from an insurance brokerage. These professionals can streamline the
          process by comparing policies from different providers, helping you
          find the best fit based on your needs and budget. Their expertise can
          save you time and ensure you make an informed decision that offers
          optimal protection and peace of mind.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '3',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk'],
    img: '/images/articles/article-3.png',
    img2: '/images/articles/article_img2-3.png',
    title: 'Essential Non-Life Insurance Policies Every Business Should Have',
    subtitle:
      'Running a business involves various risks, and having the right non-life insurance policies is crucial to protect against unforeseen events.',
    description:
      'Running a business involves various risks, and having the right non-life insurance policies is crucial to protect against unforeseen events.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          Unexpected events can threaten your success. Non-life insurance acts
          as a protective shield, safeguarding your company from financial
          blows. Here are essential non-life insurance policies every business
          should consider:
        </p>
        <p className="mb-6">
          <span className="font-semibold">Property Insurance:</span> Property
          insurance is indispensable for businesses as it safeguards physical
          assets like buildings, equipment, inventory, and furniture against
          various perils such as fire, theft, vandalism, and natural disasters.
          This coverage not only ensures that businesses can repair or replace
          damaged property without significant financial strain but also
          supports continuity by compensating for lost income and operating
          expenses during disruptions.
        </p>
        <p className="mb-6">
          Additionally, property insurance often includes liability coverage,
          protecting businesses from legal costs and settlements related to
          injuries or damages occurring on their premises. Beyond financial
          security, property insurance enhances business credibility, ensures
          compliance with contractual obligations, and provides peace of mind,
          allowing businesses to focus on growth and operations with confidence.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Liability Insurance:</span> Critical
          component of any comprehensive commercial insurance plan, protecting
          businesses from financial loss due to legal claims arising from
          injuries or damages caused to others. Common types include public
          liability, professional liability, and product liability insurance.
        </p>
        <p className="mb-6">
          A significant liability claim can disrupt business operations and
          damage your company’s reputation. Liability insurance ensures that
          your business can continue to operate smoothly while addressing legal
          challenges. It also helps maintain the trust and confidence of
          customers, clients, and stakeholders by demonstrating your commitment
          to managing risks responsibly.
        </p>
        <p className="mb-6">
          <span className="font-semibold">
            Worker’s compensation insurance:
          </span>{' '}
          Workers&#39; compensation insurance is essential for protecting both
          employees and employers from the financial and legal consequences of
          work-related injuries and illnesses.
        </p>
        <p className="mb-6">
          By providing comprehensive coverage for medical expenses, income
          replacement, disability benefits, and legal protection, workers&#39;
          compensation insurance ensures that employees receive the care and
          support they need while safeguarding the financial health and
          stability of the business.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Disability Insurance:</span>{' '}
          Disability insurance is essential for businesses as it provides
          crucial income replacement for employees unable to work due to
          disability or illness. This coverage ensures financial stability by
          enabling employees to meet living expenses and medical bills during
          their recovery, reducing stress and allowing them to focus on
          rehabilitation.
        </p>
        <p className="mb-6">
          For employers, offering disability insurance enhances retention rates
          and job satisfaction, positioning the company as supportive and
          attractive to potential hires. It also helps manage costs by
          minimizing turnover expenses and maintaining productivity with
          returning employees. Compliance with legal obligations and ethical
          responsibilities further underscores the importance of disability
          insurance in fostering a resilient and caring workplace environment.
        </p>
        <p className="mb-6">
          Overall, Non-life insurance coverage, including property insurance,
          liability insurance, workers&#39; compensation, and disability
          insurance, is essential for businesses to mitigate risks, protect
          assets, ensure financial stability during disruptions, comply with
          legal requirements, support employee well-being, and maintain
          operational continuity.
        </p>
        <p className="mb-6 text-primary">
          For tailored business solutions and expert guidance on choosing the
          right insurance coverage, feel free to reach out to us. We&#39;re here
          to assist you in safeguarding your business&#39;s future.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '4',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk'],
    img: '/images/articles/article-4.png',
    img2: '/images/articles/article_img2-4.png',
    title: 'The Importance of Life Insurance for Filipino Businessmen',
    subtitle: 'Securing Your Future that you built for your Family',
    description:
      'In the fast-paced world of business, Filipino entrepreneurs juggle numerous responsibilities, from managing day-to-day operations to planning for future growth. Amid these demands, one crucial element often overlooked is life insurance. Life insurance is not just a financial product; it’s a cornerstone of a comprehensive business strategy, providing security and stability for both the entrepreneur and their enterprise.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          In the fast-paced world of business, Filipino entrepreneurs juggle
          numerous responsibilities, from managing day-to-day operations to
          planning for future growth. Amid these demands, one crucial element
          often overlooked is life insurance. Life insurance is not just a
          financial product; it&#39;s a cornerstone of a comprehensive business
          strategy, providing security and stability for both the entrepreneur
          and their enterprise.
        </p>
        <p className="mb-8 font-semibold text-primary">
          Protecting Your Family Legacy
        </p>
        <p className="mb-6">
          For many Filipino businessmen, their business is not just a source of
          income but a legacy they hope to pass down to their children. Life
          insurance ensures that in the event of an untimely death, their
          family&#39;s financial future is secured. The death benefit from a
          life insurance policy can cover living expenses, pay off debts, and
          fund future educational needs, allowing the family to maintain their
          standard of living during a challenging time.
        </p>
        <p className="mb-6">
          Imagine a scenario wherein a young adult has to step up and fill in
          the shoes of his late Father to provide for the family while grieving
          for his untimely passing. That is a difficult situation to be in as a
          young adult. Life Insurance helps ease some of the burden by serving
          as a financial cushion while the family is grieving. The insurance
          proceeds will help take care of the hospital bills, cover daily living
          costs and fund for the children’s education.
        </p>
        <p className="mb-8 font-bold text-primary">
          Safeguarding Your Business
        </p>
        <p className="mb-6">
          Life insurance is also a critical tool for protecting your business.
          Many Filipino businesses rely heavily on their owner’s expertise and
          leadership. If the owner passes away unexpectedly, the business can
          face significant challenges. Life insurance can provide the necessary
          funds to keep the business afloat, cover operational expenses, and
          even hire a replacement if needed.
        </p>
        <p className="mb-8 font-bold text-primary">Key Person Insurance</p>
        <p className="mb-6">
          For businesses with key individuals whose skills, knowledge, or
          leadership are crucial, key person insurance is a valuable option.
          This type of life insurance policy compensates the business for the
          financial loss it would suffer if a key person dies. This coverage can
          be used to offset lost income, cover the costs of recruiting and
          training a replacement, and reassure investors and creditors of the
          business’s stability.
        </p>
        <p className="mb-8 font-bold text-primary">
          Getting Insurance is always a smart decision
        </p>
        <p className="mb-6">
          Life insurance is more than a safety net; it&#39;s a strategic
          decision that protects both personal and professional interests. For
          Filipino businessmen, incorporating life insurance into their
          financial planning provides peace of mind, knowing their family and
          business are protected against unforeseen events. At AC Prime
          Insurance Brokers, Inc., we understand the unique needs of Filipino
          entrepreneurs and offer tailored life insurance solutions to safeguard
          their legacy and ensure continued business success.
        </p>
        <p className="mb-6">
          Life insurance is more than a safety net; it&#39;s a strategic
          decision that protects both personal and professional interests. For
          Filipino businessmen, incorporating life insurance into their
          financial planning provides peace of mind, knowing their family and
          business are protected against unforeseen events. At AC Prime
          Insurance Brokers, Inc., we understand the unique needs of Filipino
          entrepreneurs and offer tailored life insurance solutions to safeguard
          their legacy and ensure continued business success.
        </p>
        <p className="mb-8">
          By investing in life insurance, Filipino businessmen can ensure that
          their hard work and dedication continue to benefit their loved ones
          and their businesses, no matter what the future holds. Contact{' '}
          <span className="font-bold italic text-navy-100">AC Prime</span>{' '}
          <span className="font-bold italic text-primary">
            Insurance Brokers, Inc.
          </span>{' '}
          today to learn more about how life insurance can be a pivotal part of
          your financial strategy.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '5',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk '],
    img: '/images/articles/article-5.png',
    img2: '/images/articles/article_img2-5.png',
    title:
      'Choosing the Right Health Maintenance Organization (HMO) Plan for Your Employees',
    subtitle:
      'A Comprehensive Guide to Selecting the Best Health Coverage for Your Workforce',
    description:
      'As a Filipino employer, offering a Health Maintenance Organization (HMO) plan is a fantastic way to invest in your employees&rsquo; well-being. But with so many HMO options available, choosing the right one can feel overwhelming. Here&rsquo;s a helpful guide to navigate the process and find the perfect fit for your team:',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          As a Filipino employer, offering a Health Maintenance Organization
          (HMO) plan is a fantastic way to invest in your employees&#39;
          well-being. But with so many HMO options available, choosing the right
          one can feel overwhelming. Here&#39;s a helpful guide to navigate the
          process and find the perfect fit for your team:
        </p>
        <p className="mb-8 font-bold text-primary">
          1. Uncover Your Team&#39;s Needs
        </p>
        <p className="mb-6">
          Start by understanding your employees&#39; healthcare needs. Consider
          factors like age groups, existing health conditions, family size, and
          preferred doctors. This helps you choose a plan that provides the
          right coverage for everyone.
        </p>
        <p className="mb-8 font-bold text-primary">2. Location is key</p>
        <p className="mb-6">
          A crucial aspect of an HMO plan is its network of healthcare
          providers. Choose a plan with a comprehensive network of hospitals,
          clinics, and specialists readily accessible in the Philippines.
          Consider how close these providers are to your employees&#39; homes or
          workplaces for easy access to care.
        </p>
        <p className="mb-8 font-bold text-primary">3. What&#39;s Covered?</p>
        <p className="mb-6">
          Carefully review the coverage benefits of each plan. Ideally, the plan
          should cover essential healthcare services like preventive care,
          outpatient and inpatient treatment, maternity needs, emergencies, and
          prescription drugs. Pay close attention to any exclusions or
          limitations that might affect your employees&#39; access to care.
        </p>
        <p className="mb-8 font-bold text-primary">4. Reputation Matters</p>
        <p className="mb-6">
          Research the reputation and track record of the HMO providers
          you&#39;re considering. Look for online reviews, testimonials, and
          ratings from other companies or individuals who have experience with
          these HMOs. Opt for reputable providers known for delivering reliable
          and high-quality healthcare services.
        </p>
        <p className="mb-6 text-center font-bold italic">
          Finding the perfect balance between comprehensive coverage,
          affordability, and network access can be a challenge.
        </p>
        <p className="mb-8 text-center">
          Finding the perfect balance between comprehensive coverage,
          affordability, and network access can be a challenge. Don&#39;s
          navigate the complexities of HMO selection alone. Contact{' '}
          <span className="font-bold italic text-navy-100">
            AC Prime Brokers, Inc.
          </span>{' '}
          today for a free consultation and let us guide you towards the perfect
          health plan for your Filipino workforce. A healthy team is a happy and
          productive team, and AC Prime is here to support your company&#39;s
          well-being.
        </p>
        <p className="mb-8 font-bold text-primary">5. Explore Your Options</p>
        <p className="mb-6">
          Once you know your employees&#39; needs, dive into the available HMO
          plans. Compare coverage benefits, hospital networks, monthly
          contributions (premiums), co-payment requirements, and any additional
          services offered. Look for plans that align with both your budget and
          your employees&#39; needs.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '6',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk '],
    img: '/images/articles/article-6.png',
    img2: '/images/articles/article_img2-6.png',
    title: 'The importance of a comprehensive health plan',
    subtitle: 'Why investing in our health is more important now than ever.',
    description:
      'The Philippines continues to see heart disease, cancer (neoplasms), and strokes as leading causes of death. These conditions can strike anyone, anytime, and the financial burden of treatment can be overwhelming.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          The Philippines continues to see heart disease, cancer (neoplasms),
          and strokes as leading causes of death. These conditions can strike
          anyone, anytime, and the financial burden of treatment can be
          overwhelming.
        </p>
        <p className="mb-1 font-bold text-navy-100">
          Consider these statistics:
        </p>
        <p className="mb-6">
          An acute heart attack can cost around Php 978,650. Stroke treatment
          can reach Php 1.8 million. Lung cancer treatment can amount to a
          staggering Php 2.78 million. Even common health concerns like breast
          cancer (Php 438,000) or kidney dialysis (Php 192,000 - Php 432,000
          annually) can quickly drain your savings.
        </p>
        <p className="mb-6">
          Think of health insurance as a safety net. You pay a regular premium
          (monthly, quarterly, anually), and in return, your insurance company
          helps you manage medical costs . They will pay you a lump sum if you
          get sick that ca n cover a significant portion, or sometimes all, of
          your bills depending on your plan and sum assured.
        </p>
        <p className="mb-6">
          Here&#39;s why it&#39;s beneficial: Imagine facing a major illness.
          Medical bills can quickly spiral, leaving you with financial stress on
          top of health concerns. Health insurance helps ease that burden by
          taking care of most, if not all, of the covered expenses. This allows
          you to focus on your recovery without worrying about the financial
          strain. You don’t have to be in debt to pay off your financial
          obligations You can live your life to the fullest knowing you are
          covered for any unexpected health issues Don&#39;s wait for a health
          crisis to take action. Invest in your health and financial security
          with a comprehensive health insurance plan.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '7',
    type: 'Articles',
    tags: ['Industry Trends', 'Reports'],
    img: '/images/articles/article-7.png',
    img2: '/images/articles/article_img2-7.png',
    title: 'Growing need for cyber insurance in the Philippines',
    subtitle: (
      <p>
        The Philippines has seen an increase in internet users, with the figure
        doubling from{' '}
        <span className="text-primary">
          48 million in 2018 to 69 million by 2023.
        </span>{' '}
        This rapid growth, combined with Filipinos spending an average of nine
        hours online each day, has resulted in a robust digital landscape.
      </p>
    ),
    description:
      'The Philippines has seen an increase in internet users, with the figure doubling from 48 million in 2018 to 69 million by 2023. This rapid growth, combined with Filipinos spending an average of nine hours online each day, has resulted in a robust digital landscape. Despite its high digital penetration rate, the Philippines has the lowest level of digital literacy in the world, according to the United Nations. As a result, the country remains an epicenter for digital threats incidents, ranking fifth among Southeast Asian countries in terms of the number of phishing cyberattacks in 2022.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          Despite its high digital penetration rate, the Philippines has the
          lowest level of digital literacy in the world, according to the United
          Nations. As a result, the country remains an epicenter for digital
          threats incidents, ranking fifth among Southeast Asian countries in
          terms of the number of phishing cyberattacks in 2022.
        </p>
        <p className="mb-6">
          Despite the government&#39;s efforts to make the cyber landscape safer
          for Filipinos, the persistent threat highlights the critical need for
          cyber insurance.
        </p>
        <p className="mb-6">
          Think of health insurance as a safety net. You pay a regular premium
          (monthly, quarterly, anually), and in return, your insurance company
          helps you manage medical costs . They will pay you a lump sum if you
          get sick that ca n cover a significant portion, or sometimes all, of
          your bills depending on your plan and sum assured.
        </p>
        <p className="mb-6">
          Cyber insurance has emerged as a critical safeguard for both
          individuals and businesses. It is an important part of risk management
          because it protects against the devastating consequences of
          cyberattacks such as data breaches, identity theft, and financial
          loss. Policyholders can recover expenses for incident response, legal
          counsel, public relations, and business interruption, reducing the
          financial impact and enabling a quick recovery.
        </p>
        <p className="mb-6">
          Furthermore, cyber insurance can help improve a company&#39;s
          reputation and customer trust. In the event of a data breach, a
          comprehensive insurance policy shows a proactive approach to
          cybersecurity and can help restore stakeholder trust.
        </p>
        <p className="mb-6 text-center font-bold italic">
          Given the Philippines&#39; unique digital landscape and the escalating
          cyber threat, cyber insurance has become a{' '}
          <span className="text-primary">necessity rather than a luxury.</span>{' '}
        </p>
        <p className="mb-8 text-center">
          Individuals and businesses that invest in this protection can
          significantly reduce their exposure to financial risks while also
          building resilience in the face of cyberattacks. Contact{' '}
          <span className="font-bold italic text-navy-100">
            AC Prime Brokers, Inc.
          </span>{' '}
          today for a free consultation, and let us help you secure the right
          cyber insurance plan for your business. Protect your digital assets
          and ensure your company&#39;s continuity with AC Prime&#39;s expert
          guidance and support.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: 'CONTACT US',
  },
  {
    id: '8',
    type: 'Articles',
    tags: ['Industry Trends', 'Reports'],
    img: '/images/articles/article-8.png',
    img2: '/images/articles/article_img2-8.png',
    title: 'Growing Awareness of Health and Wellness',
    subtitle:
      'The recent pandemic was a clear wake-up call for Filipinos, pushing a shift in priorities towards health and wellness. A staggering 98% of Filipinos reported adopting healthier lifestyles, according to The GWI Consumer Trends Report 2022.',
    description:
      'The recent pandemic was a clear wake-up call for Filipinos, pushing a shift in priorities towards health and wellness. A staggering 98% of Filipinos reported adopting healthier lifestyles, according to The GWI Consumer Trends Report 2022.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          This increased health consciousness has become more prominent among
          the younger generation. Millennials and Gen Z, burdened by financial
          uncertainties post-pandemic, are prioritizing both physical and mental
          well-being. A survey by Herbalife revealed that 87% of Filipino
          respondents became more health-conscious after the pandemic, with
          younger generations emphasizing mental health improvement.
        </p>
        <p className="mb-6">
          However, this growing focus on health is challenged by significant
          hurdles. Heart disease, cancer, and stroke continue to be the leading
          causes of death in the Philippines, according to the Philippine
          Statistics Authority. Moreover, the financial burden of healthcare is
          a pressing issue, with out-of-pocket spending due to healthcare
          expenses driving millions into poverty.
        </p>
        <p className="mb-6">
          Here are important steps to take in transitioning into a healthier
          nation:
        </p>
        <p className="mb-6">
          <span className="font-semibold">
            Adopt an exercise routine and a balanced diet:
          </span>{' '}
          Recent data from the World Health Organization (WHO) reveals that in
          2022, nearly one-third (31%) of adults globally, which amounts to
          approximately 1.8 billion people, failed to meet the recommended
          levels of physical activity, increasing the risk for cancer and heart
          disease.Prioritizing a nutritious diet and regular physical activity
          is crucial for overall health. Numerous studies show the importance of
          regular physical activity in decreasing the risk of chronic disease
          later on in life. These habits not only help maintain a healthy weight
          but also contribute to your overall wellness.
        </p>
        <p className="mb-6">
          <span className="font-semibold">Prioritize Mental Health: </span> In
          recent years, the importance of mental health has gained widespread
          recognition. To maintain and enhance mental well-being, incorporating
          practices like mindfulness, meditation, and regular social interaction
          is essential. These activities can help reduce stress, improve
          emotional resilience, and promote a balanced state of mind.
          Additionally, it&#39;s crucial to seek professional support when
          needed, whether through therapy, counseling, or other mental health
          services. Prioritizing mental health not only contributes to overall
          well-being but also enhances productivity and quality of life.
        </p>
        <p className="mb-6">
          <span className="font-semibold"> Invest in Health Insurance: </span>
          Securing comprehensive health insurance is crucial for managing
          unexpected medical expenses and safeguarding against financial
          hardship. By purchasing health insurance, you can access millions in
          coverage if diagnosed with serious illnesses, such as heart disease
          which accounts for 18.4% of deaths of Filipinos, or stroke, which is
          the second leading cause of death, ensuring you receive the necessary
          medical care. This protection not only provides peace of mind but also
          allows you to focus on recovery without the added stress of financial
          burdens.
        </p>
        <p className="mb-8 text-center font-bold italic text-navy-100">
          Investing in your health is an investment in your future. Connect with
          one of our trusted Financial Advisors to find the right health
          insurance plan tailored to your needs.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: "LET'S TALK",
  },
  {
    id: '9',
    type: 'Articles',
    tags: ['Industry Trends', 'Reports'],
    img: '/images/articles/article-9.png',
    img2: '/images/articles/article_img2-9.png',
    title: 'Building employee trust amidst the recession',
    description:
      'The recent pandemic has had a devastating impact globally, bringing the economy to a halt and significantly affecting businesses and employees. This economic downturn has taken a toll on the well-being of Filipinos. According to a report by The Philippine Business Coalition for Women Empowerment and Investing in Women, over half (55%) of workers reported experiencing a decline in mental well-being, while 50% noted a deterioration in physical well-being. Additionally, insurance company AXA highlighted that 87% of professionals in the Philippines have reported work-related mental health issues, a figure that significantly exceeds the global average of 76%.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          The recent pandemic has had a devastating impact globally, bringing
          the economy to a halt and significantly affecting businesses and
          employees. This economic downturn has taken a toll on the well-being
          of Filipinos. According to a report by The Philippine Business
          Coalition for Women Empowerment and Investing in Women,
          <span className="text-primary">
            {' '}
            over half (55%) of workers reported experiencing a decline in mental
            well-being, while 50% noted a deterioration in physical well-being.
          </span>{' '}
          Additionally, insurance company AXA highlighted that{' '}
          <span className="text-primary">
            87% of professionals in the Philippines have reported work-related
            mental health issues,
          </span>{' '}
          a figure that significantly exceeds the global average of 76%.
        </p>
        <p className="mb-6">
          In these challenging times, building employee trust is crucial for
          maintaining morale and productivity. Here are some strategies to
          increase employee trust and boost worker satisfaction:
        </p>
        <p className="font-bold">1. Active Communication and Listening</p>
        <p className="mb-6">
          Transparent and frequent communication is vital, especially during
          uncertain times. Ensure that employees are informed about company
          updates, changes, and future plans. Encourage an open-door policy
          where employees feel comfortable sharing their concerns and
          suggestions. Listening actively and responding thoughtfully to their
          input can foster a sense of inclusion and trust.
        </p>
        <p className="font-bold">2. Provide Comprehensive Health Benefits</p>
        <p className="mb-6">
          Offering comprehensive health benefits, including health insurance and
          HMO plans and mental health support, is essential. Employees need
          assurance that their health and well-being are a priority. They
          encourage preventive care, reducing the need for costly treatments and
          absenteeism. Additionally, providing health benefits are one of the
          keys to attracting and retaining top talent, as they demonstrate a
          company’s commitment to employee health. Customizable plans cater to
          diverse needs, further enhancing employee satisfaction and loyalty.
        </p>
        <p className="font-bold">
          3. Prioritize Well-being to Empower Employees
        </p>
        <p className="mb-6">
          Empowering employees goes beyond just providing benefits; it involves
          creating a supportive work environment. Promote work-life balance by
          encouraging reasonable working hours and offering flexible work
          arrangements. Recognize and reward hard work and achievements, and
          provide opportunities for professional development. By prioritizing
          employee well-being, companies can help employees feel valued and
          supported, leading to increased satisfaction and loyalty.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: "LET'S TALK",
  },
  {
    id: '10',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk '],
    img: '/images/articles/article-10.png',
    img2: '/images/articles/article_img2-10.png',
    title: 'Insurance Market Landscape in the PH',
    subtitle:
      'The COVID-19 pandemic has significantly altered financial behaviors among Filipinos, with six out of ten individuals reporting changes. According to the BSP Financial Inclusion Survey in 2021, 58% of adults indicated a shift in their financial habits compared to pre-pandemic times.',
    description:
      'The COVID-19 pandemic has significantly altered financial behaviors among Filipinos, with six out of ten individuals reporting changes. According to the BSP Financial Inclusion Survey in 2021, 58% of adults indicated a shift in their financial habits compared to pre-pandemic times. Notably, 37% of adults started saving more for emergencies, 17% increased their usage of online banking and digital payments, 15% resorted to borrowing more, and a modest four percent acquired insurance. This data highlights the growing awareness of financial security and the need for protection during uncertain times.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          Notably, 37% of adults started saving more for emergencies, 17%
          increased their usage of online banking and digital payments, 15%
          resorted to borrowing more, and a modest four percent acquired
          insurance. This data highlights the growing awareness of financial
          security and the need for protection during uncertain times.
        </p>
        <p className="mb-6">
          Despite these shifts,{' '}
          <span className="text-primary">
            insurance penetration in the Philippines remains critically low at
            1.75%,
          </span>{' '}
          as reported by Insurance Commissioner Reynaldo Regalado. The primary
          barriers to higher insurance adoption include a lack of financial
          education and literacy, limited accessibility to insurance products,
          and widespread poverty. Additionally, technological limitations and a
          focus on other sectors to boost GDP contribute to the low uptake of
          insurance services. As Jonathan Matthew Bondy from Manulife Business
          Processing Service notes, the challenge of financial inclusion in the
          Philippines is not just about access but also about bridging the gap
          between those who are and aren&#39;s able to participate in the formal
          financial sector.
        </p>
        <p className="mb-6">
          In response to these challenges, many insurance companies are
          investing in digital transformation. They are streamlining processes
          for applications, payments, and claims, with some even exploring
          advanced technologies like AI and blockchain to enhance policy
          distribution. The pandemic has underscored the significant gap in
          insurance coverage among Filipinos, emphasizing the urgent need for
          more accessible and inclusive financial products.
        </p>
        <p className="mb-6">
          To bridge these gaps and improve insurance penetration, it is crucial
          for the industry to focus on increasing financial literacy, expanding
          digital access, and developing products that cater to the specific
          needs of the Filipino population. By doing so, the insurance sector
          can play a vital role in providing financial security and resilience
          in the face of future uncertainties.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: "LET'S TALK",
  },
  {
    id: '11',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk '],
    img: '/images/articles/article-11.png',
    img2: '/images/articles/article_img2-11.png',
    title: 'Surety Bonds: Why your business needs it',
    description:
      'A surety bond is an important financial instrument that provides a guarantee in the event of underperformance or non-performance by a business. Essentially, it serves as a safeguard for the Obligee (usually a government agency or a project owner) by ensuring that the Principal (the business or professional) fulfills their contractual obligations. If the Principal fails to perform, the Surety (an insurance company or surety bond provider) steps in to cover the losses. However, the Principal is ultimately responsible for reimbursing the Surety, including any legal fees incurred.',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          A surety bond is an important financial instrument that provides a
          guarantee in the event of underperformance or non-performance by a
          business. Essentially, it serves as a safeguard for the Obligee
          (usually a government agency or a projectowner) by ensuring that the
          Principal (the business or professional) fulfills their contractual
          obligations. If the Principal fails to perform, the Surety (an
          insurance company or surety bond provider) steps in to cover the
          losses. However, the Principal is ultimately responsible for
          reimbursing the Surety, including any legal fees incurred.
        </p>
        <p className="mb-6 font-bold">Key Principals in a Surety Bond:</p>
        <p className="mb-6">
          1. The Principal: This is the business or professional required to
          purchase the bond. The Principal must prove their ability to comply
          with specific laws and regulations, providing a financial guarantee
          through the bond.
        </p>
        <p className="mb-6">
          2. The Obligee: The entity requiring the bond, often a government
          agency, uses surety bonds to regulate industries and protect consumers
          from financial loss.
        </p>
        <p className="mb-6">
          3. The Surety: An insurance company or surety bond provider that
          guarantees the Principal will meet the obligations stated in the bond.
        </p>
        <p className="mb-6">
          Upon purchasing a surety bond, the Principal signs an indemnity
          agreement. This contract ensures proper compensation is available for
          any losses or damages incurred by the Obligee, essentially holding the
          Principal accountable for fulfilling their contractual duties.
        </p>
        <p className="mb-6">Types of Surety Bonds:</p>
        <p className="font-bold">1. Contract Bond:</p>
        <p>
          - Bid Bonds Ensure that a contractor who wins a bid will honor the
          terms of the contract and provide the necessary performance and
          payment bonds.
        </p>
        <p>
          - Performance Bonds: Guarantee that the contractor will complete the
          work according to the contract terms.
        </p>
        <p className="mb-6">
          - Payment Bonds: Assure that the contractor will pay subcontractors,
          laborers, and suppliers, preventing liens from being placed on the
          project.
        </p>
        <p className="font-bold">2. Commercial Bonds:</p>
        <p>
          - License and Permit Bonds: Required by government entities to ensure
          businesses comply with local regulations and licensing requirements.
        </p>
        <p className="mb-6">
          - Judicial Bond: Include various court bonds, such as appeal bonds,
          attachment bonds, and guardianship bonds, which ensure compliance with
          court orders.
        </p>
        <p className="font-bold">3. Fidelity Bonds:</p>
        <p>
          - Employee Dishonesty Bonds: Protect businesses from losses due to
          fraudulent acts by employees.
        </p>
        <p className="mb-6">
          - Business Service Bonds: Cover losses caused by dishonest acts
          committed by employees while working in clients&#39; homes or
          businesses.
        </p>
        <p className="mb-8">
          Surety bonds are crucial for businesses across various industries,
          offering significant benefits such as{' '}
          <span className="font-bold">
            risk management, consumer protection, compliance, and credibility.
          </span>{' '}
          They help manage the risks of non-performance, protect consumers and
          obligees from financial losses, and enhance a business&#39;s
          reputation by showing a commitment to ethical practices.
        </p>
        <p className="mb-6 text-center font-bold italic">
          To secure the right surety bond for your business and open doors to
          new opportunities, contact{' '}
          <span className="text-primary">AC Prime Brokers, Inc.</span> for
          expert guidance and support.
        </p>
      </div>
    ),
    date: 'July 26, 2024',
    cta: "LET'S TALK",
  },
  {
    id: '12',
    type: 'Articles',
    tags: ['Financial Wellness', 'Insurance and Risk '],
    img: '/images/articles/article-12.png',
    img2: '/images/articles/article_img2-12.png',
    title: 'Growing need for a One-Stop-Shop for ALL Insurance Needs',
    description:
      'The Philippines is on the path to becoming one of the fastest-growing economies over the next decade, with significant economic development anticipated. According to S&P Global, the country&rquo;s GDP is projected to rise sharply from USD 440 billion in 2023 to USD 800 billion by 2030. This growth is supported by an increasing population, positioning the Philippines as the 13th most populous nation globally. The Philippine Statistics Authority (PSA) forecasts that the country&rsquo;s population will reach approximately 138.67 million by 2055 under a moderate-growth scenario',
    content: (
      <div className="text-sm text-navy-100">
        <p className="mb-6">
          The Philippines is on the path to becoming one of the fastest-growing
          economies over the next decade, with significant economic development
          anticipated. According to S&P Global, the country&#39;s GDP is
          projected to rise sharply from USD 440 billion in 2023 to USD 800
          billion by 2030. This growth is supported by an increasing population,
          positioning the Philippines as the 13th most populous nation globally.
          The Philippine Statistics Authority (PSA) forecasts that the
          country&#39;s population will reach approximately 138.67 million by
          2055 under a moderate-growth scenario.
        </p>
        <p className="mb-6 font-bold">Trends and Challenges</p>
        <p className="mb-6">
          In 2023, the Department of Finance (DOF) reported that the life
          insurance industry provided coverage to around 84 million individuals,
          a 16% increase from the pre-pandemic figure of 72 million. Despite
          this progress, insurance penetration in the Philippines remains low,
          at less than 2%. This low penetration rate is primarily due to a lack
          of financial literacy, limited accessibility, and the affordability of
          insurance plans.
        </p>
        <p className="mb-6">
          However, there is a growing awareness of financial wellness and
          health, especially among the younger generations. Post-pandemic, 87%
          of Filipino respondents reported becoming more health-conscious, with
          younger demographics particularly focused on improving mental health.
        </p>
        <p className="mb-6">
          To overcome these challenges, insurance companies must innovate beyond
          conventional methods. There is a pressing need for the industry to
          develop products that are simpler, more affordable, customer-centric,
          and digitally integrated. a One-Stop-Shop Insurance Shop could be a
          crucial step in making insurance more accessible to the broader
          population, ensuring comprehensive coverage and support for the
          diverse needs of Filipinos.
        </p>
        <div className="mx-auto mb-12 flex max-w-lg flex-col justify-center gap-4 sm:flex-row sm:gap-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-primary lg:text-3xl">
              19th
            </h2>
            <p>Largest Economy in the World by 2050</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-primary lg:text-3xl">
              5.6%
            </h2>
            <p>PH Economic Growth in 2023</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-primary lg:text-3xl">
              13th
            </h2>
            <p>Most populated country in the world in 2024</p>
          </div>
        </div>
        <div className="z-30 mb-12 lg:px-4">
          <Link href="/">
            <Image
              src="/images/logo/ac_prime.png"
              width={150}
              height={40}
              alt="Logo"
              className="mx-auto min-w-[150px]"
            />
          </Link>
        </div>
        <p className="mb-6 font-semibold underline">
          Benefits of a One-Stop Insurance Shop
        </p>
        <div className="mb-6 flex flex-col items-center gap-6 md:flex-row">
          <div>
            <div className="mb-6">
              <h2 className="mb-2 font-semibold text-primary">CONVENIENCE</h2>
              <p>
                Imagine a world where securing your financial future is as
                effortless as a few clicks. With our one-stop insurance shop,
                that dream becomes a reality. Say goodbye to the hassle of
                dealing with multiple insurance providers. We bring a
                comprehensive suite of policies under one roof, tailored to fit
                your unique needs. From life and health coverage to property and
                liability protection, we&#39;ve got you covered. Enjoy the
                freedom to explore, compare, and choose the perfect plans
                without breaking a sweat. Your time is valuable, and we&#39;re
                here to make the most of it.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-primary">
                COST EFFECTIVE
              </h2>
              <p>
                Get the most out of your hard-earned money with our
                cost-effective insurance solutions. By partnering with multiple
                top-tier insurers, we can secure exclusive discounts and
                competitive rates. No more overpaying for coverage. Our expert
                team meticulously compares policies to find the perfect balance
                of protection and affordability for you. Experience the
                satisfaction of knowing you&#39;re getting the best value for
                your insurance needs without compromising on quality.
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-primary">
              EXPERT GUIDANCE AND SUPPORT
            </h2>
            <p>
              Navigating the complex world of insurance can be overwhelming.
              That&#39;s why we&#39;re here to guide you every step of the way.
              Our team of seasoned insurance experts is committed to
              understanding your unique needs and providing tailored solutions.
              With years of experience in risk management, we offer unparalleled
              support and expertise. Whether you have questions about your
              policy, need assistance with a claim, or want to explore new
              coverage options, our dedicated team is always ready to assist
              you. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    ),
    date: 'July 26, 2024',
    cta: "LET'S TALK",
  },
  {
    id: '13',
    type: 'Announcements',
    tags: ['Insurance Commission'],
    img: '/images/articles/insurance_commission.png',
    title: 'IMC 2024-01',
    pdf: '/docs/insurance-commission/IMC-2024-01.pdf',
    description:
      'Increase in the Benefits for Compulsory Motor Vehicle Insurance Coverage',

    date: 'Feb 7, 2024',
  },
  {
    id: '14',
    type: 'Announcements',
    tags: ['Insurance Commission'],
    img: '/images/articles/insurance_commission.png',
    title: 'IMC 2023-02',
    pdf: '/docs/insurance-commission/IMC-2023-02.pdf',
    description:
      'Amendment to Sections 5 and 6 of Insurance Memorandum Circular No. 2023-01 Entitled “Implementing Rules and Regulations of Republic Act No. 11765 otherwise known as “The Financial Products and Services Consumer Protection Act”',

    date: 'April 3, 2023',
  },
  {
    id: '15',
    type: 'Announcements',
    tags: ['Insurance Commission'],
    img: '/images/articles/insurance_commission.png',
    title: 'IMC 2023-01',
    pdf: '/docs/insurance-commission/IMC-2023-01.pdf',
    description:
      'Implementing Rules and Regulations of Republic Act No. 11765, Otherwise known as the “Financial Products and Services Consumer Protection Act”',

    date: 'March 8, 2023',
  },
  {
    id: '16',
    type: 'Announcements',
    tags: ['Insurance Commission'],
    img: '/images/articles/insurance_commission.png',
    title: 'IMC 2022-03',
    pdf: '/docs/insurance-commission/IMC-2022-03.pdf',
    description:
      'Amendments to Insurance Memorandum Circular (IMC) No. 2016-01 on the Rules of Procedure for Small Claims Cases in the Insurance Commission, Further Increasing the Jurisdictional Amount in Small Claims Actions to One Million Pesos (Php 1,000,000.00)',

    date: 'August 15, 2022',
  },
  {
    id: '17',
    type: 'Announcements',
    tags: ['Insurance Commission'],
    img: '/images/articles/insurance_commission.png',
    title: 'FSCC IDENTIFIES GLOBAL RISKS RELEVANT TO PH FINANCIAL SYSTEM',
    pdf: '/docs/insurance-commission/FSCC.pdf',
    description:
      'Amendments to Insurance Memorandum Circular (IMC) No. 2016-01 on the Rules of Procedure for Small Claims Cases in the Insurance Commission, Further Increasing the Jurisdictional Amount in Small Claims Actions to One Million Pesos (Php 1,000,000.00)',

    date: 'August 15, 2022',
  },
];

export { articles };
