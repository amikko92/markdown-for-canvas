import { useState } from "react";
import "./App.css";
import { MarkdownFileInput } from "./MarkdownFileInput";
import { readMarkdownFile } from "./MarkdownFileReader";
import { markdownToHtml } from "./MarkdownToHtml";
import { HtmlResult } from "./HtmlResult";

export function App() {
    const [htmlResult, setHtmlResult] = useState("");

    async function parseFiles(files: FileList) {
        const file = files[0];

        const markdownText = await readMarkdownFile(file);
        const html = markdownToHtml(markdownText);

        setHtmlResult(html);
    }

    return (
        <>
            <h1>Markdown till Canvas</h1>
            <p>Konvertera markdown-filer till Canvasvänlig HTML</p>

            <MarkdownFileInput onFilesSelected={parseFiles} />
            <HtmlResult html={htmlResult} />
        </>
    );
}
