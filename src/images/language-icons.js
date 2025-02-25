// from https://devicon.dev/
export default function LanguageIcon({ className, language }) {
  switch (language) {
    case "JavaScript":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript icon"
        />
      );
    case "CSS":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="CSS3 icon"
        />
      );
    case "HTML":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML5 icon"
        />
      );
    case "C++":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="C++ icon"
        />
      );
    case "TypeScript":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript icon"
        />
      );
    case "Java":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          alt="Java icon"
        />
      );
    case "Python":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          alt="Python icon"
        />
      );
    case "AWS":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          alt="AWS icon"
        />
      );
    case "Kotlin":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg"
          alt="Kotlin icon"
        />
      );
    case "Node.js":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Node.js icon"
        />
      );
    case "React.js":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="React.js icon"
        />
      );
    case "Next.js":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js icon"
        />
      );
    case "GraphQL":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
          alt="GraphQL icon"
        />
      );
    case "SQL":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
          alt="SQL icon"
        />
      );
    case "Jira":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
          alt="Jira icon"
        />
      );
    case "Linux":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          alt="Jira icon"
        />
      );
    case "Ubuntu":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg"
          alt="Jira icon"
        />
      );
    case "MongoDB":
      return (
        <img
          data-aos="flip-right"
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="Jira icon"
        />
      );
    default:
      break;
  }
}
