const claims = [
  {
    img: '/images/claims/life.png',
    title: 'Life and Health Insurance',
    type: 'life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Life and Health
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <p className="mb-1 text-sm font-medium">Death Claims</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Completed Claims Form</li>
          <li className="mb-1">
            Death Certificate of the Deceased (For death claims)
          </li>
          <li className="mb-1">
            Police Report (If the cause of death is due to an accident)
          </li>
          <li>Other supporting documents</li>
        </ol>
        <p className="mb-1 text-sm font-medium">Critical Illness</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Completed claims form</li>
          <li className="mb-1">Attending Physician’s Statement</li>
          <li className="mb-1">
            Discharge summary, clinical, or medical abstract from the latest
            hospitalization
          </li>
          <li className="mb-1">Admission record with past medical history</li>
          <li className="mb-1">
            All available lab and test results (as per the Attending Physician’s
            Statement)
          </li>
          <li className="mb-1">
            Outpatient consultation records for signs/symptoms
          </li>
          <li className="mb-1">
            Histopathology or Biopsy results, if applicable
          </li>
          <li className="mb-1">
            Annual Physical Examination reports for the past 3 years (if
            available)
          </li>
        </ol>
        <p className="mb-1 text-sm font-medium">Hospital Income Benefit</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Completed claims form</li>
          <li className="mb-1">
            Submit the Attending Physician’s Statement (APS) and Hospital Income
            Benefit Claim Form
          </li>
          <li className="mb-1">
            Provide a detailed Hospital Statement of Account (including room &
            board charges).
          </li>
          <li>Submit the Medical Certificate.</li>
        </ol>
        <p className="mb-1 text-sm font-medium">Disability Benefit</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Completed claims form</li>
          <li className="mb-1">Attending Physician’s Statement</li>
          <li className="mb-1">
            Discharge summary, clinical, or medical abstract from the latest
            hospitalization
          </li>
          <li className="mb-1">Admission record with past medical history</li>
          <li className="mb-1">
            All available lab and test results (as specified in the APS)
          </li>
          <li className="mb-1">Complete Neurological exam (if applicable)</li>
          <li>SSS/GSIS approval for total disability (if available)</li>
        </ol>
        <p className="mb-1 text-sm font-medium">Terminal Illness Benefit</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Completed claims form</li>
          <li className="mb-1">Attending Physician’s Statement</li>
          <li className="mb-1">
            Discharge summary, clinical, or medical abstract from the latest
            hospitalization
          </li>
          <li className="mb-1">Admission record with past medical history</li>
          <li>All available lab and test results (as specified in the APS)</li>
        </ol>
        <p className="mb-1 text-sm font-medium">For Beneficiaries</p>
        <ol className="ml-4 text-sm">
          <li className="mb-1">Valid Government ID</li>
          <li className="mb-1">
            Marriage Contract (If the Beneficiary is the spouse)
          </li>
          <li>Birth Certificate (If the Beneficiary is below 18 years old)</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/building.png',
    title: 'Fire Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Fire
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-6 text-sm">
          <li className="mb-1">Arson Investigation Report (Fire Marshal) </li>
          <li className="mb-1">
            A Civil Engineer’s or Architect’s detailed estimate (obtained at the
            expense of the insured) to place the building in the same state of
            repair as before the loss. (No contemplated improvements may be
            included in the estimate and a proper allowance for age and
            depreciation, etc. must be allowed)
          </li>
          <li className="mb-1">Certified copy of Building permit</li>
          <li className="mb-1">Certified copy of Declaration of Property</li>
          <li className="mb-1">
            Copy of plan of the building or sketch prepared by
            engineer/architect
          </li>
          <li className="mb-1">
            Lease contract or agreement if the insured is not lot owner
          </li>
          <li className="mb-1">Pictures</li>
          <li className="mb-1">
            Detailed receipt of all furnitures and appliances
          </li>
          <li>Liens and encumbrances, if any</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/shield_lock.png',
    title: 'Surety Bonds',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Surety
          <span className="text-primary"> Bonds</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-4 text-sm">
          <li className="mb-1">
            Notice of claim with details of the amount and cause of default or
            reason of claim with supporting documents
          </li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/car.png',
    title: 'Motor Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Motor
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <h2 className="mb-1 font-medium">Own Car Damage Claims</h2>
        <ol className="mb-4 ml-6 text-sm">
          <li className="mb-1">
            Police Report / Notarized Driver&#39;s Affidavit (affidavit may be
            required only if the damage incurred is minimal; otherwise, a Police
            Report is required)
          </li>
          <li className="mb-1">Driver&#39;s License with official receipt</li>
          <li className="mb-1">
            Certificate of Registration with latest official receipt
          </li>
          <li className="mb-1">Pictures of Damaged portions</li>
          <li className="mb-1">Original Stencils of Chassis and Engine</li>
          <li className="mb-1">Job Repair Estimate</li>
          <li className="mb-1">
            Vehicle Sales Invoice and Delivery Receipt if the OR/CR is not yet
            available
          </li>
          <li>Explanation Letter for Late Reporting (for Late Reporting)</li>
        </ol>

        <h2 className="mb-1 font-medium">Third Party Property Damage Claim</h2>
        <ol className="mb-4 ml-6 text-sm">
          <li className="mb-1">
            Original Certificate of No Claim for Vehicles
          </li>
          <li className="mb-1">
            Clear copy of Driver&#39;s License and Official Receipt at the time
            of the accident
          </li>
          <li className="mb-1">
            Repair Estimate from a dealer or accredited motor shop
          </li>
          <li className="mb-1">
            Clear copy of the Vehicle&#39;s Certificate of Registration and
            Official Receipt
          </li>
          <li>Clear copy of Proof of Ownership for non-vehicle property</li>
        </ol>

        <h2 className="mb-1 font-medium">
          Third Party Bodily Injury / Death Claim
        </h2>
        <ol className="mb-4 ml-6 text-sm">
          <li className="mb-1">
            Original or Certified True Copy of the Medical Certificate
          </li>
          <li className="mb-1">Original Medical Receipts</li>
          <li className="mb-1">
            Clear copy of the Hospital Statement of Account (SOA)
          </li>
          <li className="mb-1">
            Certified True Copy of the Death Certificate (For Death Claim)
          </li>
          <li className="mb-1">
            Original Burial and Funeral Receipts (For Death Claim)
          </li>
        </ol>

        <h2 className="mb-1 font-medium">Passenger Liability Claim</h2>
        <ol className="mb-4 ml-6 text-sm">
          <li className="mb-1">
            Original or Certified True Copy of the Medical Certificate
          </li>
          <li className="mb-1">Original Medical Receipts</li>
          <li className="mb-1">
            Clear copy of the Hospital Statement of Account (SOA)
          </li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/hard_hat.png',
    title: 'Engineering Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Engineering
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="mb-4 ml-6 text-sm">
          <li className="mb-1">
            Duly accomplished Sworn Statement of Claim (to be supplied by
            adjuster)
          </li>
          <li className="mb-1">
            Duly accomplished Non-Waiver Agreement (to be supplied by adjuster)
          </li>
          <li className="mb-1">Incident Report</li>
          <li className="mb-1">
            Weather and rainfall report from the nearest weather station
            officially issued by the PAGASA (if applicable/required)
          </li>
          <li className="mb-1">
            Copy of Contract Agreement with Bid Estimates
          </li>
          <li className="mb-1">Copy of Notice of Award</li>
          <li className="mb-1">Copy of Notice of Commence</li>
          <li className="mb-1">
            Copies of Business Registration, permit, etc.
          </li>
          <li className="mb-1">
            Survey of damages based on standard engineering practices (Plans,
            survey data, PERT CPM, etc.)
          </li>
          <li className="mb-1">Projected Cash Flow of the project</li>
          <li className="mb-1">
            Detailed computation of loss and damages in order to bring back the
            damaged portions to its original condition before the loss
          </li>
          <li className="mb-1">
            Certified copies of recent and previous monthly
            accomplishment/progress report including its back up computation
          </li>
          <li className="mb-1">
            Certified copies of recent and previous billing reports
          </li>
          <li className="mb-1">
            Documents in support to the actual cost of repair/replacement of the
            affected properties such as invoices, receipts, etc.
          </li>
          <li>
            Clear and properly annotated panoramic pictures immediately taken
            after the loss
          </li>
        </ol>
        <h2 className="mb-1 text-sm font-medium">Damaged Machinery</h2>
        <ol className="ml-6 text-sm">
          <li className="mb-1">Incident Report</li>
          <li className="mb-1">Repair Estimates and/or Quotation</li>
          <li className="mb-1">Pictures</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/house.png',
    title: 'Property Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Property
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ul className="ml-6 text-sm">
          <li className="mb-3">
            <span className="font-semibold">Building Claims:</span>
            <ol className="ml-4 mt-2">
              <li className="mb-1">
                Civil Engineer’s or Architect’s detailed estimate to restore the
                building to its pre-loss condition
              </li>
              <li className="mb-1">Certified copy of the Building Permit</li>
              <li className="mb-1">
                Certified copy of the Declaration of Property
              </li>
              <li className="mb-1">
                Copy of the building plan or sketch by an engineer/architect
              </li>
              <li>
                Lease contract or agreement (if the insured is not the lot
                owner)
              </li>
            </ol>
          </li>

          <li className="mb-4">
            <span className="font-semibold">
              Furniture and Equipment Claims:
            </span>
            <ol className="ml-4 mt-2">
              <li className="mb-1">
                Detailed list of damaged or destroyed articles, including cost
                price and date acquired
              </li>
              <li>Invoices or receipts, if available</li>
            </ol>
          </li>

          <li className="mb-4">
            <span className="font-semibold">
              Goods and Merchandise (Stock in Trade) Claims:
            </span>
            <ol className="ml-4 mt-2">
              <li className="mb-1">
                Books of accounts, Financial Statements, Purchase and Sales
                Invoices, and other business records
              </li>
              <li className="mb-1">
                Certified copies of Income Tax Returns for the last two fiscal
                years
              </li>
              <li className="mb-1">
                Latest inventory of merchandise filed with the Bureau of
                Internal Revenue or relevant government entity before the loss
              </li>
              <li>
                Detailed inventory of damaged or destroyed articles, showing
                cost price, extent of loss, and salvage value (if any)
              </li>
            </ol>
          </li>

          <li className="mb-4">
            <span className="font-semibold">
              Affidavit or Statement (For Claims on Buildings, Furniture,
              Equipment, or Goods):
            </span>
            <ol className="ml-4 mt-2">
              <li className="mb-1">
                Nature of ownership of the insured property
              </li>
              <li className="mb-1">Property location</li>
              <li className="mb-1">Liens and encumbrances, if any</li>
              <li className="mb-1">
                Year of construction and original construction cost (for
                building claims)
              </li>
              <li className="mb-1">
                Location of other stores or warehouses and insurance amount on
                the stock contained therein (for stock claims)
              </li>
              <li>Any other information related to the loss</li>
            </ol>
          </li>

          <li className="-ml-4 mb-4 list-none" style={{ marginLeft: '-1rem' }}>
            <span className="font-semibold">Additional Notes:</span>
            <ol className="mt-2" style={{ marginLeft: '2rem' }}>
              <li>
                A careful description of each article destroyed or damaged is
                required, with acquisition details provided
              </li>
              <li>
                The total value of the property covered by the policy must be
                stated
              </li>
              <li>
                The company may require additional proofs as necessary to
                support the claim
              </li>
            </ol>
          </li>

          <li className="mb-4 list-none" style={{ marginLeft: '-1rem' }}>
            <span className="font-semibold">Claim Guidelines:</span>
            <ol className="ml-8 mt-2 text-sm">
              <li className="mb-1">
                <span className="font-medium">Claim Form Submission:</span> The
                forwarding of the claim form is for completion and does not
                imply an admission of liability by the company
              </li>
              <li className="mb-1">
                <span className="font-medium">Protection of Salvage:</span> Upon
                loss occurrence, the insured should take all reasonable steps to
                protect the salvage and prevent deterioration. Debris and
                traces, particularly in the event of fire, should not be removed
                until inspected by the company&#39;s representatives
              </li>
              <li className="mb-1">
                Claims must be lodged in their final form within the limited
                period allowed by the policy. If an extension is needed, written
                permission from the company is required
              </li>
              <li className="mb-1">
                <span className="font-medium">Cause of Loss:</span> The cause of
                loss should be explicitly stated. If the cause is unknown, any
                suspicion of arson should be mentioned
              </li>
              <li>
                <span className="font-medium">Detailed Information:</span> All
                required information and documentation should be provided in
                detail, and the claim form must be fully completed
              </li>
            </ol>
          </li>
        </ul>
      </div>
    ),
  },
  {
    img: '/images/claims/palm_check.png',
    title: 'Liability Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Liability
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-6 text-sm">
          <li className="mb-1">
            Demand letter with computation of claim from the third party
          </li>
          <li className="mb-1">Contract, if any, with the claimant</li>
          <li className="mb-1">
            Complaint, Answer, and all subsequent pleadings in connection with
            the case
          </li>
          <li className="mb-1">
            Proposed retainer agreement and hourly rates of the external legal
            counsel
          </li>
          <li className="mb-1">
            CVs of the external legal counsel engaged by the insured
          </li>
          <li className="mb-1">
            Legal opinion of the external legal counsel on the claim filed,
            including the following:
            <ol className="ml-4 mt-1 list-[lower-alpha]">
              <li>Estimate of the possible legal expense</li>
              <li>Potential legal liability of the insured</li>
              <li>Decision of the court</li>
            </ol>
          </li>
          <li className="mb-4">
            Any other supporting documents to substantiate the claim.
          </li>
        </ol>
        <h2 className="mb-2 text-sm font-medium">
          Directors and Officers Liability
        </h2>
        <ol className="ml-6 text-sm">
          <li className="mb-1">
            Demand letter with computation of claim from the third party
          </li>
          <li className="mb-1">
            Complaint, Answer, and all subsequent pleadings in connection with
            the case
          </li>
          <li className="mb-1">
            Proposed retainer agreement and hourly rates of the external legal
            counsel
          </li>
          <li className="mb-1">
            CVs of the external legal counsel engaged by the insured
          </li>
          <li className="mb-1">
            Legal opinion of the external legal counsel on the claim filed,
            including the following:
            <ol className="ml-4 list-[lower-alpha]">
              <li>Estimate of the possible legal expense</li>
              <li>Potential legal liability of the insured</li>
              <li>Decision of the court</li>
            </ol>
          </li>
          <li>Any other supporting documents to substantiate the claim</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/pet.png',
    title: 'Pet Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Pet
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <p className="mb-1 text-sm font-semibold">
          General Requirements for Pet Insurance Claims
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Pet Baby Book / Veterinarian&#39;s Records</li>
          <li className="mb-1">
            Certification from the attending Veterinarian
          </li>
          <li className="mb-1">
            Prescription from the Veterinarian for Medical Treatment
          </li>
          <li className="mb-1">
            Police Report or Affidavit describing the accident
          </li>
        </ol>
        <p className="mb-1 text-sm font-semibold">Third Party Liability</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Written demand of the third party </li>
          <li className="mb-1">Valid ID of third party</li>
          <li className="mb-1">Quit claim of Third Party</li>
        </ol>
        <p className="mb-1 text-sm font-semibold">If Bodily Injury</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Medical Certificate/Clinical/Emergency room report of third
            party&#39;s bodily injury/ies
          </li>
          <li className="mb-1">
            Original official receipt/s of medical expenses incurred by third
            party
          </li>
          <li className="mb-1">
            Statement of account from the hospital (if confined)
          </li>
        </ol>
        <p className="mb-1 text-sm font-semibold">If Property Damage</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Itemized list of damaged property/ies Photographs of damaged
            items/property
          </li>
          <li>Estimate of repair/replacement of damaged item</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/ship.png',
    title: 'Marine Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Marine
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ul className="mb-4 list-disc text-sm">
          <li className="mb-4 list-none font-semibold text-primary">
            Marine Cargo Claim
            <p className="mb-1 mt-2 text-navy-100">
              General Requirements for Marine Cargo Claim
            </p>
            <ol className="mb-4 ml-4 text-sm font-normal text-navy-100">
              <li className="mb-1">Endorsements / Attachments (if any)</li>
              <li className="mb-1">Photograph of Cargo</li>
            </ol>
            <p className="mb-1 mt-2 text-navy-100">Specific Requirements</p>
            <ol className="mb-4 ml-4 text-sm font-normal text-navy-100">
              <li className="mb-1">
                Bill of Lading/Coasting Manifests/Shipping Memo
              </li>
              <li className="mb-1">Packing List</li>
              <li className="mb-1">Proforma Invoice/Commercial Invoice</li>
              <li className="mb-1">
                List of Bad Order Cargoes on Board Vessel/Tally Sheet/Turn Over
                and Bad Order Survey Certificates or Reports/Out turn of
                Discharge from the vessel or Discharge Certificate/ Certificate
                of Non- Delivery/ Receiving Report
              </li>
              <li className="mb-1">Broker’s/Hauler’s Delivery Receipts</li>
              <li className="mb-1">Master’s Marine Protest (if possible)</li>
              <li className="mb-1">
                Formal Claim to Forwarder/Broker/Shipping Company
              </li>
              <li className="mb-1">
                Reply of Forwarder/Broker/Shipping Company (if applicable)
              </li>
              <li className="mb-1">Other pertinent documents</li>
            </ol>
          </li>
          <li className="mb-4 list-none font-semibold text-primary">
            In-Land Marine Claim
            <ol className="ml-4 mt-2 text-sm font-normal text-navy-100">
              <li className="mb-1">Endorsements / Attachments (if any)</li>
              <li className="mb-1">
                Police Report / Accident Investigation Report / Incident Report
              </li>
              <li className="mb-1">
                Assured’s Affidavit of Loss declaring the following:
                <ul
                  className="ml-4 mt-2"
                  style={{ listStyleType: 'lower-alpha' }}
                >
                  <li className="mb-1">Nature of Business Assured</li>
                  <li className="mb-1">
                    Supplier and Consignee of the cargo involved
                  </li>
                  <li className="mb-1">Circumstances of the loss</li>
                  <li className="mb-1">Total value of the cargo/shipment</li>
                  <li className="mb-1">
                    Estimated damage/loss and salvage values
                  </li>
                  <li>Any other information relative to the loss</li>
                </ul>
              </li>
              <li className="mb-1">Non-Waiver Agreement – notarized</li>
              <li>Photographs of the involved vehicle and cargo</li>
            </ol>
          </li>
        </ul>
        <p className="mb-2 text-sm font-semibold">Additional Requirements</p>
        <ol className="ml-4 text-sm">
          <li className="mb-1">Driver’s Affidavit</li>
          <li className="mb-1">Driver’s License and Official Receipt</li>
          <li className="mb-1">
            Certificate of Registration and Official Receipt of the Vehicle
          </li>
          <li className="mb-1">
            Stencils of Motor and Chassis Number / Claim Memo / Breakage or Loss
            or Damage Report / Certificate of Short or Non-Delivery / Receiving
            Report
          </li>
          <li className="mb-1">
            Delivery Receipts / Invoices / Bill of Lading / Shipping Memo / Way
            Bill
          </li>
          <li>Other Pertinent Documents</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/airplane.png',
    title: 'Aviation Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Aviation
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-6 text-sm">
          <li className="mb-1">Name and contact details of the insured</li>
          <li className="mb-1">Date of loss</li>
          <li className="mb-1">Location of incident</li>
          <li className="mb-1">Aircraft registration</li>
          <li className="mb-1">Brief description of the incident and damage</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/agreed_cycle.png',
    title: 'Trade Credit',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Trade Credit
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-6 text-sm">
          <li className="mb-1">Other supporting documents</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/cybersecurity.png',
    title: 'Cyber Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Cyber
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-6 text-sm">
          <li className="mb-1">Incident Report</li>
          <li className="mb-1">Forensic Investigation Report</li>
          <li className="mb-1">Proof of Loss</li>
          <li className="mb-1">Notification Costs: Record</li>
          <li className="mb-1">Legal Documentation</li>
          <li>Other Supporting Evidence</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/fair_ticket.png',
    title: 'Travel Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Travel
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="ml-6 text-sm">
          <li className="mb-1">Completed Claims Form</li>
          <li className="mb-1">Official Receipt of all payments made</li>
          <li className="mb-1">Letter of Request / Incident Letter</li>
          <li className="mb-1">Copy of Itinerary and Boarding Passes</li>
          <li>Copy of Passport</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/livestock.png',
    title: 'Livestock Insurance',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Livestock
          <span className="text-primary"> Insurance</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <p className="mb-4 text-sm font-medium">For Livestock Claims:</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Claim for Indemnity/Loss Report: The formal claim form, completed
            and signed by the insured
          </li>
          <li className="mb-1">
            Veterinary Disease Report: Completed and signed by the authorized
            veterinarian or LGU Livestock Inspector/Technician
          </li>
          <li className="mb-1">
            Livestock Death Certificate: Official documentation of the
            animal&#39;s death
          </li>
          <li className="mb-1">
            Necropsy/Laboratory Reports: If a necropsy or lab tests were
            conducted, these reports should be included
          </li>
          <li className="mb-1">
            Photographs: Clear photos of the deceased animal(s) showing
            identifying marks (eartags, earnotch, brand, or tattoo)
          </li>
          <li>
            Additional Documents: Any other documents that may be requested
          </li>
        </ol>
        <p className="mb-4 text-sm font-medium">For Poultry Claims:</p>
        <ol className="ml-4 text-sm">
          <li className="mb-1">
            Weekly Loss Report: A report detailing weekly losses
          </li>
          <li className="mb-1">
            Veterinary Report: Completed by the insured&#39;s authorized
            veterinarian
          </li>
          <li className="mb-1">
            Farm Management Chart/Daily Mortality Chart: Records showing daily
            mortality rates or farm management details
          </li>
          <li className="mb-1">
            Photographs of Dead Birds: Visual evidence of the deceased poultry
          </li>
          <li className="mb-1">
            Proof of Proceeds: Relevant documentation showing proceeds from the
            sale or disposal of the birds
          </li>
          <li>
            Additional Documents: Any other documents that may be requested
          </li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/business_continuity.png',
    title: 'Business Continuity',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Business
          <span className="text-primary"> Continuity</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <p className="mb-1 text-sm font-medium text-primary">
          Claim Documents:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Incident report</li>
          <li className="mb-1">Police report</li>
        </ol>
        <p className="mb-1 text-sm font-medium text-primary">
          For Property Insurance:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Pictures of damaged properties, affidavit of loss and value of the
            damaged properties
          </li>
        </ol>
        <p className="mb-1 text-sm font-medium text-primary">
          For Burglary/Robbery and General Liability:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Property damage: Pictures of damaged properties
          </li>
          <li className="mb-1">Proof of loss and/or damage</li>
        </ol>
        <p className="mb-1 text-sm font-medium text-primary">
          For General Liability Bodily Injury:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Medical/doctor&#39;s certificate, receipts for medical expenses
          </li>
          <li className="mb-1"> Doctor&#39;s medicine prescription</li>
        </ol>
        <p className="mb-1 text-sm font-medium text-primary">
          For Group Personal Accident:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Death and medical certificate</li>
        </ol>
        <p className="mb-1 text-sm font-medium text-primary">
          For Hospital Assistance Plan:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Hospital statement of account, charge slip and discharge slip
          </li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/paint.png',
    title: 'Works of Art',
    type: 'non-life',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Works of
          <span className="text-primary"> Art</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">
            Notification: In the event of a loss, the insured should promptly
            notify their broker.
          </li>
          <li className="mb-1">
            Evaluation: Insurance company will then determine how the claim will
            be evaluated.
          </li>
          <li className="mb-1">
            For simpler claims, in-house evaluation and processing will occur.
          </li>
          <li className="mb-1">
            For more complex cases, an independent adjuster will be appointed to
            handle the evaluation. The adjuster will contact the insured to
            schedule an inspection.
          </li>
          <li className="mb-1">
            Settlement: Once the evaluation process is completed, We will notify
            the insured regarding the settlement of the claim.
          </li>
        </ol>
        <p className="mb-1 text-sm font-medium">Claim Documents:</p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Incident report</li>
          <li className="mb-1">Affidavit of Loss or Damage to the artwork</li>
          <li className="mb-1">Police report</li>
          <li className="mb-1">Pictures of the damaged artwork</li>
          <li className="mb-1">Repair estimate</li>
        </ol>
      </div>
    ),
  },
  {
    img: '/images/claims/group.png',
    title: 'Group Life Insurance',
    type: 'business-solutions',
    content: (
      <div>
        <p className="mb-2 font-semibold lg:text-lg">
          Group
          <span className="text-primary"> Life</span>
        </p>
        <p className="mb-4 text-sm">
          Here are the initial and basic requirements for filing a claim.
        </p>
        <p className="mb-1 text-sm font-medium text-primary">
          For Death Claim:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Certificate of Claimant/Beneficiaries Form</li>
          <li className="mb-1">Certificate of Attending Physician</li>
          <li className="mb-1">
            Certificate of Employment (stating last date of active work)
          </li>
          <li className="mb-1">
            Certified True Copy of:
            <ol className="ml-4 list-[lower-alpha]">
              <li className="mb-1">Birth and Death Certificates of Insured</li>
              <li className="mb-1">
                Birth Certificate of Beneficiary (if child)
              </li>
              <li className="mb-1">
                Marriage Contract of Beneficiary (if spouse)
              </li>
              <li className="mb-1">
                Affidavit of Guardianship/Custody and Affidavit of Two (2)
                Disinterested Persons (if the beneficiary is a minor and the
                proceeds do not exceed Php 500,000.00)
              </li>
              <li className="mb-1">
                Letter of Guardianship executed by a court of law (if the
                beneficiary is a minor and the proceeds exceed Php 500,000.00)
              </li>
            </ol>
          </li>
          <li className="mb-1">
            Photocopy of any valid ID of the Insured and the beneficiaries
          </li>
        </ol>
        <p className="mb-1 text-sm font-medium text-primary">
          For Total and Permanent Disability:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Medical Certificate</li>
          <li className="mb-1">Original or Certified True Copy of:</li>
          <ol className="ml-4 list-[lower-alpha]">
            <li className="mb-1">Birth Certificate of Insured</li>
            <li className="mb-1">
              Medical Records (i.e. Admitting History & Operating Room Record)
            </li>
            <li className="mb-1">
              Certificate of Employment (stating last date of active work)
            </li>
          </ol>
          <li className="mb-1">Photocopy of any valid ID of the Insured</li>
        </ol>

        <p className="mb-1 text-sm font-medium text-primary">
          For Living Care Benefit:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Terminal Illness Claim Form</li>
          <li className="mb-1">Certificate of Attending Physician</li>
          <li className="mb-1">Certified True Copy of:</li>
          <ol className="ml-4 list-[lower-alpha]">
            <li className="mb-1">Birth Certificate of Insured</li>
            <li className="mb-1">
              Medical Records (i.e. Clinical Abstract/Discharge Summary)
              <li className="mb-1">
                Certificate of Employment (stating last date of active work)
              </li>
            </li>
          </ol>
          <li className="mb-1">Photocopy of any valid ID of the Insured</li>
        </ol>

        <p className="mb-1 text-sm font-medium text-primary">
          For Accidental Death and Disablement:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Certificate of Claimant/Beneficiaries Form</li>
          <li className="mb-1">Certificate of Attending Physician</li>
          <li className="mb-1">Certificate of Employment</li>
          <li className="mb-1">Certified True Copy of:</li>
          <ol className="ml-4 list-[lower-alpha]">
            <li className="mb-1">
              Affidavit of Guardianship/Custody and Affidavit of Two (2)
              Disinterested Persons (if the beneficiary is a minor and the
              proceeds do not exceed Php 500,000.00)
            </li>
            <li className="mb-1">
              Letter of Guardianship executed by a court of law (if the
              beneficiary is a minor and the proceeds exceed Php 500,000.00)
            </li>
          </ol>
          <li className="mb-1">
            Photocopy of any valid ID of the Insured and the beneficiaries
          </li>
        </ol>

        <p className="mb-1 text-sm font-medium text-primary">
          For Accidental Medical Reimbursement:
        </p>
        <ol className="mb-4 ml-4 text-sm">
          <li className="mb-1">Accident and Sickness Proof of Loss Form</li>
          <li className="mb-1">Police or Incident Report (if any)</li>
          <li className="mb-1">
            Original or photocopied medical bills & receipts (if not available,
            photocopied receipts duly certified by issuing institution)
          </li>
          <li className="mb-1">
            Physician&#39;s prescription for out-patient medicines (if any)
          </li>
        </ol>
      </div>
    ),
  },
  // {
  //   img: '/images/claims/hmo.png',
  //   title: 'HMO',
  //   type: 'hmo',
  //   content: (
  //     <div>
  //       <p className="mb-2 font-semibold lg:text-lg">
  //         Health Maintenance Organization{' '}
  //         <span className="text-primary">(HMO)</span>
  //       </p>
  //       <p className="mb-4 text-sm">
  //         Here are the initial and basic requirements for filing a claim.
  //       </p>
  //       <p className="mb-1 text-sm font-medium text-primary">
  //         Out Patient Claims
  //       </p>
  //       <ol className="mb-4 ml-4 text-sm">
  //         <li className="mb-1">Medical Certificate with diagnosis</li>
  //         <li className="mb-1">
  //           Official Receipts for Consultation fees, medicines and laboratories
  //         </li>
  //         <li className="mb-1">
  //           Prescription with quantity, dosage and frequency for medications if
  //           any
  //         </li>
  //         <li className="mb-1">Other necessary documents </li>
  //       </ol>
  //       <p className="mb-1 text-sm font-medium text-primary">
  //         In Patient Claims
  //       </p>
  //       <ol className="mb-4 ml-4 text-sm">
  //         <li className="mb-1">Hospital Statement of Account</li>
  //         <li className="mb-1">
  //           Official receipts for hospital bills and doctor&#39;s fees
  //         </li>
  //         <li className="mb-1">
  //           Prescription with quantity, dosage and frequency for medications if
  //           any
  //         </li>
  //         <li className="mb-1">
  //           Records of operations if patient underwent surgery
  //         </li>
  //         <li className="mb-1">Other necessary documents </li>
  //       </ol>
  //     </div>
  //   ),
  // },
];
export { claims };
