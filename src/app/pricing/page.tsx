import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, wire transfer, and purchase orders for enterprise customers.',
    },
    {
      question: 'Is there a volume discount?',
      answer: 'Yes! Contact our sales team for volume pricing on orders of 10+ units.',
    },
    {
      question: 'What is your return policy?',
      answer: '30-day money-back guarantee, no questions asked. Full refund if not satisfied.',
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes, we offer 20% discounts for students, educators, and academic institutions with valid credentials.',
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Pricing"
        subtitle="Invest in quantum-safe security today"
        badge="30-Day Money-Back Guarantee"
      />

      <PricingSection />

      {/* FAQ Section */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
