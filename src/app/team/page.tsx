import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Team | UnityScale",
  description: "Meet the minds behind the growth.",
};

const teamMembers = [
  {
    name: "Aman Singh",
    role: "Co-Founder / Developer",
    bio: "The architect behind scalable digital foundations. Aman merges flawless code with business logic, ensuring every pixel drives measurable growth.",
    angle: "Loves breaking down complex systems over strong coffee.",
    image: "/team/aman_singh.jpeg"
  },
  {
    name: "Amit Bind",
    role: "Tester / Full Stack Dev",
    bio: "The uncompromising gatekeeper of quality. Amit ensures every funnel, script, and component functions perfectly before any user sees it.",
    angle: "Has a sharp eye for detail and a zero-tolerance policy for bugs.",
    image: "/team/amit_bind.jpeg"
  },
  {
    name: "Ankit Kumar",
    role: "Backend Developer",
    bio: "The silent engine powering the entire system. Ankit builds the secure, robust architectures that make seamless experiences possible.",
    angle: "Believes the best code is the code you never have to think about.",
    image: "/team/ankit_image.png"
  },
  {
    name: "Aditya Kumar",
    role: "Marketing / Designer",
    bio: "The bridge between psychology and visuals. Aditya crafts the premium, human-centric designs that capture attention and force action.",
    angle: "Obsessed with conversion rates and Apple-style minimalism.",
    image: "/team/aditya_kumar.jpeg"
  },
  {
    name: "Aniket Sengar",
    role: "Editor",
    bio: "The master of narrative flow. Aniket polishes every piece of content to ensure the message is undeniably clear, sharp, and persuasive.",
    angle: "Turns good copy into great, revenue-generating story arcs.",
    image: null
  }
];

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headerSection}>
         <div className="container">
            <Reveal>
              <h1 className="h1-hero">The <span className="text-gradient">Team</span></h1>
              <p className="subtitle" style={{marginTop: '1.5rem'}}>
                A multi-disciplinary collective of engineers, designers, and growth strategists united by a single obsession: scaling businesses unpredictably.
              </p>
            </Reveal>
         </div>
      </section>

      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1}>
                <div className={`glass-panel ${styles.teamCard}`}>
                   <div className={styles.imageContainer}>
                     {member.image ? (
                       <Image 
                         src={member.image} 
                         alt={member.name} 
                         fill
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         className={styles.image}
                       />
                     ) : (
                       <div className={styles.placeholderImage}>
                         <span>{member.name.charAt(0)}</span>
                       </div>
                     )}
                   </div>
                   <div className={styles.info}>
                     <h3>{member.name}</h3>
                     <span className={styles.role}>{member.role}</span>
                     <p className={styles.bio}>{member.bio}</p>
                     <p className={styles.angle}>{member.angle}</p>
                   </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
         <div className={`container ${styles.valuesContainer}`}>
           <Reveal>
             <h2 className="h2-section text-center">Why Clients Trust Us</h2>
           </Reveal>
           <div className={styles.valuesGrid}>
             <Reveal delay={0.1}>
               <div className={styles.valueBox}>
                 <h3>01. Outcome Over Ego</h3>
                 <p>We don't build things just to look pretty. If it doesn't move the needle, we don't build it.</p>
               </div>
             </Reveal>
             <Reveal delay={0.2}>
               <div className={styles.valueBox}>
                 <h3>02. System Thinkers</h3>
                 <p>We don't do random acts of marketing. Everything is an integrated, measurable pipeline.</p>
               </div>
             </Reveal>
             <Reveal delay={0.3}>
               <div className={styles.valueBox}>
                 <h3>03. Relentless Quality</h3>
                 <p>From the first line of code to the final CTA, we enforce an Apple-level standard of perfection.</p>
               </div>
             </Reveal>
           </div>
         </div>
      </section>
    </main>
  );
}
