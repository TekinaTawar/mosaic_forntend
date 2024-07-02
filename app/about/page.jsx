import S from "./page.module.scss";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className={S.content}>
      <h1>About</h1>
      <h2>Mosaic is a subsidiary of <Link href="https://vistaservice.co/" target="_blank">VISTA</Link></h2>
      <p>
        At <Link href="https://vistaservice.co/" target="_blank">Vistaservice.co</Link>, we understand the intricacies and challenges of
        cloth design and production. Our innovative software harnesses the power
        of advanced algorithms to streamline the process of arranging cloth
        designs, ensuring maximum efficiency and minimal waste.
      </p>
      <h3>Key Features</h3>
      <ol>
        <li>
          Blazing Fast Native Processing
          <ul>
            <li>
              Our software uses a backend written in low level language rust that is blazing fast and can handle large files with ease. This ensures ease of use and quick processing times, even for complex designs.
            </li>
          </ul>
        </li>

        <li>
          Customizable Layout Options:
          <ul>
            <li>
              The software offers customizable layout options, allowing
              designers to tweak and adjust the arrangement to suit specific
              needs. This flexibility ensures that the final layout meets both
              aesthetic and practical requirements.
            </li>
          </ul>
        </li>
        <li>
          User-Friendly Interface:
          <ul>
            <li>
              Designed with ease of use in mind, our intuitive interface allows
              users to easily upload cloth designs, select packing options, and
              visualize the arrangement. The process is straightforward, making
              it accessible even for those with minimal technical expertise.
            </li>
          </ul>
        </li>
        <li>
          Real-Time Visualization:
          <ul>
            <li>
              See the arrangement in real-time with our dynamic visualization
              tools. This feature helps designers understand how the fabric will
              be used and make any necessary adjustments before finalizing the
              layout.
            </li>
          </ul>
        </li>
        <li>
          Efficiency and Cost Savings:
          <ul>
            <li>By optimizing the arrangement of cloth designs, our software significantly reduces fabric waste. This not only lowers material costs but also supports sustainable production practices.</li>
          </ul>
        </li>
      </ol>
    </section>
  );
};
export default AboutPage;
