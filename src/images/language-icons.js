// from https://devicon.dev/
export default function LanguageIcon({ className, language }) {
  switch (language) {
    case "JavaScript":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript icon"
        />
      );
    case "CSS":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="CSS3 icon"
        />
      );
    case "HTML":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML5 icon"
        />
      );
    case "C++":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="C++ icon"
        />
      );
    case "TypeScript":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript icon"
        />
      );
    case "Java":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          alt="Java icon"
        />
      );
    case "Python":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          alt="Python icon"
        />
      );
    case "AWS":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          alt="AWS icon"
        />
      );
    case "Kotlin":
      return (
        <img
          className={className}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg"
          alt="Kotlin icon"
        />
      );
    default:
      break;
  }
}
