import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold text-secondary">SecureSystem</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Получить консультацию</Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Надежная защита вашего бизнеса
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Профессиональный монтаж систем видеонаблюдения и пожарной сигнализации. 
                Гарантия безопасности 24/7.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="bg-white hover:bg-white/90">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/a513af23-5bda-4dfa-bab0-d0782f198564/files/828fa3cb-1c05-4a16-881f-47ea095b6fa6.jpg" 
                  alt="Современные системы безопасности"
                  className="w-full h-auto"
                />
                <div className="bg-gradient-to-br from-primary to-accent p-6">
                  <div className="grid grid-cols-2 gap-4 text-white text-center">
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm">Завершенных проектов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm">Гарантия качества</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для обеспечения безопасности вашего объекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Video" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Видеонаблюдение</CardTitle>
                <CardDescription>Современные системы контроля и мониторинга</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>IP-камеры высокого разрешения (Full HD, 4K)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Системы распознавания лиц и номеров</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Облачное хранение и удаленный доступ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Ночное видение и аналитика движения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Интеграция с мобильными приложениями</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Подробнее о видеонаблюдении</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Flame" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl font-heading">Пожарная сигнализация</CardTitle>
                <CardDescription>Надежная защита от возгорания</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span>Автоматические системы обнаружения дыма и огня</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span>Тепловые и дымовые извещатели</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span>Звуковое и световое оповещение</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span>Интеграция с системами пожаротушения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span>Круглосуточный мониторинг и поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-accent hover:bg-accent/90">Подробнее о сигнализации</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                <strong className="text-secondary">SecureSystem</strong> — ведущий поставщик решений в области безопасности 
                с более чем 10-летним опытом работы. Мы специализируемся на проектировании, 
                монтаже и обслуживании систем видеонаблюдения и пожарной сигнализации.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                Наша команда состоит из сертифицированных специалистов, использующих только 
                проверенное оборудование от мировых производителей. Мы гарантируем качество 
                выполненных работ и предоставляем полное сервисное обслуживание.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <Icon name="Award" size={32} className="text-primary mb-3" />
                  <h3 className="font-heading font-bold text-xl mb-2">Сертификаты</h3>
                  <p className="text-sm text-muted-foreground">Все необходимые лицензии и разрешения</p>
                </div>
                <div className="bg-accent/5 p-6 rounded-xl">
                  <Icon name="Users" size={32} className="text-accent mb-3" />
                  <h3 className="font-heading font-bold text-xl mb-2">Опытная команда</h3>
                  <p className="text-sm text-muted-foreground">15+ квалифицированных специалистов</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0">
                <CardHeader>
                  <Icon name="Target" size={40} className="mb-2" />
                  <CardTitle className="text-white">Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Обеспечить максимальную безопасность каждого клиента через внедрение современных технологий и индивидуальный подход.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-accent to-accent/80 text-white border-0">
                <CardHeader>
                  <Icon name="Zap" size={40} className="mb-2" />
                  <CardTitle className="text-white">Наши ценности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Качество, надежность, оперативность и прозрачность в работе. Мы строим долгосрочные отношения с клиентами.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачная ценовая политика без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Базовый</CardTitle>
                <CardDescription>Для небольших объектов</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">от 25 000 ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>До 4 камер видеонаблюдения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Базовая настройка системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Гарантия 1 год</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Техподдержка 3 месяца</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">Популярный</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Стандарт</CardTitle>
                <CardDescription>Оптимальное решение</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">от 55 000 ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>До 8 камер + пожарная сигнализация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Расширенная настройка и аналитика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Гарантия 2 года</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Техподдержка 1 год</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Мобильное приложение</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать пакет</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Премиум</CardTitle>
                <CardDescription>Для крупных объектов</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">от 120 000 ₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Неограниченное количество камер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Полная интеграция всех систем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Гарантия 3 года</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Бессрочная техподдержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Нужно индивидуальное решение?</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость проекта
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea
                        placeholder="Опишите ваш объект и задачи..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@securesystem.ru</p>
                        <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Адрес офиса</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                        <p className="text-sm text-muted-foreground mt-1">Офис 405, 4 этаж</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} />
                <span className="text-xl font-heading font-bold">SecureSystem</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональные решения для обеспечения безопасности вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Видеонаблюдение</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Пожарная сигнализация</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@securesystem.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 SecureSystem. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;