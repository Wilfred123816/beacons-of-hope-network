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
    <section className="py-20 bg-muted/30">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
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
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground"
              >
                <p className="text-lg font-semibold bg-primary/90 inline-block px-4 py-2 rounded">
                  {image.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;
