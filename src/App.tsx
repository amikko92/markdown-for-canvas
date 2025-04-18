import { useRef } from "react";
import "./App.css";
import { MarkdownFileInput } from "./MarkdownFileInput";
import { readMarkdownFile } from "./MarkdownFileReader";
import { markdownToHtml } from "./MarkdownToHtml";

export function App() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    async function parseFiles(files: FileList) {
        const file = files[0];

        const markdownText = await readMarkdownFile(file);
        const html = markdownToHtml(markdownText);

        const textarea = textareaRef.current;
        if (textarea) {
            textarea.value = html;
        }
    }

    return (
        <>
            <h1>Markdown till Canvas</h1>
            <p>Konvertera markdown-filer till Canvasvänlig HTML</p>

            <MarkdownFileInput onFilesSelected={parseFiles} />

            <p>Resultat</p>
            <textarea ref={textareaRef}></textarea>
        </>
    );
}
