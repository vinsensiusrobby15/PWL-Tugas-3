import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const About = () => {
    return (
        <div className="content">
            <Header title={"About Me"} desc={"Nothing special but, I'll telling you about my stories"} />
            <main>
                <div className="about">
                    <section>
                        <h2>{">"} Early Passion</h2>
                        <p>Vinsensius Robby Anggara, affectionately known as Vinsen, was a young man with a deep love for online gaming during his high school years. Little did he know that this hobby would lead him down an unexpected path.</p>
                    </section>

                    <section>
                        <h2>{">"} Discovering UI/UX Design</h2>
                        <p>Vinsen often spent his free time playing online games, captivated by the intriguing graphics and user interactions. He began to notice how design and user interfaces influenced the gaming experience. This sparked his interest in UI/UX design.</p>
                    </section>

                    <section>
                        <h2>{">"} Pursuing the Dream</h2>
                        <p>After graduating from high school, Vinsen decided to pursue his interest and learn about UI/UX design. He spent countless hours studying design principles, experimenting with various tools, and creating prototypes. He also took on several freelance projects to gain practical experience.</p>
                    </section>

                    <section>
                        <h2>{">"} Becoming a UI/UX Designer</h2>
                        <p>Today, Vinsen has become a skilled UI/UX designer. He is able to transform creative ideas into intuitive and appealing designs. However, he never forgets the origin of his interest. He always strives to incorporate elements from his favorite online games into his designs, creating unique and engaging user experiences.</p>
                    </section>

                    <section>
                        <h2>{">"} The Takeaway</h2>
                        <p>Vinsen's story is proof that our hobbies and interests can take us places we never imagined. So never underestimate what you love, as it could be the bridge to your dream career.</p>
                    </section>
                </div>
            </main>
            <Footer />            
        </div>
    );
};

export default About;