import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact | UnityScale",
  description: "Start scaling your brand today.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.contactSection}>
        <div className={`container ${styles.container}`}>
           
           <div className={styles.textContent}>
             <Reveal>
               <div className={styles.badge}>Limited Availability</div>
               <h1 className="h1-hero">Let's Build Your <span className="text-gradient">Acquisition Engine.</span></h1>
               <p className="subtitle" style={{marginTop: '1.5rem'}}>
                 Stop losing leads to inferior competition. Partner with us to build out a seamless, premium, conversion-focused strategy. 
               </p>
             </Reveal>

             <Reveal delay={0.2}>
               <div className={styles.alternativeContact}>
                 <h3>Direct Contact</h3>
                 <a href="mailto:contact.unityscale@gmail.com">contact@unityscale.in</a>
                 <a href="tel:+91 8882463451">+91 8882463451</a>
                 <span>Greater Noida / Gautam Buddha Nagar</span>
               </div>
             </Reveal>
           </div>

           <div className={styles.formContent}>
             <Reveal delay={0.4}>
               <div className={`glass-panel ${styles.formCard}`}>
                 <form className={styles.form} action="https://formspree.io/f/mlgvljde" method="POST">
                   <div className={styles.inputGroup}>
                     <label htmlFor="name">Full Name</label>
                     <input type="text" id="name" name="name" required placeholder="Jonny Doe" />
                   </div>
                   
                   <div className={styles.inputGroup}>
                     <label htmlFor="email">Work Email</label>
                     <input type="email" id="email" name="email" required placeholder="jonny@company.com" />
                   </div>

                   <div className={styles.inputGroup}>
                     <label htmlFor="project">Project Details & Goals</label>
                     <textarea id="project" name="project" rows={5} required placeholder="Tell us about your ideas and where you want to be..."></textarea>
                   </div>

                   <Button variant="primary" showArrow className={styles.submitBtn}>
                     Submit Application
                   </Button>
                   <p className={styles.urgency}>*We only take on few clients per month to ensure quality.</p>
                 </form>
               </div>
             </Reveal>
           </div>
           
        </div>
      </section>
    </main>
  );
}
