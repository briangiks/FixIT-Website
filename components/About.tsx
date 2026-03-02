import { Card, CardContent } from "./ui/card";
import { 
  Eye, 
  Target, 
  Heart, 
  Shield, 
  TrendingUp,
  Building2,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home,
  CheckCircle,
  Award,
  Users,
  Wrench,
  FileCheck
} from "lucide-react";

export function About() {
  const coreValues = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver consistently, without excuses."
    },
    {
      icon: Heart,
      title: "Safety First",
      description: "People, property, and compliance come before profit."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Uniformed staff, documented processes, and ethical conduct."
    },
    {
      icon: FileCheck,
      title: "Accountability",
      description: "Data-driven reporting and transparent service delivery."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Training, innovation, and preventive maintenance culture."
    }
  ];

  const sectors = [
    { icon: Hotel, name: "Hotels & Hospitality" },
    { icon: ShoppingBag, name: "Shopping Malls & Retail Centres" },
    { icon: Building2, name: "Commercial Office Buildings" },
    { icon: Home, name: "Residential Estates & Apartments" },
    { icon: GraduationCap, name: "Educational Institutions" },
    { icon: Factory, name: "Industrial & Manufacturing Facilities" }
  ];

  const operatingModel = [
    "Client Assessment & Asset Audit",
    "Customized SLA & Maintenance Plan",
    "Dedicated Service Teams",
    "Preventive Maintenance Scheduling",
    "Emergency Response Protocols",
    "Quality Assurance & Reporting"
  ];

  const advantages = [
    "Integrated Services: One partner, multiple solutions",
    "Rapid Response Capability",
    "Structured SLAs & Reporting",
    "Compliance-First Operations",
    "Scalable Workforce Model",
    "Strong Local Knowledge with Global Standards"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            About Fix IT Services SFC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Africa's most reliable and respected facilities maintenance conglomerate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-red-600 text-white">
            <CardContent className="p-8">
              <Eye className="h-12 w-12 mb-4" />
              <h3 className="text-2xl mb-4">Vision</h3>
              <p className="text-lg text-red-50">
                To build Africa's most reliable and respected facilities maintenance conglomerate.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white">
            <CardContent className="p-8">
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-2xl mb-4">Mission</h3>
              <p className="text-lg text-green-50">
                To deliver safe, efficient, and technology-enabled maintenance solutions through skilled professionals, structured systems, and uncompromising quality standards.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl text-gray-900 mb-8 text-center">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-10 w-10 text-red-600 mb-4" />
                  <h4 className="text-xl mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Sectors Served */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl text-gray-900 mb-8 text-center">
            Key Sectors Served
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <sector.icon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <p className="text-gray-700">{sector.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Operating Model */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl lg:text-3xl text-gray-900 mb-6 text-center">
            Our Operating Model
          </h3>
          <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            Fixit Services SFC operates on a structured service delivery framework:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {operatingModel.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-center italic">
            All services are delivered under clearly defined SLAs, KPIs, and safety protocols.
          </p>
        </div>

        {/* Quality, Safety & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-8">
              <h3 className="text-2xl text-gray-900 mb-6">Quality, Safety & Compliance</h3>
              <p className="text-gray-700 mb-4">
                Fixit Services SFC is committed to full regulatory and operational compliance:
              </p>
              <ul className="space-y-2">
                {[
                  "Occupational Safety & Health (OSHA) Standards",
                  "Kenya Labour Laws & Employment Regulations",
                  "Environmental & Waste Handling Protocols",
                  "Toolbox Talks & Safety Inductions",
                  "Personal Protective Equipment (PPE) Enforcement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-orange-200">
                <p className="text-gray-700 mb-2">We are structured to align with:</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• NCA (National Construction Authority)</li>
                  <li>• KRA Tax Compliance</li>
                  <li>• County Government Trade Licensing</li>
                  <li>• Industry best practices (ISO-aligned processes – phased)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl text-gray-900 mb-6">Human Capital & Training</h3>
              <p className="text-gray-700 mb-4">
                Our people are our backbone.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Skilled & vetted technicians",
                  "Continuous technical training",
                  "Safety & compliance certifications",
                  "Performance-based evaluation",
                  "Professional uniforms & identification"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Users className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm italic">
                We invest heavily in capacity building to ensure service consistency and client confidence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technology & Systems */}
        <div className="mb-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl lg:text-3xl mb-6 text-center">
            Technology & Systems
          </h3>
          <p className="text-lg text-center mb-8 text-blue-50 max-w-3xl mx-auto">
            Fixit Services SFC is building a technology-enabled maintenance platform, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Computerized Maintenance Management System (CMMS)",
              "Digital job cards & reporting",
              "Asset tracking & maintenance history",
              "Client dashboards & performance reports"
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Wrench className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-blue-100">
            This ensures transparency, accountability, and data-driven decision-making.
          </p>
        </div>

        {/* Competitive Advantage */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl text-gray-900 mb-8 text-center">
            Competitive Advantage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Growth & Expansion Strategy */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl lg:text-3xl text-gray-900 mb-6 text-center">
            Growth & Expansion Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🇰🇪</div>
                <h4 className="text-xl mb-2">Phase I: Kenya</h4>
                <p className="text-gray-600">Urban commercial & institutional clients</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h4 className="text-xl mb-2">Phase II: East Africa</h4>
                <p className="text-gray-600">Strategic regional hubs</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="text-xl mb-2">Phase III: Africa-wide</h4>
                <p className="text-gray-600">Expansion through subsidiaries & partnerships</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 mb-3">Our long-term strategy includes:</p>
            {[
              "Sector specialization",
              "Retainer-based contracts",
              "Strategic alliances",
              "Investor-backed scaling"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Governance */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl lg:text-3xl mb-6 text-center">
            Corporate Governance
          </h3>
          <p className="text-lg text-center mb-6 text-gray-300 max-w-3xl mx-auto">
            Fixit Services SFC is built on strong governance principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              "Clear management hierarchy",
              "Financial controls & audits",
              "Contractual discipline",
              "Ethical business practices"
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 italic">
            We are structured to be investor-ready and bankable.
          </p>
        </div>
      </div>
    </section>
  );
}