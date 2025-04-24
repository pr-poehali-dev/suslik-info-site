
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe } from "lucide-react";

// Создаем кастомные иконки
const TreeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1"
  >
    <path d="M17 22v-2"></path>
    <path d="M12 2l-5.22 4.9a5.8 5.8 0 0 0-1.88 4.83 5.8 5.8 0 0 0 2.2 3.37A5.8 5.8 0 0 0 12 17a5.8 5.8 0 0 0 4.9-1.9 5.8 5.8 0 0 0 2.2-3.37 5.8 5.8 0 0 0-1.9-4.83L12 2Z"></path>
    <path d="M12 22v-5"></path>
  </svg>
);

const MountainIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
  </svg>
);

const DropletsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1"
  >
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
  </svg>
);

const Habitat = () => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />
      
      <main className="flex-grow container max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-8">Среда обитания сусликов</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Где живут суслики?</h2>
            <p className="text-amber-900 mb-4">
              Суслики — наземные грызуны, обитающие преимущественно в степях, полупустынях и лесостепях. 
              Они распространены на обширных территориях Евразии и Северной Америки, предпочитая 
              открытые пространства с низкой травянистой растительностью.
            </p>
            <p className="text-amber-900">
              Эти животные строят сложные системы подземных нор, которые служат им укрытием 
              от хищников и неблагоприятных погодных условий, а также местом для хранения запасов 
              пищи и выведения потомства.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/placeholder.svg" 
              alt="Степь - типичная среда обитания сусликов" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-700 mb-6">Экологические зоны</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-amber-100 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Globe className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-medium text-amber-800">Географическое распространение</h3>
                </div>
                <p className="text-amber-900">
                  Суслики широко распространены в Северной Америке, Европе и Азии. 
                  Различные виды адаптировались к жизни в разных климатических зонах, 
                  от холодных степей Сибири до жарких пустынь Средней Азии.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <TreeIcon />
                  <h3 className="text-xl font-medium text-amber-800">Растительность</h3>
                </div>
                <p className="text-amber-900">
                  Предпочитают открытые пространства с низкой травянистой растительностью, 
                  которая служит им и пищей, и укрытием. Часто встречаются на лугах, 
                  пастбищах и сельскохозяйственных угодьях.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-100 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <MountainIcon />
                  <h3 className="text-xl font-medium text-amber-800">Рельеф</h3>
                </div>
                <p className="text-amber-900">
                  Суслики предпочитают равнинные территории или пологие склоны холмов 
                  с хорошим дренажем почвы. Это важно для строительства их нор, 
                  которые могут достигать глубины нескольких метров.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-700 mb-6">Система нор</h2>
          <div className="bg-amber-100 rounded-lg p-6 border border-amber-200">
            <p className="text-amber-900 mb-4">
              Норы сусликов представляют собой сложные инженерные сооружения с несколькими 
              входами, камерами и тоннелями. Они служат многим целям:
            </p>
            <ul className="list-disc pl-5 text-amber-900 mb-4 space-y-2">
              <li>Защита от хищников и неблагоприятных погодных условий</li>
              <li>Место для зимней спячки</li>
              <li>Выведение и выращивание потомства</li>
              <li>Хранение запасов пищи</li>
            </ul>
            <p className="text-amber-900">
              Глубина нор может варьироваться от 0.5 до 3 метров, в зависимости от вида 
              суслика и характеристик почвы. Норы часто имеют несколько выходов, 
              что обеспечивает дополнительную безопасность при нападении хищников.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-amber-700 mb-6">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="bg-amber-100 rounded-lg border border-amber-200">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-amber-800 hover:text-amber-600 px-6">
                Могут ли суслики жить в лесах?
              </AccordionTrigger>
              <AccordionContent className="text-amber-900 px-6">
                Большинство видов сусликов избегают густых лесов, предпочитая открытые пространства. 
                Однако некоторые виды, например, золотистый суслик, могут обитать на опушках лесов 
                и в редколесьях, если там есть достаточно открытых участков.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-amber-800 hover:text-amber-600 px-6">
                Как суслики переносят зиму?
              </AccordionTrigger>
              <AccordionContent className="text-amber-900 px-6">
                Большинство видов сусликов впадают в спячку на зимний период. Перед спячкой они 
                накапливают жир, который служит им источником энергии в холодные месяцы. В своих 
                глубоких норах они могут безопасно переждать зиму, когда температура на поверхности 
                опускается ниже нуля.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-amber-800 hover:text-amber-600 px-6">
                Как влияет деятельность человека на среду обитания сусликов?
              </AccordionTrigger>
              <AccordionContent className="text-amber-900 px-6">
                Сельскохозяйственная деятельность и урбанизация существенно влияют на популяции сусликов. 
                Распашка степей и уничтожение естественных мест обитания привели к сокращению численности 
                многих видов. С другой стороны, некоторые виды адаптировались к жизни на сельскохозяйственных 
                угодьях и городских территориях, например, в парках и на газонах.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Habitat;
