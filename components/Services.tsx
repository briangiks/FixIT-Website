import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Zap, 
  Wrench, 
  ClipboardCheck, 
  AlertCircle, 
  Users,
  CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Mechanical, Electrical & Plumbing (MEP)",
    description: "Comprehensive MEP solutions including electrical systems, generator maintenance, plumbing installations, and HVAC servicing to ensure your facility's critical infrastructure runs smoothly and efficiently.",
    features: [
      "Electrical installations & repairs",
      "Generator & UPS maintenance", 
      "Plumbing systems installation & maintenance",
      "Pumps, water tanks & borehole systems",
      "HVAC servicing & preventive maintenance"
    ]
  },
  {
    icon: Wrench,
    title: "General Maintenance & Repairs",
    description: "Complete building maintenance services covering carpentry, painting, masonry, and more. We handle all aspects of facility upkeep to maintain your property's appearance and functionality.",
    features: [
      "Carpentry & joinery",
      "Painting & finishing",
      "Masonry & minor civil works",
      "Doors, locks & fittings",
      "Tiling & flooring repairs"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Preventive & Planned Maintenance",
    description: "Proactive maintenance programs designed to prevent breakdowns and extend asset lifespan. Our structured approach includes regular audits, scheduled maintenance, and comprehensive reporting.",
    features: [
      "Asset condition audits",
      "Scheduled maintenance programs",
      "Maintenance logs & reports",
      "Lifecycle asset management"
    ]
  },
  {
    icon: AlertCircle,
    title: "Emergency Response Services",
    description: "Round-the-clock emergency response capabilities with rapid deployment teams ready to restore critical systems and minimize downtime when unexpected breakdowns occur.",
    features: [
      "24/7 breakdown response",
      "Rapid deployment technical teams",
      "Critical systems restoration"
    ]
  },
  {
    icon: Users,
    title: "Workforce & Labour Solutions",
    description: "Skilled technical personnel and maintenance staff solutions tailored to your needs. From specialized technicians to site-based teams, we provide qualified professionals for contract and outsourced maintenance operations.",
    features: [
      "Skilled technicians (electricians, plumbers, HVAC)",
      "General maintenance staff",
      "Site-based technicians",
      "Contract & outsourced maintenance teams"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive facility maintenance and labour solutions designed to protect your assets, ensure continuity, and deliver peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6 border-red-600 text-red-600 hover:bg-red-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}