import React from "react";
import style from "./About.module.css";
import { FaSnowflake } from "react-icons/fa";
import { GiHotSurface, GiComputerFan } from "react-icons/gi";
import { RiHome7Line } from "react-icons/ri";
import Fade from "react-reveal";
const About = () => {
  return (
    <div className={style.aboutWrapper}>
      <Fade>
        <div className={style.aboutSingle}>
          <div className={style.aboutTitle}>
            <div className={style.aboutIcon}>
              <FaSnowflake />
            </div>
            <h1>Klimatyzacje</h1>
          </div>
          <div className={style.aboutContent}>
            <p>
            Klimatyzatory stały się w ciągu ostatnich lat jednymi z najbardziej popularnych urządzeń chłodniczych. 
              <span>
                Duże zainteresowanie klimatyzatorami wiąże się z rosnącą potrzebą zapewnienia komfortu użytkownikom budynków. Odpowiednie warunki temperatury i jakość powietrza to obecnie standard nie tylko w budynkach biurowych. Koszty instalacji klimatyzatora nie są wysokie, a szeroki wachlarz funkcji tych urządzeń sprawia, że zyskują one na popularności. Ze względu na to, że klimatyzatory obecnie mogą zarówno chłodzić, jak i grzać, można się spotkać także z takimi rozwiązaniami, w których to klimatyzator pełni funkcję szczytowego źródła ciepła, kiedy wymagane jest szybkie podgrzanie powietrza w pomieszczeniu.
              </span>
            </p>
          </div>
        </div>

        <div className={style.aboutSingle}>
          <div className={style.aboutTitle}>
            <div className={style.aboutIcon}>
              <GiHotSurface />
            </div>
            <h1>Ogrzewanie podłogowe</h1>
          </div>
          <div className={style.aboutContent}>
            <p>
            Ogrzewanie podłogowe to świetne rozwiązanie by utrzymać optymalną temperaturę w domu. Dzięki temu rozwiązaniu ciepło mamy przy podłodze co pozwala na oszczędności na ogrzewaniu całego pomieszczenia.
              <span>
              W przypadku budynków o niewielkim zapotrzebowaniu na energię, jak domy energooszczędne, powietrzna pompa ciepła sprawdzi się jako niskotemperaturowe źródło ciepła współpracujące z ogrzewaniem płaszczyznowym. Ogrzewanie podłogowepowinno być zasilane wodą o temperaturze nie wyższej niż 29°C – podłoga nie jest przegrzewana, a urządzenia takie jak powietrzna pompa ciepła osiągają najwyższą sprawność grzewczą.
              </span>
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className={style.aboutSingle}>
          <div className={style.aboutTitle}>
            <div className={style.aboutIcon}>
              <RiHome7Line />
            </div>
            <h1>Pompy ciepła</h1>
          </div>
          <div className={style.aboutContent}>
            <p>
            Jeżeli szukamy bezobsługowego, taniego w eksploatacji i ekologicznego źródła ciepła do ogrzewania naszego domu – powietrzna pompa ciepła może spełnić nasze oczekiwania. 
              <span>
              Decydując się na montaż kotła na paliwo stałe – choć zyskujemy wprawdzie niskie koszty ogrzewania domu, wymagana jest stała obsługa kotła, jego utrzymanie w czystości oraz konserwacja. W przypadku instalacji kotłów zasilanych gazem płynnym lub olejem opałowym obowiązek stałej obsługi spada nam z barków – jednakże koszty zakupu paliwa nie należą do najtańszych.
              </span>
            </p>
          </div>
        </div>

        <div className={style.aboutSingle}>
          <div className={style.aboutTitle}>
            <div className={style.aboutIcon}>
              <GiComputerFan />
            </div>
            <h1>Rekuperacje</h1>
          </div>
          <div className={style.aboutContent}>
            <p>
            Rekuperacja uchodzi za rodzaj wentylacji, której główną zaletą jest odzysk ciepła z wywiewanego powietrza. Ta cecha ma ogromne znaczenie dla późniejszych kosztów eksploatacji budynku. 
            <span>
            Nie można jednak zapomnieć, że jest to wentylacja mechaniczna zapewniająca ciągłą wymianę powietrza, jego filtrację oraz optymalizację pod wieloma względami. 
            Taki komfort nie jest możliwy przy żadnej innej wentylacji. Do tego nie można zapomnieć, że rekuperacja skutecznie wymienia powietrze w całym budynku bez konieczności otwierania okien, bez naszej ingerencji i bez ogromnych strat energii generowanych przez systemy działające w sposób naturalny. Jak się okazuje montaż rekuperacji może dać nam oszczędność na ogrzewaniu sięgającą nawet 50%.
            </span>
           
            </p>
          </div>
        </div>
      </Fade>
      <div className={style.aboutButtonPlace}>
          <button>Zobacz pełną ofertę</button>
      </div>
    </div>
  );
};
export default About;
