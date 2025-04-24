
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FactsSection from "@/components/FactsSection";
import SpeciesSection from "@/components/SpeciesSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main>
        <HeroSection />
        
        <FactsSection />
        
        <section className="py-16 bg-amber-100">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              О сусликах подробнее
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Образ жизни</h3>
                <p className="text-amber-700 mb-4">
                  Суслики — грызуны, ведущие преимущественно наземный образ жизни. Они роют сложные системы нор с многочисленными входами и выходами, которые служат им укрытием от хищников и неблагоприятных погодных условий.
                </p>
                <p className="text-amber-700 mb-4">
                  Большинство видов сусликов являются колониальными животными, живущими большими группами. Это помогает им лучше защищаться от хищников благодаря системе коллективного оповещения об опасности.
                </p>
                <p className="text-amber-700">
                  В зависимости от вида и региона проживания, суслики могут впадать в спячку на период от нескольких недель до нескольких месяцев в году, обычно в холодное время года.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Значение в природе</h3>
                <p className="text-amber-700 mb-4">
                  Суслики играют важную роль в экосистемах степей и лугов. Их норы аэрируют почву и способствуют ее обогащению органическими веществами, что благоприятно сказывается на растительности.
                </p>
                <p className="text-amber-700 mb-4">
                  Эти грызуны являются важным звеном пищевой цепи, служа пищей для многих хищников, включая хищных птиц, змей и млекопитающих.
                </p>
                <p className="text-amber-700">
                  Некоторые виды сусликов находятся под угрозой исчезновения из-за разрушения их естественной среды обитания и охоты. Сохранение этих животных важно для поддержания биоразнообразия.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <SpeciesSection />
        
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1" className="border-amber-200">
                <AccordionTrigger className="text-amber-800 hover:text-amber-600">
                  Чем питаются суслики?
                </AccordionTrigger>
                <AccordionContent className="text-amber-700">
                  Суслики всеядны, но преимущественно питаются растительной пищей. В их рацион входят семена, орехи, корни, луковицы, зелёные части растений, ягоды и фрукты. Они также могут употреблять насекомых, особенно в период подготовки к спячке, когда необходимо накопить больше энергетических запасов.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-amber-200">
                <AccordionTrigger className="text-amber-800 hover:text-amber-600">
                  Как долго суслики живут?
                </AccordionTrigger>
                <AccordionContent className="text-amber-700">
                  Продолжительность жизни сусликов в дикой природе обычно составляет 3-4 года, хотя в неволе при хорошем уходе они могут жить до 6-8 лет. На продолжительность жизни влияют такие факторы, как наличие пищи, хищники, болезни и суровость климатических условий в местах обитания.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-amber-200">
                <AccordionTrigger className="text-amber-800 hover:text-amber-600">
                  Можно ли держать суслика в качестве домашнего питомца?
                </AccordionTrigger>
                <AccordionContent className="text-amber-700">
                  В некоторых странах содержание сусликов в качестве домашних животных разрешено, но это требует особых условий. Суслики — дикие животные, требующие просторных вольеров, специального рациона и ветеринарного ухода. Кроме того, многие виды сусликов находятся под охраной, и их содержание в домашних условиях может быть запрещено законом. Прежде чем заводить суслика, необходимо изучить местное законодательство и проконсультироваться с ветеринаром.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      
      <Separator className="bg-amber-200" />
      <Footer />
    </div>
  );
};

export default Index;
