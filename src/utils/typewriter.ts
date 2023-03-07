// utils/typewriter.js

function typewriter(node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
  
    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }
  
    const text = node.textContent;
    const duration = 0;
  
    return {
      duration,
      tick: (t) => {
        const i = Math.round(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
   export default typewriter