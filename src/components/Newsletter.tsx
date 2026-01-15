import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="teal-bg section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground">
            Stay in Touch
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="First Name"
              className="bg-secondary/80 border-0 text-secondary-foreground placeholder:text-secondary-foreground/60 py-6"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <Input
              placeholder="Last Name"
              className="bg-secondary/80 border-0 text-secondary-foreground placeholder:text-secondary-foreground/60 py-6"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-secondary/80 border-0 text-secondary-foreground placeholder:text-secondary-foreground/60 py-6"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              className="bg-secondary/80 border-0 text-secondary-foreground placeholder:text-secondary-foreground/60 py-6"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <Input
            placeholder="Country"
            className="bg-secondary/80 border-0 text-secondary-foreground placeholder:text-secondary-foreground/60 py-6 mb-6"
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
              className="mt-1 border-secondary-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label htmlFor="consent" className="text-secondary-foreground text-sm">
              I consent to receiving emails from Beacons of Hope Network. You can change your mind 
              at any time by clicking the unsubscribe link in the footer of any email you receive 
              from us. We will treat your information with respect.
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full btn-primary py-6 text-lg rounded-sm"
          >
            Sign Up
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
