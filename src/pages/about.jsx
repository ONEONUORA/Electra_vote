import Footer from "../components/footer";
import AnimationWrapper from "../common/page-animation"



const About =()=>{
    return(
        <>
            <AnimationWrapper>
                <section>
                  <div>
                    <h3 className="text-center text-2xl font-bold ">About Us</h3>
                    <h2 className="text-xl font-semibold">Welcome to [Project Name]!</h2>
                    <p className="mt-2 text-[16px]">[Project Name] is an open governance initiative built on blockchain technology, aimed at promoting transparency, accountability, and trust in decision-making processes. Our mission is to empower communities and organizations to participate in governance decisions through a secure, decentralized platform that ensures fairness and inclusivity.</p>
                  </div>
                  
                  <Footer/>
                </section>
            </AnimationWrapper>
       
        </>
    )
}


export default About;