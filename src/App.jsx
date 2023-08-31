import { AccordionHr } from "./AccordionHr/AccordionHr";
import { Accordion } from "./Accordion/Accordion";
import { useMediaQuery } from "./hooks/useMediaQuery";
import "./App.css";

const list = [
  {
    label: "Part 1",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, quas.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint enim quae quas vero, doloribus iure fuga quos dolorum, repellat voluptas temporibus laborum dolorem rem minus ea ipsam culpa alias tempora amet? Voluptas iusto necessitatibus pariatur omnis inventore, aperiam facere quod blanditiis consequuntur accusamus perspiciatis nobis. Quia nobis accusantium veritatis neque voluptatum repellendus minus ut laboriosam voluptas repellat amet facilis, hic animi! Consectetur dolore, odio optio suscipit in nostrum libero quo, quae illo a beatae voluptates. A laborum sint qui suscipit impedit, provident rerum quam perspiciatis odit quae reprehenderit, at quia dolor nostrum doloribus soluta corporis quis? Vel porro, dignissimos distinctio, incidunt ab quis sed officiis recusandae accusamus necessitatibus asperiores odio, dolor dolorum nobis sapiente labore. Repellendus beatae placeat eos.",
  },
  {
    label: "Part 2",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    text: "Lorem ipsum, dolor blanditiis amet consectetur adipisicing elit. Nam blanditiis labore a reiciendis iure! Quibusdam, eveniet! Doloremque earum cupiditate error neque. Non velit harum, sunt, dolorum voluptas adipisci dignissimos commodi magni repudiandae dolores eaque beatae ab eius doloremque est natus accusantium, inventore quas expedita accusamus?",
  },
  {
    label: "Part 3",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis ducimus illum.",
    text: "Lorem ipsum, consectetur sit amet consectetur adipisicing elit. Nam blanditiis labore a reiciendis iure! Quibusdam, eveniet! Doloremque earum cupiditate error neque. Non velit harum, sunt, dolorum voluptas adipisci dignissimos commodi magni repudiandae dolores eaque beatae ab eius doloremque est natus accusantium, inventore quas expedita accusamus?",
  },
  {
    label: "Part 4",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, asperiores!",
    text: "Lorem ipsum, sit adipisicing consectetur adipisicing elit. Nam blanditiis labore a reiciendis iure! Quibusdam, eveniet! Doloremque earum cupiditate error neque. Non velit harum, sunt, dolorum voluptas adipisci dignissimos commodi magni repudiandae dolores eaque beatae ab eius doloremque est natus accusantium, inventore quas expedita accusamus?",
  },
  {
    label: "Part 5",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores!",
    text: "Lorem ipsum, sit adipisicing consectetur adipisicing elit. Nam blanditiis iure! Quibusdam, eveniet! Doloremque earum cupiditate error neque. Non velit harum, sunt, dolorum voluptas adipisci dignissimos commodi magni repudiandae dolores eaque beatae ab eius doloremque est natus accusantium, inventore quas expedita accusamus?",
  },
];

function App() {
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      {isTablet && <Accordion list={list} />}
      {isDesktop && <AccordionHr list={list} />}
    </>
  );
}

export default App;
