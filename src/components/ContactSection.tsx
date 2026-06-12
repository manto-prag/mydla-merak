import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { QRCodeComponent } from "@/components/QRCode";
import paymentQRCode from "@/assets/payment-qr-code.jpg";

export const ContactSection = () => {
  const { translations, language } = useLanguage();

  const currentUrl = window.location.href;

  const contactInfo = [
    {
      icon: "📧",
      title: translations.contact.email,
      value: "mydla.merak@email.cz",
      href: "mailto:mydla.merak@email.cz"
    },
    {
      icon: "🏦",
      title: translations.contact.account,
      value: "6007850013 / 0800",
      href: null
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.contact.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-smooth"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="pt-6">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = "mailto:mydla.merak@email.cz?subject=Objednávka voňavých výrobků Merak"}
                className="w-full"
              >
                {translations.hero.cta}
              </Button>
            </div>
          </div>
          
          {/* QR Codes */}
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="bg-white p-8 rounded-3xl shadow-elegant">
                <QRCodeComponent 
                  value={currentUrl}
                  size={200}
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center text-foreground/80 mt-4 max-w-xs">
                {language === 'cs' 
                  ? 'Naskenujte QR kód pro rychlý přístup k webové stránce'
                  : 'Scan QR code for quick access to website'
                }
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-8 rounded-3xl shadow-elegant">
                <img 
                  src={paymentQRCode}
                  alt={language === 'cs' ? 'QR kód pro platbu' : 'QR code for payment'}
                  className="w-[200px] h-[200px] rounded-2xl object-cover"
                />
              </div>
              <p className="text-center text-foreground/80 mt-4 max-w-xs">
                {language === 'cs' 
                  ? 'Naskenujte QR kód pro okamžitou platbu'
                  : 'Scan QR code for instant payment'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};