
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Mountain, Timer } from "lucide-react";

// Создаем кастомную иконку лапы вместо Paw
const PawIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    className="h-8 w-8 text-amber-600"
  >
    <path d="M22 16c-1-4-4-7-8-7s-7 3-8 7"></path>
    <path d="M8 2c1 3 0 6-3 7 3 1 4 4 3 7"></path>
    <path d="M16 2c-1 3 0 6 3 7-3 1-4 4-3 7"></path>
    <circle cx="9" cy="10" r="2"></circle>
    <circle cx="15" cy="10" r="2"></circle>
  </svg>
);

const facts = [
  {
    title: "Особенности",
    description: "Суслики являются дневными животными с отличным зрением. Они общаются через систему свистов и щелканий для предупреждения об опасности.",
    icon: <PawIcon />,
  },
  {
    title: "Питание",
    description: "В рацион сусликов входят семена, орехи, ягоды, травы и насекомые. Они способны запасать пищу в защечных мешках.",
    icon: <Leaf className="h-8 w-8 text-amber-600" />,
  },
  {
    title: "Ареал обитания",
    description: "Суслики распространены в степях, лугах и полупустынях Евразии и Северной Америки. Они предпочитают открытые пространства.",
    icon: <Mountain className="h-8 w-8 text-amber-600" />,
  },
  {
    title: "Жизненный цикл",
    description: "Большинство видов сусликов впадают в спячку на холодное время года. Средняя продолжительность жизни в дикой природе - 3-4 года.",
    icon: <Timer className="h-8 w-8 text-amber-600" />,
  },
];

const FactsSection = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Интересные факты о сусликах
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <Card key={index} className="border-amber-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex items-center pb-2">
                {fact.icon}
                <CardTitle className="text-xl text-amber-800 mt-4">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
