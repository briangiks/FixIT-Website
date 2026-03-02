import { Award, Users, Wrench, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Delivering excellence across Africa"
  },
  {
    icon: Users,
    number: "5000+",
    label: "Happy Clients",
    description: "Trusted by major institutions"
  },
  {
    icon: Wrench,
    number: "10,000+",
    label: "Projects Completed",
    description: "Successfully delivered solutions"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Service",
    description: "Always here when you need us"
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Our Experience & Expertise
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            With over a decade of dedicated service, Fix IT Services SFC has become Africa's trusted facilities maintenance partner
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <div className="text-4xl mb-2">{stat.number}</div>
                <div className="text-xl mb-2">{stat.label}</div>
                <p className="text-sm text-red-100">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl mb-4">Why Choose Fix IT Services?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Certified and skilled maintenance technicians</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Technology-enabled maintenance management systems</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Transparent SLAs and data-driven reporting</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Full compliance with safety and regulatory standards</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-400 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Preventive maintenance culture to reduce downtime</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl mb-4">Our Commitment</h3>
            <p className="mb-4">
              At Fix IT Services SFC, we understand that facility reliability is critical to your operations. Our team of experienced professionals is dedicated to providing top-quality maintenance services that protect your assets and ensure business continuity.
            </p>
            <p>
              From preventive maintenance to emergency repairs, we bring expertise, structured systems, and a commitment to excellence to every job. Trust us to be your partner in reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}