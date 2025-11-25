import { useLanguage } from "@/contexts/LanguageContext";
import { QRCodeComponent } from "@/components/QRCode";
import paymentQRCode from "@/assets/payment-qr-code.jpg";

export const QRCodesSection = () => {
  const { language } = useLanguage();
  const currentUrl = window.location.href;

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Website QR Code */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-3xl shadow-elegant">
              <QRCodeComponent 
                value={currentUrl}
                size={200}
                className="rounded-2xl"
              />
            </div>
            <p className="text-center text-foreground/80 mt-4 max-w-xs font-medium">
              {language === 'cs' 
                ? 'Naskenujte QR kód pro rychlý přístup k webové stránce'
                : 'Scan QR code for quick access to website'
              }
            </p>
          </div>
          
          {/* Payment QR Code */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-3xl shadow-elegant">
              <img 
                src={paymentQRCode}
                alt={language === 'cs' ? 'QR kód pro platbu' : 'QR code for payment'}
                className="w-[200px] h-[200px] rounded-2xl object-cover"
              />
            </div>
            <p className="text-center text-foreground/80 mt-4 max-w-xs font-medium">
              {language === 'cs' 
                ? 'Naskenujte QR kód pro okamžitou platbu'
                : 'Scan QR code for instant payment'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};