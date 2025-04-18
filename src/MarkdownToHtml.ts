import Markdown from "markdown-it";
import hljs from "highlight.js";

const md = Markdown({
    highlight: (str, lang): string => {
        const code =
            lang && hljs.getLanguage(lang)
                ? hljs.highlight(str, {
                      language: lang,
                      ignoreIllegals: true,
                  }).value
                : md.utils.escapeHtml(str);
        return `<pre class="hljs"><code>${code}</code></pre>`;
    },
});

export function markdownToHtml(markdown: string) {
    console.log(markdown);

    const html = md.render(markdown);

    const canvasFriendlyHtml = html
        .replace(/class="hljs"/g, 'style="color:#656e77;background: #f6f6f6"')
        .replace(/class="hljs-comment"/g, 'style="color:#656e77;"')
        .replace(/class="hljs-keyword"/g, 'style="color:#015692;"')
        .replace(/class="hljs-title function_"/g, 'style="color:#b75501;"')
        .replace(/class="hljs-string"/g, 'style="color:#54790d;"')
        .replace(/class="hljs-variable language_"/g, 'style="color:#54790d;"')
        .replace(/class="hljs-doctag"/g, 'style="color:#015692;"')
        .replace(/class="hljs-type"/g, 'style="color:#b75501;"')
        .replace(/class="hljs-params"/g, ""); // ignore

    return canvasFriendlyHtml;
}

// function markdownToHtml3(markdownText: string) {
//     const md = Markdown({
//         highlight: (str, lang): string => {
//             const code =
//                 lang && hljs.getLanguage(lang)
//                     ? hljs.highlight(str, {
//                           language: lang,
//                           ignoreIllegals: true,
//                       }).value
//                     : md.utils.escapeHtml(str);
//             return `<pre class="hljs"><code>${code}</code></pre>`;
//         },
//     });
//     return md.render(markdownText);
// }
