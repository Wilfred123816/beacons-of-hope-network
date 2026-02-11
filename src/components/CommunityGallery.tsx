import { motion } from "framer-motion";
import communityMeeting1 from "@/assets/community-meeting-1.png";
import communityMeeting2 from "@/assets/community-meeting-2.png";

const CommunityGallery = () => {
  const images = [
    {
      src: communityMeeting1,
      alt: "Community meeting under a tree",
      caption: "Community Outreach Sessions"
    },
    {
      src: communityMeeting2,
      alt: "Community members gathered for discussion",
      caption: "Empowering Rural Communities"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="heading-display text-[32px] md:text-[40px] text-foreground mb-4">
            Our Community in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we're making a difference in rural Kisii through community-driven programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl"
              style={{ boxShadow: 'var(--shadow-medium)' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;
