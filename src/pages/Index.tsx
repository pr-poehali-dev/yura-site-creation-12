import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-[#1e3a8a] flex">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Section - Diagnostic */}
        <section className="flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-2xl w-full">
            <div className="mb-6">
              <p className="text-blue-600 text-sm mb-2">Снова в школу • Онлайн-школа Сотка</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#1e3a8a]">
                Успейте <span className="text-[#3b82f6]">записаться на диагностику</span> в «Сотке» — количество мест ограничено!
              </h1>
            </div>

            <Card className="bg-[#eff6ff] border-blue-200 p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-blue-600 text-sm mb-1">Стоимость диагностики</p>
                  <p className="text-2xl font-bold text-[#3b82f6]">5 000 ₽</p>
                </div>
                <div>
                  <p className="text-blue-600 text-sm mb-1">Диагностика в рамках акции</p>
                  <p className="text-2xl font-bold text-[#3b82f6]">0 ₽</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#1e3a8a]">
                <Icon name="Target" className="text-[#3b82f6]" size={24} />
                <span>Видимый прогресс</span>
              </div>
              <div className="flex items-center gap-3 text-[#1e3a8a] mt-2">
                <Icon name="BookOpen" className="text-[#3b82f6]" size={24} />
                <span>Мотивация учиться</span>
              </div>
              <div className="flex items-center gap-3 text-[#1e3a8a] mt-2">
                <Icon name="Users" className="text-[#3b82f6]" size={24} />
                <span>Индивидуальная программа обучения</span>
              </div>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-[#1e3a8a]">Преимущества диагностики:</h2>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1e3a8a]">Выявление проблем в знаниях</h3>
                  <p className="text-blue-700">Позволяет точно определить, какие темы и разделы даются ребёнку с трудом, чтобы своевременно скорректировать обучение.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1e3a8a]">Мотивация к обучению</h3>
                  <p className="text-blue-700">Ученик и родители видят реальные результаты и прогресс, что стимулирует к дальнейшему развитию и усердной работе.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1e3a8a]">Объективная оценка знаний</h3>
                  <p className="text-blue-700">Диагностика даёт независимую картину знаний, которая не зависит от школьных оценок или субъективного мнения.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1e3a8a]">Персонализированный подход к обучению</h3>
                  <p className="text-blue-700">На основе результатов составляется индивидуальная программа, учитывающая сильные и слабые стороны ученика.</p>
                </div>
              </div>

              <div className="mt-8 bg-[#eff6ff] border border-blue-200 rounded-lg p-6">
                <p className="text-lg mb-4 text-[#1e3a8a]">Оставляйте заявку — просто наведите камеру телефона на QR-код и нажмите на ссылку или свяжитесь по контактам ниже</p>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-[#3b82f6]" size={24} />
                  <a href="tel:89311783413" className="text-xl font-bold text-[#3b82f6] hover:underline">8 (931) 178-34-13</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section - Lottery */}
        <section className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-8 lg:p-16 border-l border-blue-100">
          <div className="max-w-xl w-full text-center">
            <div className="mb-8">
              <div className="inline-block bg-[#3b82f6] rounded-full p-6 mb-6">
                <Icon name="Trophy" size={64} className="text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#1e3a8a]">
                Беспроигрышная <span className="text-[#3b82f6]">лотерея!</span>
              </h2>
              <p className="text-xl text-blue-700 mb-8">
                Отсканируйте QR-код и получите гарантированный приз от онлайн-школы «Сотка»
              </p>
            </div>

            <Card className="bg-white p-8 mb-6 shadow-2xl border-2 border-blue-100">
              <img 
                src="https://cdn.poehali.dev/files/e0a6f8f3-363f-486f-9492-6e4540213bf6.png" 
                alt="QR код для участия в лотерее"
                className="w-full max-w-md mx-auto"
              />
            </Card>

            <div className="space-y-4 text-left bg-[#eff6ff] border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Icon name="Gift" className="text-[#3b82f6] flex-shrink-0" size={24} />
                <p className="text-blue-700">Каждый участник получает приз — никто не останется без награды</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Sparkles" className="text-[#3b82f6] flex-shrink-0" size={24} />
                <p className="text-blue-700">Призы включают скидки на обучение, бесплатные занятия и эксклюзивные бонусы</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Smartphone" className="text-[#3b82f6] flex-shrink-0" size={24} />
                <p className="text-blue-700">Просто отсканируйте QR-код камерой телефона и следуйте инструкциям</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="mt-8 w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-lg h-14"
            >
              Участвовать в лотерее
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;