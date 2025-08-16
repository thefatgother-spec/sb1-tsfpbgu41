import React from 'react';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "Mutlu Müşteri"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "57",
      label: "Yıl Deneyim"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Destek Hizmeti"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      number: "%98",
      label: "Memnuniyet Oranı"
    }
  ];


        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;