import { Button } from "@nextui-org/react";

const BoxShadowExample = () => {
  const boxCSSShadow = [
    {
      id: "Box-01",
      css: "0px 3px 8px 0px #c2c2c2;",
      tailwind:
        "shadow-[0px_3px_8px_0px_#c2c2c291] dark:shadow-[0px_3px_8px_0px_#080808]",
    },
    {
      id: "Box-02",
      css: "0px 10px 10px 0px #bfbfbf;",
      tailwind:
        "shadow-[0px_10px_10px_0px_#c2c2c291] dark:shadow-[0px_10px_10px_0px_#080808]",
    },
    {
      id: "Box-03",
      css: "inset 0px 0px 8px 0px #bfbfbf;",
      tailwind:
        "shadow-[inset_0px_0px_8px_0px_#c2c2c291] dark:shadow-[inset_0px_0px_8px_0px_#141414]",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5">
        {boxCSSShadow.map((box) => (
          <div
            key={box.id}
            className={`shadow-lg w-64 h-64 bg-white rounded-lg flex flex-col justify-center items-center dark:bg-zinc-950 ${box.tailwind}`}
          >
            <Button color="primary" onClick={() => copyToClipboard(box.css)}>
              CSS
            </Button>
            <Button
              color="primary"
              className="mt-1"
              onClick={() => copyToClipboard(box.tailwind)}
            >
              Tailwind
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BoxShadowExample;
