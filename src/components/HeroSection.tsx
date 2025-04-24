
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Познакомьтесь с <span className="text-amber-600">сусликами</span>
            </h1>
            <p className="text-lg text-amber-800 mb-6">
              Удивительные создания, живущие в норах, которые играют важную роль в экосистеме и имеют уникальные особенности поведения и образа жизни.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700">Узнать больше</Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Помочь сусликам
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="/placeholder.svg" 
              alt="Суслик"
              className="rounded-lg shadow-lg h-80 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
