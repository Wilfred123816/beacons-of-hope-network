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
    <section id="newsletter" className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-4 border border-white/20">
            Newsletter
          </span>
          <h2 className="heading-display text-[32px] md:text-[40px] text-white">
            Stay in Touch
          </h2>
          <p className="text-white/75 mt-3 max-w-xl mx-auto">
            Join our community and receive updates on our impact and opportunities to get involved.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/15"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="First Name"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6 rounded-xl"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <Input
              placeholder="Last Name"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6 rounded-xl"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6 rounded-xl"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6 rounded-xl"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <Input
            placeholder="Country"
            className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground py-6 mb-6 rounded-xl"
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
              className="mt-1 border-white data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
            />
            <label htmlFor="consent" className="text-white/80 text-sm leading-relaxed">
              I consent to receiving emails from Beacons of Hope Network. You can change your mind 
              at any time by clicking the unsubscribe link in any email you receive from us.
            </label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-white text-primary hover:bg-white/90 py-6 text-base rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
