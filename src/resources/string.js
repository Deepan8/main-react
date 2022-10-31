const Navcontent = 'Search for providers & Drugs'
const Searchwhat = 'What are you searching for?'
const Doctor = 'Doctor & Facuilty'
const Drug = 'Drug & Parmacy'
const Hereyou = 'Here you can find a list of Doctors, Medical Groups,Hospitals and Speciality Vendors.'
const Find='Find a list of covered drugs, estimated costs and generic options.'
const Legalprivacy='Legal | Privacy | Version No. 1.0.0'
const Legalheading='Legal Notices'
const Paraone = "Lorem ipsum dolor sit amet, Consecutetur adipiscing elit. In curus justvo vitae velit porta vulputate. Curabitur sollicitudin vitae erat mattis elementum. Etiam volupat sit amet odio nec pharetra. Phasellus vel imprediet ipsum, sit amet viverra lectus.";
const Paratwo = "Vivamus tinicidunt quam luctus enim blandit vestibulum. Phasellus arc nunc, semper tinicidunt elementum non, bibendum sed diam. Praesent erat risus, vulputate vel dictum vitae, auctor vel risus. aliquam et lacu at mi ultricies congue pharetra sed risus. Proin lacinia nunc a sodales interdum. Ut lacinia sem a lorem lobortis, id pellentesque tortor porttitor. Donec in magna sit amet nisi fringilla tinicidunt non ac nisl. Nullam bibeendum at dui a sollicitudin.";
const Coveragearea='Coverage Area: 90001,LosAngeles'
const Plancoverage='Plan Coverage:'
const Letsbe="Let's begin creating your drug list"
const Drugquestion="Which drug are you searching for?"
const Hydrocodone='HYDROCODONE BITARTRATE ER 10 MG CAP ER 12H - HYDROCODONE BITARTRATE ER 10 MG'
const Therearefew='There are few alerts that you should be aware of'
const Pharmquestion="What's the Pharmacy you preferred?"
const pharmacyCount = "48 Pharmacy found in your coverage area for the drugs in the list."
const context={Navcontent,Searchwhat,Doctor,Drug,Hereyou,Find,Legalprivacy,Legalheading,Paraone,Paratwo,Coveragearea,Plancoverage,Letsbe, Drugquestion,Hydrocodone,Therearefew,Pharmquestion,pharmacyCount}
export default context

const hydroTitle ="HYDROCODONE BITARTRATE 10 MG CAP ER 12H- HYDROCODONE BITARTRATE 10 MG";
const alerts = "There are few alerts that you should be aware of";
const costSaving = "Cost saving Generic Options may be available for the drug you have entered.";
const link = "View Generic Options";
const therapy = "Step Therapy, Prior Authorization, and/or Quantity Limits may apply. See Drug Details within Plan Results page for more information. Step Therapy, Prior Authorzation, and/or Quantity Limits may apply. See Drug Details within Plan Results page for more Information.";
const quantity = "Quantity";
const type = "Pharmacy Type";
const refill = "Refill";
const note = "note-";
const availability = "Mail order frequency availability may vary by plan."
const date = "The drugs available for you were last updated April 21,2022."
export const hydro ={hydroTitle,alerts,costSaving,link,therapy,quantity,type,refill,note,availability,date};

const avail = "Available Pharmacies(48)";
const cvs = "CVS Pharmacy";
const  avenue = "Avenue Pharmacy";
const kroger = "Kroger Pharmacy";
const cardinal = "Cardinal Pharmacy";
const wallgreen = "Wallgreens Pharmacy";
const address = "101 W Walnut st Ste 123 Gardena, CA 90248"
const contact = "310-515-8425";
const distance = "2 miles away";
const home = "HOME INFUSION";
const retail = "RETAIL CHAIN";
const specialty ="SPECIALITY";
const care = "LONG TERM CARE";
export const details = {avail,cvs,avenue,kroger,cardinal,wallgreen,address,contact,distance,home,retail,specialty,care};

const extHours = "Extended Hours";
const time = "24-Hours Pharmacy";
const tt = "TTT/TDD";
const ttCount = "711";
const pharmType = "Pharmacy Type";
const fillup = "Pharmacy may be fill up to 90 days supply for Medicare Part D.";
const pricing = "Preferred pricing and fill limit restrictions may apply."
const prefer = "Preferred Cost Share"
const plus ="Anthem MedBlue Plus(HMO)"
const connect ="Anthem MedBlue Plus(HMO)"
const smartplus ="Anthem MedBlue Plus(HMO)"
const longCare ="Anthem MedBlue Plus(HMO)"
const select ="Anthem MedBlue Plus(HMO)"
const standard = "Standard Cost Share"
const dueDate = "The Information for the Pharamcies listed in this directory  is upadted every month."
const lastUpdate = "(Last Updated:06/02/2022)"
const importantinfo = "Important Information"
const info = "Step Therapy, Prior Authorization, and/or Quantity Limits may apply. See Drug Details within Plan Results page for more information. Step Therapy, Prior Authorzation, and/or Quantity Limits may apply. See Drug Details within Plan Results page for more Information.";
export const explain = {extHours,time,tt,ttCount,pharmType,fillup,pricing,prefer,plus,connect,smartplus,longCare,select,standard,info,dueDate,lastUpdate,importantinfo}

const ammcheading = "AMMC Garfield Hospital Medical Center";
export const ammccontext={ammcheading}

const providerHeader = "| Search for Providers"
const purpose = "Let's begin adding your customer information."
const providerQuery = "What is your customer's coverage area?"
const zipCode = "ZIP Code & Country"
export const provider = {providerHeader,purpose,providerQuery,zipCode};


export const pharmacydetails = [
    {
        id:0,
        name : 'CVS Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    },
    {
        id:1,
        name : 'Avenue Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION']
      
    },
    {
        id:2,
        name : 'CVS Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    },
    {
        id:3,
        name : 'Kroger Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN','SPECIALITY','LONG TERM CARE']
    },
    {
        id:4,
        name : 'Cardinal Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    },
    {
        id:5,
        name : 'Wallgreens Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    },
    {
        id:6,
        name : 'CVS Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    },
    {
        id:7,
        name : 'Avenue Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION']
    },
    {
        id:8,
        name : 'CVS Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    },
    {
        id:9,
        name : 'Cardinal Pharmacy',
        address : '101 W Walnut st Ste 123 Gardena, CA 90248',
        phone : '310-515-8425',
        distance : '2 miles away',
        tag : ['HOME INFUSION','RETAIL CHAIN']
    }

]
export const prefercost = [{name :'Anthem MediBlue Plus(HMO)'},{name :'Anthem MediBlue Plus(HMO)'},{name :'Anthem MedBlue Connect(HMO D-SNP)'},
                               {name:'Anthem MedBlue Connect(HMO D-SNP)'},{name :'Anthem MedBlue StartSmartPlus(HMO)'},{name:'Anthem MedBlue StartSmartPlus(HMO)'},{name:'Anthem MediBlue Lung Care(HMO C-SNP)'},{name :'Anthem MediBlue Lung Care(HMO C-SNP)'},
                              {name : 'Anthem MedBlue Select(HMO)'}];

export const standardcost =[{name :'Anthem MediBlue Plus(HMO)'},{name :'Anthem MediBlue Plus(HMO)'},{name :'Anthem MedBlue Connect(HMO D-SNP)'},
                              {name:'Anthem MedBlue Connect(HMO D-SNP)'}];