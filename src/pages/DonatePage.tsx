import { useState } from "react";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ChevronDown, Phone, CreditCard, Smartphone, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

// Initialize Stripe - replace with your publishable key
const stripePromise = loadStripe("pk_test_placeholder");

const donationAmounts = [100, 1000, 5000, 10000];

const tributeOptions = [
  { value: "none", label: "No Tribute" },
  { value: "honor", label: "In Honor Of" },
  { value: "memory", label: "In Memory Of" },
];

const faqs = [
  {
    question: "Is this donation tax deductible?",
    answer: "Yes, Beacons of Hope Network is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law. You will receive a donation receipt for your records."
  },
  {
    question: "What if I prefer to send a check?",
    answer: "You can mail checks to our office address. Please make checks payable to 'Beacons of Hope Network' and include your contact information so we can send you a receipt."
  },
  {
    question: "Can I donate through PayPal?",
    answer: "Yes! If you're outside of the US, we recommend donating via our PayPal Giving Fund for easier international transactions."
  },
  {
    question: "Can I donate through UNC?",
    answer: "Yes, Beacons of Hope Network is affiliated with the University of North Carolina at Chapel Hill. You can donate to our organization through UNC's donation platform using code 045445."
  },
  {
    question: "Can I donate through M-PESA?",
    answer: "Yes! For M-Pesa donations, use our Paybill Number: 123456 and Account Name: BOHNETWORK. This is a great option for donors in Kenya and East Africa."
  },
  {
    question: "What impact will my donation have?",
    answer: "Your donation directly supports youth empowerment programs including education scholarships, mental health support, life skills training, and community outreach initiatives. Every contribution helps transform lives in underserved communities."
  },
  {
    question: "What is the Junction?",
    answer: "The Junction is our community center that serves as a hub for youth programs, counseling services, and community gatherings. It's where transformation happens daily."
  },
  {
    question: "What about administrative costs?",
    answer: "We maintain low administrative costs to ensure maximum impact. Over 85% of all donations go directly to our programs and the communities we serve."
  },
  {
    question: "Who should I contact if I have additional questions?",
    answer: "For any questions, please email beaconsofhopenetwork@gmail.com or call 0729508496 / 0716524476 / 0113596287. Our team is happy to help!"
  },
];

interface DonationFormData {
  amount: number;
  customAmount: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal: string;
  country: string;
  newsletter: boolean;
  smsConsent: boolean;
  isRecurring: boolean;
  donorPaysCosts: boolean;
  tributeType: string;
  tributeName: string;
}

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa">("card");
  
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 100,
    customAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postal: "",
    country: "United States",
    newsletter: false,
    smsConsent: false,
    isRecurring: false,
    donorPaysCosts: false,
    tributeType: "none",
    tributeName: "",
  });

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({ ...prev, amount, customAmount: "" }));
  };

  const handleCustomAmountChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      customAmount: value, 
      amount: value ? parseFloat(value) || 0 : 100 
    }));
  };

  const getFinalAmount = () => {
    const base = formData.customAmount ? parseFloat(formData.customAmount) || 0 : formData.amount;
    if (formData.donorPaysCosts) {
      return (base * 1.03).toFixed(2); // 3% processing fee
    }
    return base.toFixed(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "mpesa") {
      toast({
        title: "M-Pesa Instructions",
        description: "Please use Paybill: 123456, Account: BOHNETWORK to complete your donation.",
      });
      return;
    }

    if (!stripe || !elements) {
      toast({
        title: "Error",
        description: "Payment system is not ready. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error("Card element not found");
      }

      const { error, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: {
            line1: formData.address1,
            line2: formData.address2,
            city: formData.city,
            state: formData.state,
            postal_code: formData.postal,
            country: formData.country === "United States" ? "US" : formData.country,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      // In a real implementation, you would send stripePaymentMethod.id to your backend
      console.log("Payment method created:", stripePaymentMethod.id);
      
      toast({
        title: "Thank You!",
        description: `Your donation of $${getFinalAmount()} has been processed. A receipt will be sent to ${formData.email}.`,
      });

      // Reset form
      setFormData({
        amount: 100,
        customAmount: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        postal: "",
        country: "United States",
        newsletter: false,
        smsConsent: false,
        isRecurring: false,
        donorPaysCosts: false,
        tributeType: "none",
        tributeName: "",
      });
      
    } catch (err) {
      toast({
        title: "Payment Failed",
        description: err instanceof Error ? err.message : "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#1a1a1a",
        "::placeholder": {
          color: "#9ca3af",
        },
      },
      invalid: {
        color: "#ef4444",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Payment Method Tabs */}
      <div className="flex gap-2 p-1 bg-muted rounded-sm">
        <button
          type="button"
          onClick={() => setPaymentMethod("card")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-medium transition-colors ${
            paymentMethod === "card" 
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <CreditCard className="w-5 h-5" />
          Credit Card
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("mpesa")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-medium transition-colors ${
            paymentMethod === "mpesa" 
              ? "bg-secondary text-secondary-foreground" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Smartphone className="w-5 h-5" />
          M-Pesa
        </button>
      </div>

      {/* M-Pesa Instructions */}
      {paymentMethod === "mpesa" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/10 border border-secondary/20 rounded-sm p-6"
        >
          <h3 className="heading-display text-lg text-secondary mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            M-Pesa Payment Instructions
          </h3>
          <ol className="space-y-3 text-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-secondary">1.</span>
              Go to M-Pesa on your phone
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-secondary">2.</span>
              Select "Lipa na M-Pesa" then "Pay Bill"
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-secondary">3.</span>
              Enter Business Number: <strong className="text-secondary">123456</strong>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-secondary">4.</span>
              Enter Account Name: <strong className="text-secondary">BOHNETWORK</strong>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-secondary">5.</span>
              Enter the amount and your M-Pesa PIN
            </li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            After completing the M-Pesa transaction, please fill in your details below so we can send you a receipt.
          </p>
        </motion.div>
      )}

      {/* Donation Amount */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Donation Amount</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {donationAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountSelect(amount)}
              className={`py-4 px-6 rounded-sm font-heading font-bold text-lg transition-all ${
                formData.amount === amount && !formData.customAmount
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
        <div>
          <Label htmlFor="customAmount">Other Gift Amount</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="customAmount"
              type="number"
              min="1"
              placeholder="Enter amount"
              value={formData.customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-border pb-2">Your Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked === true }))}
          />
          <Label htmlFor="newsletter" className="text-sm leading-relaxed cursor-pointer">
            I would like to receive Beacons of Hope's newsletter.
          </Label>
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="smsConsent"
            checked={formData.smsConsent}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, smsConsent: checked === true }))}
          />
          <Label htmlFor="smsConsent" className="text-sm leading-relaxed cursor-pointer">
            I consent to receive informational SMS and notifications on this number, frequency will vary, reply STOP to opt out.
          </Label>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b border-border pb-2">Billing Address</h3>
        <div>
          <Label htmlFor="address1">Address Line 1</Label>
          <Input
            id="address1"
            value={formData.address1}
            onChange={(e) => setFormData(prev => ({ ...prev, address1: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="address2">Address Line 2</Label>
          <Input
            id="address2"
            value={formData.address2}
            onChange={(e) => setFormData(prev => ({ ...prev, address2: e.target.value }))}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="state">State/Province</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="postal">Postal Code</Label>
            <Input
              id="postal"
              value={formData.postal}
              onChange={(e) => setFormData(prev => ({ ...prev, postal: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Kenya">Kenya</SelectItem>
                <SelectItem value="Uganda">Uganda</SelectItem>
                <SelectItem value="Tanzania">Tanzania</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Credit Card Section */}
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-border pb-2">Payment Details</h3>
          <div className="p-4 border border-border rounded-sm bg-background">
            <CardElement options={cardElementOptions} />
          </div>
        </div>
      )}

      {/* Additional Options */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Checkbox
            id="isRecurring"
            checked={formData.isRecurring}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isRecurring: checked === true }))}
          />
          <Label htmlFor="isRecurring" className="cursor-pointer">
            <span className="font-semibold">Make Recurring Gift</span>
            <p className="text-sm text-muted-foreground">Donate this amount monthly</p>
          </Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="donorPaysCosts"
            checked={formData.donorPaysCosts}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, donorPaysCosts: checked === true }))}
          />
          <Label htmlFor="donorPaysCosts" className="cursor-pointer">
            <span className="font-semibold">Donor Pays Costs</span>
            <p className="text-sm text-muted-foreground">Add 3% to cover processing fees</p>
          </Label>
        </div>
      </div>

      {/* Tribute Section */}
      <div className="space-y-4">
        <Label>Is this donation In Honor Of or In Memory Of someone?</Label>
        <Select
          value={formData.tributeType}
          onValueChange={(value) => setFormData(prev => ({ ...prev, tributeType: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Tribute Gift" />
          </SelectTrigger>
          <SelectContent>
            {tributeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {formData.tributeType !== "none" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <Label htmlFor="tributeName">
              {formData.tributeType === "honor" ? "In Honor Of" : "In Memory Of"}
            </Label>
            <Input
              id="tributeName"
              placeholder="Enter name"
              value={formData.tributeName}
              onChange={(e) => setFormData(prev => ({ ...prev, tributeName: e.target.value }))}
            />
          </motion.div>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isProcessing || (paymentMethod === "card" && !stripe)}
          className="w-full btn-primary text-lg py-6 rounded-sm"
        >
          {isProcessing ? (
            "Processing..."
          ) : (
            `Complete Donation of $${getFinalAmount()}`
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Your donation will support Unrestricted Funds for youth empowerment programs.
        </p>
      </div>
    </form>
  );
};

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 maroon-bg text-primary-foreground">
        <div className="container-narrow mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-4 block">
              Donate
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
              Your Support Empowers Youth
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Every donation helps transform lives in slums across Kenya through education, mentorship, and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-sm p-8 md:p-12 shadow-lg"
            >
              <div className="text-center mb-8">
                <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-2">
                  Empowering Youth
                </h2>
                <p className="text-secondary font-semibold">in slums in Kenya.</p>
                <p className="text-sm text-muted-foreground mt-4">
                  If outside of the US, we recommend donating via our PayPal Giving Fund.
                </p>
              </div>

              <Elements stripe={stripePromise}>
                <DonationForm />
              </Elements>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about donating? Find answers below or contact us directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-sm px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-sm px-6 py-4">
              <HelpCircle className="w-6 h-6 text-secondary" />
              <span className="text-foreground font-medium">Have Questions?</span>
              <a 
                href="mailto:info@beaconsofhope.org" 
                className="text-secondary font-semibold hover:underline"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonatePage;
