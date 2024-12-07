import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '¿Qué son los Patrones de Diseño?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Los patrones de diseño son soluciones probadas y reutilizables para problemas comunes en el diseño de software.
        Son "recetas" que guían a los desarrolladores en la creación de estructuras de código eficientes, flexibles y
        mantenibles. No son piezas de código específicas, sino enfoques y estrategias adaptables a diferentes lenguajes
        de programación y contextos.
      </>
    ),
  },
  {
    title: '¿Para qué sirven los Patrones de Diseño?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        1. <b>Resolución de Problemas Recurrentes:</b> Abordan desafíos comunes en el desarrollo de software.<br />
        2. <b>Estandarización:</b> Proporcionan un vocabulario común entre desarrolladores.<br />
        3. <b>Mejora de la Calidad del Código:</b> Promueven la reutilización, claridad y flexibilidad.<br />
        4. <b>Facilitan el Escalamiento:</b> Ayudan a diseñar sistemas escalables sin complicaciones.
      </>
    ),
  },
  {
    title: 'Categorías de Patrones de Diseño',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        - <b>Creacionales:</b> Se enfocan en la creación de objetos. Ejemplo: <i>Singleton</i>, <i>Factory Method</i>.<br />
        - <b>Estructurales:</b> Organizan y componen objetos para formar estructuras más grandes. Ejemplo: <i>Adapter</i>, <i>Composite</i>.<br />
        - <b>Comportamiento:</b> Definen cómo interactúan y se comunican los objetos. Ejemplo: <i>Observer</i>, <i>Strategy</i>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className="text--center margin-bottom--lg">
          Introducción a los Patrones de Diseño
        </Heading>
        {/* Botón centrado */}
        <div className="text--center margin-bottom--lg">
          <Link
            className="button button--secondary button--lg"
            to="/docs/home">
            Patrones de diseño ⬇️😎
            </Link>
        </div>
        {/* Lista de características */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
