import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function ProjectReadme({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="py-10 text-3xl font-bold lg:text-4xl" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2
            className="py-2 font-medium text-md lg:text-xl xl:py-5"
            {...props}
          />
        ),
        table: ({ ...props }) => (
          <table
            className="w-full px-2 overflow-hidden text-center border-collapse rounded-lg xl:p-2"
            {...props}
          />
        ),
        thead: ({ ...props }) => (
          <thead
            className="border-b bg-neutral-700 border-neutral-500 text-neutral-50"
            {...props}
          />
        ),
        tbody: ({ ...props }) => (
          <tbody className="bg-neutral-800" {...props} />
        ),
        tr: ({ ...props }) => (
          <tr className="p-1 text-neutral-200" {...props} />
        ),
        td: ({ ...props }) => <td className="p-1" {...props} />,
        th: ({ ...props }) => <th className="p-1 py-2" {...props} />,
        pre: ({ ...props }) => (
          <pre
            className="p-2 my-2 text-sm whitespace-pre-wrap rounded-lg bg-neutral-800 text-neutral-200"
            {...props}
          />
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
