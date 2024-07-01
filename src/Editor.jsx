import { useState } from 'react';
import { Highlight, Prism } from 'prism-react-renderer';
import Editor from './Editor-sub.jsx';
import './Editor.css';

const customTheme = {
    plain: {
        color: "#f8f8f2",
        backgroundColor: "#282a36"
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "#6272a4",
                fontStyle: "italic"
            }
        },
        {
            types: ["string", "inserted"],
            style: {
                color: "#50fa7b"
            }
        },
        {
            types: ["number"],
            style: {
                color: "#bd93f9"
            }
        },
        {
            types: ["builtin", "char", "constant", "function"],
            style: {
                color: "#8be9fd"
            }
        },
        {
            types: ["punctuation", "operator"],
            style: {
                color: "#ff79c6"
            }
        },
        {
            types: ["keyword", "variable"],
            style: {
                color: "#ff79c6"
            }
        },
        {
            types: ["class-name", "attr-name"],
            style: {
                color: "#50fa7b"
            }
        },
        {
            types: ["tag", "deleted"],
            style: {
                color: "#ff5555"
            }
        },
        {
            types: ["selector", "doctype"],
            style: {
                color: "#f8f8f2",
                fontStyle: "italic"
            }
        },
        {
            types: ["function-variable"],
            style: {
                color: "#ffb86c"
            }
        },
        {
            types: ["attr-value"],
            style: {
                color: "#f8f8f2"
            }
        },
        {
            types: ["boolean"],
            style: {
                color: "#ffb86c"
            }
        },
        {
            types: ["namespace"],
            style: {
                color: "#f8f8f2"
            }
        }
    ]
};

export default function CodeEditor() {
    const [code, setCode] = useState('');

    const handleChange = (newValue) => {
        setCode(newValue);
    };

    return (
        <div className="code-editor">
            <div className="editor-panel">
                <h2 className="editor-heading">Code Input</h2>
                <Editor
                    value={code}
                    onValueChange={handleChange}
                    highlight={(code) => (
                        <Highlight
                            Prism={Prism}
                            theme={customTheme}
                            code={code}
                            language="javascript"
                        >
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={style}>
                                    {tokens.map((line, i) => (
                                        <div key={i} {...getLineProps({ line, key: i })}>
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token, key })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    )}
                    tabSize={2}
                    insertSpaces={true}
                    ignoreTabKey={false}
                    padding={{ top: 10, bottom: 10 }}
                    style={{ fontFamily: 'Inconsolata', fontSize: 14 }}
                    textareaClassName="code-textarea"
                    placeholder="Type some code..."
                />
            </div>
            <div className="editor-panel">
                <h2 className="editor-heading">Preview</h2>
                <div className="code-preview">
                    <Highlight
                        Prism={Prism}
                        theme={customTheme}
                        code={code}
                        language="javascript"
                    >
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={className} style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line, key: i })}>
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
            </div>
        </div>
    );
}

