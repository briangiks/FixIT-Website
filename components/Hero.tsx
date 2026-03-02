import { Button } from "./ui/button";
import { Shield, Clock, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Trusted Partner in <span className="text-red-600">Reliability</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fixit Services SFC is a professional facility maintenance and labour solutions company delivering reliable, compliant, and scalable maintenance services across multiple sectors. We combine skilled manpower, structured systems, and technology-driven operations to ensure asset reliability, safety, and cost efficiency for our clients.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Our mission is to become Africa's most trusted facilities maintenance conglomerate, setting new benchmarks in professionalism, response time, compliance, and service quality.
            </p>
            <p className="text-lg text-red-700 mb-4 italic font-medium">
              "Fixit Services SFC – Trusted Partner in Reliability."
            </p>
            <p className="text-base text-gray-600 mb-8">
              We do not merely fix problems. We protect assets, ensure continuity, and deliver peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                  Schedule Service
                </Button>
              </Link>
              <a href="tel:+254706218092">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                  Emergency Service
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Licensed & Insured</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">24/7 Emergency</p>
              </div>
              <div className="text-center">
                <Wrench className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Expert Technicians</p>
              </div>
            </div>
          </div>

          <div className="lg:text-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="HVAC technician working on air conditioning unit"
              className="rounded-lg shadow-2xl w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}