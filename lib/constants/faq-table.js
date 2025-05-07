const lifeTableData = [
  {
    termLife:
      'Protects you for a specific period (e.g., 10, 20, or 30 years) until a certain age (usually 75)',
    wholeLife: 'Offers lifelong coverage (usually up to age 100).',
    label: 'Coverage Period',
  },
  {
    termLife:
      'You may be able to renew the policy at the end of the term, but premiums will increase significantly.',
    wholeLife:
      'Fixed or level premiums throughout the policy, making it easier to budget.',
    label: 'Premiums',
  },
  {
    termLife:
      'Term life insurance offers substantial coverage for a large sum assured while remaining budget-friendly.',
    wholeLife:
      'Generally more expensive than term life due to its lifelong coverage.',
    label: 'Cost',
  },
  {
    termLife:
      'Provides pure insurance protection with a designated death benefit paid to your beneficiary if you pass away during the term.',
    wholeLife:
      'Offers additional benefits like riders for disability income or waiver of premium payments.',
    label: 'Focus',
  },
  {
    termLife: 'No cash accumulates within the policy.',
    wholeLife:
      'Builds cash value over time, which you can potentially access through loans or withdrawals (reduces the death benefit).',
    label: 'No Cash Value',
  },
];
const healthTableData = [
  {
    hmo: 'Pays you a lump sum upon diagnosis of a critical illness, or provides benefits like hospitalization allowance',
    healthInsurance:
      'Provides direct coverage for medical expenses incurred within their network of hospitals, clinics, and doctors',
    label: 'Coverage Period',
  },
  {
    hmo: 'Offers greater freedom of choice for doctors and hospitals.',
    healthInsurance:
      'Limits your healthcare options to accredited providers within the HMO network.',
    label: 'Flexibility',
  },
  {
    hmo: 'Premiums may vary depending on coverage options and age',
    healthInsurance:
      'Typically offers prepaid plans with annual renewals and more predictable costs.',
    label: 'Cost',
  },
  {
    hmo: 'Policies typically cover you until a designated age (e.g., 75 or 100) and require renewal.',
    healthInsurance:
      'Requires renewal annually, with payment options like monthly, quarterly, or yearly.',
    label: 'Renewal',
  },
  {
    hmo: 'Often include additional benefits like cashback, hospitalization allowance, or other health riders.',
    healthInsurance:
      'Usually covers hospitalization (inpatient/outpatient), emergency services, laboratory services, and access to a wide network of in-network providers.',
    label: 'Benefits',
  },
];
export { lifeTableData, healthTableData };
