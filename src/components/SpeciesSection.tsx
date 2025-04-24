
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const species = [
  {
    name: "Европейский суслик",
    scientificName: "Spermophilus citellus",
    description: "Распространен в Центральной и Восточной Европе, имеет охранный статус.",
    image: "/placeholder.svg"
  },
  {
    name: "Крапчатый суслик",
    scientificName: "Spermophilus suslicus",
    description: "Обитает в степях России и Украины. Имеет характерную пятнистую окраску.",
    image: "/placeholder.svg"
  },
  {
    name: "Длиннохвостый суслик",
    scientificName: "Urocitellus undulatus",
    description: "Встречается в Сибири, Монголии и Китае. Отличается более длинным хвостом.",
    image: "/placeholder.svg"
  },
];

const SpeciesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-2">
          Виды сусликов
        </h2>
        <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
          В мире насчитывается более 40 видов сусликов, каждый из которых имеет свои уникальные особенности
        </p>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {species.map((species, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-amber-200 h-full flex flex-col">
                  <div className="p-4">
                    <img 
                      src={species.image} 
                      alt={species.name}
                      className="rounded-lg h-48 w-full object-cover mb-4"
                    />
                  </div>
                  <CardContent className="flex-grow">
                    <h3 className="text-xl font-bold text-amber-800">{species.name}</h3>
                    <p className="text-sm italic text-amber-600 mb-2">{species.scientificName}</p>
                    <p className="text-amber-700">{species.description}</p>
                  </CardContent>
                  <CardFooter>
                    <a href="#" className="text-amber-600 hover:text-amber-800 text-sm">
                      Узнать больше →
                    </a>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-300" />
          <CarouselNext className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default SpeciesSection;
