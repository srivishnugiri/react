import React from "react";
import cabin from "./assets/img/portfolio/cabin.png"
import cake from "./assets/img/portfolio/cake.png"
import circus from "./assets/img/portfolio/circus.png"
import game from "./assets/img/portfolio/game.png"
import safe from "./assets/img/portfolio/safe.png"
import submarine from "./assets/img/portfolio/submarine.png"
import PortfolioModal1 from "./PortfolioModal";

const Footer=()=>{
    return(
        <div>
            <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/* <!-- Footer Location--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Coimbatore
                            <br />
                            SKCT
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Copyright Section--> */}
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small> FREELANCER FINDER</small></div>
        </div>
        <PortfolioModal1 imgeid="portfolioModal1" imge={cabin} txt="Log Cabin"/>
        <PortfolioModal1 imgeid="portfolioModal2" imge={cake} txt="Tasty Cake"/>
        <PortfolioModal1 imgeid="portfolioModal3" imge={circus} txt="Circus Tent"/>
        <PortfolioModal1 imgeid="portfolioModal4" imge={game} txt="Controller"/>
        <PortfolioModal1 imgeid="portfolioModal5" imge={safe} txt="Locked Safe"/>
        <PortfolioModal1 imgeid="portfolioModal6" imge={submarine} txt="Submarine"/>

        

        </div>
    )
}

export default Footer