import portfolioImg from "../assets/portfolio.gif";
import weatherImg from "../assets/weather.jpg";
import todoImg from "../assets/todo.png";


const projects = [
  {
    title: "Portfolio Website",
    description: "Built using React and modern UI.",
    link: "https://github.com",
    tech: ["React", "CSS", "UI"],
    image: portfolioImg,
  },
  {
    title: "Weather App",
    description: "Shows weather using API.",
    link: "https://github.com",
    tech: ["React", "API"],
    image: weatherImg,
  },
  {
    title: "Todo App",
    description: "Task manager with local storage.",
    link: "https://github.com",
    tech: ["React", "LocalStorage"],
    image: todoImg,
  },
];

export default projects;