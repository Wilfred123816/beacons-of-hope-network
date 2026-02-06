import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.consent) {
      toast({
        title: "Required fields missing",
        description: "Please provide your email and consent to receive newsletters.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
        });

      if (error) throw error;

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        consent: false,
      });
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="section-padding gradient-blue-green">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white">
            Stay in Touch
          </h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            Join our community and receive updates on our impact and opportunities to get involved.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="First Name"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <Input
              placeholder="Last Name"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <Input
            placeholder="Country"
            className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6 mb-6"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />

          <div className="flex items-start gap-3 mb-6">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, consent: checked as boolean })
              }
              className="mt-1 border-white data-[state=checked]:bg-orange data-[state=checked]:border-orange"
            />
            <label htmlFor="consent" className="text-white text-sm">
              I consent to receiving emails from Beacons of Hope Network. You can change your mind 
              at any time by clicking the unsubscribe link in the footer of any email you receive 
              from us. We will treat your information with respect.
            </label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full btn-accent py-6 text-lg rounded-lg"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
